import project_gre from "../assets/project_gre.png";
import project_chat from "../assets/project_chattersphere.png";
import project_chess from "../assets/project_chess.png";
import project_railway from "../assets/project_railway.jpeg";
import project_learn4u from "../assets/project_learn4u.png";

const techs = { 
  "React": "skyblue",
  "Expressjs": "darkred",
  "Nodejs": "green",
  "MongoDB": "lightgreen",
  "Socket.io":"white",
  "HTML": "orangered",
  "CSS": "royalblue",
  "JavaScript": "yellow",
  "jQuery": "darkblue",
  "PHP": "deepskyblue",
  "MySQL": "darkslategrey",
  "XAMPP": "darkgoldenrod"
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
    id: 3, 
    title: "CheckMate Academy", 
    imageUrl: project_chess 
  },
  { 
    id: 4, 
    title: "Railway Management System", 
    imageUrl: project_railway 
  },
  { 
    id: 5, 
    title: "Learn4U", 
    imageUrl: project_learn4u 
  },
];

export default projects;
