/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FaDownload } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import FFooter from '../FFooter';
import './Technology.css';
import '../../App.css';
import images from '../../images/Imageholder'
import presentation1 from '../../docs/prez_eng.pdf'
import presentation2 from '../../docs/prez_sp.pdf'
import presentation3 from '../../docs/prez_tr.pdf'
import presentation4 from '../../docs/prez_ro.pdf'
import presentation5 from '../../docs/prez_de.pdf'
import LazyLoad from 'react-lazyload';

const TechnologyPage = () => {
  const { t } = useTranslation();
  const fileGallery = [
    { img: images.prez1, file:presentation1 },
    { img: images.prez2, file: presentation4 },
    { img: images.prez3, file: presentation2 },
    { img: images.prez4, file: presentation3 },
    { img: images.prez5, file: presentation5},
  ];
  const [offsets, setOffsets] = useState({
    layer1: 0,
    layer2: 0.95,
    layer3: 2,
    layer4: 3,
    layer5: 3.8
  });

  useEffect(() => {
    const handleResize = () => {//phone
      if (window.innerWidth <= 768) {
        setOffsets({
          layer1: 0,
          layer2: 0.90,
          layer3: 1.99,
          layer4: 3,
          layer5: 4.3
        });
      } else if (window.innerWidth <= 1024) {//tablet
        setOffsets({
          layer1: 0,
          layer2: 0.90,
          layer3: 1.99,
          layer4: 3,
          layer5: 4
        });
      } else {
        setOffsets({//desktop
          layer1: 0,
          layer2: 0.90,
          layer3: 2,
          layer4: 3.6,
          layer5: 4.4
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='techno-page'>
    <Parallax pages={5.7}>
      <ParallaxLayer
          offset={offsets.layer1}
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
          offset={offsets.layer2}
          speed={0.4}
          className="inbet"
        >
           <iframe width="560" height="315" src="https://www.youtube.com/embed/4vWkYQgP3D8?si=V66Cd2OhiW3CaU_i"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </ParallaxLayer>
      <ParallaxLayer offset={offsets.layer3} speed={0.5} className="text-layer-tech">
      <div className="text-content-tech">
          <h1>{t('how_it_works')}</h1>
          <p>{t('molecular_disintegration')}</p>
          <p>{t('high_temp_thermal_decomposition')}</p>
          <p>{t('benefits')}</p>
          <div className='image-layer-tech'>
        <img src={images.HowItWorks} alt="How It Works" />
        <img src={images.slide4} alt="Product Presentation" />
        <img src={images.slide17} alt="The Process" />
        </div>
        </div>

      </ParallaxLayer>
      <ParallaxLayer offset={offsets.layer4} speed={0.5} className="text-layer-tech">
        <div className="text-content-tech">
        <h2>{t('file-gallery')} <FaDownload/></h2>
          <div className="gallery-container">
            {fileGallery.map((file, index) => (
              <a key={index} href={file.file} download>
                <LazyLoad height={400} offset={200}>
                <img src={file.img} alt={`File ${index + 1}`} className="gallery-image" />
                </LazyLoad>
              </a>
            ))}
          </div>
        </div>

      </ParallaxLayer>
      <ParallaxLayer
            offset={offsets.layer5}
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