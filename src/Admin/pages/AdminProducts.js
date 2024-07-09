import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for HTTP requests

const AdminProducts = () => {
  let PageTitle = "Products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(""); // State to track selected category

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    fetchCategories(); // Fetch categories on component mount
  }, []);

  // Function to fetch categories
  async function fetchCategories() {
    try {
      const response = await fetch("http://localhost:8080/chakram/api/getAllCategories");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategoryData(data);
      console.log("Fetched category data:", data);
      if (data.length > 0) {
        handleCategoryChange(data[0].id); // Fetch subcategories for the first category by default
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  // Function to fetch subcategories by categoryId
  async function fetchSubCategoriesById(categoryId) {
    try {
      const response = await axios.get(
        `http://localhost:8080/chakram/api/getSubCategoriesById/${categoryId}`
      );
      setSubCategoryData(response.data);
      console.log("Fetched subcategory data:", response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  }

  // Function to fetch products
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

  // Handle edit product
  const handleEdit = (productId) => {
    navigate(`/Admin/New-Product/${productId}`);
  };

  // Handle delete product
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      if (response.ok) {
        setDeleteMessage(data.message || "Deleted Category Successfully");
        setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
      } else {
        setDeleteMessage(data.message || "Failed to delete Category");
      }
    } catch (error) {
      setDeleteMessage("Failed to delete Category");
    }
    setTimeout(() => {
      setDeleteMessage('');
    }, 3000);
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    console.log(categoryId,"categoryId");
    setSelectedCategoryId(categoryId); // Set the selectedCategoryId to the provided category id
    fetchSubCategoriesById(categoryId); // Fetch subcategories based on the category id
  };

  return (
    <section className="admin-main">
      <div className="admin-container">
        <div className="container-fluid">
          <h1 className="h4 font-semibold pagetitle">{PageTitle}</h1>
          {deleteMessage && <p className="alert alert-info">{deleteMessage}</p>}
          <section className="admin-main-inner">
            <div className="card bg-white rounded shadow p-4 card-container">
              <div className="filters-header">
                <h5 className="h6 mb-3">Search by Filters</h5>
                <div className="row">
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="mb-3">
                          <select
                            className="form-select form-control"
                            aria-label="Default select example"
                            id="category"
                            value={selectedCategoryId}
                            onChange={(e) => handleCategoryChange(e.target.value)}
                          >
                            <option value="">Select Category</option>
                            {categoryData.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <select
                            className="form-select form-control"
                            aria-label="Default select example"
                            id="subcategory"
                          >
                            <option value="">Select Sub Category</option>
                            {subCategoryData.map((subcategory) => (
                              <option key={subcategory.id} value={subcategory.id}>
                                {subcategory.subCategoryName}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
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
                        <div className="mb-3">
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
                    <button type="button" className="btn btn-primary me-3">
                      Upload
                    </button>
                    <NavLink
                      to="/Admin/New-Product"
                      type="button"
                      className="btn btn-success"
                    >
                      + Add New Product
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* Products list table */}
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
                          <td>{item.name}</td>
                          <td>{item.category}</td>
                          <td>{item.code}</td>
                          <td>{item.cas}</td>
                          <td>{item.sku}</td>
                          <td>{item.status}</td>

                          <td>
                            <button
                              onClick={() => handleEdit(item.id)}
                              className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            >
                              Edit
                            </button>
                            <span className="d-inline-block px-3">|</span>
                            <button
                              onClick={() => handleDelete(item.id)}
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
