import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const [saveFail, setSaveFail] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [catId, setCatId] = useState();
  const [status, setStatus] = useState(true);
  const [errors, setErrors] = useState({});

  let PageTitle = "Product Categories";

  async function handleSave(event) {
    event.preventDefault();

    try {
      const newErrors = {};
      if (!/^[a-zA-Z\s]+$/.test(categoryName)) {
        newErrors.name = 'Name must contain only alphabetic characters and spaces';
      }

      if (categoryDescription.length > 1000) {
        newErrors.description = 'Description exceeds maximum length';
      }

      const data = {
        name: categoryName,
        description: categoryDescription,
        status: status,
        id: catId
      }
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const response = await fetch("http://localhost:8080/chakram/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        if (catId != null) {
          setSaveMessage("Category Saved Successfully");
        }
        else {
          setSaveMessage("Category Updated Successfully");
        }
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
      else {
        setSaveFail("Failed to Save");
      }

      setTimeout(() => {
        setSaveMessage('');
        setSaveFail('');
        fetchCategories();
      }, 3000);

    } catch (error) {
      setSaveFail("Failed to Save");
      setTimeout(() => {
        setSaveFail('');
      }, 3000);
    }
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (!confirmDelete) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/chakram/api/deleteCategoryById/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedCategories = categoryData.filter(category => category.id !== id);
        setCategoryData(updatedCategories);
        setDeleteMessage("Deleted Category Successfully");
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

  async function fetchCategories() {
    const response = await fetch("http://localhost:8080/chakram/api/getAllCategories");
    const data = await response.json();
    setCategoryData(data);
    console.log(data, "Fetched category data");
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function handleEdit(id) {
    try {
      const response = await fetch(`http://localhost:8080/chakram/api/getCategoryById/${id}`);
      const data = await response.json();
      console.log(`Edit category with ID ${id}:`, data);
      setCategoryName(data.name);
      setCategoryDescription(data.description)
      setStatus(data.status);
      setCatId(data.id);
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
                        {categoryData.map((item, index) => (
                          <tr key={item.id}>
                            <td scope="row">{index + 1}</td>
                            <td>{item.name}</td>
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
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-white rounded shadow p-4 card-container">
                  <h5 className="h6 pb-4">Add New Category</h5>
                  {saveMessage && <p className="alert alert-info">{saveMessage}</p>}
                  {saveFail && <p className="alert alert-danger">{saveFail}</p>}

                  <form className="form" onSubmit={handleSave}>
                    <div className="mb-3">
                      <label htmlFor="categpryname" className="form-label">
                        Category Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={categoryName}
                        onChange={(e) => {
                          setCategoryName(e.target.value);
                          setErrors({ ...errors, name: null });
                        }}
                        id="categpryname"
                        placeholder="Category Name"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    {errors.name && <p className="alert alert-danger">{errors.name}</p>}
                    <div className="mb-3">
                      <label htmlFor="description-category" className="form-label">
                        Category Description
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="description-category"
                        value={categoryDescription}
                        onChange={(e) => {
                          setCategoryDescription(e.target.value);
                          setErrors({ ...errors, description: null });
                        }}
                        placeholder="Description"
                        aria-label=".form-control-sm example"
                        rows="3"
                      ></textarea>
                    </div>
                    {errors.description && <p className="alert alert-danger">{errors.description}</p>}
                    <div className="mb-3">
                      <label htmlFor="status" className="form-label">
                        Status
                      </label>
                      <select
                        className="form-select form-control"
                        value={status}
                        onChange={(e) => { setStatus(e.target.value) }}
                        aria-label="Default select example"
                        id="status"
                      >
                        <option selected value={true}>Active</option>
                        <option value={false}>Inactive</option>
                      </select>
                    </div>
                    <button type="submit" className="blue-btn border-0 w-100">Save</button>

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
