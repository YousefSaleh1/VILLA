import "./Featured.css";
import FeaturedImg from "../../assets/featured.jpg";
import FeaturedIcon from "../../assets/featured-icon.png";
import InfoTabel from "../InfoTabel/InfoTabel";
import Accordion from "../Accordion/Accordion";

const Featured = () => {
  return (
    <div className="featured section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="left-image">
              <img src={FeaturedImg} alt="" />
              <a href="#">
                <img src={FeaturedIcon} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-heading">
              <h6>| Featured</h6>
              <h2>Best Appartment & Sea view</h2>
            </div>
            <Accordion />
          </div>
          <div className="col-lg-3">
            <InfoTabel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
