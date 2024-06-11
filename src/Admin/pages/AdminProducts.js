import React from "react";
import { NavLink } from "react-router-dom";

const AdminProducts = () => {
  let PageTitle = "Products";
  return (
    <section className="admin-main">
      <div className="admin-container">
        <div className="container-fluid">
          <h1 className="h4 font-semibold pagetitle">{PageTitle}</h1>

          <section className="admin-main-inner">
            <div className="card bg-white rounded shadow p-4 card-container">
              <div className="filters-header">
                <h5 className="h6 mb-3">Search by Filters</h5>
                <div className="row">
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-2">
                        <div class="mb-3">
                          <select
                            className="form-select form-control"
                            aria-label="Default select example"
                            id="category"
                          >
                            <option selected>Select Category</option>
                            <option value="1">API Intermediates</option>
                            <option value="2">Chemical Derivatives</option>
                            <option value="2">Natural Products</option>
                            <option value="2">Natural</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div class="mb-3">
                          <select
                            className="form-select form-control"
                            aria-label="Default select example"
                            id="category"
                          >
                            <option selected>Select Sub Category</option>
                            <option value="1">API Intermediates Sub</option>
                            <option value="2">Chemical Derivatives Sub</option>
                            <option value="2">Natural Products Sub</option>
                            <option value="2">Natural Sub</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div class="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="casname"
                            placeholder="Search by CAS"
                            aria-label=".form-control-sm example"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div class="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="ProductName"
                            placeholder="Search by Product Name"
                            aria-label=".form-control-sm example"
                          />
                        </div>
                      </div>
                      <div className="col-md-2">                       
                        <button
                          type="button"
                          className="btn btn-primary btn-lg mt-1"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-end">
                    <button type="button" class="btn btn-primary me-3">
                      Upload
                    </button>
                    <a to="" type="button" class="btn btn-success">
                      + Add Product
                    </a>
                  </div>
                </div>
              </div>

              {/* products list table */}
              <div className="table-responsive">
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">Sub Category</th>
                      <th scope="col">Code</th>
                      <th scope="col">CAS</th>
                      <th scope="col">SKU</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AdminProducts;
