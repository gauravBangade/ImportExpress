import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API || "http://localhost:8080";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newpassword, setNewPassword] = useState(""); 
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();
   
     
       const createNewPassword = async (e) => {
         e.preventDefault();
           try {
               const res = await axios.post(`${apiUrl}/api/v1/auth/forgot-password`,
               {
                 email,
                 newpassword,
                 answer
                 });
               if (res && res.data.success) {
                   toast.success(res.data && res.data.message);
                   navigate('/login')
                 } else {
                   toast.error(res.data.message);
                 }
                 
           } catch (error) {
               
           }
           
       };

  return (
    <Layout title={"forgot password import express"}>
     <div className="register">
        <form>
          <h1> Reset password </h1>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="new password"
              value={newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="New Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="new password"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your favourate videogame"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={createNewPassword}>
            Reset Password
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
