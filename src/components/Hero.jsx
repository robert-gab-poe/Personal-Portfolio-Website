import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
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
        Robert Gabriel
      </motion.h1>

      <motion.p
        className="hero__subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Full-Stack Developer & Web Designer
      </motion.p>

      <motion.p
        className="hero__location"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Figueres, Catalonia
      </motion.p>

      <motion.p
        className="hero__description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Welcome to my universe. I'm a web application designer student at INS Cendrassos,
        exploring the cosmos of technology one line of code at a time.
      </motion.p>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span>Explore my galaxy</span>
        <div className="hero__scroll-icon" />
      </motion.div>
    </section>
  );
};

export default Hero;