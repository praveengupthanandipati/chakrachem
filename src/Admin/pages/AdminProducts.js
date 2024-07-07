import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AdminProducts = () => {
  let PageTitle = "Products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/products/list");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleEdit = (productId) => {
    // Implement edit functionality here, e.g., redirect to edit page
    console.log(`Edit product with ID: ${productId}`);
  };

  const handleDelete = (productId) => {
    // Implement delete functionality here, e.g., show confirmation modal
    console.log(`Delete product with ID: ${productId}`);
  };

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
                        <button type="button" className="btn btn-primary mt-1">
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
                    {loading ? (
                      <tr>
                        <td colSpan="8" className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : (
                      products.map((item) => (
                        <tr key={item.id}>
                          <td scope="row">{item.id}</td>
                          <td>{item.productName}</td>
                          <td>{item.category}</td>
                          <td>{item.code}</td>
                          <td>{item.cas}</td>
                          <td>1</td>
                          <td>{item.status}</td>

                          {/* 
                          <td>{item.productId}</td>
                          <td>{item.casNumber}</td> */}

                          <td>
                            <button
                              onClick={() => handleEdit(item.productId)}
                              className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            >
                              Edit
                            </button>
                            <span className="d-inline-block px-3">|</span>
                            <button
                              onClick={() => handleDelete(item.productId)}
                              className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
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
