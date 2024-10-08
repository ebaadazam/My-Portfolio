import pay from '../images/payment.jpg';
import ecomm from '../images/ecomm.jpg';
import hiring from '../images/hiringskills.jpg';
import cars from '../images/cars.jpg';
import facetime from '../images/facetime.jpg';
import bookshow from '../images/bookshow.jpg';
import ebd from '../images/EbaadImg.jpg';

export const Bio = {
  name: "Ebaad Azam",
  roles: [
    "Full Stack Developer",
    "Backend Developer",
    "Programmer",
  ],
  description:
    "A Software Developer skilled in Java and Python programming language with a profound understanding of Object-Oriented Programming (OOP) concepts and Data Structures & Algorithms (DSA). I have gained proficiency in Core Java, Collection APIs, JUnit, JDBC, Servlets JSP, Hibernate, Restful APIs and Web Services, Spring Boot and MicroServices. Also worked practically on MongoDB and MySQL Databases for efficient storage management. Familiar with C#, Cpp, React and Kotlin as well.",
  github: "https://github.com/ebaadazam",
  resume:
    "https://drive.google.com/file/d/1s01jFFMzIedW6C0Ti6xI8bdKwQNXM_wL/view",
  linkedin: "https://www.linkedin.com/in/ebaadazam90/",
  twitter: "https://twitter.com/ebaad90",
  insta: "https://www.instagram.com/ebaad09/",
  facebook: "https://www.facebook.com/ebaadazam/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Spring Boot",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
      },
      {
        name: "Microservices",
        image: "https://cdn-icons-png.flaticon.com/512/6357/6357632.png", // Placeholder, no specific icon
      },
      {
        name: "Hibernate",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/hibernate/hibernate-original.svg",
      },
      {
        name: "JDBC",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpvMA4XqQXOmEUEq_m8SjhQEMb0_Y5VjxRQ&s", // Placeholder, no specific icon
      },
      {
        name: "RESTful APIs",
        image: "https://miro.medium.com/v2/resize:fit:1200/1*J3G3akaMpUOLegw0p0qthA.png", // Placeholder, no specific icon
      }
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cNNedeQqrj0xJ6jrcewGnBMvrI--vaKQIi8xoZUtWnyupuFWYAsRQLaLtJy_L-DzU6w&usqp=CAU",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Bitbucket",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bitbucket-blue-logomark-only.svg/512px-Bitbucket-blue-logomark-only.svg.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "IntelliJ IDEA",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png",
      },
      {
        name: "Eclipse",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Eclipse-Logo-2022.svg/512px-Eclipse-Logo-2022.svg.png",
      },
      {
        name: "GitHub Desktop",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e4/GitHubDesktop_Logo.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Postman",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2YrowIKVQFJbX10t3Fon48trKz0QymS-Xg&s",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://cdn.prod.website-files.com/666be39db8137e634ad49ad9/667960e50ea1b7fa24efc7e8_iphone-logo.png",
    role: "Full-Stack Developer",
    company: "Memorly.AI Bengaluru",
    date: "Aug 2023 - July 2023",
    desc: "Developed and integrated data-driven conversational AI Chatbots into various third party channels such as instagram, whatsapp allowing businesses to seamlessly provide customer support and engagement.",
    skills: [
      "Python",
      "Django",
      "Django Rest Framework",
      "Reactjs",
      "JavaScript",
      "Odoo",
      "Docker",
      "Linux",
    ],
    doc: "https://media.licdn.com/dms/image/D4D2DAQFlp60ZqHuaFQ/profile-treasury-image-shrink_1280_1280/0/1691180828512?e=1692381600&v=beta&t=mM5Y_NE5EPlQhez5FAN6NLVSKcO_Ojt_9Gq3mnFGkAQ",
  },
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFpxufHoxdsln343dubAapulHdUssZfT1wg&s",
    role: "Java Software Engineer Intern",
    company: "HulkHire Tech Hyderabad",
    date: "June 2023 - Present",
    desc: "Working on the backend of payment integration for e-comerce client using Spring Boot for the backend, expose RESTful APIs and JDBC for effective database management.",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring MVC",
      "Microservices",
      "RESTful APIs",
      "JDBC",
      "Hibernate",
      "AWS",
      "EC2",
      "ActiveMQ",
      "JUnit",
    ],
  },
  {
    id: 1,
    img: "https://noqs.in/wp-content/uploads/2024/01/Purple-logo-in-white-BG-.jpeg",
    role: "Data Analytics Intern",
    company: "NoQs Digital Ahemedabad",
    date: "June 2023 - July 2023",
    desc: "Designed and deployed web applications using Python and Django, boosting user satisfaction by 25%. Enhanced and analyzed UI and functionality for efficient data management, reducing data processing time by 30 % and design databases using SQL, leading to a 20% improvement in query performance.",
    skills: [
      "Python",
      "Numpy",
      "Pandas",
      "PowerBi",
      "Google Sheets",
      "Data Analysis",
      "Dashboard Building"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://www.tmu.ac.in/img/img-1.jpg",
    school: "Teerthankar Mahaveer University, Moradabad.",
    date: "Aug 2021 - June 2024",
    grade: "8.5 CGPA",
    desc: "I have graduated with a Bachelor's degree in Computer Science and Engineering in the year 2024 at Teerthankar Mahaveer University which is one of the best private universities in Uttar Pradesh. I have completed 6 semesters and have a CGPA of 8.5. Throughout my BCA journey, I did various courses and internships in the field of software development. I am quite proficient in Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I have also worked on exciting projects with a team of talented developers. Apart from coding, I have also participated in Vocabaddicts 3.0 a verbal english competition where I secured 2nd position.",
    degree: "Bachelor of Computer Application - BCA, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://www.schooldekho.org/storage/logo//hcx0fyr9mvk8wkcwwwgs4kgk0s044cw.jpg",
    school: "Wilsonia College, Moradabad",
    date: "Apr 2020 - Apr 2021",
    grade: "80.2%",
    desc: "I completed my senior secondary education at Wilsonia College, Moradabad, where I studied Science with Computer Science.",
    degree: "ISC(XII), Science with Computer",
  },
  {
    id: 2,
    img: "https://www.schooldekho.org/storage/logo//hcx0fyr9mvk8wkcwwwgs4kgk0s044cw.jpg",
    school: "Wilsonia College, Moradabad",
    date: "Apr 2018 - Apr 2019",
    grade: "82.3%",
    desc: "I completed my secondary education at Wilsonia College, Moradabad, where I studied Science with Computer Application.",
    degree: "ICSC(X), Science with Computer",
  },
];

