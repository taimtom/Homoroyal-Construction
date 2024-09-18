import team from "../assets/svg/office.svg";
import service1 from "../assets/images/pexels-mikael-blomkvist-8961401.jpg";
import service2 from "../assets/images/pexels-reneterp-3990359.jpg";
import service3 from "../assets/images/pexels-steffen-coonan-1005786-2098624.jpg";
import service4 from "../assets/images/home-variant-3-555x500.jpg";
import service5 from "../assets/images/pexels-lucaspezeta-2100681.jpg";

// services
import projectEng from "../assets/images/project.jpg";
import structural from "../assets/images/structural.jpg";
import architecture from "../assets/images/architectural.jpg";
import electrical from "../assets/images/electrical.jpg";
import construction from "../assets/images/construction.jpg";

export const navlink = [
  { id: 1, name: "home" },
  { id: 2, name: "about" },
  { id: 3, name: "service", path: "/services" },
  { id: 4, name: "project" },
  { id: 5, name: "blog" },
  { id: 6, name: "contact" },
];

export const aboutUs = [
  {
    id: 1,
    // icon: team,
    title: "Our Mission",
    content:
      "Homoroyal is committed to maintaining the highest level of professionalism and integrity in all aspects of our business. Our goal is to build long-term relationships with our suppliers, subcontractors, employees, professional associates, and clients, based on performance, value creation, and client satisfaction.",
  },
  {
    id: 2,
    // icon: team,
    title: "our vision",
    content:
      "To secure clients' success through excellence and value, we aim to be the engineering partner of choice in Nigeria, creating value and incomparable construction techniques through acceptable standards. We envision becoming one of the best indigenous construction companies in the country.",
  },
  {
    id: 3,
    // icon: team,
    title: "core value",
    content:
      "Homoroyal Civil Engineering Construction Nigeria Limited, core values revolve around these nine key words. Every action of Company under The Homoroyal Group must measure up to these Key words.",
  },
];

export const services = [
  {
    id: 1,
    title: "Architecture",
    content:
      "Homoroyal Architects work closely with clients to turn their visions into reality, ensuring a thorough understanding of requirements and requests. In an interdisciplinary approach, they collaborate with engineers and consider their contributions to ensure quality, cost, and time requirements are met in all design phases.",
    image: architecture,
  },
  {
    id: 2,
    title: "Structural Engineering",
    content:
      "Homoroyal's structural Engineer’s research, design, and plan structural components and systems to achieve design goals. Their structural designs ensure technical viability, integrity, and safety of design criteria, as well as the durable performance of bearing elements and materials. Special emphasis is placed on conformity with quality.",
    image: structural,
  },
  {
    id: 3,
    title: "Project Management",
    content:
      "Homoroyal's project management service offers tailored and integrated solutions, based on processes and systems that align with the company's engineering and design services. The specialized personnel coordinate the technical disciplines in-house, manage designs, and work closely with clients over the entire life cycle of a project. They also support the selection, ongoing assessment, and management of third parties during the construction phase.",
    image: projectEng,
  },
  {
    id: 4,
    title: "infrastructural Engineering",
    content:
      "Homoroyal's specialized engineers utilize the latest computer-aided software to contribute their knowledge and expertise to ensure the durability of infrastructure projects of all sizes. They aim to deliver durable and environmentally sustainable infrastructure solutions across the country, which respond to all types of engineering challenges from concept to implementation.",
    image: service1,
  },
  {
    id: 5,
    title: "construction engineering",
    content:
      "Homoroyal is a reputable construction management company that has delivered a diverse range of construction projects for both private and public sectors. We have established loyal business relationships through our commitment to servicing all client projects, whether they are large or small.",
    image: construction,
  },
  {
    id: 6,
    title: "Mech/Elect Engineering ",
    content:
      "Homoroyal's mechanical and electrical engineers specialize in working on complex interdisciplinary projects. Our team provides mechanical and electrical solutions that combine the latest equipment with the highest aesthetical aspects, all while considering the required standards and regulations.",
    image: electrical,
  },
];

export const project = [
  {
    id: 1,
    title: "Shopping mall",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe!",
    image: service1,
  },
  {
    id: 2,
    title: "Office Space",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe!",
    image: service2,
  },
  {
    id: 3,
    title: "Classroom",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe!",
    image: service3,
  },
  {
    id: 4,
    title: "Estate",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe!",
    image: service4,
  },
  {
    id: 5,
    title: "Bungalow",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe!",
    image: service5,
  },
];

export const blogPost = [
  {
    id: 1,
    image: service1,
    date: "July 25th, 2024",
    category: "architecture",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum alias maiores! Sed, impedit laboriosam.",
    reads: "",
  },
  {
    id: 2,
    image: service2,
    date: "July 25th, 2024",
    category: "architecture",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum alias maiores! Sed, impedit laboriosam.",
    reads: "",
  },
  {
    id: 3,
    image: service3,
    date: "July 25th, 2024",
    category: "architecture",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum alias maiores! Sed, impedit laboriosam.",
    reads: "",
  },
  {
    id: 4,
    image: service1,
    date: "July 25th, 2024",
    category: "architecture",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum alias maiores! Sed, impedit laboriosam.",
    reads: "",
  },
  {
    id: 5,
    image: service2,
    date: "July 25th, 2024",
    category: "architecture",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum alias maiores! Sed, impedit laboriosam.",
    reads: [],
  },
  {
    id: 6,
    image: service3,
    date: "July 25th, 2024",
    category: "architecture",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum alias maiores! Sed, impedit laboriosam.",
    reads: "",
  },
];

export const testiPost = [
  {
    id: 1,
    comment:
      "They know their business and their approach and manner of doing business works well as a team player with the owners and their other consultants.",
    name: "Jonas Edward",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 2,
    comment:
      "It has been a pleasure to work with the company. The construction was well planned, organized and scheduled. No surprises. The field Superintendent was very familiar with school work and DSA requirements.",
    name: "Sheryl Berge",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 3,
    comment:
      "They were exceptional at cost management and quality selection of both materials and sub-contractors.",
    name: "Sheryl Berge",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 4,
    comment:
      "I wanted to acknowledge the satisfaction on our remodel. I must give a 100% satisfied mark as you not only finished the job early and under budget, but with great sub-contractors and excellent workmanship. The job was done very efficiently and timely",
    name: "Sheryl Berge",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 5,
    comment:
      "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices areunbeatable.",
    name: "Sheryl Berge",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 6,
    comment:
      "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices areunbeatable.",
    name: "Sheryl Berge",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];
