import React, { useState, useEffect } from "react";
import TextEditor from "../components/TextEditor"; // Assuming you have a TextEditor component
import axios from "axios";

const BasicDetails = ({ basicDetails, onBasicDetailsChange }) => {
  const [formErrors, setFormErrors] = useState({});
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);

  useEffect(() => {
    setFormErrors({});
    fetchCategories(); // Fetch categories on component mount
  }, []);

  // Function to fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/chakram/api/getAllCategories");
      if (!response.data) {
        throw new Error("Failed to fetch categories");
      }
      setCategoryData(response.data);
      console.log("Fetched category data:", response.data);
      if (response.data.length > 0) {
        handleCategoryChange(response.data[0].id); // Fetch subcategories for the first category by default
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Function to fetch subcategories by categoryId
  const fetchSubCategoriesById = async (categoryId) => {
    try {
      const response = await axios.get(`http://localhost:8080/chakram/api/getSubCategoriesById/${categoryId}`);
      setSubCategoryData(response.data);
      console.log("Fetched subcategory data:", response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, type } = e.target;
    let newValue = e.target.value;

    if (type === 'file') {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          onBasicDetailsChange({
            ...basicDetails,
            productImage: reader.result, // Store base64 string of the image
          });
        };
      }
    } else {
      onBasicDetailsChange({
        ...basicDetails,
        [id]: newValue,
      });
    }
  };

  // Handle select changes for category and subcategory
  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    onBasicDetailsChange({
      ...basicDetails,
      [id]: value,
    });

    setFormErrors({
      ...formErrors,
      [`${id}Error`]: "",
    });

    if (id === 'category') {
      handleCategoryChange(value); // Fetch subcategories based on the selected category id
    }
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    fetchSubCategoriesById(categoryId); // Fetch subcategories based on the category id
  };

  // Validate form fields
  const validateForm = (e) => {
    const { id, value } = e.target;
    let errors = {};

    if (!value) {
      errors[`${id}Error`] = `${id.replace(/([A-Z])/g, " $1")} is required`;
    }

    setFormErrors({
      ...formErrors,
      ...errors,
    });
  };

  return (
    <div className="card bg-white rounded shadow p-4 mt-3">
      <h5 className="pb-3 mb-4 border-bottom">Basic Details</h5>
      <div className="row">
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              Product Image
            </label>
            <input
              className="form-control"
              type="file"
              id="productImage"
              onChange={handleInputChange}
            />
            {/* {basicDetails.productImage && (
              <img
                src={basicDetails.productImage}
                alt="Product"
                style={{ width: "100px", marginTop: "10px" }}
              />
            )} */}
            {formErrors.productImageError && (
              <p className="error">{formErrors.productImageError}</p>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="productId" className="form-label">
              Product ID
            </label>
            <input
              className="form-control"
              type="text"
              id="productId"
              placeholder="Enter Product ID"
              value={basicDetails.productId}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.productIdError && (
              <div className="text-danger">{formErrors.productIdError}</div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Title / Name
            </label>
            <input
              className="form-control"
              type="text"
              id="productName"
              placeholder="Enter Product Name"
              value={basicDetails.productName}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.productNameError && (
              <div className="text-danger">{formErrors.productNameError}</div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="productPurity" className="form-label">
              Purity
            </label>
            <input
              className="form-control"
              type="text"
              id="productPurity"
              placeholder="Enter Purity"
              value={basicDetails.productPurity}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.productPurityError && (
              <div className="text-danger">{formErrors.productPurityError}</div>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="casNumber" className="form-label">
              CAS Number
            </label>
            <input
              className="form-control"
              type="text"
              id="casNumber"
              placeholder="Enter CAS Number"
              value={basicDetails.casNumber}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.casNumberError && (
              <div className="text-danger">{formErrors.casNumberError}</div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="molecularWeight" className="form-label">
              Molecular Weight
            </label>
            <input
              className="form-control"
              type="text"
              id="molecularWeight"
              placeholder="Enter Molecular Weight"
              value={basicDetails.molecularWeight}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.molecularWeightError && (
              <div className="text-danger">
                {formErrors.molecularWeightError}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="empiricalFormula" className="form-label">
              Empirical Formula
            </label>
            <input
              className="form-control"
              type="text"
              id="empiricalFormula"
              placeholder="Enter Empirical Formula"
              value={basicDetails.empiricalFormula}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.empiricalFormulaError && (
              <div className="text-danger">
                {formErrors.empiricalFormulaError}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="ecNumber" className="form-label">
              EC Number
            </label>
            <input
              className="form-control"
              type="text"
              id="ecNumber"
              placeholder="Enter EC Number"
              value={basicDetails.ecNumber}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.ecNumberError && (
              <div className="text-danger">{formErrors.ecNumberError}</div>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="mdlNumber" className="form-label">
              MDL Number
            </label>
            <input
              className="form-control"
              type="text"
              id="mdlNumber"
              placeholder="Enter MDL Number"
              value={basicDetails.mdlNumber}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.mdlNumberError && (
              <div className="text-danger">{formErrors.mdlNumberError}</div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="category"
              value={basicDetails.category}
              onChange={handleSelectChange}
              onBlur={validateForm}
            >
              <option value="">Select Category</option>
              {categoryData.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {formErrors.categoryError && (
              <div className="text-danger">{formErrors.categoryError}</div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="subCategory" className="form-label">
              Subcategory
            </label>
            <select
              className="form-select"
              id="subCategory"
              value={basicDetails.subCategory}
              onChange={handleSelectChange}
              onBlur={validateForm}
            >
              <option value="">Select Subcategory</option>
              {subCategoryData.map((subCategory) => (
                <option key={subCategory.id} value={subCategory.id}>
                  {subCategory.subCategoryName}
                </option>
              ))}
            </select>
            {formErrors.subCategoryError && (
              <div className="text-danger">{formErrors.subCategoryError}</div>
            )}
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="productDescription" className="form-label">
          Description
        </label>
        <TextEditor
          id="productDescription"
          value={basicDetails.productDescription}
          onChange={(value) =>
            onBasicDetailsChange({
              ...basicDetails,
              productDescription: value,
            })
          }
        />
        {formErrors.productDescriptionError && (
          <div className="text-danger">
            {formErrors.productDescriptionError}
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicDetails;
