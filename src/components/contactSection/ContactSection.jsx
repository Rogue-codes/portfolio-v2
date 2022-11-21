import React from "react";
import styled from "styled-components";
import { BsLinkedin,BsGithub, BsWhatsapp, BsTwitter } from "react-icons/bs";
import AnimatingText from "../../utils/AnimatingText";
function ContactSection() {
  return (
    <Container>
      <AnimatingText content="Contact Me 👋" />
      <TextSm>Connect with me online</TextSm>
      <Social>
        <Icon>
        <a href="https://www.linkedin.com/in/osujinnamdidaniel/" target="_blank" rel="noreferrer"><BsLinkedin color='white' size='1.5rem' /></a>
          <p>LinkedIn</p>
        </Icon>
        <Icon>
          <a href="https://github.com/Rogue-codes" target="_blank" rel="noreferrer"><BsGithub size="1.5rem" color="white" /></a>
          <p>GitHub</p>
        </Icon>
        <Icon>
          <a href="https://api.whatsapp.com/send?phone=2348058091098" target="_blank" rel="noreferrer"><BsWhatsapp size="1.5rem" color="white" /></a>
          <p>WhatsApp</p>
        </Icon>
        <Icon>
          <a href="https://twitter.com/RhogaerTagaryen" target="_blank" rel="noreferrer"><BsTwitter size="1.5rem" color="white" /></a>
          <p>Twitter</p>
        </Icon>
      </Social>
    </Container>
  );
}

export default ContactSection;

const Container = styled.div`
  width: 100%;
  min-height: 20vh;
  margin-bottom: 5%;
  padding: 0% 10%;
`;

const TextSm = styled.p`
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  font-size: 1.3vw;
  line-height: 60px;
  color: white;
  padding-left: 5%;
`;
const Social = styled.div`
    @media (max-width: 768px) {
      width: 100%;
    }
  width: 50%;
  display: flex;
  margin-left: 5%;
`;

const Icon = styled.div`
    @media (max-width: 768px) {
      font-size: 1rem;
      flex-direction: column;
    }
  width: 40%;
  height: 8vh;
  display: flex;
  justify-content: flex-start;
  gap: 5%;
  align-items: center;
  padding: 2%;
  p {
    @media (max-width: 768px) {
      display: none;
    }
    color: #fff;
    font-size: 1.5vw;
  }
`;