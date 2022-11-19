import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import img from "../../assets/ndd.jpeg";
import Button from "../../utils/Button";
import Modal from "../../utils/Modal";
import SkillsModal from "../../utils/SkillsModal";
import SkillsButton from "../../utils/SkillsButton";
import Experienceection from "./ExperiencSection";
function About() {
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  const [isLoaded, setIsLoaded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSkillsModal, setOpenSkillsModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const toggleSkillsModal = () => {
    setOpenSkillsModal(!openSkillsModal);
  };

  const text = `I first started coding sometime in 2020 after taking a Python course during my National service year. The very first thing I built was a command-line GPA calculator and from then, I was hooked. I knew I enjoyed figuring out the logic behind creating applications but I was more interested in learning how to make it look pretty to users. That's how I started my career in front end development, and In order to transition into tech properly i decided to go for a 6 month programme in web app development at Aptech computer Institute lagos where i learnt the Programming languages i needed to become a frontend developer. I completed the Programe with a grade score of 77% (distinction) and after that i decided to go into self learning and development so as to improve my frontend skills.. I’m constantly trying to learn new technologies and concepts and I try to share my knowledge by writing articles and posting helpful contents on LinkedIN. I enjoy building fun designs and time-saving projects on Github. Currently, I’m focused on moving to the next stage of my career and achieving that senior-level developer status. Thanks for reading 😊`;

  return (
    <Container>
      <Top>
        <Button
          content="History"
          toggleModal={toggleModal}
          modalOpen={openModal}
          setModalOpen={setOpenModal}
        />
        <Photo
          initial={false}
          animate={
            isLoaded
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          // onViewportEnter={() => setIsInView(true)}
        >
          <img src={img} alt="" onLoad={() => setIsLoaded(true)} />
        </Photo>
        <SkillsButton content="SKills" toggleSkillsModal={toggleSkillsModal} />
        <AnimatePresence
          // Disable any initial animations on children that
          // are present when the component is first rendered
          initial={false}
          // Only render one component at a time.
          // The exiting component will finish its exit
          // animation before entering component is rendered
          exitBeforeEnter={true}
          // Fires when all exiting nodes have completed animating out
          onExitComplete={() => null}
        >
          {openModal && <Modal toggleModal={toggleModal} text={text} />}
        </AnimatePresence>
        <AnimatePresence
          // Disable any initial animations on children that
          // are present when the component is first rendered
          initial={false}
          // Only render one component at a time.
          // The exiting component will finish its exit
          // animation before entering component is rendered
          exitBeforeEnter={true}
          // Fires when all exiting nodes have completed animating out
          onExitComplete={() => null}
        >
          {openSkillsModal && (
            <SkillsModal toggleSkillsModal={toggleSkillsModal} text={text} />
          )}
        </AnimatePresence>
      </Top>
      <Experienceection />
    </Container>
  );
}

export default About;
const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
`;
const Photo = styled(motion.div)`
  @media (max-width: 768px) {
    width: 90%;
  }
  width: 40%;
  height: 60vh;
  margin: 0 auto;
  margin-top: 15%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Top = styled.div`
  @media (max-width: 768px) {
    font-size: 1rem;
    flex-direction: column;
    margin-top: 30%;
    min-height: auto;
  }
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  position: relative;
  button {
    @media (max-width: 768px) {
      font-size: 1rem;
      width: 50%;
      display: none;
    }
    margin-top: 15%;
    width: 20%;
    height: 8vh;
  }
`;
