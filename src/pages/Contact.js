import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <h1>{t('contact')}</h1>
      <p>{t('contact_description')}</p>
    </div>
  );
};

export default Contact;