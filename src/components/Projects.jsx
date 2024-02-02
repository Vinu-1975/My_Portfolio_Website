import { useState } from 'react';
import ReactPaginate from 'react-paginate';

function Projects() {

  const [currentPage, setCurrentPage] = useState(0); 
  const projectsPerPage = 3;

  const projects = [
    { id: 1, title: 'Project 1', imageUrl: './assets/project_chattersphere.png' },
    { id: 2, title: 'Project 2', imageUrl: './assets/project_chattersphere.png' },
    { id: 3, title: 'Project 3', imageUrl: './assets/project_chattersphere.png' },
    { id: 4, title: 'Project 3', imageUrl: './assets/project_chattersphere.png' },
    { id: 5, title: 'Project 3', imageUrl: './assets/project_chattersphere.png' },
    { id: 6, title: 'Project 3', imageUrl: './assets/project_chattersphere.png' },
    { id: 7, title: 'Project 3', imageUrl: './assets/project_chattersphere.png' },
  ];

  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const displayedProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="project">
      <div className="container">
        <h3>MY WORK</h3>
        <h1>Projects</h1>
        <p>Come on in and check out my projects! They&apos;re not just lines of code or designs – they&apos;re the result of my love for solving problems and getting creative. Let&apos;s take a peek together into the world where my skills and ideas collide.</p>
        <div className="project-list">
          {displayedProjects.map((project) => (
            <div className="card" key={project.id}>
              <div className="overlay">
                <div className="project-buttons">
                  <a href={project.link1} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.link2} target="_blank" rel="noopener noreferrer">Live Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination component */}
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </section>
  )
}

export default Projects

