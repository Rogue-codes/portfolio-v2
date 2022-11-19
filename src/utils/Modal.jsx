import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import Gradients from "./Gradients";

function Modal({ toggleModal, text }) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    vissible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: "500",
        damping: 25,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={toggleModal}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        initial="hidden"
        animate="vissible"
        exit="exit"
        variants={dropIn}
      >
        <Gradients/>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {text}
        </motion.p>
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
