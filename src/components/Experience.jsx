import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import einsicht from '../assets/einsicht_tech.png'
import { motion } from 'framer-motion'

function Experience() {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Einsicht Technologies",
      date: "Nov 2022 - Dec 2022",
      logo: einsicht,
      points: [
        "Collaborated with two other interns to create a culturally tailored, responsive login/signup interface.",
        "Utilized HTML, CSS, JavaScript, and jQuery to implement responsive and user-friendly authentication interfaces, enhancing user experience and security.",
        "Gained exposure to Figma for design mockups and incorporated HTML code within PHP scripts, broadening my understanding of web development frameworks."
      ],
      skills: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "Figma"]
    },
    {
      title: "Web + React Native Developer",
      company: "Bandlr.com",
      date: "Jun 2024 - Present",
      logo: einsicht, // Replace with actual logo when available
      points: [
        "Developed event-based social chat web app (React, Node.js) deployed on GCP with CI/CD, growing to 200+ active users.",
        "Engineered companion React Native app (Android + IOS) with push notifications & geo-location features (200km radius event recommendations).",
        "Leveraged Firebase suite (Firestore, Functions, Storage, Auth) for backend, data, and authentication needs.",
        "Packaged and submitted Android app (.aab) to Google Play Store."
      ],
      skills: ["React", "React Native", "Node.js", "Firebase", "GCP", "CI/CD"]
    }
  ];

  return (
    <section className="experience reveal" id="experience">
      <div className="container">
        <motion.div 
          className="info"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="title">Experience</h1>
          <p>My professional journey showcases a blend of technical expertise and creative problem-solving. Each role has contributed to my growth as a developer and shaped my approach to creating impactful digital solutions.</p>
        </motion.div>
        
        <div className="timeline-container">
          <VerticalTimeline lineColor="rgba(76, 201, 240, 0.3)">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                contentStyle={{
                  background: 'rgba(29, 24, 54, 0.8)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  border: '1px solid rgba(76, 201, 240, 0.2)',
                  borderRadius: '15px',
                  padding: '2rem'
                }}
                contentArrowStyle={{ borderRight: "10px solid rgba(76, 201, 240, 0.3)" }}
                date={experience.date}
                dateClassName="experience-date"
                iconStyle={{
                  background: "#E6DEDD",
                  boxShadow: '0 0 0 4px rgba(76, 201, 240, 0.3), inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)'
                }}
                icon={
                  <div className="company_logo_container">
                    <img 
                      src={experience.logo}
                      alt={experience.company}
                      className="company_logo" 
                    />
                  </div>
                }
              >
                <div className="description-container">
                  <h3 className="job-title">{experience.title}</h3>
                  <p className="company-name">{experience.company}</p>
                  
                  <ul className="description">
                    {experience.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                  
                  <div className="skills-container">
                    {experience.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="skill-tag"
                        style={{ 
                          backgroundColor: `rgba(76, 201, 240, ${0.1 + (skillIndex * 0.05)})`,
                          border: '1px solid rgba(76, 201, 240, 0.3)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Experience