export const projects = [
  {
    id: 9,
    title: "Payment Integration",
    description:
      "Developed a Payment System using the Checkout feature of Stripe Payment Provider involving the money settlement from the customer's bank account to stripe. In this project, one-time payment method is used rather than the subscription method. Also developed the Microservices architecture including all the major principles required to make the project reliable and loosely-coupled. I'm using Rest APIs in order to establish the communication between the certain Microservices",
    image: pay,
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring MVC",
      "Microservices",
      "RESTful APIs",
      "JDBC",
      "Hibernate",
      "AWS",
      "EC2",
      "ActiveMQ",
      "JUnit",
    ],
    category: "web app",
    github: "https://github.com/ebaadazam/Payment-Processing-Service",
    webapp: "https://checkout.stripe.com/c/pay/cs_test_a1cZfxa9II8LlVqULZP2TT53TBfgzooyqNTBnxIB3qfbFijvBhjHbI18u6#fidkdWxOYHwnPyd1blpxYHZxWjA0VWZtb2NXdDVRQ1NqUmo2RkA3d0R2PGlnR39PRzZgSDBDXFEzVmxzRm5TYHxAQHdmTnF3XFRfbm5ccGtIcndvNzI9QFBmRHFPc31qYzAwUnN8ZFFNPEpLNTU9YDRtcW1RSycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
  },
  {
    id: 0,
    title: "E-Commerce Web App",
    description:
      " I have developed a full stack E-Commerce Web Application using Spring Boot for the backend to expose RESTful APIs and uses JDBC for efficient database interactions and React JS for the frontend. On the frontend, the API Integration has been done using Redux and Axios for managing the global application state and for handling asynchronous API requests. Key functionalities include secure user authentication and authorization using JWT Token and comprehensive product management with CRUD operations, and robust cart and order handling",
    image: ecomm,
    tags: ["Advanced Java", "Spring Boot", "Spring Security", "Microservices", "JWT", "RESTful APIs", "Reactjs", "Redux", "Axios", "JavaScript", "MySQL"],
    category: "web app",
    github: "https://github.com/ebaadazam/E-Commerce-Store",
    webapp: "https://ea-official-ecommerceapp.vercel.app/",
  },
  {
    id: 1,
    title: "Hiring$kills",
    description:
      "Designed an Online Job Portal where job seekers can browse various job listings, and employers can post job openings, showcasing my ability to build versatile web applications. The tech stack used in this project is Java, Spring boot, React and Mongodb Atlas cloud for deployment.",
    image: hiring,
    tags: [
      "Java",
      "Spring Boot",
      "React Js",
      "MongoDb Atlas Cloud",
      "Redux",
    ],
    category: "web app",
    github: "https://github.com/ebaadazam/HiringSkillsUI",
    webapp: "https://hiring-skills-ui.vercel.app/",
  },
  {
    id: 3,
    title: "Facetime Application",
    description:
      "Developed a video conferencing app enabling users to join or create video meetings.",
    image: facetime,
    tags: ["Kotlin", "MVVM", "Room Database", "Google Drive Cloud API"],
    category: "android app",
    github: "https://github.com/ebaadazam/facetime_application?tab=readme-ov-file",
    webapp: "https://colloquy.vercel.app/",
    member: [
      {
        name: "Ebaad Azam",
        img: ebd,
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/rishavchanda/",
      },
      {
        name: "Upasana Chaudhary",
        img: "https://avatars.githubusercontent.com/u/100614635?v=4",
        linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
        github: "https://github.com/upasana0710",
      },
    ],
  },
  {
    id: 10,
    title: "Book My Show",
    description:
      "Developed a simple backend online show ticket booking system using object-oriented programming which provides the user with a seamless movie ticket booking experience.",
    image: bookshow,
    tags: ["Python", "Object-Oriented Programming"],
    category: "android app",
    github: "https://github.com/ebaadazam/Book-My-Show",
    webapp: "https://github.com/ebaadazam/Book-My-Show",
  },
  {
    id: 2,
    title: "Virtual Car Workshop",
    description:
      "Developed an online car hub offering comprehensive car services including modification, repair, detailing, and washing, ensuring all your vehicle needs are met in one place.",
    image: cars,
    tags: ["Python", "Django", "HTML5", "MySQL"],
    category: "machine learning",
    github: "https://github.com/ebaadazam/Virtual-Car-Workshop",
    webapp: "https://virtuyal-car-workshop.vercel.app/",
  },
 
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
