import React from 'react';
import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import FFooter from '../FFooter';
import './Technology.css';
import '../../App.css';
import images from '../../images/Imageholder'
const TechnologyPage = () => {
  const { t } = useTranslation();

  return (
    <div className='techno-page'>
    <Parallax pages={4.5}>
      <ParallaxLayer
          offset={0}
          speed={0.5}
          className="sustain-layer-hero"
        >
          <div className='hero-tech'>
            <div className="logo-container">
              <img src={images.WPowertechSystemLogoBlack} alt="WP Logo" className="wp-logo" />
              <h1 className="sustain-title">{t('technology')}</h1>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.95}
          speed={0.4}
          className="inbet"
        >
           <iframe width="560" height="315" src="https://www.youtube.com/embed/4vWkYQgP3D8?si=V66Cd2OhiW3CaU_i"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={0.5} className="text-layer-tech">
      <div className="text-content-tech">
          <h1>{t('how_it_works')}</h1>
          <p>{t('molecular_disintegration')}</p>
          <p>{t('thermal_treatment_methods')}</p>
          <div className='image-layer-tech'>
        <img src={images.HowItWorks} alt="How It Works" />
        </div>
        </div>

      </ParallaxLayer>
      <ParallaxLayer offset={2.4} speed={0.5} className="text-layer-tech">
        <div className="text-content-tech">
          <h2>{t('high_temp_thermal_decomposition')}</h2>
          <p>{t('pyrolysis')}</p>
          <p>{t('benefits')}</p>
          <div className='image-layer-tech'>
        <img src={images.ThermalTreatment} alt="Thermal Treatment" />
        </div>
        </div>

      </ParallaxLayer>
      <ParallaxLayer
            offset={3.4}
            speed={0.1}
            className="footer"
          >
           <FFooter></FFooter>
          </ParallaxLayer>
    </Parallax>
    </div>
  );
};

export default TechnologyPage;