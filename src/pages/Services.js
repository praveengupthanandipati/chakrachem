import React from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "../includes/ScrollToTop";
import Service01Img from "../assets/img/servicesimg01.jpg";
import Service02Img from "../assets/img/servicesimg02.jpg";
import Service03Img from "../assets/img/servicesimg03.jpg";

const Services = () => {
  scrollToTop(); //page load move top
  let pageName = "Our Services";
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
          <div className="row mt-4">
            <div className="col-md-6">
              <img src={Service01Img} alt="" className="img-fluid w-100" />
            </div>
            <div className="col-md-6 align-self-center">
              <h6>Synthetic Chemistry</h6>
              <h2 className="pb-3">
                Discovery <span> Services.</span>
              </h2>
              <p>
                Services offered in both FTE as well as FFS mode; Synthesis of
                Research chemicals
              </p>
              <ul className="list-items">
                <li>Analogues</li>
                <li>Intermediates</li>
                <li>Building blocks</li>
                <li>Library compounds</li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 order-lg-last">
              <img src={Service02Img} alt="" className="img-fluid w-100" />
            </div>
            <div className="col-md-6 align-self-center">
              <h6>Synthetic Chemistry</h6>
              <h2 className="pb-3">
                Development <span> Services.</span>
              </h2>
              <p>
                Services offered in both FTE as well as FFS mode; Synthesis of
                API intermediates
              </p>
              <ul className="list-items">
                <li>Fine chemicals</li>
                <li>
                  Scale-up of the customer’s process under secrecy agreement up
                  to hundreds of kilograms
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <img src={Service03Img} alt="" className="img-fluid w-100" />
            </div>
            <div className="col-md-6 align-self-center">
              <h2 className="pb-3">
                Natural <span> Products.</span>
              </h2>
              <p>
                BRC is expertise in the isolation / synthesis of natural
                products and is one of the leading suppliers of the same in gram
                to multi kilogram scale. Some of our popular natural products
                are Harmine, Piperlongumine, picrotoxin, coumestrol etc.,{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
