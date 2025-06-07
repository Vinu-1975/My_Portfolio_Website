import { useEffect, useState } from "react";
import projects from "../resources/Info";
import Pagination from "./Pagination";
import { motion } from "framer-motion";

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(2);

  // Function to update projects per page based on screen size
  const updateProjectsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      // Large screens, display 3 projects per page
      setProjectsPerPage(3);
    } else {
      // Small screens, display 2 projects per page
      setProjectsPerPage(2);
    }
  };

  // useEffect hook to update projects per page on component mount and window resize
  useEffect(() => {
    updateProjectsPerPage(); // Initial setup
    window.addEventListener("resize", updateProjectsPerPage); // Event listener for window resize
    return () => {
      window.removeEventListener("resize", updateProjectsPerPage); // Clean up on unmount
    };
  }, []);

  const lastProjectIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastProjectIndex - projectsPerPage;
  const currentProjects = projects.slice(firstProjectIndex, lastProjectIndex);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const textVariant = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="project reveal" id="project">
      <div className="container">
        <motion.div 
          className="info"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1>Projects</h1>
          <p>
            Come on in and check out my projects! They&apos;re not just lines of
            code or designs – they&apos;re the result of my love for solving
            problems and getting creative. Let&apos;s take a peek together into
            the world where my skills and ideas collide.
          </p>
        </motion.div>
        
        <div className="project-list">
          {currentProjects.map((project) => (
            <motion.div 
              className="card-container" 
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card">
                <div className="card-image">
                  <img src={`${project.imageUrl}`} alt={project.title} />
                  <div className="overlay">
                    <div className="project-buttons">
                      {project.githubLink && <a
                        href={project.githubLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-btn"
                      >
                        <i className="fab fa-github"></i> GitHub
                      </a>}
                      {project.demoLink && <a
                        href={project.demoLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-btn"
                      >
                        <i className="fas fa-external-link-alt"></i> Demo
                      </a>}
                    </div>
                  </div>
                </div>
                
                <div className="card-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-info">
                    {project.about && <p>{project.about}</p>}
                  </div>
                  <div className="tech-stack">
                    {project.technologies &&
                      project.technologies.map((tech, i) => (
                        <span className="tech" key={i} style={{ backgroundColor: tech.color + '20', color: tech.color }}>
                          {tech.tech}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <Pagination
          totalProjects={projects.length}
          projectsPerPage={projectsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

export default Projects;
