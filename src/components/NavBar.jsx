import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
const Header = styled.header`
  opacity: 0;
  display: flex;
  position: fixed;
  width: 100%;
  color: #e5e5e5;
  font-size: 2rem;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  mix-blend-mode: difference;
  @media only screen and (max-width: 768px) {
    mix-blend-mode: normal;
    color: #0f0f0f;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 4rem;
      mix-blend-mode: difference;
      z-index: 5;
      background-color: #e5e5e5;
      box-shadow: 1px 1px 7px rgba(15, 15, 15, 0.425);
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 7rem;
      mix-blend-mode: difference;
      background-color: #e5e5e5;
      box-shadow: -1px 1px 7px rgba(15, 15, 15, 0.425);
    }
  }
`;
const IconsConatainer = styled.div`
  display: flex;
  gap: 1rem;
  z-index: 5;
`;

const MenuButton = styled.button`
  position: relative;
  cursor: pointer;
  font-size: 2rem;
  background: unset;
  border: none;
  color: inherit;
  outline: none;
  padding: 0;
  z-index: 15;
`;
const NavMenu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: white;
  width: 60%;
  height: 100%;
  max-width: 600px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding: auto;
  .active-link {
    color: rgb(252, 163, 17);
  }
`;

const BackDrop = styled.a`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.466);
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: "pointer";
`;
const LinkStyle = {
  color: "rgb(5, 13, 25)",
  fontSize: "2.5rem",
  fontWeight: 700,
  cursor: "pointer",
};
const activeStyle = {
  color: "rgb(252, 163, 17)",
};
const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <Header className="fade-in">
        <MenuButton onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
        </MenuButton>
        <IconsConatainer>
          <a href="https://github.com/ahmedfayezzz" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/ahmedfayezzz/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </IconsConatainer>
      </Header>
      {show && (
        <>
          <NavMenu>
            <Link
              onClick={handleClick}
              style={LinkStyle}
              to="home"
              spy={true}
              smooth={true}
              activeClass="active-link"
            >
              Home
            </Link>
            <Link
              onClick={handleClick}
              style={LinkStyle}
              to="projects"
              spy={true}
              smooth={true}
              activeClass="active-link"
            >
              Projects
            </Link>
            <Link
              onClick={handleClick}
              style={LinkStyle}
              to="about"
              spy={true}
              smooth={true}
              activeClass="active-link"
            >
              About
            </Link>
            <Link
              onClick={handleClick}
              style={LinkStyle}
              to="contact"
              spy={true}
              smooth={true}
              activeClass="active-link"
            >
              Contact
            </Link>
          </NavMenu>
          <BackDrop onClick={handleClick} />
        </>
      )}
    </>
  );
};

export default NavBar;
