import "./Slider.css";
import Slide from "../Slide/Slide";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import SlidOne from '../../assets/banner-01.jpg'
import SlidTwo from '../../assets/banner-02.jpg'
import SlidThree from '../../assets/banner-03.jpg'

const Slider = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-indicators dots">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="dot active"
          aria-current="true"
          aria-label="Slide 1"
        ><span></span></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="dot"
        ><span></span></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="dot"
        ><span></span>
        </button>
      </div>
      <div className="carousel-inner">
        <Slide
          className="carousel-item active"
          slide={SlidOne}
          city="Toronto, "
          country="Canada"
          title="Hurry!"
          description="Get the Best Villa for you"
        />
        <Slide
          className="carousel-item"
          slide={SlidTwo}
          city="Melbourne, "
          country="Australia"
          title="Be Quick!"
          description="Get the best villa in town"
        />
        <Slide
          className="carousel-item"
          slide={SlidThree}
          city="Miami, "
          country="South Florida"
          title="Act Now!"
          description="Get the highest level penthouse"
        />
      </div>
      <button
        className="carousel-control-prev left-control"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span>
        <FaAngleLeft className="left"/>
        </span>
      </button>
      <button
        className="carousel-control-next right-control"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span>
        <FaAngleRight className="right"/>
        </span>
      </button>
    </div>
  );
};

export default Slider;
