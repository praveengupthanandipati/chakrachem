import React, { useState } from "react";
import BasicDetails from "../components/BasicDetails";
import Documents from "../components/Documents";
import SKUs from "../components/SKUs";
import GeneralInformation from "../components/GeneralInformation";
import SpecificationsProperties from "../components/SpecificationsProperties";
import SafetyRegulations from "../components/SafetyRegulations";
import Applications from "../components/Applications";

const AdminNewProduct = () => {
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
    appearance: '',
    purityHplc: '',
    purityTitration: '',
    meltingPoint: '',
    solubilityWater: '',
    solubilityOther: '',
  });

  const [safetyData, setSafetyData] = useState({
    ghsSignalWord: '',
    hazardStatements: '',
    precautionaryStatements: '',
    rtecs: '',
  });



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
      image: basicDetails.productImage, // Should be base64 string
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
        specificationImage: specifications.specificationImage,
        purityHplc: specifications.purityHplc,
        purityTitration: specifications.purityTitration,
        meltingPoint: specifications.meltingPoint,
        solubilityWater: specifications.solubilityWater,
        solubilityOther: specifications.solubilityOther,
      },
      safetyRegulation: {
        ghsSignalWord: safetyData.ghsSignalWord,
        hazardStatements: safetyData.hazardStatements,
        precautionaryStatements: safetyData.precautionaryStatements,
        rtecs: safetyData.rtecs,
      },
      // applications: applications.map(app => ({
      //   applicationName: app.applicationName,
      //   filePath: app.filePath,
      //   availability: app.availability,
      // })),
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
              {/* <Applications applications={applications} onApplicationsChange={handleApplicationsChange} /> */}

              {/* Submit Button */}
              <button type="submit" className="btn btn-success mt-4">
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AdminNewProduct;
