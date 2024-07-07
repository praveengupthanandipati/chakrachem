import React from 'react';

const Applications = ({ applications, onApplicationsChange }) => {
  const handleApplicationNameChange = (e, index) => {
    const newApplications = [...applications];
    newApplications[index].applicationName = e.target.value;
    onApplicationsChange(newApplications);
  };

  const handleApplicationFileChange = (e, index) => {
    const newApplications = [...applications];
    newApplications[index].file = e.target.files[0];
    onApplicationsChange(newApplications);
  };

  const handleDeleteApplication = (index) => {
    const newApplications = [...applications];
    newApplications.splice(index, 1);
    onApplicationsChange(newApplications);
  };

  const handleAddApplication = () => {
    onApplicationsChange([...applications, { applicationName: '', file: null, availability: false }]);
  };

  return (
    <div className="card bg-white rounded shadow p-4 mt-4">
      <h5 className="pb-3 mb-4 border-bottom">Applications</h5>
      <div className="row mb-3">
        <div className="col-md-7"><strong>Name of the Application</strong></div>
        <div className="col-md-3"><strong>Upload File</strong></div>
        <div className="col-md-2"><strong>Action</strong></div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            {applications.map((application, index) => (
              <tr key={index}>
                <td className="col-md-7">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Application Name"
                    value={application.applicationName}
                    onChange={(e) => handleApplicationNameChange(e, index)}
                  />
                </td>
                <td className="col-md-3">
                  <input
                    className="form-control"
                    type="file"
                    onChange={(e) => handleApplicationFileChange(e, index)}
                  />
                </td>
                <td className="col-md-2">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteApplication(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddApplication}
      >
        Add Application
      </button>
    </div>
  );
};

export default Applications;
