import React from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "../includes/ScrollToTop";
import product01 from "../assets/img/products/1702205754.png";
import Counter from "../includes/Counter";

const ProductDetail = () => {
  scrollToTop(); //page load move top
  let pageName = "7-hydroxycoumarin";
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
            <div className="col-md-12">
              {/*Poduct Detail start*/}
              <div className="row">
                <div className="col-md-3">
                  <figure className="productDetailFigure">
                    <img src={product01} alt={pageName} className="img-fluid" />
                  </figure>
                  <div className="documentsProduct">
                    <p>
                      <small>Documents Download</small>
                    </p>
                    <p className="pb-2">
                      <NavLink to="" className="font-semibold font-secondary">
                        <span class="icon-download2"></span> COA
                      </NavLink>
                    </p>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="product-description">
                    <div>
                      <p className="font-semibold d-flex pb-1">
                        <span>93-35-6</span>
                        <span class="icon-rightarrow2 d-inline px-3 align-self-center"></span>
                        <span> 7-hydroxycoumarin</span>
                      </p>
                      <p className="Synonyms pb-2">
                        <span className="font-semibold">Synonym(s):</span>
                        <NavLink
                          to=""
                          target="_blank"
                          className="small pe-2 d-inline-block"
                        >
                          Umbelliferone,
                        </NavLink>
                        <NavLink
                          to=""
                          target="_blank"
                          className="small pe-2 d-inline-block"
                        >
                          7-Hydroxy-2H-chromen-2-one,
                        </NavLink>
                        <NavLink
                          to=""
                          target="_blank"
                          className="small pe-2 d-inline-block"
                        >
                          Hydrangin
                        </NavLink>
                      </p>
                      <p className="font-bold font-secondary pb-1">
                        Purity: <span>NLT 98%</span>
                      </p>
                    </div>
                    <div className="row py-3">
                      <div className="col-md-4">
                        <p className="productDetailSpecp">
                          <span>CAS Number:</span>
                          <span className="valueProduct">93-35-6</span>
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p className="productDetailSpecp">
                          <span>Molecular Weight:</span>
                          <span className="valueProduct"> 165.12</span>
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p className="productDetailSpecp">
                          <span>Emperical Formula:</span>
                          <span className="valueProduct">--</span>
                        </p>
                      </div>
                      <div className="col-md-8">
                        <p className="productDetailSpecp">
                          <span>EC Number:</span>
                          <span className="valueProduct">
                            C1=CC2=C(C=C1Br)C(=CC(=O)O2)O
                          </span>
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p className="productDetailSpecp">
                          <span>MDL Number::</span>
                          <span className="valueProduct">MFCD00239372</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="skus">
                    <div className="table-responsive">
                      <table className="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Pack Size</th>
                            <th scope="col">Availability</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">1/kg</td>
                            <td>
                              <p className="p-0 m-0">
                                Available to ship on 28-02-2023
                              </p>
                              <p className="p-0 m-0">
                                <small>
                                  (Three weeks from Order Confirmation)
                                </small>
                              </p>
                            </td>
                            <td>
                              <p className="price p-0 m-0">
                                <span className="inr p-0 m-0">₹</span>
                                <span>2,850</span>
                              </p>
                            </td>
                            <td>
                              <Counter />
                            </td>
                          </tr>
                          <tr>
                            <td scope="row">500 grms</td>
                            <td>
                              <p className="p-0 m-0">
                                Available to ship on 28-02-2023
                              </p>
                              <p className="p-0 m-0">
                                <small>
                                  (Three weeks from Order Confirmation)
                                </small>
                              </p>
                            </td>
                            <td>
                              <p className="price p-0 m-0">
                                <span className="inr p-0 m-0">₹</span>
                                <span>5,650</span>
                              </p>
                            </td>
                            <td>
                              <Counter />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="text-end">
                    <NavLink to="" className="green-btn">
                      Request Bulk Order
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 related-categories">
              <div className="card mt-5">
                <div className="card-header p-3">
                  <h5 className="card-title mb-0 pb-0">Related Categories</h5>
                </div>
                <div className="card-body">
                  <ul className="d-flex flex-wrap">
                    {RelatedCategoryItem.map((item) => (
                      <li key={item.id} className="pe-5">
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
