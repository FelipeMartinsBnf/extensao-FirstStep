import Footer from "../containers/Footer";
import Vagas from "../containers/Vagas";
import { motion } from "framer-motion";

const VagasPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 0 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.3 }}
    >
      <Vagas />
      <Footer />
    </motion.div>
  );
}

export default VagasPage;