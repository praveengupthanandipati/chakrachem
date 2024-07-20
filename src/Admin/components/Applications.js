import React from 'react';

const Applications = ({ applications, onApplicationsChange }) => {
  const handleDocumentNameChange = (e, index) => {
    const newDocuments = [...applications];
    newDocuments[index].applicationName = e.target.value;
    onApplicationsChange(newDocuments);
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const newDocuments = [...applications];
      newDocuments[index].fileContent = reader.result.split(',')[1]; // Base64 content
      onApplicationsChange(newDocuments);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteDocument = (index) => {
    const newDocuments = [...applications];
    newDocuments.splice(index, 1);
    onApplicationsChange(newDocuments);
  };

  const handleAddDocument = () => {
    onApplicationsChange([...applications, { applicationName: '', fileContent: '' }]);
  };

  return (
    <div className="card bg-white rounded shadow p-4 mt-4">
      <h5 className="pb-3 mb-4 border-bottom">Applications</h5>
      <div className="row mb-3">
        <div className="col-md-5"><strong>Name of the Application</strong></div>
        <div className="col-md-5"><strong>Upload Files</strong></div>
        <div className="col-md-2"><strong>Action</strong></div>
      </div>
      {applications.map((document, index) => (
        <div key={index} className="mb-3">
          <div className="row">
            <div className="col-md-5">
              <input
                className="form-control"
                type="text"
                placeholder="Application Name"
                value={document.applicationName}
                onChange={(e) => handleDocumentNameChange(e, index)}
              />
            </div>
            <div className="col-md-5">
              <input
                className="form-control"
                type="file"
                onChange={(e) => handleFileChange(e, index)}
              />
            </div>
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteDocument(index)}
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
        onClick={handleAddDocument}
      >
        Add Application
      </button>
    </div>
  );
};

export default Applications;
