import React from 'react';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="products-page">
      <h1>{t('products')}</h1>
      <p>{t('products_description')}</p>
    </div>
  );
};

export default Products;