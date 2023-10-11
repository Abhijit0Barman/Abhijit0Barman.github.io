import React from "react";
import "./about.css";
import UIDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import appDesign from "../../assets/app-design.png";

const About = () => {
  return (
    <section id="about" className="about section">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        <p>
          👉 As an outcome-driven Full Stack Web Developer, I bring my expertise
          in both Frontend & Backend, acquired through rigorous training at
          Masai School. With a portfolio showcasing successful web applications
          and four major projects, I have developed strong teamwork and
          communication skills.
        </p>
        <br />
        <p>
          👉 Now, I am enthusiastic about applying my talents in a Full Stack
          Web Developer role, contributing to cutting-edge projects and creating
          user-friendly solutions. Let's collaborate to build exceptional web
          experiences and drive innovation in the digital realm.
        </p>
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
              laborum!
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="webDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website design</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              quis.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={appDesign} alt="appDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              ea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
