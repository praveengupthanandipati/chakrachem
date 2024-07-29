import React, { useState } from 'react';

const Documents = ({ documents, onDocumentsChange }) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const handleDocumentNameChange = (e, index) => {
    const newDocuments = [...documents];
    newDocuments[index].documentName = e.target.value;
    onDocumentsChange(newDocuments);
    validateForm(newDocuments);
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
        const newDocuments = [...documents];
        newDocuments[index] = {
          ...newDocuments[index],
          fileContent: base64,
          fileType: file.type,
          fileName: file.name,
        };
        onDocumentsChange(newDocuments);
        validateForm(newDocuments);
      } catch (error) {
        console.error('Error converting file to base64:', error);
      }
    }
  };

  const handleDeleteDocument = (index) => {
    const newDocuments = [...documents];
    newDocuments.splice(index, 1);
    onDocumentsChange(newDocuments);
    validateForm(newDocuments);
  };

  const handleAddDocument = () => {
    if (isFormValid) {
      onDocumentsChange([...documents, { documentName: '', fileContent: '', fileType: '', fileName: '' }]);
    }
  };

  const validateForm = (documents) => {
    const isValid = documents.every(doc => doc.documentName || doc.fileContent);
    setIsFormValid(isValid);
  };

  const downloadDocument = (fileContent, documentName, fileType) => {
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
    link.download = (documentName || 'document') + (mimeType === 'application/pdf' ? '.pdf' : '');
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link); // Clean up
    URL.revokeObjectURL(link.href); // Clean up
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
              {document.fileName && (
                <div>
                  <small className="text-muted">{document.fileName}</small>
                </div>
              )}
              {!document.documentName && document.fileContent && (
                <div>
                  <span>Name of the Document</span>
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => downloadDocument(document.fileContent, 'document', document.fileType)}
                  >
                    Download
                  </button>
                </div>
              )}

              {document.documentName && (
                <div>
                  <span>{document.documentName}</span>
                  {document.fileContent && (
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={() => downloadDocument(document.fileContent, document.documentName, document.fileType)}
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
        disabled={!isFormValid}
      >
        Add Document
      </button>
      {!isFormValid && (
        <div className="text-danger mt-2">Please provide document names or upload files before adding new documents.</div>
      )}
    </div>
  );
};

export default Documents;