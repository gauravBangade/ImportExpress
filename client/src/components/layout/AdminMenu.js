import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="text-center">
      <div className="list-group dashboard-menu">
        <NavLink to="/dashboard/admin/" className="list-group dashboard-menu">
          <h4 className="list-group-item list-group-item-action">Admin Panel</h4>
        </NavLink>
        <NavLink
          to="/dashboard/admin/manage-category"
          className="list-group-item list-group-item-action"
        >
          Manage Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/manage-product"
          className="list-group-item list-group-item-action"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="list-group-item list-group-item-action"
        >
          Products
        </NavLink>
        <NavLink
          to="/dashboard/admin/orders"
          className="list-group-item list-group-item-action"
        >
          Orders
        </NavLink>
        { <NavLink
          to="/dashboard/admin/knowledge"
          className="list-group-item list-group-item-action"
        >
          knowledge  
        </NavLink> }
      </div>
    </div>
  );
};

export default AdminMenu;
