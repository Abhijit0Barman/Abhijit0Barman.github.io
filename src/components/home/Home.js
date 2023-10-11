import React from "react";
import "./home.css";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Home = () => {
  return (
    <section id="home">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Abhijit</span>
          <br /> Full Stack Web Devloper
        </span>
        <p className="introPara">
          I am a skilled full-stack web developer, proficient in both 
          front-end and back-end technologies, 
          dedicated to creating engaging and user-friendly web experiences.
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

export default Home;
