import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <section className="mb-4">
          <a
           className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>

        <section className="mb-4">
          {/* <p>
            Praedico Global Research Private Limited is a private company which
            is founded on 09 April, 2018. We deals in Stock Market Training,
            Stock Marketing Predictive Softwares, Robotic Stock Trading, Global
            Equity Research, Portfolio Designing, Financial Literacy and Stock
            Market Research Using Deep Learning.
          </p> */}
        </section>

        <section className="">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Useful Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Our services</h5>

              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" class="text-white text-decoration-none">
                    Web Design{" "}
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" class="text-white text-decoration-none">
                    Web Development
                  </a>
                </li>
                <li className="mb-1" >
                  <a href="#!" className="text-white text-decoration-none" >
                    Product Management
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" class="text-white text-decoration-none">
                    Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Conatct Us</h5>
              <p mt-5>HEAD OFFICE : Udyog Vihar,<br/>
              Phase 4, Gurgaon</p>
              <p mt-5>
              DATA CENTER : First Floor, Garima Arcade,<br/> Gwalior
              </p>
              

              
            </div>


          </div>
        </section>
      </div>

      <div class="text-center p-3">
        © 2023 Copyright: 
        {/* <Link class="text-decoration-none" to="/"> praedicoglobal.com</Link> */}
      </div>
    </footer>
  );
}

export default Footer;
