import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web3 Developer",
    icon: web,
  },
  {
    title: "Blockend Developer",
    icon: mobile,
  },
  {
    title: "ML Engineer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Blockend Developer",
    company_name: "Freelancer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Integrated artificial intelligence (AI) and machine learning (ML) models into blockchain applications, including implementing prediction markets and other AI-driven use cases.",
      "Contributed to open source blockchain projects, including submitting bug fixes, implementing new features, and collaborating with other developers to improve code quality.",
      "Designed and implemented decentralized autonomous organizations (DAOs) using smart contracts and other blockchain technologies.",
      "Developed blockchain analytics solutions using tools such as BigQuery and Tableau, and presented findings to stakeholders to inform decision-making.",
    ],
  },
  {
    title: "ML Engineer",
    company_name: "Think Future Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2022 - Feb 2023",
    points: [
      "Served as the team leader for a project focused on building an end-to-end ML model, including requirement gathering, data annotation, and model implementation.",
      "Collaborated with the team to perform a commercial feasibility test for new connection requests for a Fortune India 500 company, resulting in increased efficiency and accuracy in the request processing system.",
      "Successfully designed and implemented production-ready models to parse addresses and automate daily workload",
      "Interviewing applicants to determine their qualifications for Data Analyst and Data Scientist positions.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Cliently",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2021 - May 2022",
    points: [
      "Served as the team leader for product data science, overseeing the implementation of end-to-end AutoML solutions with a focus on model interpretability.",
      "Developed recommendations to improve email appeal and achieve a better conversation rate, resulting in increased sales.",
      "Successfully optimized existing ML models and data-pipelines, resulting in a 30% increase in accuracy and efficiency.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Ernst & Young",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2019 - Sep 2020",
    points: [
      "Executed various client-related arrangements, with a primary focus on Canadian clients, for several Fortune 500 companies.",
      "Specialized in risk analytics and fraud detection by performing JE CAAT and custom CAAT analysis.",
      "Automated daily routine tasks, such as taking screenshots, creating Word documents, and attaching files, by utilizing Python in Excel.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We were able to greatly improve the security and transparency of our voting system with the help of a blockchain expert like Shivam.",
    name: "Kraken13.eth",
    // designation: "CMO",
    // company: "Cliently",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Shivam gave us confidence in our blockchain-based solution - we knew we were in good hands.",
    name: "Binance7.eth",
    // designation: "Senoir Manager",
    // company: "Ernst & Young",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FreelancoDAO",
    description: `Web3 decentralized platform that enables users to search for and hire freelancers in a secure and trustless manner. Dispute resolution by on-chain voting from DAO members. FreelancoDAO also integrates with Chainlink Functions, which enables ChatGPT to make a decision and vote in a decentralised fashion.`,
    tags: [
      {
        name: "dao",
        color: "blue-text-gradient",
      },
      {
        name: "chat-gpt",
        color: "green-text-gradient",
      },
      {
        name: "nfts",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://freelanco-dao.vercel.app",
    live_link: "https://freelanco-dao.vercel.app",
  },
  {
    name: "Raffle",
    description: `The raffle is powered by the ChainLink Verifiable Random Number Generator, which is a decentralised and transparent way to generate random numbers. In addition to the random number generator, the raffle also uses Chainlink Keepers to automate the process of choosing a winner. The entire raffle system is deployed on IPFS (InterPlanetary File System), which is a peer-to-peer protocol that enables the creation and sharing of distributed web applications.`,
    tags: [
      {
        name: "ipfs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "chainlink",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/shivam017arora/Lottery-dApp",
  },
  {
    name: "Defi Staking DApp",
    description:
      "Blockchain-based application that allows users to stake their cryptocurrencies and earn rewards for supporting the network. With its advanced staking and reward distribution mechanisms, customizable parameters, and robust security features, this Dapp represents a powerful tool for anyone looking to stake their cryptocurrencies and earn rewards in a secure and transparent manner.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "aave",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/shivam017arora/DefiDApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
