import { useEffect, useState } from 'react';
import './StarBackground.css';

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() > 0.9 ? 'large' : Math.random() > 0.5 ? 'medium' : 'small',
      duration: `${2 + Math.random() * 3}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const createShootingStar = () => {
      const newShootingStar = {
        id: Date.now(),
        left: `${Math.random() * 50}%`,
        top: `${Math.random() * 30}%`,
      };
      setShootingStars(prev => [...prev, newShootingStar]);
      setTimeout(() => {
        setShootingStars(prev => prev.filter(s => s.id !== newShootingStar.id));
      }, 1000);
    };

    const interval = setInterval(createShootingStar, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="star-background">
      <div
        className="nebula nebula--purple"
        style={{ width: '400px', height: '400px', top: '10%', left: '-10%' }}
      />
      <div
        className="nebula nebula--pink"
        style={{ width: '300px', height: '300px', top: '50%', right: '-5%' }}
      />
      <div
        className="nebula nebula--blue"
        style={{ width: '350px', height: '350px', bottom: '10%', left: '30%' }}
      />

      {stars.map(star => (
        <div
          key={star.id}
          className={`star star--${star.size}`}
          style={{
            left: star.left,
            top: star.top,
            width: star.size === 'large' ? '4px' : star.size === 'medium' ? '3px' : '2px',
            height: star.size === 'large' ? '4px' : star.size === 'medium' ? '3px' : '2px',
            '--duration': star.duration,
            '--delay': star.delay,
          }}
        />
      ))}

      {shootingStars.map(star => (
        <div
          key={star.id}
          className="shooting-star"
          style={{ left: star.left, top: star.top }}
        />
      ))}
    </div>
  );
};

export default StarBackground;