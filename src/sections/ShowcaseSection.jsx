import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Check } from "lucide-react";
import { showcaseProjects } from "../constants";

// Compact Card Component (Grid View)
const CompactCard = ({ project, onClick, index }) => {
  return (
    <motion.div
      layoutId={`card-container-${project.id}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden bg-black-200 border border-black-50 hover:border-blue-50/30 transition-colors"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Image Container */}
        <motion.div
          layoutId={`card-image-container-${project.id}`}
          className="aspect-[4/3] overflow-hidden bg-transparent"
        >
          <motion.img
            layoutId={`card-image-${project.id}`}
            src={project.src}
            alt={project.title}
            className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Content */}
        <div className="p-4">
          <motion.span
            layoutId={`card-category-${project.id}`}
            className="text-blue-50 text-[10px] font-medium uppercase tracking-wider"
          >
            {project.category}
          </motion.span>
          <motion.h3
            layoutId={`card-title-${project.id}`}
            className="text-base font-bold mt-1.5 group-hover:text-blue-50 transition-colors"
          >
            {project.title}
          </motion.h3>
          <motion.p
            layoutId={`card-tagline-${project.id}`}
            className="text-white-50 text-xs mt-1.5 line-clamp-2"
          >
            {project.tagline}
          </motion.p>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-50/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};


// Expanded Card Component (Detail View)
const ExpandedCard = ({ project, onClose }) => {
  const contentRef = useRef(null);
  const scrollYRef = useRef(0);

  // Lock body scroll and preserve position
  useEffect(() => {
    // Store current scroll position
    scrollYRef.current = window.scrollY;
    
    // Calculate scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Lock body
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      // Unlock body
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      
      // Restore scroll position without smooth scrolling
      window.scrollTo({
        top: scrollYRef.current,
        left: 0,
        behavior: "instant"
      });
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Handle close with event prevention
  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onClose();
  };

  const expandedContent = (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998]"
      />

      {/* Expanded Card */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 lg:p-12">
        <motion.div
          layoutId={`card-container-${project.id}`}
          className="relative w-full max-w-4xl max-h-[90vh] bg-black-200 rounded-2xl border border-black-50 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black-100/80 backdrop-blur-sm flex items-center justify-center hover:bg-black-50 transition-colors border border-black-50"
          >
            <X size={20} />
          </motion.button>

          {/* Scrollable Content */}
          <div 
            ref={contentRef} 
            data-lenis-prevent
            className="h-full max-h-[90vh] overflow-y-auto overscroll-contain"
          >
            {/* Header Image - Full Width Banner, Reduced Height */}
            <motion.div
              layoutId={`card-image-container-${project.id}`}
              className="w-full h-40 md:h-52 lg:h-60 overflow-hidden bg-transparent"
            >
              <motion.img
                layoutId={`card-image-${project.id}`}
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="p-4 md:p-5 space-y-3">
              {/* Title & Tagline */}
              <div>
                <motion.span
                  layoutId={`card-category-${project.id}`}
                  className="text-blue-50 text-xs font-medium uppercase tracking-wider"
                >
                  {project.category}
                </motion.span>
                <motion.h2
                  layoutId={`card-title-${project.id}`}
                  className="text-lg md:text-xl font-bold mt-1"
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-tagline-${project.id}`}
                  className="text-white-50 text-xs italic mt-1"
                >
                  {project.tagline}
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white-50 text-xs leading-relaxed"
              >
                {project.description}
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="space-y-2"
              >
                <h3 className="text-sm font-semibold">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.03 }}
                      className="flex items-start gap-1.5 text-white-50"
                    >
                      <Check className="w-3.5 h-3.5 text-blue-50 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="space-y-2"
              >
                <h3 className="text-sm font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.frontend.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-white-50 text-[10px] uppercase tracking-wider">
                        Frontend
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.skills.frontend.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-blue-50/10 text-blue-50 rounded-full text-[10px] font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.skills.backend.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-white-50 text-[10px] uppercase tracking-wider">
                        Backend
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.skills.backend.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full text-[10px] font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="border-l-2 border-blue-50 pl-2 py-0.5"
              >
                <p className="text-white-50 italic text-xs">{project.conclusion}</p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap gap-2 pt-1"
              >
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-white rounded-full text-xs font-medium hover:bg-blue-50/80 transition-colors"
                  >
                    View Live
                    <ExternalLink size={12} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black-100 text-white rounded-full text-xs font-medium hover:bg-black-50 transition-colors border border-black-50"
                >
                  GitHub
                  <Github size={12} />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );

  return createPortal(expandedContent, document.body);
};

// Main Section Component
const ShowcaseSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="work"
      className="relative z-10 md:mt-28 mt-14 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="hero-badge">
            <p>🎨 Creative Work</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-50 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-white-50 text-center max-w-2xl text-sm">
            Explore my recent work showcasing modern web and mobile applications
            built with cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {showcaseProjects.map((project, index) => (
            <CompactCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Expanded Card Overlay */}
      <AnimatePresence>
        {activeProject && (
          <ExpandedCard
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ShowcaseSection;
