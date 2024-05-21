import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  //on click browser move to top
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer>
      {isScrolled && (
        <div className="scroll-to-top" onClick={ScrollToTop}>
          <NavLink>
            <span class="icon-uparrow icomoon"> </span>
          </NavLink>
        </div>
      )}
      <section className="footer">
        <section className="topFooter">
          <div className="container">
            <div className="row justify-content-md-between">
              <div className="col-md-6">
                <h5 className="h5 fbold">
                  Do You Have Any Question? Please Contact Our Team
                </h5>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="addressItem">
                      <div className="addressItem__icon">
                        <span className="icon-telephone icomoon"></span>
                      </div>
                      <div className="addressItem__desc">
                        <h6 className="h6">Phone</h6>
                        <p>+ 91 900 800 2580</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="addressItem">
                      <div className="addressItem__icon">
                        <span className="icon-email icomoon"></span>
                      </div>
                      <div className="addressItem__desc">
                        <h6 className="h6">Email</h6>
                        <p>info@chakrachem.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="addressItem border-bottom pb-4 mb-4">
                      <div className="addressItem__icon">
                        <span className="icon-pin icomoon"></span>
                      </div>
                      <div className="addressItem__desc">
                        <h6 className="h6">Location</h6>
                        <p>
                          Plot no. F-11, Third floor, Road no. 7, IDA
                          kukatpally, Gandhinagar, Hyderabad - 500037,
                          Telangana, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footerSocial">
                  <NavLink to=" ">
                    <span className="icon-facebook icomoon"></span>
                  </NavLink>
                  <NavLink to=" ">
                    <span className="icon-linkedin icomoon"></span>
                  </NavLink>
                  <NavLink to=" ">
                    <span className="icon-twitter icomoon"></span>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-5">
                <div className="row navrow">
                  <div className="col-md-6 col-6">
                    <h5 className="h5 fbold">Company</h5>
                    <ul className="footerNav">
                      <li>
                        <NavLink to="" className="footer-nav-link">
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="" className="footer-nav-link">
                          About
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="" className="footer-nav-link">
                          Services
                        </NavLink>
                      </li>                     
                      <li>
                        <NavLink to="" className="footer-nav-link">
                          Career
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="" className="footer-nav-link">
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-6">
                    <h5 className="h5 fbold">Products</h5>
                    <ul className="footerNav">
                      <li>
                        <NavLink to="" className="footer-nav-link">
                          Fine Chemicals
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="" className="footer-nav-link">
                          Coumarin - Chalcones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="" className="footer-nav-link">
                          API Intermediate
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="" className="footer-nav-link">
                          Natural Products
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="" className="footer-nav-link">
                          Flavones & Flavanones
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bottomFooter">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="d-flex m-0 p-0">
                  <NavLink to="Terms">Terms & Conditions</NavLink>
                  {/* <NavLink to="">Privacy Policy</NavLink> */}
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <p className="m-0 p-0">
                  <small>
                    All Copy rights reserved @ChakraChem LifeSciences Pvt. Ltd.,
                  </small>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
