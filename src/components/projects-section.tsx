import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Neural Commerce Platform",
    category: "E-Commerce",
    description: "AI-powered shopping experience with predictive recommendations and immersive 3D product visualization.",
    tech: ["Next.js", "Three.js", "TensorFlow.js", "Stripe"],
    gradient: "gradient-primary",
    image: "/api/placeholder/600/400"
  },
  {
    title: "Quantum Design System",
    category: "Design System",
    description: "Comprehensive design language for enterprise applications with real-time collaboration features.",
    tech: ["React", "Figma API", "WebRTC", "TypeScript"],
    gradient: "gradient-secondary",
    image: "/api/placeholder/600/400"
  },
  {
    title: "Immersive Portfolio Hub",
    category: "Creative Portfolio",
    description: "Interactive 3D portfolio platform for digital artists with VR-ready viewing experiences.",
    tech: ["Three.js", "WebXR", "GSAP", "WebGL"],
    gradient: "gradient-accent",
    image: "/api/placeholder/600/400"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 gradient-accent rounded-full blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A glimpse into our latest innovations. Each project pushes boundaries 
            and sets new standards for digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="glass-card overflow-hidden group-hover:shadow-glow transition-all duration-500">
                  <div className="aspect-video bg-surface relative overflow-hidden">
                    {/* Placeholder for project image */}
                    <div className={`absolute inset-0 ${project.gradient} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <Button size="sm" variant="outline" className="glass-card">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Button>
                        <Button size="sm" variant="outline" className="glass-card">
                          <Github className="w-4 h-4 mr-2" />
                          Source
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase"
                  >
                    {project.category}
                  </motion.p>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-3xl font-display font-bold text-foreground mb-4"
                  >
                    {project.title}
                  </motion.h3>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 glass-card text-sm font-medium text-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex gap-4 pt-4"
                >
                  <Button className={`${project.gradient} text-white hover:shadow-glow transition-all duration-300`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" className="glass-card border-primary/20">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline" className="glass-card px-8 py-6 text-lg font-semibold border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300">
            View Full Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;