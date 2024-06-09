import React from "react";
import LoginFigure from "../assets/img/admin-left-img.jpg";
import { NavLink } from "react-router-dom";

const login = () => {
  return (
    <section className="login-admin">
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-md-4 login-left">
            <img src={LoginFigure} alt="" className="img-fluid" />
          </div>
          <div className="col-md-8 align-self-center">
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-6">
                <div className="login-section mx-auto">
                  <div className="login-inner p-5 bg-white shadow rounded">
                    <h1 className="h4 font-bold text-center">
                      Welcome to Chakra!
                    </h1>

                    <form className="form-adminlogin mt-5">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="userName"
                          placeholder="Enter Username"
                        />
                        <label for="userName">Enter Username</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter Username"
                        />
                        <label for="password">Enter Password</label>
                      </div>
                      <NavLink className="text-center blue-btn border-0 d-block w-100" to="/Admin/Dashboard">Sign in</NavLink>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;
