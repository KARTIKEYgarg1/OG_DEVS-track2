import React from "react";

const Services = () => {
  return (
    <div className="container-fluid p-2">
      <div className="row">
        <div className="col-lg-7 col-sm-12">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
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
          <div class="container mt-5">
            <center class="row p-3">
              <a href="#" class="col-6 d-flex flex-column fs-1">
                <SiBlockchaindotcom className="ms-auto me-auto"></SiBlockchaindotcom>
                wow dude
              </a>
              <a href="#" class="col-6 d-flex flex-column fs-1">
                <FaFileContract className="ms-auto me-auto"></FaFileContract>
                wow dude
              </a>
              <a href="#" class="col-12 d-flex flex-column fs-1">
                <FaConnectdevelop className="ms-auto me-auto"></FaConnectdevelop>
                wow dude
              </a>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
