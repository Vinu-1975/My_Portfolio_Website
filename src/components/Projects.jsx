import { useEffect, useState } from "react";
import projects from "../resources/Info";
import Pagination from "./Pagination";
import { motion } from "framer-motion";

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
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
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };


  return (
    <section className="project" id="project">
      <div className="container">
        <motion.div 
          className="info"
          // variants={textVariant(12)}
        >
          <motion.h1 variants={textVariant}>Projects</motion.h1>
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
            >
              <div className="card">
                <img src={`${project.imageUrl}`} alt="" />
                <div className="overlay">
                  <div className="project-buttons">
                    <a
                      href={projects.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={projects.link2}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                {project.about && project.about}
              </div>
              <div className="tech-stack">
                {project.technologies &&
                  project.technologies.map((tech, i) => (
                    <div className="tech" key={i} style={{ color: tech.color }}>
                      {"#" + tech.tech}
                    </div>
                  ))}
              </div>
              {/* {console.log(project.technologies)} */}
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
