import React, { useRef } from "react";
import "./contact.css";
import iconF from "../../assets/facebook-icon.png";
import iconT from "../../assets/twitter.png";
import iconY from "../../assets/youtube.png";
import iconI from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mi97c0c",
        "template_aqqfe5g",
        form.current,
        "GrKzFUI0zdtlUcFqN"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert(`Email Sent !`);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <br />
      <br />
      <br />
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
        />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Your Message"></textarea>
        <button className="submitBtn" type="submit" value="Send">
          Submit
        </button>
        <div className="links">
          {/* <img src={iconF} alt="iconF" className="link" />
          <img src={iconT} alt="iconT" className="link" />
          <img src={iconY} alt="iconY" className="link" />
          <img src={iconI} alt="iconI" className="link" /> */}
          <a
            href="https://www.linkedin.com/in/abhijitbarmandev/"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-linkedin">
            <img
              src="./linkedin.png"
              alt="LinkedIn"
              className="link"
            />
          </a>
          <a
            href="https://github.com/Abhijit0Barman"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-github">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Github-circle_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Github-circle_%28CoreUI_Icons_v1.0.0%29.svg.png"
              alt="Github"
              className="link"
            />
          </a>

          <a
            href="tel:+917031745586"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-phone">
            <img src="./calling.png" alt="ph-no:7031745586" className="link" />
          </a>
          <a
            href="mailto:abhijitbarman96@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-email">
            <img src="./mail.png" alt="Github" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
