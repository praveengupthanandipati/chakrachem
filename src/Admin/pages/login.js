import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFigure from "../assets/img/admin-left-img.jpg";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginRequest = { userName, password };

    try {
      const response = await fetch("http://localhost:8080/chakram/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      });

      const result = await response.text();

      if (result === "Login successful") {
        navigate("/Admin/Dashboard");
      } else {
        setLoginError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginError("An error occurred. Please try again.");
    }
  };

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

                    <form className="form-adminlogin mt-5" onSubmit={handleSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="userName"
                          placeholder="Enter Username"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                        <label htmlFor="userName">Enter Username</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Enter Password</label>
                      </div>
                      <button type="submit" className="text-center blue-btn border-0 d-block w-100">
                        Sign in
                      </button>
                      {loginError && <div className="text-danger mt-3 text-center">{loginError}</div>}
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

export default Login;
