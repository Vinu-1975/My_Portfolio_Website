import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaDatabase, FaDesktop, FaRobot, FaServer, FaComments } from 'react-icons/fa';
import { MdWeb, MdOutlineDesignServices } from 'react-icons/md';

function Services() {
    const services = [
        {
            icon: <MdWeb size={40} />,
            title: "Web Development",
            description: "Custom responsive websites and web applications using React, HTML, CSS, and JavaScript. From simple landing pages to complex web apps with authentication and real-time features."
        },
        {
            icon: <FaMobile size={40} />,
            title: "Mobile App Development",
            description: "Native Android applications and cross-platform mobile apps using React Native (Android + IOS)."
        },
        {
            icon: <FaServer size={40} />,
            title: "Backend Development",
            description: "Robust server-side solutions using Node.js, Express, and Firebase. API development, database design, and server management for scalable applications."
        },
        {
            icon: <FaDatabase size={40} />,
            title: "Database Design & Management",
            description: "Database architecture and management using MongoDB, MySQL, and Firebase Firestore. Data modeling, optimization, and integration with web and mobile applications."
        },
        {
            icon: <FaRobot size={40} />,
            title: "AI & Machine Learning Solutions",
            description: "Hands-on experience contributing to computer-vision and predictive-analytics projects (Python, TensorFlow, PyTorch, OpenCV) in collaborative teams—focusing on data prep, model fine-tuning, and integration rather than end-to-end solo model development."
        },
        // {
        //     icon: <MdOutlineDesignServices size={40} />,
        //     title: "UI/UX Design",
        //     description: "User-centered design for web and mobile applications with Figma. Creating intuitive, accessible, and visually appealing interfaces that enhance user experience."
        // },
        {
            icon: <FaComments size={40} />,
            title: 'Conversational AI & RAG Chatbots',
            description:
                'Build knowledge-aware chatbots using LangChain, OpenAI API, vector stores, and Retrieval-Augmented Generation (RAG) to deliver precise answers grounded in your proprietary data.',
        },
    ];

    return (
        <section className="services reveal" id="services">
            <div className="container">
                <motion.div
                    className="info"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="title">What I Do</h1>
                    <p>I offer a range of services to help bring your digital ideas to life. From web and mobile development to AI solutions, here's how I can help you.</p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;