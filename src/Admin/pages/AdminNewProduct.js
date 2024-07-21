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
    packagingContainer: null,
    casRn: "",
    reaxysNumber: "",
    pubchemId: "",
    sdbsId: "",
    merckIndex: "",
  });
  const [specifications, setSpecifications] = useState({
    image: null,
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
          availability:product.availability
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

    // Check for validation
    const allValid = Object.values(validationMessages).every(Boolean);
    if (!allValid) {
      setSuccessMessage("Please fill in all required fields.");
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        setSuccessMessage("");
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
        packSizeValue:sku.packSizeValue,
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
        image: specifications.image,
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

  const handleValidationChange = (section, isValid) => {
    setValidationMessages((prevMessages) => ({
      ...prevMessages,
      [section]: isValid,
    }));
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
                onValidationChange={(isValid) =>
                  handleValidationChange("basicDetails", isValid)
                }
              />

              {/* Documents Section */}
              <Documents
                documents={documents}
                onDocumentsChange={handleDocumentsChange}
                onValidationChange={(isValid) =>
                  handleValidationChange("documents", isValid)
                }
              />

              {/* SKUs Section */}
              <SKUs
                skus={skus}
                onSkusChange={handleSkusChange}
                onValidationChange={(isValid) =>
                  handleValidationChange("skus", isValid)
                }
              />

              {/* General Information Section */}
              <GeneralInformation
                generalInfo={generalInfo}
                onGeneralInfoChange={handleGeneralInfoChange}
                onValidationChange={(isValid) =>
                  handleValidationChange("generalInfo", isValid)
                }
              />

              {/* Specifications & Properties Section */}
              <SpecificationsProperties
                specifications={specifications}
                onSpecificationsChange={handleSpecificationsChange}
                onValidationChange={(isValid) =>
                  handleValidationChange("specifications", isValid)
                }
              />

              {/* Safety & Regulations Section */}
              <SafetyRegulations
                safetyData={safetyData}
                onSafetyDataChange={handleSafetyDataChange}
                onValidationChange={(isValid) =>
                  handleValidationChange("safetyData", isValid)
                }
              />

              {/* Applications Section */}
              <Applications
                applications={applications}
                onApplicationsChange={handleApplicationsChange}
                onValidationChange={(isValid) =>
                  handleValidationChange("applications", isValid)
                }
              />

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
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AdminNewProduct;
