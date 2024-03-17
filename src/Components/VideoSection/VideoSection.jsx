import "./VideoSection.css";
import { FaPlay } from "react-icons/fa";
import VideoImage from "../../assets/video-frame.jpg";

const VideoSection = () => {
  const counters = [
    {
      number: 34,
      firstLine: "Buildings",
      lastLine: "Finished Now",
    },
    {
      number: 12,
      firstLine: "Years",
      lastLine: "Experience",
    },
    {
      number: 24,
      firstLine: "Awwards",
      lastLine: "Won 2023",
    },
  ];
  return (
    <>
      <div className="video section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Video View</h6>
                <h2>Get Closer View & Different Feeling</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="video-frame">
                <img src={VideoImage} alt="" />
                <a href="#" target="_blank">
                  <FaPlay />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fun-facts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper">
                <div className="row">
                  {counters.map((counter, index) => {
                    return (
                      <div key={index} className="col-lg-4">
                        <div className="counter">
                          <h2
                            className="timer count-title count-number"
                            data-to={counter.number}
                            data-speed="1000"
                          >
                            {counter.number}
                          </h2>
                          <p className="count-text">
                            {counter.firstLine}
                            <br />
                            {counter.lastLine}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
