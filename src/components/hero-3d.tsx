import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero3D = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      
      const rect = orbRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / 20;
      const deltaY = (e.clientY - centerY) / 20;
      
      orbRef.current.style.transform = `
        rotateX(${deltaY}deg) 
        rotateY(${deltaX}deg) 
        translateZ(0px)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      {/* Floating Orb */}
      <motion.div
        ref={orbRef}
        initial={{ scale: 0, rotateX: 0, rotateY: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-80 h-80 preserve-3d animate-float"
      >
        {/* Main Orb */}
        <div className="absolute inset-0 rounded-full glass animate-glow">
          <div className="absolute inset-4 rounded-full gradient-primary opacity-60 blur-sm"></div>
          <div className="absolute inset-8 rounded-full gradient-secondary opacity-40 blur-md"></div>
          <div className="absolute inset-12 rounded-full gradient-accent opacity-20 blur-lg"></div>
        </div>
        
        {/* Orbital Rings */}
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute inset-4 rounded-full border border-primary/15 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
        <div className="absolute inset-8 rounded-full border border-primary/10 animate-spin" style={{ animationDuration: '40s' }}></div>
        
        {/* Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
            className="absolute w-2 h-2 bg-primary rounded-full blur-sm"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateX(200px)`,
              animation: `spin ${15 + i * 2}s linear infinite`,
            }}
          />
        ))}
      </motion.div>

      {/* Background Gradient Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-secondary rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Hero3D;