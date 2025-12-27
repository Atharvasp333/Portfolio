import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import TitleHeader from "../components/TitleHeader";
import { skillCategories } from "../constants";

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
