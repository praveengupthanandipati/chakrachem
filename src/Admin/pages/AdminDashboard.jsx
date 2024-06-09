import React from "react";
import BannerImage from "../assets/img/bg-category.jpg";

function AdminDashboard() {
  let PageTitle = "Welcome to Chakrachem Admin";
  return (
    <section className="admin-main">
      <div className="admin-container">
        <div className="container-fluid">
          <h1 className="h4 font-semibold pagetitle">{PageTitle}</h1>
          <img src={BannerImage} alt="" className="img-fluid w-100 my-2" />
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
