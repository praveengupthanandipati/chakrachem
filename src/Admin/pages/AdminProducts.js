import React from "react";
import { NavLink } from "react-router-dom";

const AdminProducts = () => {
  let PageTitle = "Products";
  const products = [
    {
      Id: 1,
      Name: "7-hydroxycoumarin",
      Category: "Chemical Derivatives",
      Code: "CP10087",
      Cas: "93-35-6",
      Sku: 2,
      Status: "Active",
    },
    {
      Id: 2,
      Name: "3-Acetylcoumarin",
      Category: "Chemical Derivatives	",
      Code: "CP10045",
      Cas: "3949-36-8",
      Sku: 2,
      Status: "Active",
    },
    {
      Id: 3,
      Name: "6-Bromo-4-hydroxycoumarin",
      Category: "Chemical Derivatives	",
      Code: "CP10076",
      Cas: "4139-61-1",
      Sku: 1,
      Status: "Active",
    },
    {
      Id: 4,
      Name: "7-Amino-4-methylcoumarin",
      Category: "Chemical Derivatives	",
      Code: "CP10083",
      Cas: "26093-31-2",
      Sku: 1,
      Status: "Active",
    },
    {
      Id: 5,
      Name: "7-Diethylamino-4-methylcoumarin",
      Category: "Chemical Derivatives	",
      Code: "CP10084",
      Cas: "91-44-1",
      Sku: 1,
      Status: "Active",
    },
    {
      Id: 6,
      Name: "7-Hydroxy-4-(trifluoromethyl)coumarin",
      Category: "Chemical Derivatives	",
      Code: "575-03-1",
      Cas: "575-03-1",
      Sku: 1,
      Status: "Active",
    },
    {
      Id: 7,
      Name: "7-Methylcoumarin",
      Category: "Chemical Derivatives	",
      Code: "2445-83-2",
      Cas: "2445-83-2",
      Sku: 1,
      Status: "Active",
    },
    {
      Id: 8,
      Name: "Coumestrol",
      Category: "Chemical Derivatives	",
      Code: "CP10097",
      Cas: "479-13-0",
      Sku: 1,
      Status: "Active",
    },
    {
      Id: 9,
      Name: "4-Hydroxylthiocoumarin",
      Category: "Chemical Derivatives	",
      Code: "16854-67-4",
      Cas: "16854-67-4",
      Sku: 1,
      Status: "Active",
    },
    {
      Id: 10,
      Name: "N-Succinimidyl 7-Hydroxy-4-methylcoumarin-3-acetate",
      Category: "Chemical Derivatives	",
      Code: "CP10277",
      Cas: "96735-88-5",
      Sku: 1,
      Status: "Active",
    },
    {
      Id: 11,
      Name: "Coumestrol",
      Category: "Chemical Derivatives	",
      Code: "CP10097",
      Cas: "479-13-0",
      Sku: 1,
      Status: "Active",
    },
    {
      Id: 12,
      Name: "4-Hydroxylthiocoumarin",
      Category: "Chemical Derivatives	",
      Code: "16854-67-4",
      Cas: "16854-67-4",
      Sku: 1,
      Status: "Active",
    },
  ];
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
                          className="btn btn-primary mt-1"
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
                    <NavLink
                      to="/Admin/New-Product"
                      type="button"
                      class="btn btn-success"
                    >
                      + Add New Product
                    </NavLink>
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
                      <th scope="col">Code</th>
                      <th scope="col">CAS</th>
                      <th scope="col">SKU</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => (
                      <tr key={item.id}>
                        <td scope="row">{item.Id}</td>
                        <td>{item.Name}</td>
                        <td>{item.Category}</td>
                        <td>{item.Code}</td>
                        <td>{item.Cas}</td>
                        <td>{item.Sku}</td>
                        <td>
                          <span
                            style={{
                              color: item.Status === "Active" ? "green" : "red",
                            }}
                          >
                            {item.Status}
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

                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AdminProducts;
