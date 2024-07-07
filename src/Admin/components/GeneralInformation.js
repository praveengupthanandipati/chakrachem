import React, { useState } from 'react';

const GeneralInformation = ({ generalInfo, onGeneralInfoChange }) => {
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    onGeneralInfoChange({
      ...generalInfo,
      [id]: value,
    });
  };

  const validateForm = (e) => {
    const { id, value } = e.target;
    let errors = {};

    if (!value) {
      errors[`${id}Error`] = `${id.replace(/([A-Z])/g, ' $1')} is required`;
    }

    setFormErrors({
      ...formErrors,
      ...errors,
    });
  };

  return (
    <div className="card bg-white rounded shadow p-4 mt-3">
      <h5 className="pb-3 mb-4 border-bottom">General Information</h5>
      <div className="row">
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="physicalState" className="form-label">
              Physical State (20 deg.C)
            </label>
            <select
              className="form-select form-control"
              aria-label="Default select example"
              id="physicalState"
              value={generalInfo.physicalState}
              onChange={handleInputChange}
              onBlur={validateForm}
            >
              <option value="Solid">Solid</option>
              <option value="Liquid">Liquid</option>
              <option value="Powder">Powder</option>
              <option value="Others">Others</option>
              <option value="Others2">Others2</option>
            </select>
            {formErrors.physicalStateError && (
              <div className="text-danger">
                {formErrors.physicalStateError}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label
              htmlFor="packagingContainer"
              className="form-label"
            >
              Packaging and Container
            </label>
            <input
              className="form-control"
              type="text"
              id="packagingContainer"
              placeholder="Packaging and Container"
              value={generalInfo.packagingContainer}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.packagingContainerError && (
              <div className="text-danger">
                {formErrors.packagingContainerError}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="casRn" className="form-label">
              CAS RN
            </label>
            <input
              className="form-control"
              type="text"
              id="casRn"
              placeholder="CAS RN"
              value={generalInfo.casRn}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.casRnError && (
              <div className="text-danger">
                {formErrors.casRnError}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label
              htmlFor="pubchemId"
              className="form-label"
            >
              PubChem Substance ID
            </label>
            <input
              className="form-control"
              type="text"
              id="pubchemId"
              placeholder="PubChem Substance ID"
              value={generalInfo.pubchemId}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.pubchemIdError && (
              <div className="text-danger">
                {formErrors.pubchemIdError}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="sdbsId" className="form-label">
              SDBS (AIST Spectral DB)
            </label>
            <input
              className="form-control"
              type="text"
              id="sdbsId"
              placeholder="SDBS (AIST Spectral DB)"
              value={generalInfo.sdbsId}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.sdbsIdError && (
              <div className="text-danger">
                {formErrors.sdbsIdError}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="merckIndex" className="form-label">
              Merck Index (14)
            </label>
            <input
              className="form-control"
              type="text"
              id="merckIndex"
              placeholder="Merck Index (14)"
              value={generalInfo.merckIndex}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.merckIndexError && (
              <div className="text-danger">
                {formErrors.merckIndexError}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="reaxysNumber" className="form-label">
              Reaxys Registry Number
            </label>
            <input
              className="form-control"
              type="text"
              id="reaxysNumber"
              placeholder="Reaxys Registry Number"
              value={generalInfo.reaxysNumber}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.reaxysNumberError && (
              <div className="text-danger">
                {formErrors.reaxysNumberError}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
