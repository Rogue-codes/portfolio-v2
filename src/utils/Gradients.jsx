import React from "react";
import styled from "styled-components";

function Gradients() {
  return <Gradient>Gradients</Gradient>;
}

export default Gradients;

const Gradient = styled.div`
  @media (max-width: 768px) {
    height: 100vh;
  }
  position: absolute;
  width: 20%;
  height: 20vh;
  right: 0;
  background: #2c9bf6;
  filter: blur(150px);
`;
