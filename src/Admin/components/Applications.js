import React, { useState } from 'react';

const Applications = ({ applications, onApplicationsChange }) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const handleApplicationNameChange = (e, index) => {
    const newApplications = [...applications];
    newApplications[index].applicationName = e.target.value;
    onApplicationsChange(newApplications);
    validateForm(newApplications);
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Only PDF files are allowed.');
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const newApplications = [...applications];
        const base64 = reader.result.split(',')[1]; // Base64 content
        const fileName = file.name; // Extract file name
        newApplications[index] = {
          ...newApplications[index],
          fileContent: base64,
          fileType: file.type,
          fileName: fileName,
        };
        onApplicationsChange(newApplications);
        validateForm(newApplications);
      };

      reader.readAsDataURL(file); // Read as Data URL to get Base64 encoding
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
    // Decode base64 and create a Blob
    const binaryString = window.atob(fileContent);
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: fileType });
    
    // Create a temporary link and trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName || 'file.pdf'; // Default to 'file.pdf' if no name provided
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
              {application.fileContent && (
                <div>
                  <span>{application.fileName}</span>
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => downloadFile(application.fileContent, application.fileName, application.fileType)}
                  >
                    Download
                  </button>
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
