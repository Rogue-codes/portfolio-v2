import React from "react";
import { motion } from "framer-motion";
import Gradients from "./Gradients";
import SkillsBackdrop from "./SkillsBackdrop";
import styled from "styled-components";
import { skills } from "../pages/about/skills-data";
function SkillsModal({ toggleSkillsModal }) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    vissible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: "500",
        damping: 25,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <SkillsBackdrop onClick={toggleSkillsModal}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal-skills"
        initial="hidden"
        animate="vissible"
        exit="exit"
        variants={dropIn}
      >
        <Gradients />
        {skills.map((item, i) => (
          <Cards
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Image>
              <img src={item.img} alt="" />
            </Image>
            <Text>{item.name}</Text>
          </Cards>
        ))}
      </motion.div>
    </SkillsBackdrop>
  );
}
export default SkillsModal;

const Cards = styled(motion.div)`
  width: 22%;
  height: 25vh;
  margin-top: 5%;
`;

const Image = styled.div`
  width: 100%;
  height: 80%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  text-transform: lowercase;
  font-size: 1.2vw;
  background: linear-gradient(
    to right,
    #fff 20%,
    #2c9bf6 40%,
    #2c9bf6 60%,
    #a0f207,
    #ffffff 80%
  );
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 3s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;
