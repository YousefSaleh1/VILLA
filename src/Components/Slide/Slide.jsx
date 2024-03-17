import "./Slide.css";

function Slide({ className, slide, city, country, title, description }) {
  return (
    <div className={className}>
      <img src={slide} alt="..." />
      <div className="slide-text">
        {/* <div className="header-text"> */}
        {/* <div className="container"> */}
        <span className="category">
          {city}
          <em>{country}</em>
        </span>
        <br />
        <h2>
          {title}
          <br />
          {description}
        </h2>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Slide;
