import React from 'react';
import { useTranslation } from 'react-i18next';

const Technology = () => {
  const { t } = useTranslation();
  
  return (
    <div className="technology-page">
      <h1>{t('technology')}</h1>
      <p>{t('technology_description')}</p>
    </div>
  );
};

export default Technology;