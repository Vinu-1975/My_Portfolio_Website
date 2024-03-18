import project_gre from "../assets/project_gre.png";
import project_chat from "../assets/project_chattersphere.png";
import project_chess from "../assets/project_chess.png";
import project_railway from "../assets/project_railway.jpeg";
import project_learn4u from "../assets/project_learn4u.png";
import project_portfolio from "../assets/project_portfolio.png"
import project_crop from "../assets/project_crop.png"
import project_battleship from "../assets/project_battleship.jpg"

const techs = { 
  "React": "skyblue",
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
  "C":"darkslategray"
}

const projects = [
  { 
    id: 1, 
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
    ]
  },
  {
    id: 2,
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
    ]
  },
  // {
  //   id: 3,
  // },
  { 
    id: 4, 
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
    ]
  },
  {
    id: 5,
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
    ]
  },
  { 
    id: 6, 
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
    ]
  },
  { 
    id: 7, 
    title: "Railway Management System", 
    imageUrl: project_railway,
    about:"Java-based Railway Reservation System for Admins to manage trains and Users to book tickets, utilizing OOP principles.",
    technologies:[
      {
        tech:'Java',
        color:techs.Java
      }
    ]
  },
  { 
    id: 8, 
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
    ]
  },
  {
    id: 9,
    title:"BattleShip Board Game",
    imageUrl:project_battleship,
    about:"A Battleship Board Game implemented from scratch using C language",
    technologies:[
      {
        tech:'C',
        color:techs.C
      }
    ]
  }
];

export default projects;
