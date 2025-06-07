import project_gre from "../assets/project_gre.png";
import project_chat from "../assets/project_chattersphere.png";
import project_chess from "../assets/project_chess.png";
import project_railway from "../assets/project_railway.jpeg";
import project_learn4u from "../assets/project_learn4u.png";
import project_portfolio from "../assets/project_portfolio.png"
import project_crop from "../assets/project_crop.png"
import project_battleship from "../assets/project_battleship.jpg"
import project_imageForgery from '../assets/project_imageForgery.jpg'
import project_emoteDetect from '../assets/project_emoteDetect.webp'
import project_radiantCancerDetect from '../assets/project_radiantCancerDetect.png'

export const techs = { 
  "React": "skyblue",
  "React Native": "skyblue",
  "Expressjs": "darkred",
  "Nodejs": "green",
  "MongoDB": "lightgreen",
  "Socket.io":"white",
  "HTML": "orangered",
  "CSS": "royalblue",
  "JavaScript": "gold",
  "jQuery": "darkblue",
  "PHP": "deepskyblue",
  "MySQL": "darkslategrey",
  "XAMPP": "darkgoldenrod",
  "Python": "darkgreen",
  "Pygame": "orangered",
  "Stockfish": "darkcyan",
  "Java": "darkorange",
  "Framer Motion": "deepskyblue",
  "Vite": "dodgerblue",
  "MicroPython": "darkseagreen",
  "Pico": "lightcoral",
  "DHT11": "lightskyblue",
  "pH sensor": "mediumorchid",
  "C":"darkslategray",
  "PyTorch": "#EE4C2C",
  "TensorFlow": "#FF6F00",
  "Flask": "black",
  "OpenCV": "#5C3EE8",
  "scikit-learn": "#F7931E",
  "Firebase": "#FFCA28",
  "Git": "#F05032",
  "GitHub": "#181717",
  "Android": "#3DDC84",
  "AndroidStudio": "#3DDC84",
  "GoogleCloud": "#4285F4",
  "Kotlin": "#7F52FF",
}

