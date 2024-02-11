import { useState } from "react";
import projects from "../resources/Info";
import Pagination from "./Pagination";

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [projectsPerPage, _setProjectsPerPage] = useState(2);

  const lastProjectIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastProjectIndex - projectsPerPage;
  const currentProjects = projects.slice(firstProjectIndex, lastProjectIndex);

  return (
    <section className="project" id="project">
      <div className="container">
        <h1>Projects</h1>
        <p>
          Come on in and check out my projects! They&apos;re not just lines of
          code or designs – they&apos;re the result of my love for solving
          problems and getting creative. Let&apos;s take a peek together into
          the world where my skills and ideas collide.
        </p>
        <div className="project-list">
          {currentProjects.map((project) => (
            <div className="card-container" key={project.id}>
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
                {(project.about)&& project.about}
              </div>
              <div className="tech-stack">
                {project.technologies && project.technologies.map((tech,i)=>(
                  <div className="tech" key={i} style={{color:tech.color}}>
                    {"#"+tech.tech}
                  </div>
                ))}
              </div>
              {/* {console.log(project.technologies)} */}
            </div>
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
