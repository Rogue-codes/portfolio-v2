import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Gradients from "../../utils/Gradients";
function Landing() {
  return (
    <Container>
      <Gradients />
      <Text
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        turning ideas into real life <span className="shine">products</span> is
        my calling.
      </Text>
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  padding-left: 10%;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Text = styled(motion.h1)`
  @media (max-width: 768px) {
    font-size: 3rem;
    width: 100%;
  }
  font-size: 7vw;
  color: white;
  width: 62%;
  margin-top: 10%;
  line-height: 90px;
  .shine {
    background: linear-gradient(
      to right,
      #fff 20%,
      #2c9bf6 40%,
      #2c9bf6 60%,
      #a0f207,
      #fff 80%
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
  }
`;
