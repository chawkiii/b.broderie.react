import React from "react";
import "../../styles/contact.css";
import instaIcon from "../../assets/icons/icons8-instagram-48.png";
import fbIcon from "../../assets/icons/icons8-facebook-48.png";
import whatsappIcon from "../../assets/icons/icons8-whatsapp-48.png";
import gmailIcon from "../../assets/icons/gmail.png";

const Contact = () => {
  return (
    <>
      <section id="contact" className="container">
        <h2>Contact Us</h2>

        <div className="contact-content">
          <div className="form-map">
            <div className="contact-form">
              <form id="contactForm">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button className="submitButton" type="submit">
                  Submit
                </button>
              </form>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d283.46073811120925!2d7.152313521538263!3d35.42642280043771!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sdz!4v1723843914431!5m2!1sfr!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="social-media">
            <a href="#" className="network-element email" title="Send us email">
              <img src={gmailIcon} alt="email" />
              info@bbroderie.com
            </a>
            <a
              href="https://wa.me/0661296751"
              className="network-element whatsapp"
              title="Contact us on WhatsApp"
            >
              <img src={whatsappIcon} alt="WhatsApp" />
              0661296751
            </a>
            <a
              href="https://www.facebook.com/YourPage"
              className="network-element facebook"
              title="Follow us on Facebook"
            >
              <img src={fbIcon} alt="Facebook" />
              Facebook
            </a>
            <a
              href="#"
              className="network-element instagram"
              title="Follow us on Instagram"
            >
              <img src={instaIcon} alt="instagram" />
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
