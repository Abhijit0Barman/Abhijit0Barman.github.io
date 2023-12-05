import React from "react";
import "./projects.css";
import { motion } from "framer-motion";
import styled from "styled-components";
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
import fastFashion from "../../assets/projects/fastFashion.png";
import firebase from "../../assets/techStack/firebase.png";
import stripe from "../../assets/techStack/stripe.png";
import travelo from "../../assets/projects/travelo.png";
import ez from "../../assets/projects/ez.png";
import woodCraft from "../../assets/projects/woodCraft.png";

/*
const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae
        earum eligendi minus ducimus sed repellat vero nesciunt nostrum? Dolores
        accusamus totam cupiditate fugit hic reprehenderit voluptate
      </span>
      <div className="worksImgs">
        <img src={html} alt="img" className="worksImg" />
        <img src={html} alt="img" className="worksImg" />
        <img src={html} alt="img" className="worksImg" />
        <img src={html} alt="img" className="worksImg" />
        <img src={html} alt="img" className="worksImg" />
        <img src={html} alt="img" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};
*/

const Projects = () => {
  return (
    <ProjectsSection className="content projects " id="projects">
      <ProjectsHeading>Projects</ProjectsHeading>
      <ProjectsGrid>
        {ProjectList.map((list, index) => (
          <ProjectCard
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }}>
            <CardLeft>
              <img src={list.img} alt={list.title} />
            </CardLeft>
            <CardRight>
              <h4 className="project-title">{list.title}</h4>
              <p className="project-description">{list.description}</p>
              <Stack>
                <span className="project-tech-stack">Tech Stack -</span>
                {list.tech_stack.map((el, index) => (
                  <Tag key={index} className="tags">
                    <img src={el} alt="tech Stacks" />
                  </Tag>
                ))}
              </Stack>
              <BtnGroup>
                <a
                  className="project-github-link btn"
                  href={list.github_url}
                  target="_blank"
                  rel="noopener noreferrer">
                  Github
                </a>
                <a
                  className="project-deployed-link btn"
                  href={list.demo_url}
                  target="_blank"
                  rel="noopener noreferrer">
                  Live
                </a>
              </BtnGroup>
            </CardRight>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      <br />
      <br />
    </ProjectsSection>
  );
};

export default Projects;

const typscrpt =
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";

const ProjectList = [
  {
    id: 1,
    img: fastFashion,
    title: "Fast-Fashion",
    description:
      "The Fast-Fashion E-Commerce Store project is a collaborative effort by a team of five talented individuals dedicated to providing a dynamic and streamlined online shopping experience in the realm of fashion retail.",
    tech_stack: [html, css3, javascript, firebase,stripe,react,redux,],
    github_url: "https://github.com/Abhijit0Barman/Fast-Fashion",
    demo_url: "https://truculent-face-1803-nine.vercel.app/",
  },
  {
    id: 2,
    img: travelo,
    title: "Travelo",
    description:
      "Project for an online platform dedicated to promoting sustainable and responsible tourism.",
    tech_stack: [html, css3, javascript, react, chakra],
    github_url: "https://github.com/Abhijit0Barman/Travelo",
    demo_url: "https://vogue-pocket-8479-sooty.vercel.app/",
  },
  {
    id: 3,
    img: ez,
    title: "Ez-Life",
    description:
      "Welcome to the Travelo GitHub page. Here, we share our commitment to promoting sustainable and responsible tourism through the power of technology. Our open-source projects aim to create innovative tools that make it easier for ecotourism enthusiasts to find sustainable travel experiences and learn about environmental conservation. We believe that collaboration and technology can be powerful tools in promoting sustainable tourism, and we invite you to join us in our mission to protect the planet through responsible travel. This project might ( and certainly does ) have bugs, vulnerabilities, or other issues. So, contributions are always welcome ☺ The demo is under free hosting so it may require a bit of patience ☺",
    tech_stack: [html, css3, javascript,react,javascript],
    github_url: "https://github.com/Abhijit0Barman/Ez-Life",
    demo_url: "https://hulking-income-7436.vercel.app/login",
  },
  {
    id: 4,
    img: woodCraft,
    title: "WOOD CRAFT",
    description:
      "Welcome to the Woodcraft GitHub page. Here, we share our commitment to promoting sustainable and responsible products through the power of technology. Our open-source projects aim to create innovative tools that make it easier for ecotourism enthusiasts to find sustainable selling experiences and learn about environmental conservation. We believe that collaboration and technology can be powerful tools in promoting sustainable selling, and we invite you to join us in our mission to protect the planet through responsible buy & sell",
    tech_stack: [react, redux, chakra, typscrpt],
    github_url: "https://github.com/Abhijit0Barman/Wood-Crafts",
    demo_url: "https://resilient-partner-542.vercel.app/",
  },
  /* 
  {
    id: 5,
    img: chakra,
    title: "GardenEase",
    description:
      "Welcome to our vibrant online community dedicated to all things gardening! Our Garden Enthusiast's Haven is a place where green thumbs, budding gardeners, and outdoor enthusiasts come together to share their passion for cultivating nature's beauty.",
    tech_stack: [react, redux, chakra, javascript, nodejs, mongo, express],
    github_url: "https://github.com/Biswajit2595/nippy-flavor-9468",
    demo_url: "https://gardenease.vercel.app/",
  },
  */
];

// ==========================STYLED-COMPONENT========================
const ProjectsSection = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 20px;
  background-color: #46808f;
  padding: 4rem 0;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
`;

const ProjectsHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #f0efd4;
`;

const ProjectsGrid = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  width: 90%;
  margin: auto;
  padding: 1.5rem;
  background-color: beige;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  height: 100%; /* Added a fixed height for uniformity */
  `;

const CardLeft = styled.div`
  flex: 1;
  background: #151418;
  border-radius: 5px;
  background-color: white;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  /* border: 1px solid red; */
  /* overflow: hidden; */
  img {
    border-radius: 20px;
    /* max-height: 100%; */
    max-width: 100%;
    transition: transform 0.5s ease-in-out;
  }
  img:hover {
    transform: scale(1.05);
  }
`;

const CardRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    color: #000;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  p {
    margin: 15px 0;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.815);
    text-align: justify;
  }

  .project-tech-stack {
    color: black;
    font-weight: 600;
  }
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  color: #fff;
  /* background-color: #bae5f0; */
  border-radius: 5px;
  font-size: 15px;
  font-weight: 400;
  margin: 2px 6px;
  /* padding: 2px 10px; */
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  img {
    width: 30px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const BtnGroup = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: flex-end;

  a {
    padding: 8px 16px;
    background-color: #46808f;
    border-radius: 0.5rem;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    color: white;
    transition: transform 0.5s ease-in-out;
    cursor: pointer;
    margin: 0px 10px;
  }

  .btn:hover {
    transform: scale(1.1);
  }
`;
