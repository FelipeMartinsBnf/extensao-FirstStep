import Dicas from "../containers/Dicas";
import Footer from "../containers/Footer";
import { motion } from "framer-motion";

const DicasPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 0 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.3 }}
    >
      <Dicas />
      <Footer />
    </motion.div>
  );
};

export default DicasPage;
