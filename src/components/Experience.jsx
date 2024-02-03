import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'

function Experience() {
  return (
    <section className="experience">
        <div className="container">
            <div className="info">
                <h1 className="title">Experience</h1>
                <p>Come on in and check out my projects! They&apos;re not just lines of code or designs – they&apos;re the result of my love for solving problems and getting creative. Let&apos;s take a peek together into the world where my skills and ideas collide.</p>
            </div>
            <div className="timeline-container">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        contentStyle={{background:'#1d1836',color:"#fff"}}
                        contentArrowStyle={{borderRight:"7px solid #232631"}}
                        date="March 2020 - April 2021"
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
                        <div>
                            <h3>Web Developer</h3>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    </section>
  )
}

export default Experience