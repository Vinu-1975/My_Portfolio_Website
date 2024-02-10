import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import "./App.css";
import "./responsiveness.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const [currentTab, setCurrentTab] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-me");
      const projectSection = document.getElementById("project");
      const experienceSection = document.getElementById("experience");
      const contactSection = document.getElementById("contact");

      const scrollPosition = window.scrollY + 200; // Offset to account for navbar height or other factors

      if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < projectSection.offsetTop
      ) {
        setCurrentTab("about");
      } else if (
        scrollPosition >= projectSection.offsetTop &&
        scrollPosition < experienceSection.offsetTop
      ) {
        setCurrentTab("projects");
      } else if (
        scrollPosition >= experienceSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setCurrentTab("experience");
      } else if (scrollPosition >= contactSection.offsetTop) {
        setCurrentTab("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="particle-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 20,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <nav>
        <ul>
          <li>
            <a href="#about-me" className={currentTab === "about" ? "active" : ""}>About</a>
          </li>
          <li>
            <a href="#project" className={currentTab === "projects" ? "active" : ""}>Projects</a>
          </li>
          <li>
            <a href="#experience" className={currentTab === "experience" ? "active" : ""}>Experience</a>
          </li>
          <li>
            <a href="#contact" className={currentTab === "contact" ? "active" : ""}>Contact</a>
          </li>
        </ul>
      </nav>
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
