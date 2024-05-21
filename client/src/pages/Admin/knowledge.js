import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";

const Knowledge = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [topics, setTopics] = useState([]);
  const getAllTopics = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/get-topic");
      if (data?.success) {
        setTopics(data.topics);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in get all topics");
    }
  };

  useEffect(() => {
    getAllTopics();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      const { data } = await axios.post(
        "/api/v1/auth/knowledge",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Successful");
      getAllTopics();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/api/v1/auth/delete-topic/${id}`);
      if (data?.success) {
        toast.success("Topic deleted successfully");
        getAllTopics();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Knowledge Base</h1>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                placeholder="Name/Topic"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                value={description}
                placeholder="Write instructions"
                className="form-control"
                style={{ height: "200px" }} // Set the height to 200px (adjust as needed)
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <button className="btn btn-primary" onClick={handleCreate}>
                Add Knowledge
              </button>
            </div>

            <div className="w-65">
              <h2>Existing Topics</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {topics.map((topic) => (
                    <tr key={topic._id}>
                      <td>{topic.name}</td>
                      <td>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => handleDelete(topic._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Knowledge;
