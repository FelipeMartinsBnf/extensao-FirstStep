import CursosList from "../containers/CursosList";
import Footer from "../containers/Footer";
import { motion } from "framer-motion";

const CursosPage = () => {


  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
    >
      <CursosList />
      <Footer />
    </motion.div>
  );
}

export default CursosPage;