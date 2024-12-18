/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState,useEffect } from 'react';
import FFooter from '../FFooter';
import images from '../../images/Imageholder'
import './Sustainability.css'
const Sustainability = () => {
  const { t } = useTranslation();
  const [offsets, setOffsets] = useState({
    layer1: 0,
    layer2: 1.5,
    layer3: 2.3,
  });

  useEffect(() => {
    const handleResize = () => {//phone
      if (window.innerWidth <= 768) {
        setOffsets({
          layer1: 0.01,
          layer2: 2.2,
          layer3: 4,
        });
      } else if (window.innerWidth <= 1024) {//tablet
        setOffsets({
          layer1: 0,
          layer2: 2.3,
          layer3: 2.7,
        });
      } else {
        setOffsets({//desktop
          layer1: 0,
          layer2: 1.5,
          layer3: 2.95,
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='sustain-page'>
      <Parallax pages={5.4}>
        <ParallaxLayer
          offset={offsets.layer1}
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
        <ParallaxLayer offset={offsets.layer2} speed={0.5} className="sustain-layer">
          <div className="text-content-sust">
            <div className='text-cont-sust-title'>
              <h1>{t('sustainability')}</h1>
            </div>
            <div className="text-section-sust">
              <div className="text-left">
                <h1>{t('sust-15')}</h1>
                <p>{t('sust-new-1')}</p>
                <p>{t('sust-16')}</p>
                <p>{t('sust-new-2')}</p>
                <h2>{t('sust-17')}</h2>
                <p>{t('sust-18')}</p>
                <h2>{t('sust-19')}</h2>
                <p>{t('sust-20')}</p>
                <h2>{t('sust-21')}</h2>
                <p>{t('sust-22')}</p>
                <h2>{t('sust-23')}</h2>
                <p>{t('sust-24')}</p>
                <h2>{t('sust-25')}</h2>
                <p>{t('sust-26')}</p>
                <p>{t('sust-27')}</p>
                <h2>{t('sust-new-3')}</h2>
                <p>{t('sust-new-4')}</p>
              </div>
              <div className="image-container-sust">
                <img src={images.sustainbanner} alt='sustainimage' />
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={offsets.layer3}
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