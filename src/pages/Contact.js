import React from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "../includes/ScrollToTop";

const Contact = () => {
  scrollToTop(); //page load move top
  let pageName = "Contact us";
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
          <div className="row">
            <div className="col-md-6">
              <h4 className="font-bold pb-3">Reach us</h4>
              <p>
                Our Marketing Support Team will get back to you once your query
                submitted
              </p>
              <form className="form" id="contact_form" action="" method="post">
                <div className="form-floating mb-3 customFormGroup">
                  <input
                    type="text"
                    className="form-control"
                    id="FullName"
                    placeholder="Full Name"
                    name="name"
                  />
                  <label for="FullName">
                    Full Name <span className="text-danger fbold"> *</span>
                  </label>
                </div>
                <div className="form-floating mb-3 customFormGroup">
                  <input
                    type="text"
                    className="form-control"
                    id="contactNumber"
                    placeholder="Contact Number"
                    name="phone"
                  />
                  <label for="contactNumber">
                    Contact Number <span className="text-danger fbold"> *</span>
                  </label>
                </div>
                <div className="form-floating mb-3 customFormGroup">
                  <input
                    type="text"
                    className="form-control"
                    id="emailAddress"
                    placeholder="Email Address"
                    name="email"
                  />
                  <label for="emailAddress">
                    Email address <span className="text-danger fbold"> *</span>
                  </label>
                </div>
                <div className="form-floating mb-3 customFormGroup">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="message"
                    style={{ height: 100 }}
                    name="msg"
                  ></textarea>
                  <label for="message">Message</label>
                </div>
                <button className="button blue-btn border-0 w-100">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-6 my-5 my-md-0">
              <div className="contactDetails py-4 px-5 rounded">
                <h3 className="h3 font-bold">Contact Details</h3>
                <p>For customer support and Query, Get in touch with us.</p>
                <div className="d-flex py-2">
                  <div className="pe-5">
                    <span className="icon-pin icomoon"></span>
                  </div>
                  <div>
                    <h4 className="font-bold h5">
                      Chakrachem Life Sciences Pvt Ltd
                    </h4>
                    <p>
                      Plot no. F-11, Third floor, Road no. 7,IDA kukatpally,
                      Gandhinagar, Hyderabad - 500037, Telangana, India
                    </p>
                  </div>
                </div>
                <div className="d-flex py-2">
                  <div className="pe-5">
                    <span className="icon-telephone icomoon"></span>
                  </div>
                  <div>
                    <h4 className="font-bold h5">Telephone</h4>
                    <p>+91 9008 002 580</p>
                  </div>
                </div>
                <div className="d-flex py-2">
                  <div className="pe-5">
                    <span className="icon-email icomoon"></span>
                  </div>
                  <div>
                    <h4 className="font-bold h5">Email</h4>
                    <p> info@chakrachem.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="contactMap mt-2 mt-md-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.610883009426!2d78.42326561519828!3d17.47832868802414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb904881555555%3A0xf62e1147d44d3794!2sCHAKRACHEM%20LIFESCIENCES%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1663605248153!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
