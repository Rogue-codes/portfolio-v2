import React from "react";
import styled from "styled-components";
import AnimatingText from "../../utils/AnimatingText";

function SoldOut() {
  return (
    <Container>
      <Wrapper>
        <AnimatingText content='Sold Yet? 🤙'/>
        <TextSm>Thanks for stopping by, I’m currently looking to join a new team of creative developers. If you think I might be a good fit for your company, give me a call 🇳🇬  or send me an  email <a href="mailto:nnamdidanielosuji@gmail.com">📧</a>.</TextSm>
      </Wrapper>
    </Container>
  );
}

export default SoldOut;

const Container = styled.div`
    @media (max-width: 768px) {
      min-height: auto;
    }
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 5%;
  width: 80%;
  height: 90vh;
`;

const TextSm = styled.p`
    @media (max-width: 768px) {
      font-size: 1.5rem;
      width: 100%;
      line-height: 50px;
    }
  font-size: 3vw;
  line-height: 60px;
  margin-top: 2%;
  color: white;
  padding-left: 5%;
  a{
    text-decoration: none;
  }
`;