import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaFigma,
  FaHtml5,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiExpress,
  SiNestjs,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostgresql,
  SiRedis,
  SiVercel,
  SiAdobeillustrator,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import TitleHeader from "../components/TitleHeader";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "React Native", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "REST APIs", icon: TbApi, color: "#FF6B6B" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Agile/Scrum", icon: TbApi, color: "#0052CC" },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
      { name: "UI/UX Design", icon: MdDesignServices, color: "#A855F7" },
    ],
  },
];

const SkillCard = ({ category, index }) => {
  return (
    <CardContainer containerClassName="w-full">
      <CardBody className="relative w-full h-full rounded-2xl p-6 bg-gradient-to-br from-black-200 to-black-300 border border-black-50 group/card">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/10 to-purple-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
        
        <CardItem translateZ={50} className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
        </CardItem>

        <CardItem translateZ={30} className="relative z-10">
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black-100/50 border border-black-50 hover:border-blue-50/50 transition-colors"
                >
                  <IconComponent
                    className="w-5 h-5"
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm text-white-50">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard category={category} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