const projects = [
  {
    id: 1,
    title: "Forgery Localization in Images and Scanned Documents",
    imageUrl:project_imageForgery,
    about:"Dual-model system combining ELA+CNN and YOLO architectures to detect manipulated regions in images.",
    technologies:[
      {
        tech:'Python',
        color:techs.Python
      },
      {
        tech:'PyTorch',
        color:techs.Python
      },
      {
        tech:'Tensorflow',
        color:techs.TensorFlow
      },
      {
        tech:'Flask',
        color:techs.Flask,
      },
      {
        tech:'OpenCV',
        color:techs.OpenCV,
      },
      {
        tech:'Scikit-learn',
        color:techs["scikit-learn"],
      },
    ],
    githubLink:"https://github.com/Vinu-1975/Image-Forgery-Localization",
    demoLink:"https://www.youtube.com/watch?v=quLxV1YYVh8"
  },
  {
    id: 2,
    title: "EmoteDetect",
    imageUrl:project_emoteDetect,
    about:"EmoteDetect is an Android application. This app leverages advanced deep learning models to accurately detect facial emotions from images, providing a user-friendly interface for real-time emotion analysis.",
    technologies:[
      {
        tech:'Android',
        color:techs.Android
      },
      {
        tech:'AndroidStudio',
        color:techs.AndroidStudio
      },
      {
        tech:'Tensorflow',
        color:techs.TensorFlow
      },
      {
        tech:'Kotlin',
        color:techs.Kotlin
      },
    ],
    githubLink:"ghttps://github.com/Vinu-1975/EmoteDetect",
    demoLink:"https://www.linkedin.com/posts/vinayakan-v-s-9a2a9a222_as-part-of-the-mobile-application-development-activity-7259826854335766529-WjnE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgLugoBG0r9_wlxEIuUpu7bWHQGOuk0TFo",

  },
  { 
    id: 3, 
    title: "ChatterSphere", 
    imageUrl: project_chat, 
    about:"Modern chat app with real-time communication, account creation, profile management, group interactions, user search, group discussions, and image personalization.",
    technologies:[
      {
        tech:'React',
        color:techs.React
      },
      {
        tech:'Expressjs',
        color:techs.Expressjs
      },
      {
        tech:'MongoDB',
        color:techs.MongoDB
      },
      {
        tech:'Nodejs',
        color:techs.Nodejs
      },
      {
        tech:'Socket.io',
        color:techs["Socket.io"]
      }
    ],
    githubLink:"https://github.com/Vinu-1975/ChatterSphere2",
    demoLink:"https://chattersphere2.onrender.com/",
  },
  {
    id: 4,
    title: "RadiantCancerDetect",
    imageUrl: project_radiantCancerDetect,
    about:"RadiantCancerDetect uses machine learning to detect breast cancer from mammograms. Our web interface simplifies analysis for medical professionals, aiding in early detection and improved patient outcomes.",
    technologies:[
      {
        tech:'Python',
        color:techs.Python
      },
      {
        tech:'Tensorflow',
        color:techs.TensorFlow
      },
      {
        tech:'Flask',
        color:techs.Flask
      },
      {
        tech:'scikit-learn',
        color:techs["scikit-learn"]
      },
    ],
    githubLink:"https://github.com/Vinu-1975/RadiantCancerDetect",
  },
  {
    id: 5,
    title: "Smart Crop Prediction System",
    imageUrl:project_crop,
    about:"This project utilizes machine learning for real-time crop suggestions, enhancing agricultural decision-making with accurate predictions based on environmental factors.",
    technologies:[
      {
        tech:'MicroPython',
        color:techs.MicroPython
      },
      {
        tech:'Pico',
        color:techs.Pico
      },
      {
        tech:"DHT11-sensor",
        color:techs.DHT11
      },
      {
        tech:'pH-sensor',
        color:techs["pH sensor"]
      }
    ],
    githubLink:"https://github.com/Vinu-1975/Smart_Crop_Prediction_System",
  },
  { 
    id: 6, 
    title: "CheckMate Academy", 
    imageUrl: project_chess,
    about:"Chess game with puzzles, tutorials, AI modes. Features hint provision, diverse modes, and real-time game evaluation for enhanced strategic decision-making and engaging user experience.",
    technologies:[
      {
        tech:'Python',
        color:techs.Python
      },
      {
        tech:'Pygames',
        color:techs.Pygame
      },
      {
        tech:'Stockfish',
        color:techs.Stockfish
      },
    ],
    githubLink:"https://github.com/Vinu-1975/Checkmate-Academy",
  },
  {
    id: 7,
    title: "Portfolio",
    imageUrl:project_portfolio,
    about:"Discover more about me, explore my portfolio, and feel free to reach out. Let's connect and create something amazing together!",
    technologies:[
      {
        tech:'React',
        color:techs.React
      },
      {
        tech:'framer-motion',
        color:techs["Framer Motion"]
      },
      {
        tech:'Vite',
        color:techs.Vite
      },
    ],
    
  },
  { 
    id: 8, 
    title: "GreInsights", 
    imageUrl: project_gre ,
    about:"This app analyzes GRE scores, offers Ivy League recommendations based on 5-year admission trends. Ideal for college-bound students seeking guidance.",
    technologies:[
      {
        tech:'HTML5',
        color:techs.HTML
      },
      {
        tech:'CSS3',
        color:techs.CSS
      },
      {
        tech:'Javascript',
        color:techs.JavaScript
      },
      {
        tech:'MySQL',
        color:techs.MySQL
      },
      {
        tech:'pHp',
        color:techs.PHP
      },
      {
        tech:'XAMPP',
        color:techs.XAMPP
      }
    ],
    githubLink:"https://github.com/Vinu-1975/GRE_ANALYZER_WEB_APP",
    demoLink:"https://www.youtube.com/watch?v=Ub_O_5_vpQE",
  },
  { 
    id: 9, 
    title: "Railway Management System", 
    imageUrl: project_railway,
    about:"Java-based Railway Reservation System for Admins to manage trains and Users to book tickets, utilizing OOP principles.",
    technologies:[
      {
        tech:'Java',
        color:techs.Java
      }
    ],
    githubLink:"https://github.com/Vinu-1975/Railway_Reservation_System_Using_Java",
  },
  { 
    id: 10, 
    title: "Learn4U", 
    imageUrl: project_learn4u,
    about:"Online learning platform providing courses in programming, software development, physical education, and diverse subjects for comprehensive learning.",
    technologies:[
      {
        tech:'HTML5',
        color:techs.HTML
      },
      {
        tech:'CSS',
        color:techs.CSS
      },
      {
        tech:'Javascript',
        color:techs.JavaScript
      },
    ],
    githubLink:"https://github.com/Vinu-1975/Learn4U_Website_UI",
  },
  {
    id: 11,
    title:"BattleShip Board Game",
    imageUrl:project_battleship,
    about:"A Battleship Board Game implemented from scratch using C language",
    technologies:[
      {
        tech:'C',
        color:techs.C
      }
    ],
    githubLink:"https://github.com/Vinu-1975/BattleShip_Board_Game_in_C",
  }
];

export default projects;
