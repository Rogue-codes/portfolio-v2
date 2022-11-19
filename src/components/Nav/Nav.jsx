import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav({ showWrapper, setShowWrapper }) {
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
    setShowWrapper(!showWrapper);
    console.log("first");
  };
  return (
    <Container
      initial={{ y: -250 }}
      animate={{ y: -20 }}
      transition={{ delay: 2, duration: 1.5, type: "spring", stiffness: 120 }}
    >
      <Logo>
        <Link to="/">Home</Link>
      </Logo>

      <div
        className={
          clicked
            ? "hamburger hamburger--spring is-active"
            : "hamburger hamburger--spring"
        }
        onClick={toggleMenu}
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </Container>
  );
}

export default Nav;

const Container = styled(motion.nav)`
  @media (max-width: 768px) {
    width: 90%;
    left: 5%;
    top: 10%;
  }
  width: 50%;
  height: 10vh;
  border: 0.2rem solid #2a2b37;
  margin: 0 auto;
  position: fixed;
  top: 15%;
  left: 25%;
  z-index: 9999999;
  border-radius: 12px;
  background-color: #2a2b3880;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(104px);
  display: flex;
  justify-content: space-between;
  padding: 2%;
  align-items: center;
  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }
  .hamburger--spring .hamburger-inner {
    top: 2px;
    transition: background-color 0s 0.13s linear;
    /* color: #fff; */
  }
  .hamburger--spring .hamburger-inner::before {
    top: 10px;
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spring .hamburger-inner::after {
    top: 20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--spring.is-active .hamburger-inner {
    transition-delay: 0.22s;
    background-color: transparent !important;
  }
  .hamburger--spring.is-active .hamburger-inner::before {
    top: 0;
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--spring.is-active .hamburger-inner::after {
    top: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(-45deg);
  }
`;
const Logo = styled.div`
  a {
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    color: #fff;
    font-size: 2vw;
    text-decoration: none;
  }
`;
