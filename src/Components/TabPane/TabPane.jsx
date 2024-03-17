import "./TabPane.css";
import { FaCalendar } from "react-icons/fa";

const TabPane = ({
  className,
  id,
  ariaLabelledby,
  image,
  infoTab,
  title,
  desc1,
  desc2,
}) => {
  return (
    <div
      className={className}
      id={id}
      role="tabpanel"
      aria-labelledby={ariaLabelledby}
    >
      <div className="row">
        <div className="col-lg-3">
          <div className="info-table">
            <ul>
              {infoTab.map((item, index) => {
                return (
                  <li key={index}>
                    {item.title}
                    <span>{item.description}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={image} alt="" />
        </div>
        <div className="col-lg-3">
          <h4>{title}</h4>
          <p>
            {desc1}
            <br /> <br />
            {desc2}
          </p>
          <div className="icon-button">
            <a href="#">
              <span className="icon">
                <FaCalendar />
              </span>
              Schedule a visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPane;
