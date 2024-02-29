import React from 'react'
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
    return (
        <>
        <div className="text-center">
          <div className="list-group dashboard-menu">
            <NavLink
              to="/dashboard/user/"
              className="list-group dashboard-menu "
            >
              <h4> Dashbord</h4>
            </NavLink>
            <NavLink
              to="/dashboard/user/Profile"
              className="list-group-item list-group-item-action"
            >
              Profile
            </NavLink>
            <NavLink
              to="/dashboard/user/UserOrders"
              className="list-group-item list-group-item-action"
            >
              Orders
            </NavLink>
            {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
          </div>
        </div>
      </>
    );
}

export default UserMenu
