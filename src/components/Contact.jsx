import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import './Contact.css';
import './Section.css';

const Contact = () => {
  const { t } = useLanguage();
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
        {t('contact.title')}
      </motion.h2>

      <motion.p
        className="section__subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t('contact.subtitle')}
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
            <h3 className="contact-success__title">{t('contact.success.icon')}</h3>
            <p className="contact-success__text">
              {t('contact.success.title')}
            </p>
          </motion.div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="name">
                {t('contact.nameLabel')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact-form__input"
                placeholder={t('contact.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="email">
                {t('contact.emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-form__input"
                placeholder={t('contact.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="message">
                {t('contact.messageLabel')}
              </label>
              <textarea
                id="message"
                name="message"
                className="contact-form__textarea"
                placeholder={t('contact.messagePlaceholder')}
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
                  <span>{t('contact.submitting')}</span>
                  <span>✉️</span>
                </>
              ) : (
                <>
                  <span>{t('contact.submit')}</span>
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
            <span className="contact-info__item-text">{t('contact.location')}</span>
          </div>
          <div className="contact-info__item">
            <span className="contact-info__item-icon">💼</span>
            <span className="contact-info__item-text">{t('contact.work')}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;