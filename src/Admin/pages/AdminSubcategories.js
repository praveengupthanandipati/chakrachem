import React from "react";
import { NavLink } from "react-router-dom";

const AdminSubcategories = () => {
  let PageTitle = "Product Sub Categories";
  const AdminSubCat = [
    {
      SNo: 1,
      CatName: "Life Sciences",
      SubCatName: "Heterocyclic Building Blocks",
      CatStatus: "Active",
    },
    {
      SNo: 2,
      CatName: "API Intermediates",
      SubCatName: "Specialty Synthesis",
      CatStatus: "Active",
    },
    {
      SNo: 3,
      CatName: "Chemical Derivatives",
      SubCatName: "Organometallic Reagents",
      CatStatus: "Active",
    },
    {
      SNo: 4,
      CatName: "Natural Products",
      SubCatName: "Asymmetric Synthesis",
      CatStatus: "Active",
    },
    {
      SNo: 5,
      CatName: "Natural",
      SubCatName: "Catalysis Chemistry",
      CatStatus: "Active",
    },
  ];
  return (
    <section className="admin-main">
      <div className="admin-container">
        <div className="container-fluid">
          <h1 className="h4 font-semibold pagetitle">{PageTitle}</h1>

          <section className="admin-main-inner">
            <div className="row">
              <div className="col-md-8">
                <div className="card bg-white rounded shadow p-4 card-container">
                  <div class="mb-3">
                    <label for="category" className="form-label">
                      Filter by Category
                    </label>
                    <select
                      className="form-select form-control"
                      aria-label="Default select example"
                      id="category"
                    >
                      <option selected>Life Sciences</option>
                      <option value="1">API Intermediates</option>
                      <option value="2">Chemical Derivatives</option>
                      <option value="2">Natural Products</option>
                      <option value="2">Natural</option>
                    </select>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="table-dark">
                        <tr>
                          <th scope="col">S.No:</th>
                          <th scope="col">Category Name</th>
                          <th scope="col">Sub Category Name</th>
                          <th scope="col">Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AdminSubCat.map((item) => (
                          <tr key={item.id}>
                            <td scope="row">{item.SNo}</td>
                            <td>{item.SubCatName}</td>
                            <td>{item.CatName}</td>
                            <td>{item.CatStatus}</td>
                            <td>
                              <NavLink
                                to=""
                                className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                              >
                                Edit
                              </NavLink>
                              <span className="d-inline-block px-3">|</span>
                              <NavLink
                                to=""
                                className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                              >
                                Delete
                              </NavLink>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-white rounded shadow p-4 card-container">
                  <h5 className="h6 pb-4">Add New Sub Category</h5>

                  <form className="form">
                    <div class="mb-3">
                      <label for="category" className="form-label">
                        Select Category
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        id="category"
                      >
                        <option selected>Life Sciences</option>
                        <option value="1">API Intermediates</option>
                        <option value="2">Chemical Derivatives</option>
                        <option value="2">Natural Products</option>
                        <option value="2">Natural</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="categpryname" className="form-label">
                        Sub Category Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="categpryname"
                        placeholder="Sub Category Name"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="status" className="form-label">
                        Status
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        id="status"
                      >
                        <option selected>Active</option>
                        <option value="1">Inactive</option>
                      </select>
                    </div>
                    <button className="blue-btn border-0 w-100">Save</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AdminSubcategories;
