/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import FFooter from '../FFooter';
import images from '../../images/Imageholder'
import './Sustainability.css'
const Sustainability = () => {
  const { t } = useTranslation();

  return (
    <div className='sustain-page'>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="sustain-layer-hero"
        >
          <div className='hero-sust'>
            <div className="logo-container">
              <img src={images.WPowertechSystemLogoBlack} alt="WP Logo" className="wp-logo" />
              <h1 className="sustain-title">{t('sustainability')}</h1>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} className="sustain-layer">
          <div className="text-content-sust">
            <div className='text-cont-sust-title'>
              <h1>{t('sustainability')}</h1>
            </div>
            <div className="text-section-sust">
              <div className="text-left">
                <h1>{t('sustainability-important')}</h1>
                <p>{t('sustainability-description')}</p>
                <h2>{t('sustainability-ecology')}</h2>
                <p>{t('sustainability-ecology-description')}</p>
                <h2>{t('commitment-to-environment')}</h2>
                <p>{t('commitment-description')}</p>
                <p>{t('commitment-details')}</p>
                <h2>{t('social-responsibility')}</h2>
                <p>{t('social-responsibility-description')}</p>
              </div>
              <div className="image-container-sust">
                <img src={images.sustainbanner} alt='sustainimage' />
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.1}
          className="footer"
        >
          <FFooter></FFooter>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Sustainability;