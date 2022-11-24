import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import Button from "../../utils/Button";
import AnimatingText from "../../utils/AnimatingText";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "./data";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
function ProjectSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const scrollRef = useRef(null);

  return (
    <Container>
      <AnimatingText content="Yeah, I work hard 💼" />
      {projects.map((item, i) => (
        <Wrapper
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
          ref={scrollRef}
          key={i}
        >
          <Projects>
            <Tools>
              {item.tech.map((t, i) => (
                <Logo
                  key={i}
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    type: "spring",
                    stiffness: "290",
                    delay: 1,
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <LogoImg>
                    <img src={t.img} alt="" />
                  </LogoImg>
                  <p>{t.stack}</p>
                </Logo>
              ))}
            </Tools>
            <Image
              initial={false}
              whileHover={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
              ref={scrollRef}
            >
              <img src={item.Img} alt="" onLoad={() => setIsLoaded(true)} />
              <Shadow
                whileHover={{
                  backgroundColor: "#10101a",
                  opacity: [0, 0.5, 1, 0],
                  x: ["0%", "100%"],
                  border: "none",
                  transition: { duration: 1.5 },
                }}
              ></Shadow>
            </Image>
            <Desc>
              <h2>{item.name}</h2>
              <a href={item.link}>Visit the website</a>
              <a href={item.git}><AiFillGithub size="2rem" color="white" /></a>
            </Desc>
          </Projects>
        </Wrapper>
      ))}
      <BtnWrapper>
        <Button content="More Projects" link="/projects" />
      </BtnWrapper>
    </Container>
  );
}

export default ProjectSection;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 5%;
`;

const Wrapper = styled(motion.div)`
  @media (max-width: 768px) {
    width: 90%;
  }
  width: 70%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5% !important;
`;
const Projects = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  height: 80vh;
  border-radius: 20px;
  margin-top: 10%;
  display: flex;
  justify-content: space-between !important;
  align-items: center;
  padding: 5%;
  box-shadow: #ffffff54 0px 0px 0px 3px;
  background: #181924;
`;
const Tools = styled.div`
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
  width: 20%;
  height: 100%;
  position: relative;
  background: #181924;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
`;
const Image = styled(motion.div)`
  @media (max-width: 768px) {
    width: 100%;
    height: 60%;
  }
  width: 45%;
  height: 100%;
  border-radius: 20px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40px;
  }
`;
const Desc = styled.div`
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    align-items: center;
    height: 50%;
  }
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10%;
  padding: 5%;
  background: #181924;
  h2 {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    font-size: 3vw;
    color: white;
  }
  a{
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    font-size: 1.5vw;
    color: white;
    transition: all 0.5s linear;
    &:hover{
      color: #2c9bf6;
    }
  }
`;

const Logo = styled(motion.div)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  background: #181924;
  p{
    @media (max-width: 768px) {
      font-size: .5rem;
    }
  }
`;

const BtnWrapper = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Shadow = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 40px;
`;
const LogoImg = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
