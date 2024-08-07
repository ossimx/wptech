/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import FFooter from './FFooter';
import images from '../../images/Imageholder'
const Template = () => {
  const { t } = useTranslation();

  return (
    <Parallax pages={1}>
      <ParallaxLayer
            offset={2}
            speed={0.1}
            className="footer"
          >
            <FFooter></FFooter>
          </ParallaxLayer>
    </Parallax>
  );
};

export default Template;