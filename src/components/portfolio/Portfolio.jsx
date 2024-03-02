import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./portfolio.scss";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/20213037/pexels-photo-20213037/free-photo-of-swiss-alps-ski-slopes.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis laudantium nulla hic, commodi a distinctio?",
  },
  {
    id: 2,
    title: "Next.jsx Blog",
    img: "https://images.pexels.com/photos/18201732/pexels-photo-18201732/free-photo-of-ice-creams-in-glasses-on-table.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis laudantium nulla hic, commodi a distinctio?",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/19324900/pexels-photo-19324900/free-photo-of-fluffy-pampas-grass.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis laudantium nulla hic, commodi a distinctio?",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/19251357/pexels-photo-19251357/free-photo-of-a-cathedral-with-a-tree-in-front-of-it.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis laudantium nulla hic, commodi a distinctio?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
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
    damping: 40,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
