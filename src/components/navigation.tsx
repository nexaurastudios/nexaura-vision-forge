import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          className="glass-card px-6 py-3"
        >
          <h1 className="font-display text-xl font-bold gradient-primary bg-clip-text text-transparent">
            Nexaura Studios
          </h1>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          className="hidden md:flex items-center space-x-8 glass-card px-8 py-3"
        >
          <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300">
            Home
          </a>
          <a href="#capabilities" className="text-foreground hover:text-primary transition-colors duration-300">
            Capabilities
          </a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors duration-300">
            Projects
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300">
            Contact
          </a>
        </motion.div>

        {/* Theme Toggle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;