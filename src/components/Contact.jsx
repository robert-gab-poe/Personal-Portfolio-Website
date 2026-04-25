import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import './Section.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Send a Signal
      </motion.h2>

      <motion.p
        className="section__subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Let's communicate across the cosmos
      </motion.p>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {submitted ? (
          <motion.div
            className="contact-form contact-success"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-success__icon">🚀</div>
            <h3 className="contact-success__title">Message Transmitted!</h3>
            <p className="contact-success__text">
              Your signal has been received. I'll respond as soon as possible!
            </p>
          </motion.div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact-form__input"
                placeholder="Enter your cosmic identifier"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-form__input"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="contact-form__textarea"
                placeholder="Share your thoughts across the universe..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-form__submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span>Transmitting...</span>
                  <span>✉️</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <span>🚀</span>
                </>
              )}
            </button>
          </form>
        )}

        <motion.div
          className="contact-info"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="contact-info__item">
            <span className="contact-info__item-icon">📍</span>
            <span className="contact-info__item-text">Figueres, Catalonia</span>
          </div>
          <div className="contact-info__item">
            <span className="contact-info__item-icon">🎓</span>
            <span className="contact-info__item-text">INS Cendrassos Student</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;