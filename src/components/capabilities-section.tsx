import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Box, Sparkles, Code } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Full-stack web applications with modern frameworks, seamless user experiences, and enterprise-grade performance.",
    features: ["React & Next.js", "Real-time Updates", "Progressive Web Apps"]
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Pixel-perfect designs that adapt beautifully across all devices, from mobile phones to large desktop displays.",
    features: ["Mobile-First", "Touch Optimized", "Cross-Browser"]
  },
  {
    icon: Palette,
    title: "Visual Identity",
    description: "Comprehensive brand experiences through cohesive design systems, typography, and color palettes.",
    features: ["Brand Guidelines", "Design Systems", "Style Guides"]
  },
  {
    icon: Box,
    title: "3D & Animation",
    description: "Interactive 3D elements and smooth animations that bring your digital presence to life.",
    features: ["Three.js Integration", "WebGL Effects", "Micro-interactions"]
  },
  {
    icon: Sparkles,
    title: "User Experience",
    description: "Intuitive interfaces designed with user psychology and accessibility principles at their core.",
    features: ["UX Research", "A/B Testing", "Accessibility"]
  },
  {
    icon: Code,
    title: "Development Tools",
    description: "Custom development tools, dashboards, and internal systems to streamline business operations.",
    features: ["Admin Panels", "Analytics", "Automation"]
  }
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-72 h-72 gradient-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 gradient-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Immersive <span className="gradient-secondary bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we handle every aspect of your digital presence 
            with precision, creativity, and cutting-edge technology.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass-card h-full group-hover:shadow-glow transition-all duration-500 interactive-glow relative overflow-hidden">
                  {/* Icon */}
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {capability.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <div className="w-2 h-2 rounded-full gradient-accent mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Animated Background */}
                  <div className="absolute -bottom-32 -right-32 w-64 h-64 gradient-primary rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "100%", label: "Custom Solutions" },
            { number: "24/7", label: "Development Support" },
            { number: "∞", label: "Creative Possibilities" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center glass-card py-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.6 + (index * 0.1), type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="text-4xl font-display font-bold gradient-primary bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;