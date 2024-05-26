import React from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "../includes/ScrollToTop";

const Products = () => {
  scrollToTop(); //page load move top
  let pageName = "Life Sciences";
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
          <div className="category-list-items">
            <NavLink to="/ProductsList">Heterocyclic Building Blocks</NavLink>
            <NavLink to="/ProductsList">Organic Building Blocks</NavLink>
            <NavLink to="/ProductsList">Catalysis Chemistry</NavLink>
            <NavLink to="/ProductsList">Asymmetric Synthesis</NavLink>
            <NavLink to="/ProductsList">Organometallic Reagents</NavLink>
            <NavLink to="/ProductsList">Synthetic Reagents</NavLink>
            <NavLink to="/ProductsList">Specialty Synthesis</NavLink>
            <NavLink to="/ProductsList">Stains and Dyes</NavLink>
            <NavLink to="/ProductsList">Chemical Biology</NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
