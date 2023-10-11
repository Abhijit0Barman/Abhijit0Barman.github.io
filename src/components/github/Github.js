import React from "react";
import styled from "styled-components";
import GithubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <MainContainer style={{ marginTop: "50px" }}>
      <SectionTitle>Days I Worked</SectionTitle>
      <Container>
        <GithubCalendar
          username="Abhijit0Barman"
          year={new Date().getFullYear()}
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </Container>
      <SectionTitle>My Statistics</SectionTitle>
      <div className="stats">
        <img
          align="center"
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=Abhijit0Barman&show_icons=true&locale=en"
          alt="Abhijit0Barman"
        />
        <img
          align="center"
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com/?user=Abhijit0Barman&"
          alt="Abhijit0Barman"
        />
        <img
          align="center"
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Abhijit0Barman"
          alt="Abhijit0Barman"
        />
      </div>
    </MainContainer>
  );
};

const Container = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  color: black;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  flex-direction: column;
  border: 10px solid #f0efd4;
  border-radius: 50px 5px 50px 5px;
  padding: 30px 10px 30px 10px;
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #f0efd4;
  margin-bottom: 2rem;
`;

const MainContainer = styled.div`
  background-color: #46808f;
  width: 70vw;
  margin: auto;
  padding-top: 50px;
  border-radius: 1rem;
  .stats {
    /* border: 1px solid red; */
    width: 70%;
    margin: auto;
    /* display:flex; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    border-radius: 50px;
    margin-bottom: 50px;
  }

  .stats > img {
    padding: 20px 10px 20px 10px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1110px) {
    .stats {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .stats {
      /* flex-direction:column;  */
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .stats {
      /* width:90%;
            flex-direction:column;  */
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (max-width: 319px) {
    .stats {
      /* width:90%;
            flex-direction:column;  */
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Github;
