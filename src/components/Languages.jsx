import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import './Languages.css';
import './Section.css';

const Languages = () => {
  const { t } = useLanguage();

  const languages = [
    { name: 'C#', levelKey: 'advanced', progress: 90, className: 'c-sharp', icon: '#' },
    { name: 'JavaScript', levelKey: 'advanced', progress: 85, className: 'javascript', icon: 'JS' },
    { name: 'HTML5', levelKey: 'expert', progress: 95, className: 'html', icon: '</>' },
    { name: 'PHP', levelKey: 'intermediate', progress: 70, className: 'php', icon: 'PHP' },
    { name: 'CSS3', levelKey: 'advanced', progress: 85, className: 'css', icon: '{}' },
    { name: 'SQL', levelKey: 'advanced', progress: 80, className: 'sql', icon: 'SQL' },
    { name: 'Git', levelKey: 'advanced', progress: 85, className: 'git', icon: 'Git' },
    { name: 'Docker', levelKey: 'intermediate', progress: 65, className: 'docker', icon: 'Docker' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="section" id="languages">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('languages.title')}
      </motion.h2>

      <motion.p
        className="section__subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t('languages.subtitle')}
      </motion.p>

      <motion.div
        className="languages-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {languages.map((lang, index) => (
          <motion.div key={index} className="language-card" variants={cardVariants}>
            <div className="language-card__header">
              <div className="language-card__icon">{lang.icon}</div>
              <div>
                <h3 className="language-card__name">{lang.name}</h3>
                <span className="language-card__level">{t(`languages.levels.${lang.levelKey}`)}</span>
              </div>
            </div>
            <div className="language-card__progress">
              <motion.div
                className={`language-card__progress-bar language-card__progress-bar--${lang.className}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Languages;