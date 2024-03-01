import React from "react";
import "./home.css";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
import { TypeAnimation } from "react-type-animation";
import down from "../../assets/pdf/resume.pdf";

const Home = () => {
    const handleClick = () => {
        window.open(
            // "https://drive.google.com/file/d/1p_7WsyxYBg6AwWdl-CdAz0y_aDxLH25M/view",
            "https://drive.google.com/file/d/1G0GWf_T0MPw7r3wdmZLNdf-Y34eJWO8Z/view?usp=sharing",
            "_blank"
        );
    };
    const mail = () => {
        window.open("mailto:abhijitbarman96@gmail.com", "_blank");
    };

    return (
        <section id="home">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm{" "}
                    {/* <span className="introName" id="user-detail-name">
            Abhijit Barman
          </span> */}
                    <span
                        id="user-detail-name"
                        className="introName"
                        style={{ fontWeight: 800 }}
                    >
                        Abhijit Barman
                    </span>
                    <div id="user-detail-intro">
                        <TypeAnimation
                            sequence={[
                                "I am a Full Stack Web Developer",
                                1000,
                                "I am a Mern Stack Developer",
                                1000,
                                "I am a Web Developer",
                                1000,
                            ]}
                            speed={20}
                            style={{ fontSize: "1.5rem" }}
                            repeat={Infinity}
                        />
                    </div>
                </span>
                <p className="introPara">
                    I am a skilled full-stack web developer, proficient in both
                    front-end and back-end technologies, <br />
                    dedicated to creating engaging and user-friendly web
                    experiences.
                </p>
                <div>
                    <a
                        href={down}
                        rel="noreferrer"
                        download={"Abhijit-Barman-Resume.pdf"}
                        target="_blank"
                    >
                        <button
                            id="resume-button-2"
                            // id="resume-link-2"
                            className="btn"
                            onClick={handleClick}
                        >
                            <img
                                src="./download.png"
                                className="btnImg"
                                alt="Hire Me"
                            />
                            Download
                        </button>
                    </a>{" "}
                    <Link>
                        <button className="btn" onClick={mail}>
                            <img
                                src={btnImg}
                                className="btnImg"
                                alt="Hire Me"
                            />
                            Hire Me
                        </button>
                    </Link>
                </div>
            </div>
            <img src="./edit.png" alt="bg" className="bg home-img" />
        </section>
    );
};

export default Home;
