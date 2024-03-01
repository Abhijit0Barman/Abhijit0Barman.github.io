import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/resumelogo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import down from "../../assets/pdf/resume.pdf";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const fileUrlView = down;
    // "https://drive.google.com/file/d/1p_7WsyxYBg6AwWdl-CdAz0y_aDxLH25M/view";

    const download = () => {
        window.open(fileUrlView, "_blank");
    };

    return (
        <nav className="navbar nav-link resume" id="nav-menu">
            <span style={{ display: "flex" }}>
                {/* <p style={{ color: "yellow" }}>
          View
          <br />
          Resume 👉
        </p> */}
                {/* <Link> */}
                {/* <button onClick={download} id="resume-button-1"> */}
                <a
                    href={down}
                    rel="noreferrer"
                    download={"Abhijit-Barman-Resume.pdf"}
                    target="_blank"
                    onClick={download}
                >
                    <img
                        style={{ cursor: "pointer" }}
                        src={logo}
                        alt="Logo"
                        className="logo"

                        // id="resume-link-1"
                    />
                </a>
                {/* </button> */}
                {/* </Link> */}
            </span>

            <div className="desktopMenu">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="desktopMenuListItem nav-link home"
                >
                    Home
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="desktopMenuListItem nav-link about"
                >
                    About
                </Link>
                <Link
                    activeClass="active"
                    to="clients"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="desktopMenuListItem nav-link skills"
                >
                    Skills
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className="desktopMenuListItem nav-link projects"
                >
                    Projects
                </Link>
            </div>
            <button
                className="desktopMenuBtn nav-link contact"
                onClick={() => {
                    document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" });
                }}
            >
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
            <div
                className="navMenu"
                style={{ display: show ? "flex" : "none" }}
            >
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="listItem"
                    onClick={() => setShow(false)}
                >
                    Home
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="listItem"
                    onClick={() => setShow(false)}
                >
                    About
                </Link>
                <Link
                    activeClass="active"
                    to="clients"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="listItem"
                    onClick={() => setShow(false)}
                >
                    Skills
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="listItem"
                    onClick={() => setShow(false)}
                >
                    Projects
                </Link>

                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-65}
                    duration={500}
                    className="listItem"
                    onClick={() => setShow(false)}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
