import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminProducts = () => {
  let PageTitle = "Products";
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState("");
  const [searchCas, setSearchCas] = useState("");
  const [searchProductName, setSearchProductName] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/chakram/api/getAllCategories"
      );
      if (!response.ok) throw new Error("Failed to fetch categories");

      const data = await response.json();
      setCategoryData(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchSubCategoriesById = async (categoryId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/chakram/api/getSubCategoriesById/${categoryId}`
      );
      setSubCategoryData(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/list`);
      if (!response.ok) throw new Error("Failed to fetch products");

      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleEdit = (productId) => {
    navigate(`/Admin/New-Product/${productId}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (response.ok) {
        setDeleteMessage(data.message || "Deleted Product Successfully");
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
        setFilteredProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      } else {
        setDeleteMessage(data.message || "Failed to delete Product");
      }
    } catch (error) {
      setDeleteMessage("Failed to delete Product");
    }
    setTimeout(() => {
      setDeleteMessage("");
    }, 3000);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setSelectedSubCategoryId("");
    fetchSubCategoriesById(categoryId);
    applyFilters(
      categoryId,
      selectedSubCategoryId,
      searchCas,
      searchProductName
    );
  };

  const handleSubCategoryChange = (subCategoryId) => {
    setSelectedSubCategoryId(subCategoryId);
    applyFilters(
      selectedCategoryId,
      subCategoryId,
      searchCas,
      searchProductName
    );
  };

  const applyFilters = (categoryId, subCategoryId, casNumber, productName) => {
    let filtered = products;
    console.log(filtered, "filtered");
    console.log(categoryId, "categoryId");

    // Convert categoryId and subCategoryId to numbers if needed
    const numericCategoryId = categoryId ? Number(categoryId) : null;
    const numericSubCategoryId = subCategoryId ? Number(subCategoryId) : null;

    // Filter products
    if (numericCategoryId !== null) {
      filtered = filtered.filter(
        (product) => Number(product.category) === numericCategoryId
      );
    }
    if (numericSubCategoryId !== null) {
      filtered = filtered.filter(
        (product) => Number(product.subCategoryId) === numericSubCategoryId
      );
    }

    if (casNumber) {
      filtered = filtered.filter((product) =>
        product.cas.toLowerCase().includes(casNumber.toLowerCase())
      );
    }
    if (productName) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(productName.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page when filters are applied
  };

  useEffect(() => {
    applyFilters(
      selectedCategoryId,
      selectedSubCategoryId,
      searchCas,
      searchProductName
    );
  }, [selectedCategoryId, selectedSubCategoryId, searchCas, searchProductName]);

  const getCategoryNameById = (id) => {
    const numericId = parseInt(id, 10);

    if (!categoryData || categoryData.length === 0) {
      console.error("categoryData is empty or not loaded.");
      return "Unknown";
    }

    const category = categoryData.find((cat) => cat.id === numericId);
    return category ? category.name : "Unknown";
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
                            onChange={(e) =>
                              handleCategoryChange(e.target.value)
                            }
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
                            value={selectedSubCategoryId}
                            onChange={(e) =>
                              handleSubCategoryChange(e.target.value)
                            }
                          >
                            <option value="">Select Sub Category</option>
                            {subCategoryData.map((subcategory) => (
                              <option
                                key={subcategory.id}
                                value={subcategory.id}
                              >
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
                            value={searchCas}
                            onChange={(e) => setSearchCas(e.target.value)}
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
                            value={searchProductName}
                            onChange={(e) =>
                              setSearchProductName(e.target.value)
                            }
                            aria-label=".form-control-sm example"
                          />
                        </div>
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
                      currentItems.map((item) => (
                        <tr key={item.id}>
                          <td scope="row">{item.id}</td>
                          <td>{item.name}</td>
                          <td>{getCategoryNameById(item.category)}</td>
                          <td>{item.code}</td>
                          <td>{item.cas}</td>
                          <td>{item.sku}</td>
                          <td>{item.status}</td>
                          <td>
                            <button
                              onClick={() => handleEdit(item.id)}
                              className="link-offset-2 link-offset-3-hover btn btn-success link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            >
                              Edit
                            </button>
                            <span className="d-inline-block px-3">|</span>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="link-offset-2 link-offset-3-hover btn btn-danger link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {!loading && filteredProducts.length === 0 && (
                <div className="text-center">No products found.</div>
              )}

              {/* Pagination Controls */}
              <div className="pagination-controls d-flex align-items-center gap-3">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="btn btn-secondary"
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="btn btn-secondary"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AdminProducts;
