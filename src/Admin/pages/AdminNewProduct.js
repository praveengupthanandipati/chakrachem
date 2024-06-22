import React from "react";
import { NavLink } from "react-router-dom";
import TextEditor from "../components/TextEditor";

const AdminNewProduct = () => {
  let PageTitle = "Create New Product";
  return (
    <section className="admin-main">
      <div className="admin-container">
        <div className="container-fluid">
          <h1 className="h4 font-semibold pagetitle">{PageTitle}</h1>
          <section className="admin-main-inner">
            <div className="card bg-white rounded shadow p-4">
              <h5 className="pb-3 mb-4 border-bottom">Basic Details</h5>
              <div className="row">
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="productImage" className="form-label">
                      Product Image
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="productImage"
                      placeholder="Product Image"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="productId" className="form-label">
                      Product ID
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="productId"
                      placeholder="Enter Product ID"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="productName" className="form-label">
                      Product Title / Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="productId"
                      placeholder="Enter Product Name"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="purity" className="form-label">
                      Purity
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="productId"
                      placeholder="97%"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="purity" className="form-label">
                      Synonym(s) / Description
                    </label>
                    <div>
                      <TextEditor></TextEditor>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="casnumber" className="form-label">
                      CAS Number
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="casnumber"
                      placeholder="CAS Number"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="MolecularWeight" className="form-label">
                      Molecular Weight
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="MolecularWeight"
                      placeholder="Molecular Weight"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="EmpericalFormula" className="form-label">
                      Emperical Formula (Hill Notation)
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="EmpericalFormula"
                      placeholder="Emperical Formula"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="ECNumber" className="form-label">
                      EC Number
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="ECNumber"
                      placeholder="EC Number"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="MDLNumber" className="form-label">
                      MDL Number
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="MDLNumber"
                      placeholder="MDL Number"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="Category" className="form-label">
                      Category
                    </label>
                    <select
                      className="form-select form-control"
                      aria-label="Default select example"
                      id="category"
                    >
                      <option selected>Life Sciences</option>
                      <option value="1">API Intermediates</option>
                      <option value="2">Chemical Derivatives</option>
                      <option value="2">Natural Products</option>
                      <option value="2">Natural</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="SubCategory" className="form-label">
                      Sub Category
                    </label>
                    <select
                      className="form-select form-control"
                      aria-label="Default select example"
                      id="SubCategory"
                    >
                      <option selected>Life Sciences</option>
                      <option value="1">API Intermediates</option>
                      <option value="2">Chemical Derivatives</option>
                      <option value="2">Natural Products</option>
                      <option value="2">Natural</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white rounded shadow p-4 mt-3">
              <div className="row justify-content-between border-bottom pb-3">
                <div className="col-md-6 align-self-center">
                  <h5>Documents</h5>
                </div>
                <div className="col-md-6 text-end align-self-center">
                  <button class="btn btn-primary" type="submit">
                    <span class="icon-plus"></span>
                  </button>
                </div>
              </div>
              <div className="table mt-2">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" width="40%">
                        Name of Document
                      </th>
                      <th scope="col">Upload File</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Document Name"
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="file"
                          id="productImage"
                          placeholder="Upload File"
                        />
                      </td>
                      <td>
                        <button class="btn btn-primary" type="submit">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Document Name"
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="file"
                          id="productImage"
                          placeholder="Upload File"
                        />
                      </td>
                      <td>
                        <button class="btn btn-primary" type="submit">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card bg-white rounded shadow p-4 mt-3">
              <div className="row justify-content-between border-bottom pb-3">
                <div className="col-md-6 align-self-center">
                  <h5>SKU's</h5>
                </div>
                <div className="col-md-6 text-end align-self-center">
                  <button class="btn btn-primary" type="submit">
                    <span class="icon-plus"></span>
                  </button>
                </div>
              </div>
              <div className="table mt-2">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" width="25%">
                        SKU Name
                      </th>
                      <th scope="col">Pack Size</th>
                      <th scope="col">Available Date</th>
                      <th scope="col">Price INR</th>
                      <th scope="col">Price Dollor</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="SKU Name"
                        />
                      </td>

                      <td>
                        <div className="d-flex">
                          <div className="mb-3">
                            <select
                              className="form-select form-control"
                              aria-label="Default select example"
                              id="weight"
                            >
                              <option selected>Grams</option>
                              <option value="1">ML</option>
                              <option value="2">KG's</option>
                              <option value="2">Litre</option>
                            </select>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Value"
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="date"
                          id="availableDate"
                          placeholder="Select Date"
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="number"
                          id="inrValue"
                          placeholder="INR Value"
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="number"
                          id="dollorValue"
                          placeholder="Dollor Value"
                        />
                      </td>
                      <td>
                        <button class="btn btn-primary" type="submit">
                          Delete
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="SKU Name"
                        />
                      </td>

                      <td>
                        <div className="d-flex">
                          <div className="mb-3">
                            <select
                              className="form-select form-control"
                              aria-label="Default select example"
                              id="weight"
                            >
                              <option selected>Grams</option>
                              <option value="1">ML</option>
                              <option value="2">KG's</option>
                              <option value="2">Litre</option>
                            </select>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Value"
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="date"
                          id="availableDate"
                          placeholder="Select Date"
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="number"
                          id="inrValue"
                          placeholder="INR Value"
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="number"
                          id="dollorValue"
                          placeholder="Dollor Value"
                        />
                      </td>
                      <td>
                        <button class="btn btn-primary" type="submit">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card bg-white rounded shadow p-4 mt-3">
              <h5 className="pb-3 mb-4 border-bottom">General Information</h5>
              <div className="row">
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="PhysicalState" className="form-label">
                      Physical State (20 deg.C)
                    </label>
                    <select
                      className="form-select form-control"
                      aria-label="Default select example"
                      id="PhysicalState"
                    >
                      <option selected>Solid</option>
                      <option value="1">Liquid</option>
                      <option value="2">Powder</option>
                      <option value="2">Others</option>
                      <option value="2">Others2</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="PackagingandContainer" className="form-label">
                      Packaging and Container
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="PackagingandContainer"
                      placeholder="Packaging and Container"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="CASRN" className="form-label">
                      CAS RN
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="CASRN"
                      placeholder="92-61-5"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="ReaxysRegistryNumber" className="form-label">
                      Reaxys Registry Number
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="ReaxysRegistryNumber"
                      placeholder="Reaxys Registry Number"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="PubChem" className="form-label">
                      PubChem Substance ID
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="PubChem"
                      placeholder="PubChem Substance ID"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="SDBS" className="form-label">
                      SDBS (AIST Spectral DB)
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="SDBS"
                      placeholder="SDBS (AIST Spectral DB)"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="metrix" className="form-label">
                      Merck Index (14)
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="metrix"
                      placeholder="Merck Index (14)"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white rounded shadow p-4 mt-3">
              <h5 className="pb-3 mb-4 border-bottom">
                Specifications & Properties
              </h5>
              <div className="row">
                <div className="col-md-12 my-3">
                  <h6>Specifications</h6>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="PackagingandContainer" className="form-label">
                      Appearance
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="PackagingandContainer"
                      placeholder="Appearance"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="Purity" className="form-label">
                      Purity(HPLC)
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="Purity"
                      placeholder="Purity(HPLC)"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="Neutralization" className="form-label">
                      Purity(Neutralization titration)
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="Neutralization"
                      placeholder="Purity(Neutralization titration)"
                    />
                  </div>
                </div>

                <div className="col-md-12 my-3">
                  <h6>Properties (reference)</h6>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="MeltingPoint" className="form-label">
                      Melting Point
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="MeltingPoint"
                      placeholder="Melting Point"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="Solubility" className="form-label">
                      Solubility in water
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="Solubility"
                      placeholder="Solubility in water"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="Solubility" className="form-label">
                      Solubility (soluble in)
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="Solubility"
                      placeholder="Solubility (soluble in)"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white rounded shadow p-4 mt-3">
              <h5 className="pb-3 mb-4 border-bottom">Safety & Regulations</h5>
              <div className="row">
                <div className="col-md-12 my-3">
                  <h6>GHS</h6>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="SignalWord" className="form-label">
                      Signal Word
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="SignalWord"
                      placeholder="Signal Word"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="HazardStatements" className="form-label">
                      Hazard Statements
                    </label>
                    <div>
                      <TextEditor></TextEditor>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="HazardStatements" className="form-label">
                      Precautionary Statements
                    </label>
                    <div>
                      <TextEditor></TextEditor>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 my-3">
                  <h6>Related Laws:</h6>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="rtecs" className="form-label">
                      RTECS
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="rtecs"
                      placeholder="RTECS#"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white rounded shadow p-4 mt-3">
              <div className="row justify-content-between border-bottom pb-3">
                <div className="col-md-6 align-self-center">
                  <h5>Applications</h5>
                </div>
                <div className="col-md-6 text-end align-self-center">
                  <button class="btn btn-primary" type="submit">
                    <span class="icon-plus"></span>
                  </button>
                </div>
              </div>
              <div className="table mt-2">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" width="40%">
                        Name of Application
                      </th>
                      <th scope="col">Upload File</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Application Name"
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="file"
                          id="productImage"
                          placeholder="Upload File"
                        />
                      </td>
                      <td>
                        <button class="btn btn-primary" type="submit">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Application Name"
                        />
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="file"
                          id="productImage"
                          placeholder="Upload File"
                        />
                      </td>
                      <td>
                        <button class="btn btn-primary" type="submit">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label for="PhysicalState" className="form-label">
                    Available
                  </label>
                  <select
                    className="form-select form-control"
                    aria-label="Default select example"
                    id="PhysicalState"
                  >
                    <option selected>In Stock</option>
                    <option value="1">Out of Stock</option>
                  </select>
                </div>
                <button class="btn btn-primary" type="submit">
                  Save Product
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AdminNewProduct;
