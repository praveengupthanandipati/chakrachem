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
      CasNumber: "615-94-1",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 2,
      ImageName: product02,
      CasNumber: "615-94-1",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 3,
      ImageName: product03,
      CasNumber: "82671-06-5",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 4,
      ImageName: product04,
      CasNumber: "608-31-1",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 5,
      ImageName: product05,
      CasNumber: "3392-97-0",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 6,
      ImageName: product06,
      CasNumber: "3430-21-5",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 7,
      ImageName: product07,
      CasNumber: "5154-00-7",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 8,
      ImageName: product01,
      CasNumber: "1501185-00-7",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 1,
      ImageName: product01,
      CasNumber: "615-94-1",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 2,
      ImageName: product02,
      CasNumber: "615-94-1",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 3,
      ImageName: product03,
      CasNumber: "82671-06-5",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 4,
      ImageName: product04,
      CasNumber: "608-31-1",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
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
