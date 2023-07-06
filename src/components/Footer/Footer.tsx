import * as React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FunctionComponent = () => {
  return (
    <>
      <footer>
        <div className="footer-links">
          <Link to="/aboutus">About</Link>
          {/* <a href="#">About</a> */}
          <a href="#">Store locator</a>
          <a href="#">FAQs</a>
          <a href="#">News</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="love">
          Made &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/ansafakhtar"
          >
            &nbsp; Ansaf
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
