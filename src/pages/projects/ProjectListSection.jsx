import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { all } from "./data";

function ProjectListSection() {
  const [selectedTab, setSelectedTab] = useState(all[0]);
  console.log(selectedTab);
  return (
    <Container>
      <nav>
        <ul>
          {all.map((item) => (
            <li
              key={item.category}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {item.category}
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
          {selectedTab.data.map((item, i) => (
            <motion.div
              key={selectedTab ? selectedTab.category : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="tab"
            >
              <Image>
                <img src={item.img} alt="" />
              </Image>
              <p>{item.name}</p>
              <Link to={`/projects/${item}`}>
                <button>View</button>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </main>
    </Container>
  );
}

export default ProjectListSection;
const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  margin-top: 5%;
  padding-top: 5%;
  nav {
    @media (max-width: 768px) {
      font-size: 1rem;
      width: 95%;
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
    width: 80%;
    height: auto;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 3%;
    display: flex;
    .tab {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      width: 45%;
      height: auto;
      padding: 2%;
      border-radius: 12px;
      margin-top: 5%;
      position: relative;
      background: #181924;
      p {
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        font-size: 1.6vw;
        padding: 2%;
      }
      button {
        @media (max-width: 768px) {
          font-size: 1rem;
          height: 6vh;
          width: 50%;
        }
        width: 20%;
        height: 8vh;
        margin-left: 2%;
        font-size: 1.5vw;
        font-weight: 700;
      }
    }
  }
`;
const Image = styled(motion.div)`
  @media (max-width: 768px) {
    height: 20vh;
  }
  width: 100%;
  height: 43vh;
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
