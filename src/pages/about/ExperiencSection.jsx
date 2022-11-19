import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { exp } from "./experience-data";

function Experienceection() {
  const [selectedTab, setSelectedTab] = useState(exp[0]);
  return (
    <Container>
      <nav>
        <ul>
          {exp.map((item) => (
            <li
              key={item.role}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {item.Company}
              {item === selectedTab ? (
                <motion.div
                  className="underline"
                  layoutId="underline"
                ></motion.div>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          {selectedTab.task.map((item) => (
            <motion.li
              key={selectedTab ? selectedTab.role : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="tab"
            >
              {item}
            </motion.li>
          ))}
        </AnimatePresence>
      </main>
    </Container>
  );
}

export default Experienceection;

const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  margin-top: 5%;
  padding-top: 5%;
  nav {
    @media (max-width: 768px) {
      font-size: 1rem;
      width: 100%;
    }
    width: 60%;
    margin: 0 auto;
    background: #181924;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: 44px;
    position: relative;
  }
  main {
    @media (max-width: 768px) {
      width: 100%;
    }
    color: #fff;
    width: 50%;
    margin: 0 auto;
    margin-top: 3%;
    .tab {
      @media (max-width: 768px) {
      font-size: 1rem;
    }
      background: none;
      height: auto;
      list-style-type: circle !important;
      color: #fff;
      font-size: 1.5vw;
    }
  }
`;
