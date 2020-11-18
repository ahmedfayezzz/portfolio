import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <body>
      <NavBar />
      <main>
        <Home />
        <Projects />
        <svg
          style={{ backgroundColor: "#fca311", display: "block" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#14213d"
            fill-opacity="1"
            d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <About />
        <svg
          style={{ backgroundColor: "#14213d", display: "block" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#e5e5e5"
            fill-opacity="1"
            d="M0,96L0,256L360,256L360,288L720,288L720,256L1080,256L1080,224L1440,224L1440,320L1080,320L1080,320L720,320L720,320L360,320L360,320L0,320L0,320Z"
          ></path>
        </svg>
        <Contact />
      </main>
    </body>
  );
};

export default App;
