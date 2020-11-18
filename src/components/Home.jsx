import styled from "styled-components";
import {Link} from 'react-scroll';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgb(12, 18, 32);
  background: radial-gradient(
    circle,
    rgba(6, 16, 29, 1) 0%,
    rgba(7, 15, 27, 1) 40%,
    rgba(5, 13, 25, 1) 100%
  );
`;
const H2 = styled.h2`
  color: rgba(229, 229, 229, 0.651);
  font-family: Arial, sans-serif;
  /* font-style:italic; */
  font-weight: 400;
  font-size: 1.3rem;
  opacity: 0;
  /* scale(0) */
`;
const H1 = styled.h1`
  /* font-family: 'Press Start 2P', cursive; */
  /* color: rgb(252, 163, 17); */
  color: rgb(229, 229, 229);
  /* transform: scale(0); */
  font-family: "Goldman", sans-serif;
  font-size: 4rem;
  opacity: 0;
  /* transition-delay: 2s; */
`;
const LI = styled.li``;
const UL = styled.ul`
  margin-top:4rem;
  display: flex;
  gap: 1rem;
  opacity: 0;
  align-items: center;
  justify-content: center;
`;
const LinkStyle = {
  color: 'rgb(229, 229, 229)',
  fontWeight:700,
  cursor:'pointer'
}
const DIV=styled.div`
  color: rgb(229, 229, 229);
  font-size:5rem;
`
const SPAN=styled.span`
  color:rgb(252, 163, 17);
  font-weight:700;
  /* font-size:2rem; */
`
const Home = () => {
  return (
    <body>
      <Container id="home">
        {/* <DIV>
          <i class="fas fa-desktop"></i>
        </DIV> */}
        <H1 className="fade-in">Ahmed Fayez</H1>
        <H2 className="fade-in">Front-End Developer</H2>
        <UL className="fade-in">
          <LI className="pulse-element">
            <Link style={LinkStyle} to="about" spy={true} smooth={true}>About</Link>
          </LI>
          <LI>
            <SPAN>/</SPAN>
          </LI>
          <LI className="pulse-element">
            <Link style={LinkStyle} to="projects" spy={true} smooth={true}>Projects</Link>
          </LI>
          <LI>
            <SPAN>/</SPAN>
          </LI>
          <LI className="pulse-element">  
            <Link style={LinkStyle} to="contact" spy={true} smooth={true}>Contact</Link>
          </LI>
        </UL>
        {/* <svg>

          <path class="path" fill="transparent" stroke="black" stroke-width="4" d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8
          s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
          C46.039,146.545,53.039,128.545,66.039,133.545z"/>

        </svg> */}
        {/* <span style={{color:'rgb(229, 229, 229)'}}>I'm</span> */}
      </Container>
      {/* <Projects/> */}
    </body>
  );
};

export default Home;
