import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import AnimatingText from "../../utils/AnimatingText";
import ProjectListSection from "./ProjectListSection";

function Projects() {
  return (
    <Container>
      <AnimatingText content="My portfolio" />
      <Text>
        From Web Components to React.JS, Redux, Next.JS, and Node.JS. Check out
        my latest web/software development portfolio projects.
      </Text>
      <br />
      <ProjectListSection />
    </Container>
  );
}

export default Projects;

const Container = styled(motion.div)`
  @media (max-width: 768px) {
    margin-top: 55%;
  }
  width: 100%;
  min-height: 100vh;
`;
const Text = styled(motion.div)`
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  color: #fff;
  font-size: 2vw;
  width: 90%;
  margin: 0 auto;
  margin-top: 2%;
`;
