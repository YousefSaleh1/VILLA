import "./SubHeader.css";
import {
  FaEnvelope,
  FaMap,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="container ys-container">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <ul className="info">
              <li>
                <FaEnvelope className="info-icon" />
                info@company.com
              </li>
              <li>
                <FaMap className="info-icon" />
                Sunny Isles Beach, FL 33160
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4">
            <ul className="social-links">
              <li>
                <a href="#">
                  <FaFacebook className="social-link" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter className="social-link" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin className="social-link" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram className="social-link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
