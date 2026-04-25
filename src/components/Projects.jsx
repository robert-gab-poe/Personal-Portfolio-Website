import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import './Section.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ repos: 0, stars: 0, forks: 0 });

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/robert-gab-poe/repos?sort=updated&per_page=100');
        const data = await response.json();

        const filteredRepos = data.filter(repo => !repo.name.includes('.github') && !repo.fork);
        setRepos(filteredRepos);

        const totalStars = filteredRepos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = filteredRepos.reduce((acc, repo) => acc + repo.forks_count, 0);

        setStats({
          repos: filteredRepos.length,
          stars: totalStars,
          forks: totalForks,
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      'C#': '#9b4f96',
      'PHP': '#4f5b93',
      'JavaScript': '#f7df1e',
      'HTML': '#e34f26',
      'Python': '#3572A5',
      'Java': '#b07219',
      'CSS': '#1572b6',
      'TypeScript': '#3178c6',
    };
    return colors[language] || '#8b5cf6';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  if (loading) {
    return (
      <section className="section" id="projects">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Projects Galaxy
        </motion.h2>
        <div className="projects-loading">
          <div className="projects-loading__spinner" />
          <p>Loading stellar projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="projects">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects Galaxy
      </motion.h2>

      <motion.p
        className="section__subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Exploring the universe of my work
      </motion.p>

      <motion.div
        className="projects-stats"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="projects-stat">
          <div className="projects-stat__number">{stats.repos}</div>
          <div className="projects-stat__label">Repositories</div>
        </div>
        <div className="projects-stat">
          <div className="projects-stat__number">{stats.stars}</div>
          <div className="projects-stat__label">Stars Earned</div>
        </div>
        <div className="projects-stat">
          <div className="projects-stat__number">{stats.forks}</div>
          <div className="projects-stat__label">Forks Created</div>
        </div>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            variants={cardVariants}
          >
            <div className="project-card__header">
              <span className="project-card__icon">📁</span>
              <span className="project-card__stars">
                ⭐ {repo.stargazers_count}
              </span>
            </div>
            <h3 className="project-card__title">{repo.name}</h3>
            <p className="project-card__description">
              {repo.description || 'No description available for this cosmic creation.'}
            </p>
            <div className="project-card__footer">
              <span className="project-card__language">
                <span
                  className="project-card__language-dot"
                  style={{ backgroundColor: getLanguageColor(repo.language) }}
                />
                {repo.language || 'Unknown'}
              </span>
              <span className="project-card__arrow">→</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;