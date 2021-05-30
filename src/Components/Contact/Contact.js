import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer mt-5 ">
      <h1 className="contactHeading ">
         Feel Free to Contact Us
      </h1>
      <section className="contact py-1 ">
        <div className="container">
          <div className="col-md-9 mx-auto shadow-lg pt-3 pb-2 rounded">
            <form action="">
              <div className="form-group form-sec">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name*"
                />
              </div>
              <div className="form-group form-sec">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email*"
                />
              </div>
              <div className="form-group form-sec">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quote*"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Enter Your Message here . . ."
                ></textarea>
              </div>
              <div class="d-grid form-group">
                <button type="button" className="buttonStyle">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
