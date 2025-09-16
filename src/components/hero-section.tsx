import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Hero3D from "./hero-3d";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-display font-black leading-tight"
            >
              <span className="gradient-primary bg-clip-text text-transparent">
                Nexaura Studios
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl text-muted-foreground font-medium"
            >
              Web Development
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
              We don't just build websites.
              <br />
              <span className="gradient-secondary bg-clip-text text-transparent">
                We build experiences.
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Crafting cinematic, interactive web applications that push the boundaries 
              of design and technology. Every pixel perfect, every interaction meaningful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex gap-4"
          >
            <Button 
              size="lg" 
              className="glass-card hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold gradient-primary"
              onClick={scrollToNext}
            >
              Explore Our Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card px-8 py-6 text-lg font-semibold border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>

        {/* Right Side - 3D Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="relative h-96 lg:h-[600px]"
        >
          <Hero3D />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <div className="glass-card p-3 rounded-full animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;