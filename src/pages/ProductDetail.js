import React from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "../includes/ScrollToTop";
import product01 from "../assets/img/products/1702205754.png";
import Picto from "../assets/img/GHS07.png";
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
                        <span className="icon-download2"></span> COA
                      </NavLink>
                    </p>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="product-description">
                    <div>
                      <p className="font-semibold d-flex pb-1">
                        <span>93-35-6</span>
                        <span className="icon-rightarrow2 d-inline px-3 align-self-center"></span>
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
                    <NavLink
                      to=""
                      className="green-btn"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#requestBulkOrder"
                      aria-controls="offcanvasRight"
                    >
                      Request Bulk Order
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* tab starts */}
            <div className="col-md-12 tab-information">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active rounded-0"
                    id="pills-general-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-general"
                    type="button"
                    role="tab"
                    aria-controls="pills-general"
                    aria-selected="true"
                  >
                    General Information
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link rounded-0"
                    id="pills-specs-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-specs"
                    type="button"
                    role="tab"
                    aria-controls="pills-specs"
                    aria-selected="false"
                  >
                    Specifications & Properties
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link rounded-0"
                    id="pills-safety-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-safety"
                    type="button"
                    role="tab"
                    aria-controls="pills-safety"
                    aria-selected="false"
                  >
                    Safety &amp; Regulations
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link rounded-0"
                    id="pills-applications-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-applications"
                    type="button"
                    role="tab"
                    aria-controls="pills-applications"
                    aria-selected="false"
                  >
                    Applications
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                {/* General Information */}
                <div
                  className="tab-pane fade show active border p-4"
                  id="pills-general"
                  role="tabpanel"
                  aria-labelledby="pills-general-tab"
                  tabindex="0"
                >
                  <div className="row pt-2">
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Product Number</dt>
                        <dd>CP10087</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Purity / Analysis Method</dt>
                        <dd>
                          <span>></span> NLT 98 %
                        </dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Molecular Formula / Molecular Weight</dt>
                        <dd>241.04 g/mol</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Physical State (20 deg.C)</dt>
                        <dd>Solid</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Packaging and Container</dt>
                        <dd>--</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>CAS RN</dt>
                        <dd>--</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Reaxys Registry Number</dt>
                        <dd>--</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>PubChem Substance ID</dt>
                        <dd>--</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>SDBS (AIST Spectral DB)</dt>
                        <dd>--</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Merck Index (14)</dt>
                        <dd>--</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>MDL Number</dt>
                        <dd>MFCD00239372</dd>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specifications and Properties */}
                <div
                  className="tab-pane fade border p-4"
                  id="pills-specs"
                  role="tabpanel"
                  aria-labelledby="pills-specs-tab"
                  tabindex="0"
                >
                  <div className="row pt-2">
                    <div className="col-md-12">
                      <h5 className="pb-3">Specifications</h5>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Appearance</dt>
                        <dd>offwhite to yellow</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Purity(HPLC)</dt>
                        <dd>NLT 98%</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Purity(Neutralization titration)</dt>
                        <dd>--</dd>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <h5 className="pb-3">Properties (reference)</h5>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Melting Point</dt>
                        <dd>230 - 232 °C</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Solubility in water</dt>
                        <dd>--</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Solubility (soluble in)</dt>
                        <dd>--</dd>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade border p-4"
                  id="pills-safety"
                  role="tabpanel"
                  aria-labelledby="pills-safety-tab"
                  tabindex="0"
                >
                  <div className="row pt-2">
                    <div className="col-md-12">
                      <h5 className="pb-3">GHS</h5>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Signal Word</dt>
                        <dd>H319</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Hazard Statements</dt>
                        <dd>Eye Irrit. 2</dd>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <h5 className="pb-3">Precautionary Statements</h5>
                    </div>
                    <table className="product-statements-table">
                      <tr>
                        <th>Pictogram(s)</th>
                        <td>
                          <img src={Picto} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <th align="top">Signal</th>
                        <td>
                          <div>
                            <p>Warning</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th align="top">GHS Hazard Statements</th>
                        <td>
                          <div>
                            <p>
                              H315 (100%): Causes skin irritation [Warning Skin
                              corrosion/irritation]
                            </p>
                            <p>
                              H319 (100%): Causes serious eye irritation
                              [Warning Serious eye damage/eye irritation]
                            </p>
                            <p>
                              H335 (100%): May cause respiratory irritation
                              [Warning Specific target organ toxicity, single
                              exposure; Respiratory tract irritation]
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th align="top">Precautionary Statement Codes</th>
                        <td>
                          <div>
                            <p>
                              P261, P264, P264+P265, P271, P280, P302+P352,
                              P304+P340, P305+P351+P338, P319, P321, P332+P317,
                              P337+P317, P362+P364, P403+P233, P405, and P501
                            </p>
                            <p>
                              (The corresponding statement to each P-code can be
                              found at the GHS Classification page.)
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Related Laws:</dt>
                        <dd>RTECS#</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Transport Information:</dt>
                        <dd>
                          <div>
                            <p>--</p>
                          </div>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade border p-4"
                  id="pills-applications"
                  role="tabpanel"
                  aria-labelledby="pills-applications-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="sectionListItem">
                        <dt>Applications</dt>
                        <dd>No Data</dd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Related Categories */}
            <div className="col-md-12 related-categories mt-5">
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
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="requestBulkOrder"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title font-semibold" id="offcanvasRightLabel">
            Request Bulk Order
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <h5>{pageName}</h5>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
