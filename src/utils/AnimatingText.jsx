import React from "react";
import styled from "styled-components";

function AnimatingText({ content }) {
  return <Container>{content}</Container>;
}

export default AnimatingText;

const Container = styled.h1`
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  font-size: 3vw;
  margin-top: 10%;
  padding-left: 5%;
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
