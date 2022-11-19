import React from 'react'
import {motion} from "framer-motion"
function SkillsBackdrop({onClick,children}) {
    return (
        <motion.div
          onClick={onClick}
          className="back-drop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      );
    };
    

export default SkillsBackdrop