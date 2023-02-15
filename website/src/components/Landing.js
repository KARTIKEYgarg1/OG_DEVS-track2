import React from "react";

export const Landing = () => {
  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-lg-5 col-md-6 p-5">
          <div className="d-flex justify-content-center flex-column">
            <h2>LETS GROW IT</h2>
            <span className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing
            </span>
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
