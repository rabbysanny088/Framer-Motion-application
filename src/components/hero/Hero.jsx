import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          // animate="animate"
          whileInView="animate"
        >
          <motion.h2 ariants={textVariants}>HARVEY TYLER</motion.h2>
          <motion.h1 ariants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <div className="buttons">
            <motion.button ariants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button ariants={textVariants}>Contact Me</motion.button>
          </div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="../../../public/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slideringTextcontainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="../../../public/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
