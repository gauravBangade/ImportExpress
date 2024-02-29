import React from "react";
import Layout from "../../components/layout/layout";
import UserMenu from "../../components/layout/UserMenu";
import { useAuth } from "../../context/Auth";

const UserDashbord = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Your Name : {auth?.user?.name}</h3>
              <h3> Your Email : {auth?.user?.email}</h3>
              <h3> Your Contact : {auth?.user?.phone}</h3>
              <h3> Your address : {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashbord;
