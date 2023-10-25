import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import videoBg from '../../../public/bg2.mp4';

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transiton: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div className="outerDiv">
      <video src={videoBg} autoPlay loop muted/>
      {/* <video src="./bg1.mp4" className="videoBg"></video> */}
      <motion.div
        className="services"
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView='animate'
        ref={ref}
        // animate={isInView && "animate"}
        animate="animate"
      >
        <motion.div
          className="textContainer"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <p>
            I focus on developing
            <br />
            and exploring the opportunities
          </p>
          <hr />
        </motion.div>
        <motion.div
          className="titleContainer"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Expertise </motion.b>Captured
            </h1>
          </div>
          <div className="title">
            <h1>
              into
              <motion.b whileHover={{ color: "orange" }}> Skills </motion.b>
              Galary.
            </h1>
            <button>WHAT I DO?</button>
          </div>
        </motion.div>
        <motion.div
          className="skillsContainer"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <div className="part1">
            <img src="/Img/java-svgrepo-com.svg" className="skill" />
            <img src="/Img/html5-svgrepo-com.svg" className="skill" />
            <img src="/Img/css-svgrepo-com.svg" className="skill" />
            <img src="/Img/js-svgrepo-com.svg" className="skill" />
            <img src="/Img/redux-svgrepo-com.svg" className="skill" />
          </div>
          <div className="part2">
            <img src="/Img/mongodb-svgrepo-com.svg" className="skill" />
            <img src="/Img/icons8-express-js.svg" className="skill" />
            <img src="/Img/reactjs-svgrepo-com.svg" className="skill" />
            {/* <img src="/Img/firebase-svgrepo-com.svg" className="skill" /> */}
            <img src="/Img/node-svgrepo-com.svg" className="skill" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
