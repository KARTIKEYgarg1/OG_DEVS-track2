import React from "react";
import { GiPlatform } from "react-icons/gi";
const Services = () => {
  return (
    <div className="container-fluid p-2">
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
                  src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
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
                  src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
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
                  src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
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
            <div className="col-2 fs-2">
              <GiPlatform />
            </div>
            <div className="col-10">
              <h5>Platform</h5>
              <p>
                Incubation of 20+ best-in-class blockchain platforms and
                solutions through a combination of in-house and partner
                platforms
              </p>
            </div>
          </div>
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-2">
              <GiPlatform />
            </div>
            <div className="col-10">
              <h5>Blockchain Marketplace</h5>
              <p>
                Incubation of 20+ best-in-class blockchain platforms and
                solutions through a combination of in-house and partner
                platforms
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-2">
              <GiPlatform />
            </div>
            <div className="col-10">
              <h5>IOT</h5>
              <p>
                Incubation of 20+ best-in-class blockchain platforms and
                solutions through a combination of in-house and partner
                platforms
              </p>
            </div>
          </div>
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-2">
              <GiPlatform />
            </div>
            <div className="col-10">
              <h5>Tracability</h5>
              <p>
                Incubation of 20+ best-in-class blockchain platforms and
                solutions through a combination of in-house and partner
                platforms
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-2">
              <GiPlatform />
            </div>
            <div className="col-10">
              <h5>Transparency</h5>
              <p>
                Incubation of 20+ best-in-class blockchain platforms and
                solutions through a combination of in-house and partner
                platforms
              </p>
            </div>
          </div>
          <div className="col-lg-6 row g-3">
            <div className="col-2 fs-2">
              <GiPlatform />
            </div>
            <div className="col-10">
              <h5>Authentication</h5>
              <p>
                Incubation of 20+ best-in-class blockchain platforms and
                solutions through a combination of in-house and partner
                platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
