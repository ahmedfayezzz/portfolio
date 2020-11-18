import styled from "styled-components";
import ucook from "../images/ucookMock.png";
import countries from "../images/countriesMock.png";
import landing from "../images/LandingPageMock.png";

const Projects = () => {
  const Container = styled.div`
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #e5e5e5;
  `;
  const H1 = styled.h1`
    color: rgb(252, 163, 17);
    font-family: "Goldman", sans-serif;
    font-size: 3rem;
    display: flex;
    margin-bottom: 3rem;

    margin-top: 4rem;
  `;
  const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    background-color: #e5e5e5;
  `;
  const Card = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    min-width: 310px;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(5, 13, 25, 0.527);
    @media only screen and (max-width: 900px) {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    &:last-child {
      border-bottom: unset;
    }
  `;
  const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    min-width: 310px;
    margin-left: 3rem;
    padding-left: 3rem;
    border-left: 1px solid rgba(5, 13, 25, 0.527);
    @media only screen and (max-width: 900px) {
      align-items: center;
      border-left: unset;
      margin-left: 0;
      padding-left: 0;
      margin-top: 3rem;
      text-align: center;
    }
  `;
  const IMG = styled.img`
    width: 90%;
    max-width: 500px;
    height: auto;
    border-radius: 5px;
  `;
  const Title = styled.h2`
    color: rgb(5, 13, 25);
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1rem;
  `;
  const Link = styled.a`
    font-family: inherit;
    border: none;
    color: rgb(229, 229, 229);
    background-color: rgb(252, 163, 17);
    border-radius: 3px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover{
      filter:drop-shadow(1px 1px 3px rgba(44, 99, 219, 0.336))
    }
  `;
  const Technologies = styled.p`
    margin-bottom: 2rem;
    font-size: 1.1rem;
    color: rgb(5, 13, 25);
  `;
  const ButtonContainer = styled.div`
    display: flex;
    margin-top: auto;
    gap: 1rem;
  `;
  const SPAN = styled.span`
    color: rgb(252, 163, 17);
    font-weight: 700;
  `;
  return (
    <Container id="projects">
      <H1>Projects</H1>
      <CardsContainer>
        <Card>
          <IMG src={ucook} alt="" />
          <Description>
            <Title>Ucook</Title>
            <Technologies>
              React.js <SPAN>-</SPAN> HTML <SPAN>-</SPAN> CSS <SPAN>-</SPAN>{" "}
              Redux.js <SPAN>-</SPAN> Material-ui <SPAN>-</SPAN>{" "}
              Styled-Components
            </Technologies>
            <ButtonContainer>
              <Link
                target="_blank"
                href="https://github.com/ahmedfayezzz/ahmedfayezzz.github.io/tree/master/ucook"
              >
                Code
              </Link>
              <Link
                href="https://ucook.netlify.app/#/home"
                style={{
                  border: "rgb(252, 163, 17) solid 1px",
                  color: "rgb(252, 163, 17)",
                  backgroundColor: "rgb(229, 229, 229)",
                }}
                target="_blank"
              >
                Visit
              </Link>
            </ButtonContainer>
          </Description>
        </Card>
        <Card>
          <IMG src={countries} alt="" />
          <Description>
            <Title>World Countries Data</Title>
            <Technologies>
              HTML <SPAN>-</SPAN> CSS <SPAN>-</SPAN> Vanilla JavaScript
            </Technologies>
            <ButtonContainer>
              <Link
                target="_blank"
                href="https://github.com/ahmedfayezzz/ahmedfayezzz.github.io/tree/master/countries"
              >
                Code
              </Link>
              <Link
                href="https://ahmedfayezzz.github.io/countries/"
                style={{
                  border: "rgb(252, 163, 17) solid 1px",
                  color: "rgb(252, 163, 17)",
                  backgroundColor: "rgb(229, 229, 229)",
                }}
                target="_blank"
              >
                Visit
              </Link>
            </ButtonContainer>
          </Description>
        </Card>
        <Card>
          <IMG src={landing} alt="" />
          <Description>
            <Title>Travel Agency Landing Page</Title>
            <Technologies>
              HTML <SPAN>-</SPAN> CSS
            </Technologies>
            <ButtonContainer>
              <Link
                target="_blank"
                href="https://github.com/ahmedfayezzz/ahmedfayezzz.github.io/tree/master/Landing-Page"
              >
                Code
              </Link>
              <Link
                target="_blank"
                href="https://ahmedfayezzz.github.io/Landing-Page/"
                style={{
                  border: "rgb(252, 163, 17) solid 1px",
                  color: "rgb(252, 163, 17)",
                  backgroundColor: "rgb(229, 229, 229)",
                }}
              >
                Visit
              </Link>
            </ButtonContainer>
          </Description>
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default Projects;
