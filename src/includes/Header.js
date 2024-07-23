import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/chakram/api/getAllCategories"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      const filteredData = data.filter((category) => category.status); // Only include categories with status true
      setCategoryData(filteredData);
      console.log("Fetched category data:", filteredData);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProducts = async (query) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/products/searchProducts?query=${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      console.log(data, "data");
      setSearchResults(data);
      console.log("Fetched product data:", data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearchResultClick = (id) => {
    // Close offcanvas
    closeOffcanvas();
    // Optionally, you can also close any background modals here
    const modal = document.querySelector(".offcanvas.show");
    if (modal) {
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");
      document.querySelector(".modal-backdrop")?.remove();
    }
    // Redirect to the product detail page
    window.location.href = `/ProductDetail/${id}`;
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length > 2) {
      fetchProducts(value);
    } else {
      setSearchResults([]);
    }
  };

  const handleDropdownClick = () => {
    if (categoryData.length === 0) {
      fetchCategories();
    }
  };

  const handleSearchIconClick = () => {
    fetchCategories();
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldAddClass = scrollTop > 100; // Adjust this value as needed
      setIsScrolled(shouldAddClass);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={isScrolled ? "fixed-top header-top" : "header-top"}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/" onClick={closeOffcanvas}>
              <img src={Logo} alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              onClick={toggleOffcanvas}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`offcanvas offcanvas-end ${
                isOffcanvasOpen ? "show" : ""
              }`}
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 mainmenu">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/"
                      onClick={closeOffcanvas}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/About"
                      onClick={closeOffcanvas}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={handleDropdownClick}
                    >
                      Products
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {categoryData.map((category) => (
                        <li key={category.id}>
                          <NavLink
                            className="dropdown-item"
                            to={`/Products/${category.id}`}
                            onClick={closeOffcanvas}
                          >
                            {category.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/Services"
                      onClick={closeOffcanvas}
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/Careers"
                      onClick={closeOffcanvas}
                    >
                      Career
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/Contact"
                      onClick={closeOffcanvas}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <ul
                  className="navbar-nav ms-auto rightnav"
                  onClick={closeOffcanvas}
                >
                  <li className="nav-item">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>
                        <span className="inr">₹</span>INR
                      </option>
                      <option value="USD">
                        <span>$</span>USD
                      </option>
                    </select>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to=""
                      data-bs-toggle="offcanvas"
                      data-bs-target="#searchCanvas"
                      aria-controls="offcanvasTop"
                      onClick={handleSearchIconClick}
                    >
                      <span className="icon-magnifier icomoon"></span>
                    </NavLink>
                  </li>
                  <li className="nav-item d-none">
                    <NavLink className="nav-link" to="/">
                      <span className="icon-user icomoon"></span>
                    </NavLink>
                  </li>
                  <li className="nav-item d-none">
                    <NavLink className="nav-link" to="/">
                      <span className="icon-cart-bag icomoon"></span>
                      <span className="cart-number">15</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div
        className="offcanvas offcanvas-top offcanvas-search"
        tabIndex="-1"
        id="searchCanvas"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            &nbsp;
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="search-section">
                  <span className="icon-magnifier icomoon"></span>
                  <input
                    type="text"
                    placeholder="Search the Product name or CAS Number"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                <div className="search-results">
                  {searchQuery.length > 2 && searchResults.length > 0 && (
                    <ul className="p-4">
                      {searchResults.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`/ProductDetail/${item.id}`}
                            className="dropdown-item"
                            onClick={() => handleSearchResultClick(item.id)}
                          >
                            {item.name || item.cas}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="categories pt-4">
                  <h6 className="text-uppercase font-black font-semibold pb-1">
                    Search by Categories
                  </h6>
                  <div className="">
                    {categoryData.length > 0 ? (
                      categoryData.map((category) => (
                        <a key={category.id} href={`/Products/${category.id}`}>
                          {category.name}
                        </a>
                      ))
                    ) : (
                      <p>No categories available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
