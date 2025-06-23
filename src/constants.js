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
    role: 'Fullstack Engineer',
    company: 'Agumentik Group of Companies',
    date: 'July 2023 - March 2024',
    desc: 'Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS.',
    skills: ['ReactJS', 'Redux', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'SQL'],
  },
  {
    id: 1,
    img: newtonschoolLogo,
    role: 'Frontend Intern',
    company: 'Newton School',
    date: 'September 2021 - August 2022',
    desc: 'Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Figma', 'Material UI'],
  },
];

// Education Section


// Projects Section
export const projects = [
  {
    id: 0,
    title: 'GitHub Profile Detective',
    description: 'A powerful and user-friendly React.js application designed to uncover detailed GitHub profile information.',
    image: githubdetLogo,
    tags: ['HTML', 'CSS', 'JavaScript', 'React JS', 'API'],
  },
  {
    id: 1,
    title: 'CS Prep',
    description: 'A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions.',
    image: csprepLogo,
    tags: ['React JS', 'Node.js', 'MongoDB', 'Express', 'HTML', 'CSS', 'JavaScript'],
  },
];
