import React from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import iconF from '../../assets/facebook-icon.png'
import iconT from '../../assets/twitter.png'
import iconY from '../../assets/youtube.png'
import iconI from '../../assets/instagram.png'

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I had the opportunity to work with a diverse group of peoples.
          {/* Some of the notable companies I have worked with includes  */}
        </p>
        <div className="clientImgs">
          <img src={walmart} alt="walmart" className="clientImg" />
          <img src={Adobe} alt="Adobe" className="clientImg" />
          <img src={Microsoft} alt="Microsoft" className="clientImg" />
          <img src={Facebook} alt="Facebook" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Your Message"></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <img src={iconF} alt="iconF" className="link" />
            <img src={iconT} alt="iconT" className="link" />
            <img src={iconY} alt="iconY" className="link" />
            <img src={iconI} alt="iconI" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
