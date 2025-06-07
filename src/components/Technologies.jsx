import { motion } from 'framer-motion';
import { techs } from '../resources/Info';

function Technologies() {
    // Map of technology names to their respective icons
    const techLogos = {
        React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        Android: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain-wordmark.svg",
        AndroidStudio: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
        Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        GoogleCloud: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg",
        Nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        Expressjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        'Socket.io': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
        HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        jQuery: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
        PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        'Framer Motion': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg',
        Vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
        C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        Kotlin : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original-wordmark.svg",
        PyTorch: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
        TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
        Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
        OpenCV: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
        "scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
        Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
    };

    return (
        <section className="technologies reveal" id="technologies">
            <div className="container">
                <div className="info">
                    <h1 className="title">Technologies</h1>
                    <p>Here are the technologies I've worked with and am proficient in. I'm always eager to learn and add more to my toolkit!</p>
                </div>
                <div className="tech-grid">
                    {Object.entries(techLogos).map(([tech, logoUrl], index) => (
                        <motion.div
                            key={tech}
                            className="tech-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            style={{ borderColor: techs[tech] }}
                        >
                            <img src={logoUrl} alt={tech} className="tech-img" />
                            <h3>{tech}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Technologies;