import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Check } from "lucide-react";

// Project data
const showcaseProjects = [
  {
    id: 1,
    title: "KisaanSetu",
    tagline: "An all-in-one digital companion empowering Indian farmers.",
    category: "Mobile Application",
    src: "/images/kisaansetu-app.jpg",
    bgColor: "bg-[#E8F5E9]",
    live: "#",
    github: "#",
    skills: {
      frontend: ["Flutter", "Dart"],
      backend: ["REST APIs", "Firebase", "Node.js", "MongoDB"],
    },
    description:
      "KisaanSetu is a farmer-centric mobile application designed to simplify access to essential agricultural information and tools. It helps farmers make informed decisions through AI-driven insights and centralized resources.",
    features: [
      "AI-based crop disease identification",
      "Personalized crop recommendations",
      "Government scheme awareness and updates",
      "Weather insights and alerts",
      "Access to essential farming information and tools",
      "Simple and farmer-friendly UI for easy adoption",
    ],
    conclusion:
      "KisaanSetu demonstrates how technology and AI can be leveraged to empower farmers, improve agricultural decision-making, and bridge the information gap in rural communities.",
  },
  {
    id: 2,
    title: "Signalist",
    tagline: "AI-powered insights for smarter stock market decisions.",
    category: "Web Application",
    src: "/images/Signalist.png",
    bgColor: "bg-[#1a1a2e]",
    live: "#",
    github: "#",
    skills: {
      frontend: ["Next.js", "React", "TypeScript", "Shadcn UI", "TailwindCSS"],
      backend: [
        "Node.js",
        "MongoDB",
        "Better Auth",
        "Inngest",
        "Finnhub API",
        "Nodemailer",
      ],
    },
    description:
      "Signalist is an AI-powered stock market platform that helps users track real-time prices, analyze company performance, and receive intelligent alerts. Built with a modern full-stack architecture, it delivers personalized insights, automated workflows, and a seamless trading research experience.",
    features: [
      "Real-time stock price tracking with interactive charts",
      "Advanced search and personalized watchlists",
      "Price alerts, volume spike notifications, and email alerts",
      "Detailed company insights including financials, news, and sentiment",
      "AI-powered daily market digests and earnings notifications",
      "Admin dashboard for stock management, news publishing, and user monitoring",
      "Event-driven workflows using Inngest for automation and scalability",
    ],
    conclusion:
      "Signalist showcases how AI, event-driven systems, and modern web technologies can come together to build a scalable, real-time financial platform focused on data-driven decision making.",
  },
  {
    id: 3,
    title: "KindMeals",
    tagline: "Connecting surplus food to those who need it most.",
    category: "Social Impact Platform",
    src: "/images/kindmeals-app.jpg",
    bgColor: "bg-[#FFE7EB]",
    live: "#",
    github: "#",
    skills: {
      frontend: ["Flutter", "React"],
      backend: ["Node.js", "Express", "MongoDB", "Firebase", "REST API"],
    },
    description:
      "KindMeals is a food donation and waste management platform designed to reduce food wastage by connecting donors with NGOs and recipients in real time. The platform streamlines donation coordination and ensures surplus food reaches the right people efficiently.",
    features: [
      "Real-time food donation listings",
      "NGO and volunteer coordination",
      "Secure authentication and role-based access",
      "Location-based donor–recipient matching",
      "Donation tracking and status updates",
      "Scalable backend for handling high-volume requests",
    ],
    conclusion:
      "KindMeals highlights how technology can drive social impact by minimizing food waste and improving access to food for communities in need through a reliable and user-friendly digital platform.",
  },
  {
    id: 4,
    title: "MediMeet",
    tagline: "Seamless doctor–patient consultations, anytime.",
    category: "Healthcare Web Platform",
    src: "/images/medimeet.png",
    bgColor: "bg-[#FFE7EB]",
    live: "#",
    github: "#",
    skills: {
      frontend: ["Next.js", "React", "TailwindCSS", "Shadcn UI"],
      backend: ["NeonDB", "Clerk Auth", "REST API", "Vonage Video API"],
    },
    description:
      "MediMeet is a modern doctor appointment and telemedicine platform that enables patients to book appointments and consult doctors through secure video calls. The platform supports multiple doctor specialties and provides a smooth, role-based experience for admins, doctors, and patients.",
    features: [
      "Role-based access for admin, doctor, and patient",
      "Doctor discovery across multiple specialties",
      "Appointment scheduling and management",
      "Secure video consultations using Vonage",
      "Authentication and user management with Clerk",
      "Responsive and accessible UI built with modern design systems",
    ],
    conclusion:
      "MediMeet demonstrates how modern web technologies can be used to build scalable and secure healthcare platforms that improve accessibility and streamline doctor–patient interactions.",
  },
];

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
        <div className="p-5">
          <motion.span
            layoutId={`card-category-${project.id}`}
            className="text-blue-50 text-xs font-medium uppercase tracking-wider"
          >
            {project.category}
          </motion.span>
          <motion.h3
            layoutId={`card-title-${project.id}`}
            className="text-xl font-bold mt-2 group-hover:text-blue-50 transition-colors"
          >
            {project.title}
          </motion.h3>
          <motion.p
            layoutId={`card-tagline-${project.id}`}
            className="text-white-50 text-sm mt-2 line-clamp-2"
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

  // Lock body scroll
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const expandedContent = (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black-100/80 backdrop-blur-sm flex items-center justify-center hover:bg-black-50 transition-colors border border-black-50"
          >
            <X size={20} />
          </motion.button>

          {/* Scrollable Content */}
          <div ref={contentRef} className="h-full max-h-[90vh] overflow-y-auto">
            {/* Header Image */}
            <motion.div
              layoutId={`card-image-container-${project.id}`}
              className="aspect-[16/9] overflow-hidden bg-transparent"
            >
              <motion.img
                layoutId={`card-image-${project.id}`}
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Title & Tagline */}
              <div>
                <motion.span
                  layoutId={`card-category-${project.id}`}
                  className="text-blue-50 text-sm font-medium uppercase tracking-wider"
                >
                  {project.category}
                </motion.span>
                <motion.h2
                  layoutId={`card-title-${project.id}`}
                  className="text-3xl md:text-4xl font-bold mt-2"
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-tagline-${project.id}`}
                  className="text-white-50 text-lg italic mt-2"
                >
                  {project.tagline}
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white-50 leading-relaxed"
              >
                {project.description}
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-start gap-3 text-white-50"
                    >
                      <Check className="w-5 h-5 text-blue-50 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-4">
                  {project.skills.frontend.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-white-50 text-xs uppercase tracking-wider">
                        Frontend
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.frontend.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-blue-50/10 text-blue-50 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.skills.backend.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-white-50 text-xs uppercase tracking-wider">
                        Backend
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.backend.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-green-500/10 text-green-400 rounded-full text-xs font-medium"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="border-l-4 border-blue-50 pl-4 py-2"
              >
                <p className="text-white-50 italic">{project.conclusion}</p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-white rounded-full font-medium hover:bg-blue-50/80 transition-colors"
                >
                  View Live Project
                  <ExternalLink size={16} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black-100 text-white rounded-full font-medium hover:bg-black-50 transition-colors border border-black-50"
                >
                  GitHub Repo
                  <Github size={16} />
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
      className="relative z-10 md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        {/* Header */}
        <div className="flex flex-col items-center gap-5">
          <div className="hero-badge">
            <p>🎨 Creative Work</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-50 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-white-50 text-center max-w-2xl text-lg">
            Explore my recent work showcasing modern web and mobile applications
            built with cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
