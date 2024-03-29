import { compare } from "bcrypt";
import knowledge from "../models/knowledge.js";

export const getTopicController = async (req, res) => {
  try {
    const topics = await knowledge.find({}).select('name');
    res.status(200).send({
      success: true,
      message: "All Topics",
      topics,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong in category controller ",
      error,
    });
  }
};

export const knowledgeController = async (req, res) => {
  try {
    const { name, description } = req.fields;
    if (!name || !description) {
      return res
        .status(400)
        .json({ error: "Name and description are required." });
    }
    // Create a new knowledge entry
    const newKnowledge = new knowledge({
      name,
      description,
    });

    // Save the new knowledge entry
    await newKnowledge.save();

    // Respond with success message
    res
      .status(201)
      .json({ success: true, message: "Knowledge created successfully." });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error in Knowladge Base controller ",
      error,
    });
  }
};

export const deleteTopicController = async (req,res) =>{
    try {
        const { id } = req.params;
        await knowledge.findByIdAndDelete(id);
        res.status(200).send({
          success: true,
          message: "topic Deleted Successfully",
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "error while deleting category",
          error,
        });
      }
}
