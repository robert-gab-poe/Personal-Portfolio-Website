import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import './Section.css';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: '💻',
      key: 'frontend',
    },
    {
      icon: '⚙️',
      key: 'backend',
    },
    {
      icon: '🗄️',
      key: 'database',
    },
    {
      icon: '🚀',
      key: 'devops',
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

  return (
    <section className="section" id="skills">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('skills.title')}
      </motion.h2>

      <motion.p
        className="section__subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t('skills.subtitle')}
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
            <h3 className="skill-card__title">{t(`skills.${skill.key}.title`)}</h3>
            <p className="skill-card__description">{t(`skills.${skill.key}.description`)}</p>
            <div className="skill-card__tags">
              {t(`skills.${skill.key}.tags`).map((tag, i) => (
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