/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "VICTORIA",
  title: "Hi all, I'm Victoria Enebeli",
  subTitle: emoji(
    "Mathematician || Python || Solidity || Frontend-developer || Data Science || Blockchain || Developer Advocate @0xpolygon || Blockchain Mentor @ Zuri inc || follow me for more details on my social handles below."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1nfRwL2o57ZA2aD9jN-Hvcr-oipl-deKY_6cjW4CJMHE/edit?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Iamveektoria",
  linkedin: "https://www.linkedin.com/in/victoria-enebeli-78a4841a1/",
  gmail: "Enebelivicki@gmail.com",

  // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@enebelivicki",
  //stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",

  twitter: "https://twitter.com/maths_hanty_",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About me",
  subTitle: "I am result-driven and passionate about the intersection between Blockchain and Data science. As well as an advocate for mainstream adoption of Blockchain. I'am currently a developer advocate for the Polygon Blockchain in Nigeria.Constantly striving to learn, grow and use my skills in Python, reactJs and solidity In view to drive positive changes in the space. I have  a good knowledge of frontend and In my free time, I contributes to LadiesDoTech || Web3 Ladies, an open-source community of ladies, building and pushing more ladies into the Blockchain space. ",
  
  skills: [
    emoji(
      "⚡ Built a model for Breast Cancer Detection"
      
    ),
    emoji("⚡ Built a model to predict inflation in Nigeria"),
    emoji(
      "⚡ Published an article on AI/MACHINE LEARNING on Medium "
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fa-brands fa-git",
    },
    {
      skillName: "Solidity",
      fontAwesomeClassname: "fab fa-ethereum",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Clever Programmer",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "September 2020 – Present",
      desc: "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials",
      ],
    },
    {
      role: "Product Owner (PSD2)",
      company: "Erste Bank",
      companylogo: require("./assets/images/ersteLogo.jpg"),
      date: "July 2019 – September 2020",
      desc: "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements.",
    },
    {
      role: "Junior Information Security & Systems Representative",
      company: "Vodafone",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "November 2018 – July 2019",
      desc: "I've conducted internal audit making sure the organization is compliant with the GDPR.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "code-with-onye", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
<<<<<<< HEAD
    "I am also a technical writer! i write notes on Web2, Web3 and DataScience.It all started as a way to pen down my experience and knowledge gained in my tech journey, writing in a simpler and more relatable way on various concepts in tech.The goal is to help beginners have an easier learning journey and of course contribute to the wealth of knowledge of even professionals.",
=======
    "I am also a technical writer! i write notes on Web2, Web3 and DataScience.It all started as a way to pen down my experience and knowledge gained in my tech journey, writing in a simpler and more relatable way on various concepts in tech.The goal is to help beginners have an easier learning journey and of course contribute to the wealth of knowledge of even professionals .",
>>>>>>> c3629c3b36e5024c5765a6b92b182f8e6b99aa4f
  blogs: [
    {
      url: "https://medium.com/@enebelivicki/multisig-wallet-558247618024",
      title:
        "Multisig stands for multi-signature, read to learn more",
      description:
        "Multisig stands for multi-signature, which is a specific type of digital signature that makes it possible for two or more users to sign documents as a group. Therefore, a multi-signature is produced through the combination of multiple unique signatures.",

        
    },

    
     {
      url: "https://medium.com/@enebelivicki/solidity-tutorial-reference-types-4ef35fbbacc8",
      title: "Solidity Tutorial: Reference Types",
      description:
        "Reference type variables are variables that store the location of the data.",
    },

    {
      url: "https://medium.com/@enebelivicki/solidity-tutorial-all-about-value-types-cbbcdb100c29",
      title: "Solidity Tutorial : All about Value Types.",
      description:
        "Solidity is a statically typed language, which means that we need to specify the type of each variable.",
    },

    {
      url: "https://medium.com/@enebelivicki/practice-end-to-end-machine-learning-economic-outlook-6750ddc1f5f6",
      title: "PRACTICE END TO END MACHINE LEARNING (ECONOMIC OUTLOOK)",
      description:
        "The core reason behind this piece of work is to put a thorough exploratory data analysis and key visualizations that drive critical insights in analytics and statistics in details. ",
    },
  ],
  
  display: true, // Set false to hide this section, defaults to true
};

//blochainsection
const blockchainSection = {
  title: "Blockchain Events",
  subtitle:
    "I am also good at giving speeches/educating the public on different concepts in the blockchain space.Feel free to reach out to me on upcoming blockchain events! then feature there the  blockchain event i have talked in ",
  events: [
    {
      url: "https://medium.com/@enebelivicki/multisig-wallet-558247618024",
      title:
        "Multisig stands for multi-signature, read to learn more",
      description:
        "Multisig stands for multi-signature, which is a specific type of digital signature that makes it possible for two or more users to sign documents as a group. Therefore, a multi-signature is produced through the combination of multiple unique signatures.",
    },
    /**  {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },*/
  ],
  display: true, // Set false to hide this section, defaults to true
};

//Blockchain event section

const blockchainSection = {
  title: "BlockchainEvents",
  subtitle:
    "I am also a technical writer! i write notes on Web2, Web3 and DataScience.It all started as a way to pen down my experience and knowledge gained in my tech journey, writing in a simpler and more relatable way on various concepts in tech.The goal is to help beginners have an easier learning journey and of course contribute to the wealth of knowledge of even professionals .",
  blockchainEvents: [
    {
      url: "https://medium.com/@enebelivicki/multisig-wallet-558247618024",
      title: "Multisig stands for multi-signature, read to learn more",
      description:
        "Multisig stands for multi-signature, which is a specific type of digital signature that makes it possible for two or more users to sign documents as a group. Therefore, a multi-signature is produced through the combination of multiple unique signatures.",
    },
    /**  {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },*/
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open to all.",
  number: "+234 (706) 7860912 ",
<<<<<<< HEAD
  
  email_address: "Enebelivicky@gmail.com",
=======
  number: "+234 (248) 48679",
  email_address: "enebelivicki@gmail.com"
>>>>>>> c3629c3b36e5024c5765a6b92b182f8e6b99aa4f
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  blockchainSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  blockchainSection,
};
