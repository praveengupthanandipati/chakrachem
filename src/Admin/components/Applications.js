
import React, { useState } from 'react';

const Applications = ({ applications, onApplicationsChange }) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const handleApplicationNameChange = (e, index) => {
    const newApplications = [...applications];
    newApplications[index].applicationName = e.target.value;
    onApplicationsChange(newApplications);
    validateForm(newApplications);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve(reader.result.split(',')[1]); // Return base64 without data URL prefix
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileChange = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Only PDF files are allowed.');
        return;
      }
      try {
        const base64 = await getBase64(file);
        const newApplications = [...applications];
        newApplications[index] = {
          ...newApplications[index],
          fileContent: base64,
          fileType: file.type,
          fileName: file.name,
        };
        onApplicationsChange(newApplications);
        validateForm(newApplications);
      } catch (error) {
        console.error('Error converting file to base64:', error);
      }
    }
  };

  const handleDeleteApplication = (index) => {
    const newApplications = [...applications];
    newApplications.splice(index, 1);
    onApplicationsChange(newApplications);
    validateForm(newApplications);
  };

  const handleAddApplication = () => {
    if (isFormValid) {
      onApplicationsChange([...applications, { applicationName: '', fileContent: '', fileType: '', fileName: '' }]);
    }
  };

  const validateForm = (applications) => {
    const isValid = applications.every(app => app.applicationName || app.fileContent);
    setIsFormValid(isValid);
  };

  const downloadFile = (fileContent, fileName, fileType) => {
    // Ensure the file type is PDF
    const mimeType = fileType || 'application/pdf';

    // Decode base64 and create a Blob
    const binaryString = window.atob(fileContent);
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: mimeType });

    // Create a temporary link and trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = (fileName || 'application') + (mimeType === 'application/pdf' ? '.pdf' : '');
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link); // Clean up
    URL.revokeObjectURL(link.href); // Clean up
  };

  return (
    <div className="card bg-white rounded shadow p-4 mt-4">
      <h5 className="pb-3 mb-4 border-bottom">Applications</h5>
      <div className="row mb-3">
        <div className="col-md-5"><strong>Name of the Application</strong></div>
        <div className="col-md-5"><strong>Upload Files</strong></div>
        <div className="col-md-2"><strong>Action</strong></div>
      </div>
      {applications.map((application, index) => (
        <div key={index} className="mb-3">
          <div className="row">
            <div className="col-md-5">
              <input
                className="form-control"
                type="text"
                placeholder="Application Name"
                value={application.applicationName}
                onChange={(e) => handleApplicationNameChange(e, index)}
              />
            </div>
            <div className="col-md-5">
              <input
                className="form-control"
                type="file"
                onChange={(e) => handleFileChange(e, index)}
              />
              {application.fileName && (
                <div>
                  <small className="text-muted">{application.fileName}</small>
                </div>
              )}
              {!application.applicationName && application.fileContent && (
                <div>
                  <span>Name of the Application</span>
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => downloadFile(application.fileContent, 'application', application.fileType)}
                  >
                    Download
                  </button>
                </div>
              )}

              {application.applicationName && (
                <div>
                  <span>{application.applicationName}</span>
                  {application.fileContent && (
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={() => downloadFile(application.fileContent, application.applicationName, application.fileType)}
                    >
                      Download
                    </button>
                  )}
                </div>
              )}
            </div>
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteApplication(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddApplication}
        disabled={!isFormValid}
      >
        Add Application
      </button>
      {!isFormValid && (
        <div className="text-danger mt-2">Please provide application names or upload files before adding new applications.</div>
      )}
    </div>
  );
};

export default Applications;