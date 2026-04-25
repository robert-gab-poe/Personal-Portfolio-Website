import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/125308723?v=4"
          alt="Robert Gabriel"
          className="hero__avatar"
        />
      </motion.div>

      <motion.h1
        className="hero__title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {t('hero.title')}
      </motion.h1>

      <motion.p
        className="hero__subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {t('hero.subtitle')}
      </motion.p>

      <motion.p
        className="hero__location"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {t('hero.location')}
      </motion.p>

      <motion.p
        className="hero__description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        {t('hero.description')}
      </motion.p>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span>{t('hero.scroll')}</span>
        <div className="hero__scroll-icon" />
      </motion.div>
    </section>
  );
};

export default Hero;