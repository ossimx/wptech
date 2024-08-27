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
    <Parallax pages={3}>
      <div classname='tech-page'>
      <ParallaxLayer offset={0} speed={0.5} className="text-layer-tech">
      <div className="text-content-tech">
          <h1>{t('how_it_works')}</h1>
          <p>{t('molecular_disintegration')}</p>
          <p>{t('thermal_treatment_methods')}</p>
          <div className='image-layer-tech'>
        <img src={images.HowItWorks} alt="How It Works" />
        </div>
        </div>

      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5} className="text-layer-tech">
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
            offset={2.5}
            speed={0.1}
            className="footer"
          >
           <FFooter></FFooter>
          </ParallaxLayer>
          </div>
    </Parallax>
  );
};

export default TechnologyPage;