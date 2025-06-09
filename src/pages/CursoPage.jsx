import Footer from "../containers/Footer";
import Curso from '../containers/Curso';
import { motion } from "framer-motion";

const CursoPage = () => {


  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
    >
      <Curso />
      <Footer />
    </motion.div>
  );
}

export default CursoPage;