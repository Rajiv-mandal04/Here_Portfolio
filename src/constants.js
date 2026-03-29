// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import postgreLogo from './assets/tech_logo/postgre.png';
// Experience Section Logo's
import webverseLogo from './assets/company_logo/frontend.png';
import agcLogo from './assets/company_logo/data_sc.png';
// Education Section Logo's
import bsaLogo from './assets/education_logo/mmdu.png';
import vpsLogo from './assets/education_logo/DSC.jpg';
import rjvLogo from './assets/education_logo/JS.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/LM.png';
import HelpMateLogo from './assets/work_logo/HelpMate.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },

    
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      {name:'django', logo:pythonLogo},
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      {name:'react js', logo:reactjsLogo}

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Jupyter Notebook', logo: mcLogo },
      { name: 'Figma', logo: figmaLogo },
      {name:'pycharm', logo:vscodeLogo},
      {name:'docker', logo:nodejsLogo}
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Frontend Developer",
      
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the React.js, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MySQL",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Data Science Engineer",
      
      date: "July 2024 -Present",
      desc: "Contributed as a Data Science Engineer and Full-Stack Developer by building ML models, optimizing data pipelines, analyzing data, and developing responsive web applications using Python, SQL, HTML, CSS, JavaScript, PHP, Bootstrap, and ReactJS..",
      skills: [
        "TABLEAU",
        "Python",
        "POWER BI",
        "JUPYTER NOTEBOOK",
        "NLP",
        "POSTGRESQL",
        "ML",
      
      ],
    },
    
  ];
  
  export const education = [
    
    {
      id: 1,
      img: bsaLogo,
      school: "MMDU COLLEGE, HARYANA",
      date: "AUG 2023 - 2027",
      grade: "71.42%",
      desc: "Pursuing B.Tech in Computer Science from MMDU, Haryana, with a strong focus on Data Science, Machine Learning, Web Technologies, and Database Management, gaining hands-on experience through real-world projects.",
      degree: "B.Tech CSE",
    },
    {
      id: 2,
      img: rjvLogo,
      school: "JanakpurDham, Nepal",
      date: "March 2019 - March 2020",
      grade: "93.75%",
      desc: "I completed my class 10th education from Secondary Education Examination (SEE) under NEB, Nepal, building a strong academic foundation and a disciplined approach to continuous learning.",
      degree: "Janaki Sec. Boa. School",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "JanakpurDham, Nepal",
      date: "March 2020 - March 2022",
      grade: "74.75%",
      desc: "Completed Higher Secondary Education under the National Examination Board (NEB), Nepal, strengthening my analytical thinking and academic foundation.",
      degree: "Dhanusha Science Campus",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Smart Attendance System",
      description:
        "Developed a machine learning-based smart attendance system using face recognition with OpenCV. Implemented time-based duplicate attendance prevention and stored attendance records in Excel.",
      image: githubdetLogo,
      tags: ["Python", "OpenCV", "Haar Cascade", "Face Recognition", " Pandas","Flask"],
      github: "https://github.com/Rajiv-mandal04/Smart-Attendance-System",
      webapp: "https://github.com/Rajiv-mandal04/Smart-Attendance-System",
    },
    {
      id: 1,
      title: "LM System",
      description:
        " Developed a full-stack web-based Library Management System to manage book inventory and student activities. The system allows students to search, request, issue, renew, and track books, while admins can manage records, monitor due dates, and calculate fines automatically.",
      image: csprepLogo,
      tags: ["HTML", "CSS", "PHP", "MySQL (XAMPP)"],
      github: "https://github.com/Rajiv-mandal04/LM_system",
      webapp: "https://github.com/Rajiv-mandal04/LM_system",
    },
    {
      id: 2,
      title: "HelpMate App",
      description:
        "HelpMate - An Emergency Tracker with one-click SOS and live location sharing via Google Maps and more feature in it like Gaurdian chat, fake call, Voice Recording, Women self-defense tips, and Men self-defense tips for critical situations. ",
      image: HelpMateLogo,
      tags: ["ReactJs", "NodeJs", "MongoDB", "Tailwindcss",],
      github: "https://github.com/Rajiv-mandal04/Helpmate",
      webapp: "https://github.com/Rajiv-mandal04/Helpmate",
    },
  ];  