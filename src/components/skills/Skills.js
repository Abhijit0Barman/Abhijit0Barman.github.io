import React from "react";
import "./skills.css";
import UIDesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import appDesign from '../../assets/app-design.png'

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">
                I am a skilled and passionate web devloper with creating visually appealing and user-friendly websites. I have a strong understanding of concepts and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as technology such as React, Node, Express, MondoDB and TypeScript.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, laborum!</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={webDesign} alt="webDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website design</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, quis.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={appDesign} alt="appDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ea.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
