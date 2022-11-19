import { motion } from 'framer-motion'
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function ProjectDetails() {
    const {name} = useParams()
    console.log(name)
  return (
    <Container>
        
    </Container>
  )
}

export default ProjectDetails

const Container = styled(motion.div)`
    border: 5px solid #a12c2c;
    width: 100%;
    height: 100vh;
`