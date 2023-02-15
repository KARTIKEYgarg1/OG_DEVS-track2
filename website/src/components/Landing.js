import React from "react";
import { SiBlockchaindotcom } from "react-icons/si";
import { FaFileContract, FaConnectdevelop } from "react-icons/fa";

export const Landing = () => {
  return (
    <div className="container-fluid">
      <div class="row" style={{ minHeight: "100vh" }}>
        <div class="col-lg-5 col-md-6 p-5">
          <div className="d-flex justify-content-center align-self-center flex-column h-100">
            <h2>LETS GROW IT</h2>
            <p style={{ textAlign: "justify" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing
            </p>
            <div class="d-flex">
              <input
                type="text"
                class="form-control w-75"
                placeholder="First name"
                aria-label="First name"
              />
              <button className="btn btn-success w-25 text-nowrap">
                Contact me
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
