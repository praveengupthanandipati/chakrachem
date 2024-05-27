import React from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "../includes/ScrollToTop";
import product01 from "../assets/img/products/1702205754.png";
import product02 from "../assets/img/products/1702205780.png";
import product03 from "../assets/img/products/1702205809.png";
import product04 from "../assets/img/products/1702205901.png";
import product05 from "../assets/img/products/1702205928.png";
import product06 from "../assets/img/products/1702205969.png";
import product07 from "../assets/img/products/17022053491.png";

const ProductsList = () => {
  scrollToTop(); //page load move top
  let pageName = "Heterocyclic Building Blocks";
  const ProductItem = [
    {
      id: 1,
      ImageName: product01,
      Weight: "500 Grams",
      CasNumber: "615-94-1",
      ProductName: `7-hydroxycoumarin`,
      Price: "18,500",
    },
    {
      id: 2,
      ImageName: product02,
      Weight: "200 Grams",
      CasNumber: "615-94-1",
      ProductName: `3-Acetylcoumarin`,
      Price: "28,500",
    },
    {
      id: 3,
      ImageName: product03,
      Weight: "50 Grams",
      CasNumber: "82671-06-5",
      ProductName: `6-Bromo-4-hydroxycoumarin`,
      Price: "25,650",
    },
    {
      id: 4,
      ImageName: product04,
      Weight: "60 Grams",
      CasNumber: "608-31-1",
      ProductName: `7-Amino-4-methylcoumarin`,
      Price: "78,500",
    },
    {
      id: 5,
      ImageName: product05,
      Weight: "500 Grams",
      CasNumber: "3392-97-0",
      ProductName: `7-Diethylamino-4-methylco...`,
      Price: "7,850",
    },
    {
      id: 6,
      ImageName: product06,
      Weight: "750 Grams",
      CasNumber: "3430-21-5",
      ProductName: `7-Hydroxy-4-(trifluoromet...`,
      Price: "35,000",
    },
    {
      id: 7,
      ImageName: product07,
      Weight: "500 Grams",
      CasNumber: "5154-00-7",
      ProductName: `7-Methylcoumarin`,
      Price: "32,000",
    },
    {
      id: 8,
      ImageName: product01,
      Weight: "200 Grams",
      CasNumber: "1501185-00-7",
      ProductName: `Coumestrol`,
      Price: "42,000",
    },
    {
      id: 9,
      ImageName: product01,
      Weight: "250 Grams",
      CasNumber: "615-94-1",
      ProductName: `4-Hydroxylthiocoumarin`,
      Price: "45,000",
    },
    {
      id: 10,
      ImageName: product02,
      Weight: "400 Grams",
      CasNumber: "615-94-1",
      ProductName: `N-Succinimidyl 7-Hydroxy..`,
      Price: " 58,000",
    },
    {
      id: 11,
      ImageName: product03,
      Weight: "100 Grams",
      CasNumber: "82671-06-5",
      ProductName: `8-Bromo-6-Chloro-3-Cyano..`,
      Price: "250,000",
    },
    {
      id: 12,
      ImageName: product04,
      Weight: "500 Grams",
      CasNumber: "608-31-1",
      ProductName: `8-Acetyl-7-hydroxy-2H-chr..`,
      Price: "89,501",
    },
  ];
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
                  <NavLink to="/Products"> Life Sciences</NavLink>
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
          <div className="row">
            {ProductItem.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="productItem shadow mb-3">
                  <span className="productItem__Weight">{item.Weight}</span>
                  <NavLink to="/ProductDetail">
                    <img
                      src={item.ImageName}
                      alt={item.ImageName}
                      className="productItem__image"
                    />
                  </NavLink>
                  <div className="productItem__casnumber">{item.CasNumber}</div>
                  <div className="productItem__productName">
                    <NavLink to="/ProductDetail">{item.ProductName}</NavLink>
                  </div>
                  <p className="text-center font-semibold font-primarylight">
                    <span class="productItem__currency">₹</span>
                    {item.Price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="row pt-5">
            <div className="col-md-12">
              <nav aria-label="Page navigation example mt-5 pt-5 ">
                <ul class="pagination justify-content-end">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsList;
