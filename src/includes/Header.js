import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  //mobile on click nav, hide off canvas
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  //on scroll add class to header
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldAddClass = scrollTop > 100; // Adjust this value as needed
      setIsScrolled(shouldAddClass);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //

  return (
    <div>
      <header className={isScrolled ? "fixed-top-nav fixed-top" : "fixed-top"}>
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
                      to=" "
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Products
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/Products"
                          onClick={closeOffcanvas}
                        >
                          Life Sciences
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to=" "
                          onClick={closeOffcanvas}
                        >
                          API Intermediate
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to=" "
                          onClick={closeOffcanvas}
                        >
                          Chemical Derivatives
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to=" "
                          onClick={closeOffcanvas}
                        >
                          Natural Products
                        </NavLink>
                      </li>
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
                    <NavLink
                      className="nav-link"
                      to=""
                      data-bs-toggle="offcanvas"
                      data-bs-target="#searchCanvas"
                      aria-controls="offcanvasTop"
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
                  <input
                    type="text"
                    placeholder="Search the Product name or CAS Number"
                  />
                </div>
                <div className="categories pt-4">
                  <h6 className="text-uppercase font-black font-semibold pb-1">
                    Search by Categories
                  </h6>
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
