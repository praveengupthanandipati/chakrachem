import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import scrollToTop from "../includes/ScrollToTop";
import product01 from "../assets/img/products/1702205754.png";
import Picto from "../assets/img/GHS07.png";
import Counter from "../includes/Counter";
import HomeProducts from "../components/HomeProducts";
import axios from "axios";

const ProductDetail = () => {
  scrollToTop(); //page load move top
  const { id } = useParams(); // Get the product ID from URL params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id.toLowerCase()]: value,
    });
    setErrors({
      ...errors,
      [id.toLowerCase()]: "",
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.company) tempErrors.company = "Company Name is required";
    if (!formData.contact) tempErrors.contact = "Contact Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    if (!formData.quantity) tempErrors.quantity = "Quantity is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid, proceed with submission
      console.log("Form data:", formData);
      alert("Bulk request sent successfully!");
    }
  };

  const downloadDocument = (fileContent, documentName, fileType) => {
    // Ensure the file type is PDF
    const mimeType = fileType || "application/pdf";

    // Decode base64 and create a Blob
    const binaryString = window.atob(fileContent);
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: mimeType });

    // Create a temporary link and trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download =
      (documentName || "document") +
      (mimeType === "application/pdf" ? ".pdf" : "");
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link); // Clean up
    URL.revokeObjectURL(link.href); // Clean up
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]); // Add id as a dependency

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details.</p>;

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
  const textareHeight = {
    height: "100px",
  };

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
                    <img
                      src={product.image}
                      alt={pageName}
                      className="img-fluid"
                    />
                  </figure>
                  <div className="documentsProduct">
                    <p>
                      <small>Documents Download</small>
                    </p>
                    {product.documents.map((doc, index) => (
                      <p key={index} className="pb-2">
                        <NavLink
                          to=""
                          className="font-semibold font-secondary"
                          onClick={() =>
                            downloadDocument(
                              doc.fileContent,
                              doc.documentName,
                              doc.fileType
                            )
                          }
                        >
                          <span className="icon-download2"></span>{" "}
                          {doc.documentName || "COA"}
                        </NavLink>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="product-description">
                    <div>
                      <p className="font-semibold d-flex pb-1">
                        <span>{product.casNumber}</span>
                        <span className="icon-rightarrow2 d-inline px-3 align-self-center"></span>
                        <span>{product.subCategory}</span>
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
                        Purity: <span>{product?.purity}</span>
                      </p>
                    </div>
                    <div className="row py-3">
                      <div className="col-md-4">
                        <p className="productDetailSpecp">
                          <span>CAS Number:</span>
                          <span className="valueProduct">
                            {product?.casNumber}
                          </span>
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p className="productDetailSpecp">
                          <span>Molecular Weight:</span>
                          <span className="valueProduct">
                            {product?.molecularWeight}
                          </span>
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p className="productDetailSpecp">
                          <span>Emperical Formula:</span>
                          <span className="valueProduct">
                            {product?.empiricalFormula}
                          </span>
                        </p>
                      </div>
                      <div className="col-md-8">
                        <p className="productDetailSpecp">
                          <span>EC Number:</span>
                          <span className="valueProduct">
                            {product?.ecNumber}
                          </span>
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p className="productDetailSpecp">
                          <span>MDL Number::</span>
                          <span className="valueProduct">
                            {product?.mdlNumber}
                          </span>
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
                          {product.skus.map((sku, index) => (
                            <tr key={sku.id}>
                              <td scope="row">{sku.packSizeValue}</td>
                              <td>
                                <p className="p-0 m-0">
                                  Available to ship on {sku.availableDate}
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
                                  <span>{sku.priceInr}</span>
                                </p>
                              </td>
                              <td>
                                <Counter />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="text-end">
                    <NavLink
                      to=""
                      className="blue-btn"
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
                        <dd>{product.productId}</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Purity / Analysis Method</dt>
                        <dd>
                          <span class="icon-rightarrow3"></span>{" "}
                          {product.purity}
                        </dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Molecular Formula / Molecular Weight</dt>
                        <dd>{product.molecularWeight}</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Physical State (20 deg.C)</dt>
                        <dd>{product?.generalInformation?.physicalState}</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Packaging and Container</dt>
                        <dd>
                          {product?.generalInformation?.packagingContainer}
                        </dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>CAS RN</dt>
                        <dd>{product?.generalInformation?.casRn} </dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Reaxys Registry Number</dt>
                        <dd>{product?.generalInformation?.reaxysNumber}</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>PubChem Substance ID</dt>
                        <dd>{product?.generalInformation?.sdbsId}</dd>
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
                        <dd>{product?.generalInformation?.merckIndex}</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>MDL Number</dt>
                        <dd>{product?.mdlNumber}</dd>
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
                        <dd>
                          {product?.specification?.image && (
                            <img
                              src={product?.specification?.image}
                              alt="Product"
                              style={{ width: "100px", marginTop: "10px" }}
                            />
                          )}
                        </dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Purity(HPLC)</dt>
                        <dd>{product?.specification?.purityHplc}</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Purity(Neutralization titration)</dt>
                        <dd>{product?.specification?.purityTitration}</dd>
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
                        <dd>{product?.specification?.meltingPoint}</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Solubility in water</dt>
                        <dd>{product?.specification?.solubilityWater}</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Solubility (soluble in)</dt>
                        <dd>{product?.specification?.solubilityOther}</dd>
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
                        <dd>{product?.safetyRegulation?.ghsSignalWord}</dd>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="sectionListItem">
                        <dt>Hazard Statements</dt>
                        <dd>{product?.safetyRegulation?.hazardStatements}</dd>
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
                        <dd>{product?.safetyRegulation?.rtecs}</dd>
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
                        <div className="contentApplications">
                          {product?.applications &&
                          product.applications.length > 0 ? (
                            <ul>
                              {product.applications.map(
                                (application, index) => (
                                  <li key={index} className="application-item">
                                    <p>
                                      <strong>Application Name:</strong>{" "}
                                      {application.applicationName}
                                    </p>
                                    <p>
                                      <strong>File:</strong>
                                      {application.file ? (
                                        <a
                                          href={application.file}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {application.file.split("/").pop()}{" "}
                                          {/* Display file name */}
                                        </a>
                                      ) : (
                                        "No File Available"
                                      )}
                                    </p>
                                  </li>
                                )
                              )}
                            </ul>
                          ) : (
                            <p>No Data</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Products */}
            <div className="recommend-products">
              <h4>Recommended Products</h4>
              <HomeProducts />
            </div>

            {/*Related Categories */}
            <div className="col-md-12 related-categories">
              <div className="card">
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
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="requestBulkOrder"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title font-semibold"
            id="offcanvasRightLabel"
          >
            Request Bulk Order
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <h5 className="text-center">{pageName}</h5>

          <form className="requestbuilk-form" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${errors.company ? "is-invalid" : ""}`}
                id="Company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
              <label htmlFor="Company">Company Name</label>
              {errors.company && (
                <div className="invalid-feedback">{errors.company}</div>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${errors.contact ? "is-invalid" : ""}`}
                id="Contact"
                placeholder="Contact Name"
                value={formData.contact}
                onChange={handleChange}
              />
              <label htmlFor="Contact">Contact Name</label>
              {errors.contact && (
                <div className="invalid-feedback">{errors.contact}</div>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="Email"
                placeholder="Official Email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="Email">Official Email</label>
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                id="Phone"
                placeholder="Phone or Mobile"
                value={formData.phone}
                onChange={handleChange}
              />
              <label htmlFor="Phone">Phone or Mobile</label>
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className={`form-control ${
                  errors.quantity ? "is-invalid" : ""
                }`}
                id="Quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
              <label htmlFor="Quantity">Quantity</label>
              {errors.quantity && (
                <div className="invalid-feedback">{errors.quantity}</div>
              )}
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Message"
                id="msg"
                style={textareHeight}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="msg">Comments</label>
            </div>
            <button type="submit" className="green-btn border-0 w-100 mt-4">
              Send Bulk Request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
