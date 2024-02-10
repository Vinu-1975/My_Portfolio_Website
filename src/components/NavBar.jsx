import { useEffect, useState } from "react";


function NavBar() {

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
  )
}

export default NavBar