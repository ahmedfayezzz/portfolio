import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 50vh;
  background-color: #e5e5e5;
  text-align: left;
`;
const H1 = styled.h1`
  color: rgb(252, 163, 17);
  font-family: "Goldman", sans-serif;
  font-size: 3rem;
  display: flex;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
`;
const ContactsContainer = styled.div`
  /* width: 40%; */
  display: flex;
  flex-direction:column;
  /* flex-wrap: wrap; */
  gap: 1rem;
  /* align-items: center; */
  justify-content: center;
`;
const H2 = styled.h2`
  color: rgb(0, 0, 0);
  font-weight: 400;
  /* width: 400px; */
  /* flex:0 1 200; */
  a {
    color: inherit;
  }
`;

const Contact = () => {
  return (
    <Container id="contact">
      <H1>Contact Me</H1>
      <ContactsContainer>
        <H2>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto: ahmedfayezmine@gmail.com">  ahmedfayezmine@gmail.com</a>
        </H2>
        <H2>
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:01152064858">  01152064858</a>
        </H2>
      </ContactsContainer>
    </Container>
  );
};

export default Contact;
