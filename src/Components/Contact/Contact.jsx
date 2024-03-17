import "./Contact.css";
import PhonIcon from "../../assets/phone-icon.png";
import EmailIcon from "../../assets/email-icon.png";
import Map from "../Map/Map";
import ContactForm from "../ContactForm/ContactForm";
const Contact = () => {
  return (
    <>
      <div className="contact section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <Map />
              <div className="row">
                <div className="col-lg-6">
                  <div className="item phone">
                    <img src={PhonIcon} alt="" />
                    <h6>
                      010-020-0340
                      <br />
                      <span>Phone Number</span>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6">
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
            <div className="col-lg-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
