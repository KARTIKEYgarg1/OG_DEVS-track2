import React from "react";
import { SiBlockchaindotcom } from "react-icons/si";
import { FaFileContract, FaConnectdevelop } from "react-icons/fa";

export const Landing = () => {
  return (
    <div className="container-fluid">
      <div class="row" style={{ minHeight: "100vh" }}>
        <div class="col-lg-5 col-md-6 p-5">
          <div className="d-flex justify-content-center align-self-center flex-column h-100">
            <h2>“Koi Manzil Door Nahin.”</h2>
            <p style={{ textAlign: "justify" }}>
              Ashok Leyland has been the mobility solution provider for
              transporting people and goods to their destinations, ensuring a
              reliable ride, since 1948 from manufacturing India’s first double
              decker bus to creating the first hybrid-electric vehicle in the
              country. Thus the Ashok Leyland brand believes that there are
              destinations (Manzil) still to be conquered and more dreams to be
              achieved for all its stakeholders and for the company itself.
            </p>
            <div class="d-flex pt-5 pb-3" style={{ overflow: "hidden" }}>
              <input
                type="email"
                class="form-control h-100 w-75"
                placeholder="Email"
                aria-label="email"
              />
              <button className="btn btn-success w-25 text-nowrap">
                Connect
              </button>
            </div>
            <div class="container mt-5">
              <center class="row fs-3">
                <a href="#" class="col-4 p-2 d-flex flex-column">
                  <SiBlockchaindotcom className="ms-auto me-auto"></SiBlockchaindotcom>
                  Blockchain
                </a>
                <a href="#" class="col-4 p-2 d-flex flex-column">
                  <FaFileContract className="ms-auto me-auto"></FaFileContract>
                  IOT
                </a>
                <a href="#" class="col-4 p-2 d-flex flex-column">
                  <FaConnectdevelop className="ms-auto me-auto"></FaConnectdevelop>
                  Dashboard
                </a>
              </center>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-6 ">
          <img
            src="https://thumbs.dreamstime.com/b/truck-abstract-silhouette-white-background-line-art-view-side-223407960.jpg"
            className="img-fluid"
          ></img>
        </div>
      </div>
    </div>
  );
};
