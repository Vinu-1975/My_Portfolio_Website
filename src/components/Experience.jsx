import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'

function Experience() {
  return (
    <section className="experience" id="experience">
        <div className="container">
            <div className="info">
                <h1 className="title">Experience</h1>
                <p>Hey there! I&apos;m on a journey of creativity and exploration. Come take a stroll through my experiences &ndash; each project is like a chapter in my story of learning and making cool things happen. Excited to share the ride with you!</p>
            </div>
            <div className="timeline-container">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        contentStyle={{background:'#1d1836',color:"#fff"}}
                        contentArrowStyle={{borderRight:"7px solid #232631"}}
                        date="March 2020 - April 2021"
                        iconStyle={{background:"#E6DEDD"}}
                        icon={
                            <div className="company_logo_container">
                                <img 
                                    src="./src/assets/einsicht_tech.png"
                                    alt="Einsicht Technologies"
                                    className="company_logo" 
                                />
                            </div>
                        }
                    >
                        <div className="description-container">
                            <h3 className="job-title">Web Developer Intern</h3>
                            <p className="company-name">Einsicht Technologies</p>
                            <ul>
                                <li> Collaborated with two other interns to create a culturally tailored, responsive login/signup interface.</li>
                                <li>Utilized HTML, CSS, JavaScript, and jQuery to implement responsive and user-friendly authentication interfaces, enhancing user experience and security</li>
                                <li>Gained exposure to Figma for design mockups and incorporated HTML code within PHP scripts, broadening my understanding of web development frameworks.</li>
                            </ul>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    </section>
  )
}

export default Experience