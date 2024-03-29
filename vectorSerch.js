import axios from "axios";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const OPENAI_API = process.env.OPENAI_API_KEY;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

const getEmbedding = async (query) => {
  const url = "https://api.openai.com/v1/embeddings";
  const openai_key = OPENAI_API; // Replace with your OpenAI key.

  try {
    const response = await axios.post(
      url,
      {
        input: query,
        model: "text-embedding-ada-002",
      },
      {
        headers: {
          Authorization: `Bearer ${openai_key}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data.data[0].embedding;
    } else {
      throw new Error(
        `Failed to get embedding. Status code: ${response.status}`
      );
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Unauthorized: Check your API key.");
    } else {
      throw new Error(`Failed to get embedding. ${error.message}`);
    }
  }
};

const findSimilarDocuments = async (embedding) => {
  const url = "your_mongodb_url"; // Replace with your MongoDB url.
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db("import-express"); // Replace with your database name.
    const collection = db.collection("knowledges"); // Replace with your collection name.

    const documents = await collection
      .aggregate([
        {
          $vectorSearch: {
            queryVector: embedding,
            path: "description_embedding",
            numCandidates: 100,
            limit: 1,
            index: "vector_index2",
          },
        },
      ])
      .toArray();

    return documents;
  } catch (error) {
    throw new Error(`Failed to find similar documents. ${error.message}`);
  } finally {
    await client.close();
  }
};

const main = async () => {
  const query = "what is dji"; // Replace with your query.

  try {
    const embedding = await getEmbedding(query);
    const documents = await findSimilarDocuments(embedding);

    console.log(documents);
  } catch (error) {
    console.error(error.message);
  }
};

main();
