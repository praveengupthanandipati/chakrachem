import React from "react";
import { NavLink } from "react-router-dom";

function AdminHeader() {
  return (
    <aside className="aside-admin">
      <h1 className="h4 ">
        <NavLink to="/" className="font-bold font-black">Chakra Chem</NavLink>
      </h1>

      <ul className="nav-aside">
        <li>
          <NavLink to="/Admin/Dashboard" className="nav-link">
            Dashboard
          </NavLink>
        </li>

        <label className="small nav-title">- PRODUCTS MASTER</label>

        <li>
          <NavLink to="/Admin/Categories" className="nav-link">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="nav-link">
            Sub Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="nav-link">
            Products List
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="nav-link">
            Create Product
          </NavLink>
        </li>

        <label className="small nav-title">- SETTINGS</label>
        <li>
          <NavLink to="" className="nav-link">
            Change Password
          </NavLink>
          <li>
            <NavLink to="" className="nav-link">
              Country
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav-link">
              Logout
            </NavLink>
          </li>
        </li>
      </ul>
    </aside>
  );
}

export default AdminHeader;
