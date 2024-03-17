import ContactForm from "../ContactForm/ContactForm";
import PhonIcon from "../../assets/phone-icon.png";
import EmailIcon from "../../assets/email-icon.png";
import Hero from "../Hero/Hero";
import Map from "../Map/Map";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Hero sectionName="Contact Us" />
      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents</h2>
              </div>
              <p>
                When you really need to download free CSS templates, please
                remember our website TemplateMo. Also, tell your friends about
                our website. Thank you for visiting. There is a variety of
                Bootstrap HTML CSS templates on our website. If you need more
                information, please contact us.
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <div className="item phone">
                    <img src={PhonIcon} alt="" />
                    <h6>
                      010-020-0340
                      <br />
                      <span>Phone Number</span>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="item email">
                    <img src={EmailIcon} alt="" />
                    <h6>
                      info@villa.co
                      <br />
                      <span>Business Email</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ContactForm />
            </div>
            <div className="col-lg-12">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
