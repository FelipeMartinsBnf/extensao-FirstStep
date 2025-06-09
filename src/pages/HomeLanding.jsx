import Header from '../components/Header';
import Footer from '../containers/Footer';
import Home from '../containers/Home';
import "../main.css";
import { motion } from "framer-motion";

const HomeLanding = () => {
    return (
      <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      >
        <Home />
        <Footer />
      </motion.div>
    )
}

export default HomeLanding