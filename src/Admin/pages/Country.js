import React from "react";
import { NavLink } from "react-router-dom";

const Country = () => {
  let PageTitle = "Countries";
  const AdminCurrency = [
    {
      ID: 1,
      Name: "India",
      Code: "IN",
      Currency: "₹",
      Symbol: "₹",
      Status: "Active",
    },
    {
      ID: 2,
      Name: "USA",
      Code: "US",
      Currency: "$",
      Symbol: "$",
      Status: "Active",
    },
  ];
  return (
    <section className="admin-main">
      <div className="admin-container">
        <div className="container-fluid">
          <h1 className="h4 font-semibold pagetitle">{PageTitle}</h1>
          <section className="admin-main-inner">
            <div className="row">
              <div className="col-md-8">
                <div className="card bg-white rounded shadow p-4">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="table-dark">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Code</th>
                          <th scope="col">Currency</th>
                          <th scope="col">Symbol</th>
                          <th scope="col">Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AdminCurrency.map((item) => (
                          <tr key={item.ID}>
                            <td scope="row">{item.ID}</td>
                            <td>{item.Name}</td>
                            <td>{item.Code}</td>
                            <td>{item.Currency}</td>
                            <td>{item.Symbol}</td>
                            <td>{item.Status}</td>
                            <td>
                              <NavLink
                                to=""
                                className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                              >
                                Edit
                              </NavLink>
                              <span className="d-inline-block px-3">|</span>
                              <NavLink
                                to=""
                                className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                              >
                                Delete
                              </NavLink>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-white rounded shadow p-4">
                  <h5 className="h6 pb-4">Add New Currency</h5>

                  <form className="form">                  
                    <div class="mb-3">
                      <label for="currname" className="form-label">
                        Currency Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="currname"
                        placeholder="Currency Name"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="curcode" className="form-label">
                        Currency Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="curcode"
                        placeholder="Currency Code"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="currency" className="form-label">
                        Currency
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="currency"
                        placeholder="Currency"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="currencysym" className="form-label">
                        Currency Symbol
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="currencysym"
                        placeholder="Currency Symbol"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="status" className="form-label">
                        Status
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        id="status"
                      >
                        <option selected>Active</option>
                        <option value="1">Inactive</option>
                      </select>
                    </div>
                    <button className="blue-btn border-0 w-100">Save</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Country;
