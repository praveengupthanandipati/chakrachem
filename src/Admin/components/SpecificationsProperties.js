import React, { useState } from 'react';

const SpecificationsProperties = ({ specifications, onSpecificationsChange }) => {
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;

    if (id === 'appearance' && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onSpecificationsChange({
          ...specifications,
          specificationImage: reader.result, // Base64 image string
        });
      };
      reader.readAsDataURL(files[0]);
    } else {
      onSpecificationsChange({
        ...specifications,
        [id]: value,
      });
    }
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
      <h5 className="pb-3 mb-4 border-bottom">Specifications & Properties</h5>
      <div className="row">
        <div className="col-md-12 my-3">
          <h6>Specifications</h6>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="appearance" className="form-label">
              Appearance (Image)
            </label>
            <input
              className="form-control"
              type="file"
              id="appearance"
              accept="image/*"
              onChange={handleInputChange}
            />
            {formErrors.appearanceError && (
              <div className="text-danger">{formErrors.appearanceError}</div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="purityHPLC" className="form-label">
              Purity (HPLC)
            </label>
            <input
              className="form-control"
              type="text"
              id="purityHPLC"
              placeholder="Purity (HPLC)"
              value={specifications.purityHPLC}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.purityHPLCError && (
              <div className="text-danger">{formErrors.purityHPLCError}</div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="purityNeutralization" className="form-label">
              Purity (Neutralization titration)
            </label>
            <input
              className="form-control"
              type="text"
              id="purityNeutralization"
              placeholder="Purity (Neutralization titration)"
              value={specifications.purityNeutralization}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.purityNeutralizationError && (
              <div className="text-danger">
                {formErrors.purityNeutralizationError}
              </div>
            )}
          </div>
        </div>

        <div className="col-md-12 my-3">
          <h6>Properties (reference)</h6>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="meltingPoint" className="form-label">
              Melting Point
            </label>
            <input
              className="form-control"
              type="text"
              id="meltingPoint"
              placeholder="Melting Point"
              value={specifications.meltingPoint}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.meltingPointError && (
              <div className="text-danger">{formErrors.meltingPointError}</div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="solubilityInWater" className="form-label">
              Solubility in water
            </label>
            <input
              className="form-control"
              type="text"
              id="solubilityInWater"
              placeholder="Solubility in water"
              value={specifications.solubilityInWater}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.solubilityInWaterError && (
              <div className="text-danger">
                {formErrors.solubilityInWaterError}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="solubilityIn" className="form-label">
              Solubility (soluble in)
            </label>
            <input
              className="form-control"
              type="text"
              id="solubilityIn"
              placeholder="Solubility (soluble in)"
              value={specifications.solubilityIn}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.solubilityInError && (
              <div className="text-danger">{formErrors.solubilityInError}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificationsProperties;
