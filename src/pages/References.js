import React from 'react';
import { useTranslation } from 'react-i18next';

const References = () => {
  const { t } = useTranslation();

  return (
    <div className="references-page">
      <h1>{t('references')}</h1>
      <p>{t('references_description')}</p>
    </div>
  );
};

export default References;