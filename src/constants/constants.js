export const projects = [
  {
    title: 'HostelBuddy',
    description: "Using React.js, Node.js, & MongoDB, created this website. It is effective in a hostel premise where students can share various items such as leftover medicines, food, assessories etc. You can create your account and them donate or recieve an item of your choice.",
      image: '/images/10.png',
      tags: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
    source: 'https://github.com/1-aditya-2/hostelbuddy12',
    visit: 'https://hostelbuddy-nine.vercel.app/',
    id: 0,
  },
    {
    title: 'CustomYum',
    description: "This food recipe website is an online platform that provides a collection of diverse culinary recipes, offering users the opportunity to discover, learn, and prepare a wide range of dishes, catering to various tastes and dietary preferences. Even the recipes are systematically categorized.",
    image: '/images/i4.png',
    tags: ['React', 'Node', 'HTML', 'SCSS', 'JavaScript'],
    source: 'https://github.com/1-aditya-2/food-recipe',
    visit: 'https://food-recipe-peach.vercel.app/',
    id: 2,
  },
  {
    title: 'Chatter App',
    description: "This is a simple real-time chat application built with Spring Boot and WebSocket technology. It allows multiple users to chat instantly through a live WebSocket connection. You can open this site on different browsers and interact among themselves. Currently can store session of 500 users at the same time.",
    image: '/images/11.png',
    tags: ['Spring Boot', 'WebSocket', 'React.js', 'SCSS'],
    source: 'https://github.com/1-aditya-2/Spring-Boot-WebSocket-Chat-App',
    visit: 'https://spring-boot-websocket-chat-app-production.up.railway.app/',
    id: 1,
  },
  {
    title: 'Apoorva',
    description:"This is the official website of Apoova (Techno-Cultural Fest) of our college, IIITK. It tells the timeline of the events, along with other details. Helped in creating this website along with some seniors.Used nextjs, css, javascript to particularly built the Hero and Description Section of the website.",
    image: '/images/i2.png',
    tags: ['NextJs', 'Express', 'JavaScript', "CSS", "HTML"],
    source: 'https://github.com/shashank1503-cipher/Apoorv',
    visit: 'https://apoorviiitk.co/',
    id: 4,
  }
  
];

export const TimeLineData = [
  { year: '2025', text: 'Indian Institute of Information Technology, Kottayam (8.1 CGPA)', },
  { year: '2020', text: 'Intermediate (92%)', },
  { year: 2018, text: 'High School (95%)', },
];

export const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'TestRigor',
    image: '/images/testrigor.png', // or another relevant logo
    description: [
    '• Built an AI-powered test case editor using React.js and LLM APIs, reducing test authoring time by 30 sec/step.',
    '• Automated PDF/CSV reporting of test case using Spring Boot, generating 1000+ reports/month for customer.',
    '• Designed timezone-resilient scheduling of test case for devices across 20+ timezones using Java with unit tests.',
    '• Hooked into the CI/CD pipelines to display 5+ real-time build metadata, improving deployment traceability.'
    ],
    techStack: ['Spring Boot', 'Node.js', 'React.js', 'Java', 'MongoDB', 'CI/CD', 'Appium', 'Selenium'],
    link: 'https://testrigor.com',
  },
  {
    role: 'Backend Developer',
    company: 'Rablo.in',
    image: '/images/rablo.png',
    description: [
      '• Revamped microservice architecture using React.js, improving load speed by 0.25 sec enhancing user experience.',
      '• Implemented UI/UX enhancements of dashboard with React.js and Node.js, reducing user drop-off by 15%.'
      ],
    techStack: ['Recat.js', 'Express', 'MongoDB', 'Redux'],
    link: 'https://rablo.in',
  },
];
