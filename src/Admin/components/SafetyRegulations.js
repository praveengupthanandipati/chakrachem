import React, { useState } from 'react';
import TextEditor from './TextEditor';

const SafetyRegulations = ({ safetyData, onSafetyDataChange }) => {
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    onSafetyDataChange({
      ...safetyData,
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
      <h5 className="pb-3 mb-4 border-bottom">Safety & Regulations</h5>
      <div className="row">
        <div className="col-md-12 my-3">
          <h6>GHS</h6>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label htmlFor="signalWord" className="form-label">
              Signal Word
            </label>
            <input
              className="form-control"
              type="text"
              id="ghsSignalWord"
              placeholder="Signal Word"
              value={safetyData.ghsSignalWord}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.signalWordError && (
              <div className="text-danger">{formErrors.signalWordError}</div>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label htmlFor="hazardStatements" className="form-label">
              Hazard Statements
            </label>
            {/* Assuming TextEditor is a custom component for rich text editing */}
            <TextEditor
              value={safetyData.hazardStatements}
              onChange={(value) =>
                onSafetyDataChange({
                  ...safetyData,
                  hazardStatements: value,
                })
              }
            />
            {formErrors.hazardStatementsError && (
              <div className="text-danger">{formErrors.hazardStatementsError}</div>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label htmlFor="precautionaryStatements" className="form-label">
              Precautionary Statements
            </label>
            {/* Assuming TextEditor is a custom component for rich text editing */}
            <TextEditor
              value={safetyData.precautionaryStatements}
              onChange={(value) =>
                onSafetyDataChange({
                  ...safetyData,
                  precautionaryStatements: value,
                })
              }
            />
            {formErrors.precautionaryStatementsError && (
              <div className="text-danger">
                {formErrors.precautionaryStatementsError}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-12 my-3">
          <h6>Related Laws:</h6>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label htmlFor="rtecs" className="form-label">
              RTECS#
            </label>
            <input
              className="form-control"
              type="text"
              id="rtecs"
              placeholder="RTECS#"
              value={safetyData.rtecs}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {formErrors.rtecsError && (
              <div className="text-danger">{formErrors.rtecsError}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyRegulations;
