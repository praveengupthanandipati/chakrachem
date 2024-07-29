import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BasicDetails from "../components/BasicDetails";
import Documents from "../components/Documents";
import SKUs from "../components/SKUs";
import GeneralInformation from "../components/GeneralInformation";
import SpecificationsProperties from "../components/SpecificationsProperties";
import SafetyRegulations from "../components/SafetyRegulations";
import Applications from "../components/Applications";

const AdminNewProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [basicDetails, setBasicDetails] = useState({
    productImage: null,
    imageName: "",
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
    physicalState: "",
    packagingContainer: "",
    casRn: "",
    reaxysNumber: "",
    pubchemId: "",
    sdbsId: "",
    merckIndex: "",
  });
  const [specifications, setSpecifications] = useState({
    appearance:"",
    purityHPLC: "",
    purityNeutralization: "",
    meltingPoint: "",
    solubilityInWater: "",
    solubilityIn: "",
  });

  const [safetyData, setSafetyData] = useState({
    ghsSignalWord: "",
    hazardStatements: "",
    precautionaryStatements: "",
    rtecs: "",
  });

  const [applications, setApplications] = useState([]);
  const [availability, setAvailability] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [validationMessages, setValidationMessages] = useState({
    basicDetails: true,
    documents: true,
    skus: true,
    generalInfo: true,
    specifications: true,
    safetyData: true,
    applications: true,
  });

  // Fetch product details by ID if it exists
  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!id) return; // Do not fetch if there's no ID

      try {
        const response = await fetch(
          `http://localhost:8080/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const product = await response.json();

        // Update state with fetched product details
        setBasicDetails({
          productImage: product.image,
          imageName: product.imageName,
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
    console.log(newSkus,"skus");

    setSkus(newSkus);
  };

  const handleGeneralInfoChange = (newGeneralInfo) => {
    setGeneralInfo(newGeneralInfo);
  };

  const handleSpecificationsChange = (newSpecifications) => {
    console.log(newSpecifications,"newSpecifications");
    setSpecifications(newSpecifications);
  };

  const handleSafetyDataChange = (newSafetyData) => {
    setSafetyData(newSafetyData);
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.value);
  };

  const validateFields = () => {
    let isValid = true;
    const newValidationMessages = {};

    // Basic Details validation
    if (
      !basicDetails.productId ||
      !basicDetails.productName ||
      !basicDetails.productPurity ||
      !basicDetails.casNumber ||
      !basicDetails.category ||
      !basicDetails.subCategory ||
      !basicDetails.productDescription
    ) {
      newValidationMessages.basicDetails =
        "Please fill in all required basic details.";
      isValid = false;
    }

    // General Information validation
    if (
      !generalInfo.physicalState ||
      !generalInfo.packagingContainer ||
      !generalInfo.casRn ||
      !generalInfo.pubchemId
    ) {
      newValidationMessages.generalInfo =
        "Please fill in all required general information.";
      isValid = false;
    }

    // SKU validation
    if (skus.length > 0) {
      skus.forEach((sku) => {
        if (
          !sku.skuName ||
          !sku.packSize ||
          !sku.availableDate ||
          !sku.packSizeValue ||
          !sku.priceInr ||
          !sku.priceUsd
        ) {
          newValidationMessages.skus =
            "Please fill in all required SKU details.";
          isValid = false;
        }
      });
    }

    // Documents validation
    if (documents.length > 0) {
      documents.forEach((doc) => {
        if (
          !doc.documentName ||
         
          !doc.fileContent
        ) {
          newValidationMessages.documents =
            "Please fill in all required document details.";
          isValid = false;
        }
      });
    }

    // Applications validation
    if (applications.length > 0) {
      applications.forEach((app) => {
        if (!app.applicationName || !app.fileContent) {
          newValidationMessages.applications =
            "Please fill in all required application details.";
          isValid = false;
        }
      });
    }

    setValidationMessages(newValidationMessages);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      setErrorMessage("Please fill in all required fields.");
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
        setErrorMessage("");
      }, 2000);
      return;
    }


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
      documents: documents.map((doc) => ({
        id: doc.id,
        documentName: doc.documentName,
        fileType: doc.fileType,
        fileName: doc.fileName,
        fileContent: doc.fileContent, // Base64 content
      })),
      skus: skus.map((sku) => ({
        id: sku.id,
        skuName: sku.skuName,
        packSize: sku.packSize,
        availableDate: sku.availableDate,
        packSizeValue: sku.packSizeValue,
        priceInr: sku.priceInr,
        priceUsd: sku.priceUsd,
      })),
      generalInformation: {
        id: generalInfo.id,
        physicalState: generalInfo.physicalState,
        packagingContainer: generalInfo.packagingContainer,
        casRn: generalInfo.casRn,
        pubchemId: generalInfo.pubchemId,
        sdbsId: generalInfo.sdbsId,
        merckIndex: generalInfo.merckIndex,
        reaxysNumber: generalInfo.reaxysNumber,
      },
      specification: {
        id: specifications.id,
        appearance: specifications.appearance,
        purityHplc: specifications.purityHPLC,
        purityTitration: specifications.purityNeutralization,
        meltingPoint: specifications.meltingPoint,
        solubilityWater: specifications.solubilityInWater,
        solubilityOther: specifications.solubilityIn,
      },
      safetyRegulation: {
        id: safetyData.id,
        ghsSignalWord: safetyData.ghsSignalWord,
        hazardStatements: safetyData.hazardStatements,
        precautionaryStatements: safetyData.precautionaryStatements,
        rtecs: safetyData.rtecs,
      },
      applications: applications.map((app) => ({
        id: app.id,
        applicationName: app.applicationName,
        fileContent: app.fileContent,
      })),
    };

    try {
      let response;
      if (id) {
        // Update existing product
        response = await fetch(`http://localhost:8080/api/products/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log(JSON.stringify(formData),"JSON.stringify(formData)");
      } else {
        // Create new product
        response = await fetch("http://localhost:8080/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const responseData = await response.json();
      console.log("Form submitted successfully:", responseData);
      setSuccessMessage(
        id ? "Product Updated Successfully" : "Product Created Successfully"
      );
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
        setSuccessMessage("");
        navigate("/Admin/Products"); // Redirect to product listing page after 2 seconds
      }, 2000); // Hide success message after 2 seconds and redirect
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
              {validationMessages.basicDetails && (
                <div style={{ color: "red" }}>
                  {validationMessages.basicDetails}
                </div>
              )}

              {/* Documents Section */}
              <Documents
                documents={documents}
                onDocumentsChange={handleDocumentsChange}
              />
              {validationMessages.documents && (
                <div style={{ color: "red" }}>
                  {validationMessages.documents}
                </div>
              )}

              {/* SKUs Section */}
              <SKUs skus={skus} onSkusChange={handleSkusChange} />
              {validationMessages.skus && (
                <div style={{ color: "red" }}>{validationMessages.skus}</div>
              )}

              {/* General Information Section */}
              <GeneralInformation
                generalInfo={generalInfo}
                onGeneralInfoChange={handleGeneralInfoChange}
              />
              {validationMessages.generalInfo && (
                <div style={{ color: "red" }}>
                  {validationMessages.generalInfo}
                </div>
              )}

              {/* Specifications & Properties Section */}
              <SpecificationsProperties
                specifications={specifications}
                onSpecificationsChange={handleSpecificationsChange}
              />

              {/* Safety & Regulations Section */}
              <SafetyRegulations
                safetyData={safetyData}
                onSafetyDataChange={handleSafetyDataChange}
              />

              {/* Applications Section */}
              <Applications
                applications={applications}
                onApplicationsChange={handleApplicationsChange}
              />
              {validationMessages.applications && (
                <div style={{ color: "red" }}>
                  {validationMessages.applications}
                </div>
              )}

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
                      value={basicDetails.availability}
                      onChange={handleAvailabilityChange}
                    >
                      <option value="In Stock">In Stock</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-success mt-4">
                Submit
              </button>
              {showSuccessMessage && (
                <div
                  className="alert alert-success mt-4 text-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1000,
                    width: "fit-content",
                    padding: "1em",
                    color: "#fff",
                    backgroundColor: "bg-dummy", // Your desired background color
                    borderRadius: "10px",
                  }}
                >
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div
                  className="alert alert-danger mt-4 text-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1000,
                    width: "fit-content",
                    padding: "1em",
                    color: "#fff",
                    backgroundColor: "bg-red", // Your desired background color
                    borderRadius: "10px",
                  }}
                >
                  {errorMessage}
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
