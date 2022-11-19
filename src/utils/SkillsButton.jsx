import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function SkillsButton({ toggleSkillsModal,content }) {
  return (
    <Container
      whileTap={{ scale: 0.8 }}
      whileHover={{
        backgroundColor: "#2C9BF6",
        border: "none",
        boxShadow: "0px 0px 8px #0ab2db",
      }}
      onClick={toggleSkillsModal}
    >
      {content}
    </Container>
  );
}

export default SkillsButton;
const Container = styled(motion.button)`
  width: 20%;
  height: 8vh;
  border-radius: 5px;
  font-size: 1.5vw;
  color: white;
  border: 1px solid #fff;
  background: #10101a;
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
`;
