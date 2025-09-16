import { motion } from "framer-motion";
import { Zap, Palette, Layers3, Cpu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Speed",
    description: "Lightning-fast loading times with optimized performance that never compromises on visual quality.",
    gradient: "gradient-primary"
  },
  {
    icon: Palette,
    title: "Aesthetics", 
    description: "Pixel-perfect designs that capture attention and create lasting impressions through visual storytelling.",
    gradient: "gradient-secondary"
  },
  {
    icon: Layers3,
    title: "3D Interactivity",
    description: "Immersive 3D experiences that transform static websites into dynamic, engaging digital environments.",
    gradient: "gradient-accent"
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Tech",
    description: "Latest technologies and frameworks combined with innovative approaches to push web development boundaries.",
    gradient: "gradient-primary"
  }
];

const WhyUsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards in sequence
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-5 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Proof by <span className="gradient-primary bg-clip-text text-transparent">Design</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Instead of showing you our past work, we demonstrate our capabilities through innovation. 
            This very website is our portfolio — a testament to what's possible.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group perspective-1000"
              >
                <div className="glass-card h-full preserve-3d group-hover:rotate-y-3 transition-all duration-500 interactive-glow">
                  {/* Icon with Gradient Background */}
                  <div className={`w-16 h-16 rounded-2xl ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-display font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-8">
            Ready to see these principles in action?
          </p>
          <div className="inline-flex glass-card p-2 rounded-full">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;