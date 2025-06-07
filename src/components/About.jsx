import myPic from '../assets/myPhoto_4.png';
import myPicAlt from '../assets/myPhoto6.png';
import { TypeAnimation } from 'react-type-animation'
import Resume from '../resources/Vinayakan_V_S_Resume.pdf'
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { SiFiverr } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

function About() {
  return (
    <section className="about-me reveal" id='about-me'>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <motion.div
        className="about-me-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Hey! Its Me,</h3>
        <h2><span className="name">Vinayakan V S</span></h2>
        <h3>I&#39;m a </h3>
        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            2000,
            'React-Native Developer',
            2000,
            'Web Developer',
            2000,
            'Front-End Developer',
            2000,
            'Back-End Developer',
            2000,
            'Programmer',
            2000,
          ]}
          wrapper="span"
          speed={25}
          style={{ fontSize: '1.5em', display: 'inline-block', color: 'var(--accent-color)' }}
          repeat={Infinity}
        />
        <p className="bio-text">
          Passionate developer with expertise in web and mobile technologies. I create elegant, user-friendly solutions that solve real-world problems.
        </p>
        <div className='contact-icons'>
          <ul>
            <motion.li className="icon-btn tooltip" whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <a href="mailto:vinayakanvs2003@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-regular fa-envelope"></i>
              </a>
              <span className="tooltip-text">vinayakanvs2003@gmail.com</span>
            </motion.li>
            <motion.li className="icon-btn tooltip" whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <a href="https://www.instagram.com/vinu__1975?igsh=MXdraGprdjczNWJvNA==" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <span className="tooltip-text">@vinu__1975</span>
            </motion.li>
            <motion.li className="icon-btn tooltip" whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <a href="https://wa.me/7994377697" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <span className="tooltip-text">7994377697</span>
            </motion.li>
            <motion.li className="icon-btn tooltip" whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <a href="https://www.linkedin.com/in/vinayakan-v-s-9a2a9a222/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <span className="tooltip-text">linkedin</span>
            </motion.li>
            <motion.li className="icon-btn tooltip" whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <a href="https://github.com/Vinu-1975" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <span className="tooltip-text">github</span>
            </motion.li>
            <motion.li className="icon-btn tooltip" whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <a href="https://leetcode.com/u/vinu_1975/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode size={20} />
              </a>
              <span className="tooltip-text">leetcode</span>
            </motion.li>
            <motion.li className="icon-btn tooltip" whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <a href="https://www.fiverr.com/vinayakvs522/buying?source=avatar_menu_profile" target="_blank" rel="noopener noreferrer">
              <TbBrandFiverr size={20}/>
              </a>
              <span className="tooltip-text">Fiverr</span>
            </motion.li>
          </ul>
        </div>
        <motion.div
          className="resume-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <i className="fa-regular fa-file-lines"></i>Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="about-me-pic"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="photo-frame">
          <div className="photo-main">
            <img src={myPic} alt="Vinayakan V S" />
          </div>
          <motion.div
            className="photo-accent"
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img src={myPicAlt} alt="Vinayakan V S" />
          </motion.div>
          <div className="photo-border"></div>
          <div className="avatar-glow"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default About