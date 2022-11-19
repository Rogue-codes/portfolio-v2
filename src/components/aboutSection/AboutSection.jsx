import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import img from "../../assets/PP.png";
import Button from "../../utils/Button";
function AboutSection() {
  const scrollRef = useRef(null);
  return (
    <Container>
      <PictureContainer
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
        ref={scrollRef}
      >
        <img src={img} alt="" />
      </PictureContainer>
      <About
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
        ref={scrollRef}
      >
        <Text>About Me</Text>
        <TextSm>
          Hello stranger! 👋, my name is Nnamdi and I am a frontend engineer,
          passionate about digital products that help people experience everyday
          life, not endure it.. I build websites with a focus on responsiveness,
          accessibility and pleasing aesthetics.
        </TextSm>
        <Button content="More" link="/about" />
      </About>
    </Container>
  );
}

export default AboutSection;

const Container = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10%;
  }
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 5%;
  align-items: center;
`;
const PictureContainer = styled(motion.div)`
  @media (max-width: 768px) {
    width: 80%;
  }
  width: 25%;
  height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const About = styled(motion.div)`
  @media (max-width: 768px) {
    width: 100%;
    padding: 5%;
  }
  width: 65%;
  height: auto;
  border: 1px solid pink;
  border-radius: 15px;
  z-index: 113;
  padding: 2%;
`;
const Text = styled.h2`
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  font-size: 2vw;
  margin-bottom: 2%;
  color: white;
`;
const TextSm = styled.p`
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  font-size: 1.8vw;
  line-height: 35px;
  margin-bottom: 2%;
  color: white;
`;
