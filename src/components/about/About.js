import React from "react";
import "./about.css";
import UIDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import appDesign from "../../assets/app-design.png";

const About = () => {
  return (
    <section id="about" className="about section">
      <span className="skillTitle">About</span>
      <span className="skillDesc" id="user-detail-intro">
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
              Creating user-friendly digital interfaces for seamless, visually
              engaging experiences.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="webDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website design</h2>
            <p>
              I create stunning websites that captivate and engage online
              audiences.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={appDesign} alt="appDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App design</h2>
            <p>
              I create user-friendly, visually appealing apps for seamless
              digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
