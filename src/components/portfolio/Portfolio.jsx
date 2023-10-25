import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Study Notion",
    vid: "./Demo videos/Study Notion Demo Rec.mp4",
    desc: "Study-Notion, a web based application which aims to provide a seamless and interactive learning experience platform for students and professioals, making education more accessible.",
    url: "https://studynotion-edtech-project.vercel.app/",
    git: "https://github.com/Soham-Bharti/",
    tech: "MongoDb - ExpressJS - ReactJS - NodeJS",
  },
  {
    id: 2,
    title: "E-Billing System",
    vid: "./Demo videos/E-Bill Demo Rec.mp4",
    desc: "A desktop application for small shop keepers to manage and maintain the customer details and records for billing by generating e-bills with 100% accuracy.",
    url: "https://drive.google.com/file/d/1n5co9nxtXk7Dm8JvvKM0fZx-NY24qKHr/view?usp=sharing",
    git: "https://github.com/Soham-Bharti/E-Bill-Management-System/tree/main",
    tech: "Java - Spring - JDBC - MySQL",
  },
  {
    id: 3,
    title: "Text Utils",
    vid: "./Demo videos/Text Utils Demo Rec.mp4",
    desc: "A browser compatible web app which gives you a way to analyze your text quickly, efficiently with features like instant character & word count, speak, capitalise, read minute and preview statistics for a given text.",
    url: "https://text-utils-wine.vercel.app/",
    git: "https://github.com/Soham-Bharti/Text-Utils",
    tech: "ReactJS - NodeJS",
  },
  {
    id: 4,
    title: "To-Do App",
    vid: "./Demo videos/To-Do Demo Rec.mp4",
    desc: "A basic yet effective app to quickly generate your to-do list with instant and easy features to manipulate with your daily chores.",
    url: "https://graceful-belekoy-1012c4.netlify.app/",
    git: "https://github.com/Soham-Bharti/Project-To-Do",
    tech: "ReactJS - NodeJS",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="videoContainer" ref={ref}>
            {/* <img src={item.img} alt="" /> */}
            <video src={item.vid} controls autoPlay muted loop />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>Tech Stack: {item.tech}</p>
            <div className="buttonWrapper">
              <button>
                <a href={item.url} target="_blank">
                  See Demo
                </a>
              </button>
              <button>
                <a href={item.git} target="_blank">
                  See Repo
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
