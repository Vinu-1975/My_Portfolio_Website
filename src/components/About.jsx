import myPic from '../assets/my_photo2.png';
import { TypeAnimation } from 'react-type-animation'

function About() {
  return (
    <section className="about-me">
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
                  ]}
                  wrapper="span"
                  speed={25}
                  style={{ fontSize: '1.5em', display: 'inline-block',color: 'blueviolet' }}
                  repeat={Infinity}
                />
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