import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from 'react-type-animation'
import './App.css';
import myPic from './assets/my_photo2.png';


const App = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    

    return (
      <div className="particle-container">
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <nav>
          <ul>
            <li>About</li>
            <li>Project</li>
            <li>Experience</li>
            <li>Education</li>
            <li>Achievements</li>
          </ul>
        </nav>
        <section className="about-me">
          <div className="about-me-text">
              {/* <h2>Hello There! Im &ldquo;<span className="title">{}</span>&rdquo;</h2> */}
              <h2>Hi! I&#39;m</h2>
              <h2><span className="name">Vinayakan V S&#44;</span></h2>
              <h2>I&#39;m a </h2>
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
        
      </div>
    );
};

export default App