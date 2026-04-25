import { motion } from 'framer-motion';
import './Section.css';

const skillCategories = [
  {
    icon: '💻',
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern frameworks and clean code.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'React'],
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    description: 'Creating robust server-side applications and RESTful APIs with secure authentication.',
    tags: ['C#', '.NET', 'PHP', 'Node.js'],
  },
  {
    icon: '🗄️',
    title: 'Database Management',
    description: 'Designing and managing efficient databases for modern applications.',
    tags: ['MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    icon: '🚀',
    title: 'DevOps & Tools',
    description: 'Containerization and version control for seamless deployment workflows.',
    tags: ['Docker', 'Git', 'Apache'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills Constellation
      </motion.h2>

      <motion.p
        className="section__subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        My technical abilities as stars in the developer universe
      </motion.p>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((skill, index) => (
          <motion.div key={index} className="skill-card" variants={cardVariants}>
            <div className="skill-card__icon">{skill.icon}</div>
            <h3 className="skill-card__title">{skill.title}</h3>
            <p className="skill-card__description">{skill.description}</p>
            <div className="skill-card__tags">
              {skill.tags.map((tag, i) => (
                <span key={i} className="skill-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;