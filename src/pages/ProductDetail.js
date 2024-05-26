import React from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "../includes/ScrollToTop";
import product01 from "../assets/img/products/1702205754.png";

const ProductDetail = () => {
  scrollToTop(); //page load move top
  let pageName = "6-allyl-8-carboxyergoline-methyl-ester";
  const RelatedCategoryItem = [
    { CategoryItem: "Heterocyclic Building Blocks" },
    { CategoryItem: "Organic Building Blocks" },
    { CategoryItem: "Catalysis Chemistry" },
    { CategoryItem: "Asymmetric Synthesis" },
    { CategoryItem: "Organometallic Reagents" },
    { CategoryItem: "Synthetic Reagents" },
    { CategoryItem: "Specialty Synthesis" },
    { CategoryItem: "Stains and Dyes" },
  ];
  return (
    <main className="subpageMain ProductDetail">
      <section className="subpageHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="h1 p-0 m-0">{pageName}</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <ul className="breadCrumb pt-4">
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="/Products"> Life Sciences</NavLink>
            </li>
            <li>
              <NavLink to="/Products"> Heterocyclic Building Blocks</NavLink>
            </li>
            <li>
              <NavLink to="">
                <span className="active"> {pageName}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <section className="subPageBody">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-9">
              {/*Poduct Detail start*/}
              <div className="row">
                <div className="col-md-4">
                  <figure className="productDetailFigure">
                    <img src={product01} alt={pageName} className="img-fluid" />
                  </figure>
                </div>
                <div className="col-md-8"></div>
              </div>
            </div>
            <div className="col-md-3 related-categories">
              <div className="card">
                <div className="card-header p-3">
                  <h5 className="card-title mb-0 pb-0">Related Categories</h5>
                </div>
                <div className="card-body">
                  <ul>
                    {RelatedCategoryItem.map((item) => (
                      <li key={item.id}>
                        <NavLink to="/Products">{item.CategoryItem}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
