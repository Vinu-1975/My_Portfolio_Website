import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function NavBar() {
  const [currentTab, setCurrentTab] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-me");
      const projectSection = document.getElementById("project");
      const experienceSection = document.getElementById("experience");
      const technologiesSection = document.getElementById("technologies"); // Add this line t
      const contactSection = document.getElementById("contact");

      const scrollPosition = window.scrollY + 200;

      // Set current tab based on scroll position
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
        scrollPosition < technologiesSection.offsetTop
      ) {
        setCurrentTab("experience");
      } else if (
        scrollPosition >= technologiesSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setCurrentTab("technologies");
      } 
      else if (scrollPosition >= contactSection.offsetTop) {
        setCurrentTab("contact");
      }
      
      // Add scrolled class when page is scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          VS
        </motion.div>
        <ul>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#about-me" className={currentTab === "about" ? "active" : ""}>
              <span className="nav-icon"><i className="fas fa-user"></i></span>
              <span className="nav-text">About</span>
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#project" className={currentTab === "projects" ? "active" : ""}>
              <span className="nav-icon"><i className="fas fa-code"></i></span>
              <span className="nav-text">Projects</span>
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#experience" className={currentTab === "experience" ? "active" : ""}>
              <span className="nav-icon"><i className="fas fa-briefcase"></i></span>
              <span className="nav-text">Experience</span>
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#technologies" className={currentTab === "technologies" ? "active" : ""}>
            <span className="nav-icon"><i className="fas fa-laptop-code nav-icon"></i></span>
            <span className="nav-text">Technologies</span>
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#contact" className={currentTab === "contact" ? "active" : ""}>
              <span className="nav-icon"><i className="fas fa-envelope"></i></span>
              <span className="nav-text">Contact</span>
            </a>
          </motion.li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar