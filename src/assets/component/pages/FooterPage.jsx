import React from "react";
import Classes from "./pages.module.css";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const FooterPage = () => {
  return (
    <div className={Classes.footerArea}>
      <div className={Classes.footerWrapper}>
        <p>
          All right reserved by <strong>Shaikot Ahmed Asif</strong>
        </p>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://github.com/shaikot-asif" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shaikotahmedasif/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/shaikotahmed.22.asif/"
              target="_blank"
            >
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterPage;
