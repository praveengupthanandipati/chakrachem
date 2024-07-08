import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BasicDetails from "../components/BasicDetails";
import Documents from "../components/Documents";
import SKUs from "../components/SKUs";
import GeneralInformation from "../components/GeneralInformation";
import SpecificationsProperties from "../components/SpecificationsProperties";
import SafetyRegulations from "../components/SafetyRegulations";
import Applications from "../components/Applications";

const AdminNewProduct = () => {
  const { id } = useParams();

  const [basicDetails, setBasicDetails] = useState({
    productImage: null,
    productId: "",
    productName: "",
    productPurity: "",
    casNumber: "",
    molecularWeight: "",
    empiricalFormula: "",
    ecNumber: "",
    mdlNumber: "",
    category: "",
    subCategory: "",
    productDescription: "",
  });

  const [documents, setDocuments] = useState([]);
  const [skus, setSkus] = useState([]);
  const [generalInfo, setGeneralInfo] = useState({
    physicalState: '',
    packagingContainer: null,
    casRn: '',
    reaxysNumber: '',
    pubchemId: '',
    sdbsId: '',
    merckIndex: '',
  });
  const [specifications, setSpecifications] = useState({
    image: null,
    purityHPLC: '',
    purityNeutralization: '',
    meltingPoint: '',
    solubilityInWater: '',
    solubilityIn: '',
  });

  const [safetyData, setSafetyData] = useState({
    ghsSignalWord: '',
    hazardStatements: '',
    precautionaryStatements: '',
    rtecs: '',
  });

  const [applications, setApplications] = useState([]);
  const [availability, setAvailability] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch product details by ID
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/products/16`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const product = await response.json();

        // Update state with fetched product details
        setBasicDetails({
          productImage: product.image,
          productId: product.productId,
          productName: product.productName,
          productPurity: product.purity,
          casNumber: product.casNumber,
          molecularWeight: product.molecularWeight,
          empiricalFormula: product.empiricalFormula,
          ecNumber: product.ecNumber,
          mdlNumber: product.mdlNumber,
          category: product.category,
          subCategory: product.subCategory,
          productDescription: product.startDescription,
        });
        setDocuments(product.documents);
        setSkus(product.skus);
        setGeneralInfo(product.generalInformation);
        setSpecifications(product.specification);
        setSafetyData(product.safetyRegulation);
        setApplications(product.applications);
        setAvailability(product.availability);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleApplicationsChange = (newApplications) => {
    setApplications(newApplications);
  };

  const handleDocumentsChange = (newDocuments) => {
    setDocuments(newDocuments);
  };

  const handleBasicDetailsChange = (newDetails) => {
    setBasicDetails(newDetails);
  };

  const handleSkusChange = (newSkus) => {
    setSkus(newSkus);
  };

  const handleGeneralInfoChange = (newGeneralInfo) => {
    setGeneralInfo(newGeneralInfo);
  };

  const handleSpecificationsChange = (newSpecifications) => {
    setSpecifications(newSpecifications);
  };

  const handleSafetyDataChange = (newSafetyData) => {
    setSafetyData(newSafetyData);
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      productId: basicDetails.productId,
      productName: basicDetails.productName,
      purity: basicDetails.productPurity,
      startDescription: basicDetails.productDescription,
      casNumber: basicDetails.casNumber,
      molecularWeight: basicDetails.molecularWeight,
      empiricalFormula: basicDetails.empiricalFormula,
      ecNumber: basicDetails.ecNumber,
      mdlNumber: basicDetails.mdlNumber,
      category: basicDetails.category,
      subCategory: basicDetails.subCategory,
      image: basicDetails.productImage,
      availability: availability,
      documents: documents.map(doc => ({
        documentName: doc.documentName,
        fileContent: doc.fileContent, // Base64 content
      })),
      skus: skus.map(sku => ({
        skuName: sku.skuName,
        packSize: sku.packSize,
        availableDate: sku.availableDate,
        priceInr: sku.priceInr,
        priceUsd: sku.priceUsd,
      })),
      generalInformation: {
        physicalState: generalInfo.physicalState,
        packagingContainer: generalInfo.packagingContainer,
        casRn: generalInfo.casRn,
        pubchemId: generalInfo.pubchemId,
        sdbsId: generalInfo.sdbsId,
        merckIndex: generalInfo.merckIndex,
        reaxysNumber: generalInfo.reaxysNumber,
      },
      specification: {
        image: specifications.image,
        purityHplc: specifications.purityHPLC,
        purityTitration: specifications.purityNeutralization,
        meltingPoint: specifications.meltingPoint,
        solubilityWater: specifications.solubilityInWater,
        solubilityOther: specifications.solubilityIn,
      },
      safetyRegulation: {
        ghsSignalWord: safetyData.ghsSignalWord,
        hazardStatements: safetyData.hazardStatements,
        precautionaryStatements: safetyData.precautionaryStatements,
        rtecs: safetyData.rtecs,
      },
      applications: applications.map(app => ({
        applicationName: app.applicationName,
        fileContent: app.fileContent,
      })),
    };

    console.log(formData, 'formData');
    try {
      const response = await fetch("http://localhost:8080/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const responseData = await response.json();
      console.log("Form submitted successfully:", responseData);
      setSuccessMessage("Product Created Successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="admin-main">
      <div className="admin-container">
        <div className="container-fluid">
          <h1 className="h4 font-semibold pagetitle">Create New Product</h1>
          <section className="admin-main-inner">
            <form onSubmit={handleSubmit}>
              {/* Basic Details Section */}
              <BasicDetails
                basicDetails={basicDetails}
                onBasicDetailsChange={handleBasicDetailsChange}
              />

              {/* Documents Section */}
              <Documents documents={documents} onDocumentsChange={handleDocumentsChange} />

              {/* SKUs Section */}
              <SKUs skus={skus} onSkusChange={handleSkusChange} />

              {/* General Information Section */}
              <GeneralInformation generalInfo={generalInfo} onGeneralInfoChange={handleGeneralInfoChange} />

              {/* Specifications & Properties Section */}
              <SpecificationsProperties specifications={specifications} onSpecificationsChange={handleSpecificationsChange} />

              {/* Safety & Regulations Section */}
              <SafetyRegulations safetyData={safetyData} onSafetyDataChange={handleSafetyDataChange} />

              {/* Applications Section */}
              <Applications applications={applications} onApplicationsChange={handleApplicationsChange} />

              <div className="card bg-white rounded shadow p-4 mt-4">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label htmlFor="availability" className="form-label">
                      Availability
                    </label>
                    <select
                      className="form-select form-control"
                      aria-label="Default select example"
                      id="availability"
                      value={availability}
                      onChange={handleAvailabilityChange}
                    >
                      <option value="In Stock">In Stock</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-success mt-4">
                Submit
              </button>
              {successMessage && (
                <div className="alert alert-success mt-4">
                  {successMessage}
                </div>
              )}
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AdminNewProduct;
