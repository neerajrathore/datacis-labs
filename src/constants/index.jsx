
import sqlicon from "../assets/services_icons/sql-analytics-icon.svg"
import machine from "../assets/services_icons/machine-learning-icon.svg"
import dataengineer from "../assets/services_icons/icon-orange-data-engineer-persona.svg"

import icon1 from "../assets/fwdataxislabswebsite_/Iceberg-logo.svg";
import icon2 from "../assets/fwdataxislabswebsite_/Apache_Kafka.png";
import icon3 from "../assets/fwdataxislabswebsite_/Apache_Spark_logo.svg";
import icon4 from "../assets/fwdataxislabswebsite_/Elasticsearch_logo.svg";

export const navItems = [
  { label: "Technical Services", href: "#" },
  { label: "Technologies", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Company   ", href: "#" },
];

export const testimonials = [
  {
    user: "Open Lakehouse",
    // company: "Stellar Solutions",
    image: icon1,
    text: "Apache Iceberg is an open table format for analytics workloads.",
  },
  {
    user: "Event Streaming",
    // company: "Blue Horizon Technologies",
    image: icon2,
    text: "Apache Kafka is an open-source platform for data pipelines, streaming analytics and data integration.",
  },
  {
    user: "Unified Analytics Engine",
    // company: "Quantum Innovations",
    image: icon3,
    text: "Apache Spark is a multi-language engine for executing data engineering, data science and machine learning on single-node machine or clusters.",
  },
  {
    user: "Generative AI, Search",
    // company: "Fusion Dynamics",
    image: icon4,
    text: "Elastic Stack is comprised of Elasticsearch, Logstash & Kibana (ELK Stack) for securely taking data from any source to search, analyze and visualize.",
  }
];

export const features = [
  {
    icon: <img src={sqlicon} alt="Data Analytics Icon" />,
    text: "Data Analytics",
    description: "SQL data warehouse to derive meaningful actionable insights.",
  },
  {
    icon: <img src={dataengineer} alt="Data Engineering Icon" />,
    text: "Data Engineering",
    description: "Data Ingestion from various sources and pipelines to transform data.",
  },
  {
    text: "Data Science",
    icon: <img src={machine} alt="Data Science Icon" />,
    description: (
      <>
        Custom AI & ML models for predictive analytics.
        <br />
        ML Engineering for model deployment.
      </>
    ),
  }
];


export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const ServicesLinks = [
  { href: "#", label: "Data Analytics" },
  { href: "#", label: "Data Engineering" },
  { href: "#", label: "Data Science" },
];

export const TechnologiesLinks = [
  { href: "#", label: "Open Lakehouse" },
  { href: "#", label: "Event Streaming" },
  { href: "#", label: "Unified Analytics Engine" },
  { href: "#", label: "Generative AI, Search" },
];

export const SolutionsLinks = [
  { href: "#", label: "Data Lakehouse Platform" },
  { href: "#", label: "Multi-Modal Database" },
  { href: "#", label: "Search AI Platform" },
];
export const ResourcesLinks = [
  { href: "#", label: "Blogs" },
  { href: "#", label: "Use Cases" },
  { href: "#", label: "White Papers" },
];
export const CompanyLinks = [
  { href: "#", label: "About Us" },
  { href: "#", label: "Contact Us" },
];
