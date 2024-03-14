import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy.js";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import Dashbord from "./pages/user/UserDashbord.js";
import PrivateRoute from "./components/Routs/Private.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
import AdminRoute from "./components/Routs/adminRout.js";
import AdminDashbord from "./pages/Admin/AdminDashbord.js";
import ManageCategory from "./pages/Admin/ManageCategory.js";
import ManageProduct from "./pages/Admin/ManageProduct.js";
import Orders from "./pages/Admin/Orders.js";
import Products from "./pages/Admin/Products.js";
import Profile from "./pages/user/Profile.js";
import UserOrders from "./pages/user/UserOrders.js";
import ExpressMate from "./components/ExpressMate.js";
import UpdateProduct from "./pages/Admin/UpdateProduct.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/ExpressMate" element={<ExpressMate />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashbord />} />
          <Route path="user/Profile" element={<Profile />} />
          <Route path="user/UserOrders" element={<UserOrders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashbord />} />
          <Route path="admin/Manage-Category" element={<ManageCategory />} />
          <Route path="admin/Manage-Product" element={<ManageProduct />} />
          <Route path="admin/Product/:slug" element={<UpdateProduct />} />
          <Route path="admin/Orders" element={<Orders />} />
          <Route path="admin/Products" element={<Products />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
