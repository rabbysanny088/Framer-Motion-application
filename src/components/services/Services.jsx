import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./services.scss";
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
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.p>
          I focus on helping your brand grow <br /> and move forward
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="../../../public/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            aliquid ab voluptatum reprehenderit itaque porro placeat quidem vel
            libero sint tempore suscipit impedit, voluptatem nesciunt quaerat
            saepe soluta molestiae non?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            aliquid ab voluptatum reprehenderit itaque porro placeat quidem vel
            libero sint tempore suscipit impedit, voluptatem nesciunt quaerat
            saepe soluta molestiae non?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            aliquid ab voluptatum reprehenderit itaque porro placeat quidem vel
            libero sint tempore suscipit impedit, voluptatem nesciunt quaerat
            saepe soluta molestiae non?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            aliquid ab voluptatum reprehenderit itaque porro placeat quidem vel
            libero sint tempore suscipit impedit, voluptatem nesciunt quaerat
            saepe soluta molestiae non?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
