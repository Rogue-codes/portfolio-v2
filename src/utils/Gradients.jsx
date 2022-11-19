import React from 'react'
import styled from 'styled-components'

function Gradients() {
  return (
    <Gradient>Gradients</Gradient>
  )
}

export default Gradients

const Gradient = styled.div`
    position: absolute;
    width: 20%;
    height: 20vh;
    right: 0;
    background: #2C9BF6;
    filter: blur(150px);
`