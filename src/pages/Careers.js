import React from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "../includes/ScrollToTop";

const Careers = () => {
  scrollToTop(); //page load move top
  let pageName = "Careers";
  return (
    <main className="subpageMain">
      <section className="subpageHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="h1 p-0 m-0">{pageName}</h1>
            </div>
            <div className="col-md-6 align-self-center">
              <ul className="breadCrumb justify-content-md-end">
                <li>
                  <NavLink to="/"> Home</NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <span className="active"> {pageName}</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="subPageBody">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <article className="text-center">
                <h4 className="h4">
                  About <span className="fbold">Working Here</span>
                </h4>
                <p>Send out from the pack with your talent Send your</p>
                <p className="mb-0 pb-0">
                  Resume to <NavLink to="">career@chakrachem.in</NavLink>
                </p>
              </article>
              <p className="text-center">
                We believe in employees driving the success of BRC. Join us and
                discover a work experience where diverse and innovative ideas
                are met with enthusiasm and where you can learn and grow to your
                full potential. We are looking for individuals who enjoy a
                fast-paced, collaborative environment, and who have a passion
                and commitment at work.
              </p>

              <div className="sendresumeForm pt-4">
                <h4 className="h5 text-center">
                  Send your <span className="fbold">Updated CV</span>
                </h4>
                <form className="form">
                  <div className="row py-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          placeholder="Full Name"
                        />
                        <label for="fullname">Full Name</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter Your Email"
                        />
                        <label for="email">Email</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="phone"
                          className="form-control"
                          id="contact"
                          placeholder="Contact Number"
                        />
                        <label for="contact">Contact Number</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="file"
                          className="form-control"
                          id="resume"
                          placeholder="Attach Resume"
                        />
                        <label for="resume">Attach Resume</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button className="button blue-btn border-0 w-100">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
