import * as React from 'react';
import "./Footer.css";

const Footer: React.FunctionComponent = () => {
  return (<>
      <footer>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Store locator</a>
          <a href="#">FAQs</a>
          <a href="#">News</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="love">
          Design &nbsp; by{" "}
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
  </>);
};

export default Footer;