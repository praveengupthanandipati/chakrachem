import React from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  let PageTitle = "Product Categories";
  const AdminCat = [
    {
      SNo: 1,
      CatName: "Life Sciences",
      CatStatus: "Active",
    },
    {
      SNo: 2,
      CatName: "API Intermediates",
      CatStatus: "Active",
    },
    {
      SNo: 3,
      CatName: "Chemical Derivatives",
      CatStatus: "Inactive",
    },
    {
      SNo: 4,
      CatName: "Natural Products",
      CatStatus: "Active",
    },
    {
      SNo: 5,
      CatName: "Natural",
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
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="table-dark">
                        <tr>
                          <th scope="col">S.No:</th>
                          <th scope="col">Category Name</th>
                          <th scope="col">Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AdminCat.map((item) => (
                          <tr key={item.id}>
                            <td scope="row">{item.SNo}</td>
                            <td>{item.CatName}</td>
                            <td>
                              <span
                                style={{
                                  color:
                                    item.CatStatus === "Active"
                                      ? "green"
                                      : "red",
                                }}
                              >
                                {item.CatStatus}
                              </span>
                            </td>
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
                  <h5 className="h6 pb-4">Add New Category</h5>

                  <form className="form">
                    <div class="mb-3">
                      <label for="categpryname" className="form-label">
                        Category Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="categpryname"
                        placeholder="Category Name"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="description-category" className="form-label">
                        Category Description
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="description-category"
                        placeholder="Description"
                        aria-label=".form-control-sm example"
                        rows="3"
                      ></textarea>
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

export default Categories;
