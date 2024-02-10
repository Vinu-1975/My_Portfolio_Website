import myPic from '../assets/my_photo2.png';
import { TypeAnimation } from 'react-type-animation'
import Resume from '../resources/Vinayakan_V_S_Resume.pdf'
function About() {
  return (
    <section className="about-me" id='about-me'>
          <div className="about-me-text">
              {/* <h2>Hello There! Im &ldquo;<span className="title">{}</span>&rdquo;</h2> */}
              <h3>Hi! I&#39;m</h3>
              <h2><span className="name">Vinayakan V S&#44;</span></h2>
              <h3>I&#39;m a </h3>
              <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'Programmer',
                    2000,
                    'Web Developer',
                    2000,
                    'Front-End Developer',
                    2000,
                    'Back-End Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={25}
                  style={{ fontSize: '1.5em', display: 'inline-block',color: 'blueviolet' }}
                  repeat={Infinity}
                />
                <div className='contact-icons'>
                  <ul>
                    <a href="mailto:vinayakanvs2003@gmail.com" target="_blank" rel="noopener noreferrer"><li><i className="fa-regular fa-envelope"></i></li></a>
                    <a href="https://www.instagram.com/vinu__1975?igsh=MXdraGprdjczNWJvNA==" target="_blank" rel="noopener noreferrer"><li><i className="fa-brands fa-instagram"></i></li></a>
                    <a href="https://wa.me/7994377697" target="_blank" rel="noopener noreferrer"><li><i className="fa-brands fa-whatsapp"></i></li></a>
                    <a href="www.linkedin.com/in/vinayakan-v-s-9a2a9a222" target="_blank" rel="noopener noreferrer"><li><i className="fa-brands fa-linkedin-in"></i></li></a>
                    <a href="https://github.com/Vinu-1975" target="_blank" rel="noopener noreferrer"><li><i className="fa-brands fa-github"></i></li></a>
                  </ul>
                </div>
                <div className="resume-button">
                  <a href={Resume} target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-file-lines"></i>Resume</a>
                </div>
          </div>
          <div className="about-me-pic">
            <div className="avatar-container">
                <div className="avatar">
                    <img src={myPic} alt="hello" />
                </div>
            </div>
          </div>
        </section>
  )
}

export default About