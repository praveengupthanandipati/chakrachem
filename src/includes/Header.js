import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  return (
    <div>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
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
                    <a className="active" aria-current="page" to="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" to="/">
                      About
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Products
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" to="/">
                          Life Sciences
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" to="/">
                          API Intermediate
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" to="/">
                          Chemical Derivatives
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" to="/">
                          Natural Products
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" to="/">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" to="/">
                      Career
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" to="/">
                      Contact
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto rightnav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      to=""
                      data-bs-toggle="offcanvas"
                      data-bs-target="#searchCanvas"
                      aria-controls="offcanvasTop"
                    >
                      <span className="icon-magnifier icomoon"></span>
                    </a>
                  </li>
                  <li className="nav-item d-none">
                    <a className="nav-link" to="/">
                      <span className="icon-user icomoon"></span>
                    </a>
                  </li>
                  <li className="nav-item d-none">
                    <a className="nav-link" to="/">
                      <span className="icon-cart-bag icomoon"></span>
                      <span className="cart-number">15</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div
        className="offcanvas offcanvas-top offcanvas-search"
        tabindex="-1"
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
                    <input type="text" placeholder="Search the Product name or CAS Number"/>                  
                </div>
                <div className="categories pt-4">
                    <h6 className="text-uppercase font-black font-semibold pb-1">Search by Categories</h6>
                    <div>
                        <a href="">Life Sciences</a>
                        <a href="">API Intermediate</a>
                        <a href="">Chemical Derivateves</a>
                        <a href="">Natural Products</a>                        
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
