// Importing Assets
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';

import javascriptLogo from './assets/javascript.png';
import reactjsLogo from './assets/reactjs.png';
import reduxLogo from './assets/redux.png';
import nextjsLogo from './assets/nextjs.png';
import tailwindcssLogo from './assets/tailwindcss.png';

import nodejsLogo from './assets/nodejs.png';
import expressjsLogo from './assets/express.png';
import mysqlLogo from './assets/mysql.png';
import mongodbLogo from './assets/mongodb.png';
import cLogo from './assets/c.png';
import cppLogo from './assets/cpp.png';
import gitLogo from './assets/git.png';
import githubLogo from './assets/github.png';
import vscodeLogo from './assets/vscode.png';
import postmanLogo from './assets/postman.png';
import glaLogo from './assets/collegeLogo.png';
import vpsLogo from './assets/vps_logo.png';



import figmaLogo from './assets/figma.png';
import netlifyLogo from './assets/netlify.png';



import agcLogo from './assets/agc_logo.png';
import newtonschoolLogo from './assets/newtonschool_logo.png';
import githubdetLogo from './assets/github_det.png';
import csprepLogo from './assets/cs_prep.png';
import javaLogo from './assets/java.png';
import pythonLogo from './assets/python.png';

// Skills Information
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    
     
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

// Experience Section
export const experiences = [
 
  {
    id: 0,
    img: agcLogo,
    role: 'Fullstack Developer',
    company: 'IETE HIT-IT',
    date: ' March 2024 - present',
    desc: 'Contributed to innovative projects as a Fullstack Developer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, MongoDB, Bootstrap , NodeJS , ExpressJS and ReactJS.',
    skills: ['ReactJS', 'Redux', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'MongoDB','NodeJS','ExpressJS'],
  },
  {
    id: 1,
    img: newtonschoolLogo,
    role: 'Fullstack Developer',
    company: 'ISA & ISOI',
    date: 'February 2024 - present',
    desc: 'Contributed to innovative projects as a Fullstack Developer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, MongoDB, Bootstrap , NodeJS , ExpressJS and ReactJS.',
    skills: ['ReactJS', 'Redux', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'MongoDB','NodeJS','ExpressJS'],
  },
];


// Education Section

 export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "HIT Hadia, West Bengal",
      date: "Sept 2023 - present",
      grade: "8.3 CGPA",
      desc: "I have pursuing my B.Tech in Information Technlogy from HIT Hadia, West Bengal. I gained a strong foundation in programming, software development, and computer science principles in HIT. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating System, Computer newworking , Web Development, and Software Engineering. I actively participating in various workshops and technical events, which enhance my skills and knowledge. My experience at Haldia Institute of Technology have been instrumental in shaping my technical abilities and professional growth.",
      degree: "bachelor of Technology in Information Technology ",
    },
    
    {
      id: 1,
      img: vpsLogo,
      school: "Kaligram High School , Bardhaman , West Bengal",
      date: "Apr 2021 - March 2022",
      grade: "86.5%",
      desc: "I completed my class 12 education from Kaligram High School , Bardhaman under the WBCHSE board, where I studied Physics, Chemistry,  Mathematics , Biology (PCMB).",
      degree: " WBCHSE(XII) - PCMB ",
    },
    {
      id: 1,
      img: vpsLogo,
      school: "Kaligram High School , Bardhaman , West Bengal",
      date: "Apr 2019 - March 2020",
      grade: "78%",
      desc: "I completed my class 10 education from Kaligram High School , Bardhaman, under the WBBSE board, where I studied Science with Computer.",
      degree: "WBBSE(X) ",
    },
  
  ]


// Projects Section
export const projects = [
  {
    id: 0,
    title: 'Health_Hub',
    description: 'This is a full stack project frontend is made by me using ReactJS , tailwind CSS and the rest API was handled by me  and the backend is made by the my friend Soumajit Banerjee using Spring boot ',
    image: githubdetLogo,
    tags: ['HTML', 'CSS', 'JavaScript', 'React JS', 'API','Tailwind CSS'],
  },
  {
    id: 1,
    title: 'Mentor & Mantis connect',
    description: 'It was a frontend gorup project . My contribution was made the website responsive and functional  ',
    image: csprepLogo,
    tags: [ 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  },
];
