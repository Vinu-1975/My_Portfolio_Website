import PropTypes from 'prop-types';

function Pagination({ totalProjects, projectsPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pages.push(i)
  }
  return (
    <div className='pagination'>
      {
        pages.map((page, index) => {
          return <button
            key={index}
            className={page == currentPage ? 'active' : ''}
            onClick={() => setCurrentPage(page)}>{page}
          </button>
        })
      }
    </div>
  )
}

Pagination.propTypes = {
  totalProjects: PropTypes.number.isRequired,
  projectsPerPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination