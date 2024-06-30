import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const AdminSubcategories = () => {
  let PageTitle = "Product Sub Categories";
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const [saveFail, setSaveFail] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [catId, setCatId] = useState();
  const [subCatId, setSubCatId] = useState();
  const [status, setStatus] = useState(true);
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (!confirmDelete) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/chakram/api/deleteSubCategoryById/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedCategories = subCategoryData.filter(category => category.id !== id);
        setSubCategoryData(updatedCategories);
        setDeleteMessage("Deleted Category Successfully");
          window.location.reload();
      } else {
        setDeleteMessage("Failed to delete Category");
      }
    } catch (error) {
      setDeleteMessage("Failed to delete Category");
    }
    setTimeout(() => {
      setDeleteMessage('');
    }, 3000);

  }

  async function handleSave(event) {
    event.preventDefault();

    try {
      const newErrors = {};
      if (!/^[a-zA-Z\s]+$/.test(subCategoryName)) {
        newErrors.name =
          "Name must contain only alphabetic characters and spaces";
      }

      if (!catId) {
        newErrors.categoryId = "Please select a category";
      }

      const data = {
        name: subCategoryName,
        status: status,
        id: subCatId,
        categoryId: catId,
      };


      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const response = await fetch(
        "http://localhost:8080/chakram/api/saveOrUpdateSubCategory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        if (catId != null) {
          setSaveMessage("Category Updated Successfully");
        } else {
          setSaveMessage("Category Saved Successfully");
        }
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setSaveFail("Failed to Save");
      }

      setTimeout(() => {
        setSaveMessage("");
        setSaveFail("");
        fetchCategories();
      }, 3000);
    } catch (error) {
      setSaveFail("Failed to Save");
      setTimeout(() => {
        setSaveFail("");
      }, 3000);
    }
  }


  async function fetchCategories() {
    const response = await fetch(
      "http://localhost:8080/chakram/api/getAllCategories"
    );
    const data = await response.json();
    setCategories(data);
    if (data.length > 0) {
      setCatId(data[0].id);
      fetchSubCategoriesById(data[0].id);
    }
  }

  async function fetchSubCategoriesById(categoryId) {
    try {
      const response = await axios.get(
        `http://localhost:8080/chakram/api/getSubCategoriesById/${categoryId}`
      );
      setSubCategoryData(response.data);
    } catch (error) {
      console.error("There was an error fetching the subcategories!", error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (event) => {
    const selectedCatId = event.target.value;
    setCatId(selectedCatId);
    fetchSubCategoriesById(selectedCatId);
  };

  async function handleEdit(id) {
    console.log(id,"id");
    try {
      const response = await fetch(
        `http://localhost:8080/chakram/api/getSubCatById/${id}`
      );
      const data = await response.json();
      setSubCategoryName(data.name);
      setStatus(data.status);
      setSubCatId(data.id); // Make sure this is set correctly
      setCatId(data.category.id);
    } catch (error) {
      console.error("Error editing category:", error);
    }
  }
  

  return (
    <section className="admin-main">
      <div className="admin-container">
        <div className="container-fluid">
          <h1 className="h4 font-semibold pagetitle">{PageTitle}</h1>
          <section className="admin-main-inner">
            <div className="row">
              <div className="col-md-8">
                <div className="card bg-white rounded shadow p-4 card-container">
                {deleteMessage && <p className="alert alert-info">{deleteMessage}</p>}

                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      Filter by Category
                    </label>
                    <select
                      value={catId}
                      onChange={handleChange}
                      className="form-select form-control"
                      aria-label="Default select example"
                      id="category"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
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
                        {subCategoryData.map((item, index) => (
                          <tr key={item.subCatId}>
                            <td scope="row">{index + 1}</td>
                            <td>{item.categoryName}</td>
                            <td>{item.subCategoryName}</td>
                            <td>
                              <span
                                style={{
                                  color: item.status ? "green" : "red",
                                }}
                              >
                                {item.status ? "Active" : "Inactive"}
                              </span>
                            </td>
                            <td>
                            <button
                                onClick={() => handleEdit(item.subCatId)}
                                className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                              >
                                Edit
                              </button>
                              <span className="d-inline-block px-3">|</span>
                              <button
                                onClick={() => handleDelete(item.subCatId)}
                                className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                              >
                                Delete
                              </button>
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
                  {saveMessage && <p className="alert alert-info">{saveMessage}</p>}
                  {saveFail && <p className="alert alert-danger">{saveFail}</p>}
                  <form className="form" onSubmit={handleSave}>
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">
                        Select Category
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        id="category"
                        value={catId}
                        onChange={(e) => {
                          setCatId(e.target.value);
                          setErrors({ ...errors, categoryId: null });
                        }}
                      >
                        <option selected>Select Category</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="categpryname" className="form-label">
                        Sub Category Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="categpryname"
                        value={subCategoryName}
                        onChange={(e) => {
                          setSubCategoryName(e.target.value);
                          setErrors({ ...errors, name: null });
                        }}
                        placeholder="Sub Category Name"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="status" className="form-label">
                        Status
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        id="status"
                        value={status}
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                      >
                        <option selected value={true}>
                          Active
                        </option>
                        <option value={false}>Inactive</option>
                      </select>
                    </div>
                    <button type="submit" className="blue-btn border-0 w-100">
                      Save
                    </button>
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
