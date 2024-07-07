import React from 'react';

const Documents = ({ documents, onDocumentsChange }) => {
  const handleDocumentNameChange = (e, index) => {
    const newDocuments = [...documents];
    newDocuments[index].documentName = e.target.value;
    onDocumentsChange(newDocuments);
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const newDocuments = [...documents];
      newDocuments[index].fileContent = reader.result.split(',')[1]; // Base64 content
      onDocumentsChange(newDocuments);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteDocument = (index) => {
    const newDocuments = [...documents];
    newDocuments.splice(index, 1);
    onDocumentsChange(newDocuments);
  };

  const handleAddDocument = () => {
    onDocumentsChange([...documents, { documentName: '', fileContent: '' }]);
  };

  return (
    <div className="card bg-white rounded shadow p-4 mt-4">
      <h5 className="pb-3 mb-4 border-bottom">Documents</h5>
      <div className="row mb-3">
        <div className="col-md-5"><strong>Name of the Document</strong></div>
        <div className="col-md-5"><strong>Upload Files</strong></div>
        <div className="col-md-2"><strong>Action</strong></div>
      </div>
      {documents.map((document, index) => (
        <div key={index} className="mb-3">
          <div className="row">
            <div className="col-md-5">
              <input
                className="form-control"
                type="text"
                placeholder="Document Name"
                value={document.documentName}
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
        Add Document
      </button>
    </div>
  );
};

export default Documents;
