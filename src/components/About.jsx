import styled from "styled-components";
import profilePic from "../images/profilePic.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  background-color: #14213d;
  
`;
const H1 = styled.h1`
  color: #e5e5e5;
  font-family: "Goldman", sans-serif;
  font-size: 3rem;
  display: flex;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
`;
const InfoContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  gap: 3rem;
  width: 80%;
  min-width: 310px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

const SPAN = styled.span`
  color: rgb(252, 163, 17);
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: hsl(220.97560975609755, 50.617283950617285%, 13%);
  width: 90%;
  max-width: 400px;
  padding: 1rem 3rem;
`;
const IMG = styled.img`
  width: 100%;
  max-width: 500px;
  margin: auto;
  height: auto;
  border-radius: 50%;
  border: 0.3rem solid rgb(252, 163, 17);
`;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 50%;
  width: 70%;
  padding: 0.4rem;
  background-color: rgba(252, 162, 17, 0.295);
  margin: 1rem auto;
`;
const Point = styled.p`
  color: rgb(229, 229, 229);
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
`;
const Paragraph = styled.p`
  color: rgb(229, 229, 229);
  width: 90%;
  font-size: 1.3rem;
  max-width: 600px;
  margin: auto;
`;
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  background-color: rgb(252, 163, 17);
  width: 100%;
  padding-bottom:2rem;
`;
const SkillsPoint = styled.div`
  color: rgb(255, 255, 255);
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;
const SPANSkills = styled.span`
  color: #14213d;
  font-weight: 700;
`;
const PointsContainer = styled.div`
  width: 90%;
  font-size: 1.3rem;
  max-width: 850px;
  margin: auto;
  margin-bottom: 2rem;
  text-align:center;
`;
const Link = styled.a`
    font-family: inherit;
    border: none;
    color:#14213d;
    background-color: rgb(229, 229, 229);
    border-radius: 3px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 1s ease;
    &:hover{
      filter:drop-shadow(2px 1px 2px rgba(17, 36, 77, 0.425))
    }
  `;
const About = () => {
  return (
    <>
      <Container id="about">
        <H1>About</H1>
        <InfoContainer>
          <Box>
            <ImgContainer>
              <IMG src={profilePic} alt="" />
            </ImgContainer>
            <Point>
              <strong>LOCATION</strong>: Cairo, Egypt
            </Point>
            <Point>
              <strong>Languages</strong>: Arabic (<i>Native</i>), English (
              <i>Advanced</i>)
            </Point>
            <Point>
              <strong>Education</strong>: Bachelor of Computer Science from{" "}
              <SPAN>MSA University</SPAN>
            </Point>
          </Box>
          <Paragraph>
            Hi My name is <SPAN>Ahmed</SPAN>. I'm a{" "}
            <SPAN>computer science</SPAN> graduate, I work as a full-time{" "}
            <SPAN>problem solver</SPAN> and learner. I love{" "}
            <SPAN>programming</SPAN> and everything about it. I am able to
            deliver a fully functional, responsive, Accessible and good looking
            websites using the latest technologies and trends in front-end
            development.
          </Paragraph>
        </InfoContainer>
      </Container>
      <SkillsContainer>
        <H1 style={{ color: "white", marginTop: "1rem" }}>Skills</H1>
        <PointsContainer>
          <SkillsPoint>
            <strong style={{ color: "#14213d", display:'block', marginBottom:'0.3rem'}}>Programming Languages</strong>{" "}
            JavaScript <SPANSkills>-</SPANSkills> HTML{" "}
            <SPANSkills>-</SPANSkills> CSS <SPANSkills>-</SPANSkills> Python{" "}
            <SPANSkills>-</SPANSkills> C# <SPANSkills>-</SPANSkills> C++{" "}
            <SPANSkills>-</SPANSkills> Java <SPANSkills>-</SPANSkills> MySQL
          </SkillsPoint>
          <SkillsPoint>
            <strong style={{ color: "#14213d", display:'block'}}>Technologies</strong> React{" "}
            <SPANSkills>-</SPANSkills> Redux <SPANSkills>-</SPANSkills>{" "}
            Bootstrab <SPANSkills>-</SPANSkills> Material-ui{" "}
            <SPANSkills>-</SPANSkills> Styled-Components{" "}
            <SPANSkills>-</SPANSkills> Git <SPANSkills>-</SPANSkills> Tensorflow
          </SkillsPoint>
          <SkillsPoint>
            <strong style={{ color: "#14213d", display:'block'}}>
              Non-Programming Skills
            </strong>{" "}
            Adobe PhotoShop <SPANSkills>-</SPANSkills> Microsoft Office
          </SkillsPoint>
        </PointsContainer>
        <Link target='_blank' href='https://drive.google.com/file/d/1sRWpHnQogm321Lk0Bb7Ihu6hc-mWywM6/view?usp=sharing' download>Download CV</Link>
      </SkillsContainer>
    </>
  );
};

export default About;
