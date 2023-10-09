import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/resumelogo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const fileUrl = "https://drive.google.com/file/d/19w3QlPiGtkTC6lcw9hGVuUBQoginzpv6/view?usp=sharing";

  const download = () => {
    window.open(fileUrl, "_blank");
  };

  return (
    <nav className="navbar">
      <img
        onClick={download}
        style={{ cursor: "pointer" }}
        src={logo}
        alt="Logo"
        className="logo"
      />

      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem">
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem">
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem">
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem">
          Clients
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>

      {/* =========================BELOW-BERGER-MENU============================= */}
      
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShow(!show)}
      />
      <div className="navMenu" style={{ display: show ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShow(false)}>
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShow(false)}>
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShow(false)}>
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShow(false)}>
          Clients
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShow(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
