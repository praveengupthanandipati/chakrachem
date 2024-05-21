import React from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "../includes/ScrollToTop";
import AboutImage from "../assets/img/aboutimg01.jpg";

const About = () => {
  scrollToTop(); //page load move top
  let pageName = "About Charachem";
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
      <section className="subPageBody">
        <div className="container">
          <h2 className="pb-3">
            The New Way to <span>success.</span>
          </h2>
          <p>
            Chakrachem is a manufacturer and supplier of API Intermediates; fine
            chemicals, aroma, flavor and fragrances chemicals and natural
            products also specialty chemicals. Chakrachem Offers over 1,000 +
            products for research and development via a comprehensive of API
            Intermediates, Fine chemicals and fragrances chemicals and natural
            products also specialty chemicals. Our products are available in
            pre-packaged catalog sizes, and in semi-bulk and bulk quantities. We
            also offer custom synthesis and special packaging services
          </p>
          <p className="border-bottom mb-3">
            We provide custom synthesis and contract mfg in the area of Fine
            chemicals and Specialty chemicals, API intermediates and ect.., Find
            our products are the same high quality as our competition, but are
            often more affordable.
          </p>

          <div className="row mt-4">
            <div className="col-md-6">
              <img src={AboutImage} alt="" className="img-fluid w-100" />
            </div>
            <div className="col-md-6">
              <h2 className="pb-3">
                Efficient Product <span> Search Engine.</span>
              </h2>
              <p>
                The Chakra Chem search engine can save your time! On our
                website, advanced structure search, powerful compound list
                search，and MOL search, enhance your experience of sourcing
                compounds. “Structure Search” allows you to draw structures or
                sub-structures in the editor field to find specific compounds
                and related analogs. “List Search” simultaneously searches
                numerous products with inventory and price information. All you
                need to do is enter the catalog numbers and CAS numbers.
              </p>
              <p>
                The real-time docking of Chakra Chem’s WMS system and website
                ensures the global synchronization of inventory data.
              </p>
              <p>
                At Chakra Chem, we consider our business a scientific tool and a
                chemical database. We constantly develop new website features
                and optimize website content that brings the inspiration for
                drug discovery and saves time and effort for our customers.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
