import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/AdminMenu";
import toast from "react-hot-toast";

const Knowledge = () => {
  const [description, setDescription] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      toast.success("Successful");
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
              <textarea
                type="text"
                value={description}
                placeholder="Write instructions"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <button className="btn btn-primary" onClick={handleCreate}>
                CREATE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Knowledge;
