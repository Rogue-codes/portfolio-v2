import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Button({
  content,
  link,
  toggleModal,
}) {
  return (
    <Container
      whileTap={{ scale: 0.8 }}
      whileHover={{
        backgroundColor: "#2C9BF6",
        border: "none",
        boxShadow: "0px 0px 8px #0ab2db",
      }}
      onClick={toggleModal}
    >
      <Link to={link}>{content}</Link>
    </Container>
  );
}

export default Button;
const Container = styled(motion.button)`
  @media (max-width: 768px) {
    width: 50%;
    font-size: 1.2rem;
  }
  width: 20%;
  height: 8vh;
  border-radius: 5px;
  font-size: 1.5vw;
  color: white;
  border: 1px solid #fff;
  background: #10101a;
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
`;
