import React from "react";
import { GiTechnoHeart, GiPlatform } from "react-icons/gi";
import { FiLayers } from "react-icons/fi";
import { CiBoxes } from "react-icons/ci";
const Services = () => {
  return (
    <div className="container-fluid p-2" id="services">
      <div className="row">
        <div className="col-lg-7 col-sm-12">
          <div
            id="carouselExampleCaptions"
            class="carousel slide carousel-dark"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://www.deccanherald.com/sites/dh/files/articleimages/2021/02/01/download-945981-1612165441.png"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://5.imimg.com/data5/JS/BG/NE/SELLER-7700072/leyland-spares-500x500.png"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://1000logos.net/wp-content/uploads/2020/11/Ashok-Leyland-Logo.png"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12">
          <h3>Our Services</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model
          </p>
        </div>
      </div>
      <div className="container mt-5">
        <h3>What we serve</h3>
        <div className="row">
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-1">
              <FiLayers />
            </div>
            <div className="col-10">
              <h5>Platform</h5>
              <p>
                Integrating blockchain platforms / services into client’s
                applications and conducting workshops for identifying the pain
                points for end-to-end deployments
              </p>
            </div>
          </div>
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-1">
              <CiBoxes />
            </div>
            <div className="col-10">
              <h5>Blockchain Marketplace</h5>
              <p>To enable the implementation of blockchain smart contracts</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-1">
              <GiTechnoHeart />
            </div>
            <div className="col-10">
              <h5>IOT</h5>
              <p>
                Enabling blockchain innovation in organizations using passive
                RFID to improve tracability and authenticity of product
              </p>
            </div>
          </div>
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-1">
              <GiPlatform />
            </div>
            <div className="col-10">
              <h5>Tracability with Authenticity</h5>
              <p>
                Using RFID, inventry levels are scanned at each supplier to
                check their inventry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
