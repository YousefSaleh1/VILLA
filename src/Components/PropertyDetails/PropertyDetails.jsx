import Hero from "../Hero/Hero";
import InfoTabel from "../InfoTabel/InfoTabel";
import "./PropertyDetails.css";
import MainImage from "../../assets/single-property.jpg";
import Accordion from "../Accordion/Accordion";
import BestDeal from "../BestDeal/BestDeal";

const PropertyDetails = () => {
  return (
    <>
      <Hero sectionName="Property Details" />
      <div className="single-property section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-image">
                <img src={MainImage} alt="" />
              </div>
              <div className="main-content">
                <span className="category">Apparment</span>
                <h4>24 New Street Miami, OR 24560</h4>
                <p>
                  Get <strong> the best villa agency </strong>
                  HTML CSS Bootstrap Template for your company website.
                  TemplateMo provides you the
                  <a
                    href="https://www.google.com/search?q=best+free+css+templates"
                    target="_blank"
                  >
                    best free CSS templates
                  </a>
                  in the world. Please tell your friends about it. Thank you.
                  Cloud bread kogi bitters pitchfork shoreditch tumblr yr
                  succulents single-origin coffee schlitz enamel pin you
                  probably haven&apos;t heard of them ugh hella.
                  <br /> <br />
                  When you look for free CSS templates, you can simply type
                  TemplateMo in any search engine website. In addition, you can
                  type TemplateMo Digital Marketing, TemplateMo Corporate
                  Layouts, etc. Master cleanse +1 intelligentsia swag
                  post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine
                  neutra cardigan hoodie pop-up.
                </p>
              </div>
              <Accordion />
            </div>
            <div className="col-lg-4">
              <InfoTabel />
            </div>
          </div>
        </div>
      </div>
      <BestDeal />
    </>
  );
};

export default PropertyDetails;
