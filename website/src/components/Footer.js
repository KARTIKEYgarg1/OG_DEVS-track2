import "./assets/a.css";
import { SlCallIn } from "react-icons/sl";
import { SiMailchimp } from "react-icons/si";
// import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="c" data-aos="fade-in">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info fs-5">
            <div className="c-info-item">
              <SlCallIn className="me-2" />
              +91 9140575244
            </div>
            <div className="c-info-item">
              <SiMailchimp className="me-2" />
              9616kg@gmail.com
            </div>
            <div className="c-info-item">
              <SiMailchimp className="me-2" />
              Near Bharati Vidyapeeth College of Engineering, Pune
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc" id="message">
            <b>What's your story?</b> It’s not about ideas. It’s about making
            ideas happen.
            <br /> You can also contact me through this form
          </p>
          {/* <Link
            className="btn btn-success btn-lg"
            name="submit"
            type="submit"
            id="submitButton"
            style={{ width: "fit-content" }}
            to="connect"
          >
            Send message
          </Link> */}
        </div>
      </div>
    </div>
  );
};
