import "./skills.css";
//Tech Stack Images
import html from "../images/html.jpg";
import css3 from "../images/css3.jpg";
import javascript from "../images/javascript.jpg";
import react from "../images/react.jpg";
import chakra from "../images/chakra.jpg";
import nodejs from "../images/nodejs.jpg";
import mongo from "../images/mongo.jpg";
import express from "../images/express.jpg";
import github from "../images/github.jpg";
import redux from "../images/redux.jpg";
import postman from "../images/postman.jpg";
import styledmy from "../images/styledmy.jpg";

const Skills = () => {
  return (
    <section id="skills">
      <div id="clients">
        <h1 className="skillsPageTitle">Tech Stack</h1>
        <div className="clientImgs">
          <div className="outer">
            {skills.map((el) => (
              <div
                className="skills-card"
                key={el.name}
                whileHover={{ scale: 1.1 }}>
                <img className="skill-image skills-card-img" src={el.image} alt={el.name} />
                <p className="skills-card-name">{el.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Skills;

const skills = [
  { name: "HTML5", image: html },
  { name: "CSS3", image: css3 },
  { name: "JavaScript", image: javascript },
  { name: "React", image: react },
  {
    name: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  { name: "Chakra UI", image: chakra },
  { name: "Node.js", image: nodejs },
  { name: "MongoDB", image: mongo },
  { name: "Express", image: express },
  { name: "GitHub", image: github },
  { name: "Redux", image: redux },
  { name: "Postman", image: postman },
  {
    name: "Git",
    image:
      "https://mohitkss.github.io/static/media/git.b1472a80b81e487179cf.png",
  },
  { name: "Styled Components", image: styledmy },
];
