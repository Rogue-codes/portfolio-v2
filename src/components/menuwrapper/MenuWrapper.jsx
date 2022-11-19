import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { routes } from "./data";
import { Link } from "react-router-dom";

function MenuWrapper({ showWrapper, setShowWrapper }) {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%", transition: { delay: 2.5 } },
    init: { opacity: 0, scale: 0.5, transition: { delay: 1 } },
    apear: { opacity: 1, scale: 1, transition: { delay: 1.5 } },
  };
  console.log(showWrapper);
  return (
    <Container
      initial={false}
      animate={showWrapper ? "open" : "closed"}
      variants={variants}
    >
      <Circle
        animate={{
          scale: [1, 2, 2, 1, 1],
          y: ["-10vw", "100vw"],
          backgroundColor: ["#c00505", "#2c9bf6", "#c00505"],
          // borderRadius: ["50%", "30%", "50%"],
        }}
        transition={{ ease: "linear", duration: 5, repeat: Infinity }}
      ></Circle>

      <Circle3
        animate={{
          scale: [1, 2, 2, 1, 1],
          y: ["-10vw", "100vw"],
          backgroundColor: ["#c00505", "#2c9bf6", "#c00505"],
        }}
        transition={{
          ease: "linear",
          delay: "2",
          duration: 5,
          repeat: Infinity,
        }}
      ></Circle3>

      <Circle2
        animate={{
          scale: [1, 2, 2, 1, 1],
          y: ["-10vw", "100vw"],
          backgroundColor: ["#c00505", "#2c9bf6", "#c00505"],
        }}
        transition={{
          ease: "linear",
          delay: "3",
          duration: 5,
          repeat: Infinity,
        }}
      ></Circle2>
      <Routes>
        <motion.div
          className="menulink"
          transition={{
            type: "spring",
            delay: 2,
            duration: 0.5,
            stiffness: 120,
          }}
          animate={showWrapper ? "apear" : "init"}
          variants={variants}
        >
          {routes.map((links, i) => (
            <Link to={links.link} key={i} onClick={() => setShowWrapper(false)}>
              {links.name}
            </Link>
          ))}
        </motion.div>
      </Routes>
    </Container>
  );
}

export default MenuWrapper;

const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: #050810;
  position: fixed;
  z-index: 99999;
  transition: all 0.5s linear;
  top: 0;
  p {
    cursor: pointer;
  }
`;

const Routes = styled.div`
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5%;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  font-size: 4vw;
  padding-top: 5%;
  .menulink {
    display: flex;
    flex-direction: column;
    gap: 5%;
    a {
      color: #fff;
      text-decoration: none;
      transition: all 0.5 linear !important;
      &:hover {
        color: #2c9bf6;
      }
    }
  }
`;

const Circle = styled(motion.div)`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  left: 10%;
`;
const Circle2 = styled(motion.div)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 50%;
  border-radius: 50%;
`;

const Circle3 = styled(motion.div)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 90%;
  border-radius: 50%;
`;
