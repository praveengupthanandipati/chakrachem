import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import scrollToTop from "../includes/ScrollToTop";
import CategoryImg from "../assets/img/bg-category.jpg";

const Products = () => {
  scrollToTop(); // Page load move to top
  const { id } = useParams(); // Get category ID from URL
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [pageName, setPageName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSubCategoriesById = async (categoryId) => {
      try {
        const response = await axios.get(`http://localhost:8080/chakram/api/getSubCategoriesById/${categoryId}`);
        const data = response.data;
        
        console.log("API Response:", data);

        // Check if data has the expected structure
        if (Array.isArray(data)) {
          setSubCategoryData(data);
          setPageName(data.length > 0 ? data[0].categoryName : "No Category Name");
        } else {
          console.error("Unexpected API response format");
          setError(true);
          setPageName("Error");
        }
      } catch (error) {
        console.error("Error fetching subcategories:", error);
        setError(true);
        setPageName("Error");
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategoriesById(id);
  }, [id]);

  return (
    <main className="subpageMain">
      <section className="subpageHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="h1 p-0 m-0">{pageName}</h1>
            </div>
            <div className="col-md-6 align-self-center">
              <ul className="breadCrumb justify-content-md-end">
                <li>
                  <NavLink to="/"> Home</NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <span className="active"> {pageName}</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>       
      </section>
      <img src={CategoryImg} alt="Category Background" className="img-fluid" />
      <section className="subPageBody">
        <div className="container">
          <div className="category-list-items">
            {loading ? (
              <p>Loading subcategories...</p>
            ) : error ? (
              <p>Error loading subcategories. Please try again later.</p>
            ) : subCategoryData.length > 0 ? (
              subCategoryData.map((subcategory) => (
                subcategory.status ? (
                  <NavLink key={subcategory.subCatId} to={`/ProductsList/${subcategory.subCatId}`}>
                    {subcategory.subCategoryName}
                  </NavLink>
                ) : null
              ))
            ) : (
              <p>No subcategories available.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
