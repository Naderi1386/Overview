import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StartSection = () => {
  return (
    <div className="flex justify-center">
      <Link to={"/overview"}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="btn bg-black rounded-lg border-white/10 w-96 h-[3.75rem] text-2xl font-medium"
        >
          Get Started
        </motion.button>
      </Link>
    </div>
  );
};

export default StartSection;
