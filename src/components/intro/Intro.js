import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Abhijit</span>
          <br /> Full Stack Web Devloper
        </span>
        <p className="introPara">
          I am a skilled MERN Stack Devloper with creating <br /> visually appealing
          and user friendly web-sites/apps
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} className="btnImg" alt="Hire Me" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src="./my.png" alt="bg" className="bg" />
    </section>
  );
};

export default Intro;
