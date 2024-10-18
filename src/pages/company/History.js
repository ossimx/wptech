/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import images from '../../images/Imageholder'
import './History.css';
const History = () => {
  const { t } = useTranslation();
  const [offsets, setOffsets] = useState({
    layer1: 0,
    layer2: 1,
    layer3: 1.5,
    layer4:1.95,
    layer5:2,
    layer6:2.4,
    layer7:2.9,
    layer8:3,
    layer9:3.4,
    layer10:3.9,
    layer11:4,
  });

  useEffect(() => {
    const handleResize = () => {//phone
      if (window.innerWidth <= 768) {
        setOffsets({
          layer1: 0,
          layer2: 0.5,
          layer3: 0.99,
          layer4: 1.05,
          layer5: 1.42,
          layer6: 1.78,
          layer7: 2,
          layer8:2.325,
          layer9:2.8,
          layer10:3.1,
          layer11:3.8,
        });
      } else if (window.innerWidth <= 1024) {//tablet
        setOffsets({
          layer1: 0,
          layer2: 1,
          layer3: 1.4,
          layer4: 1.8,
          layer5: 2,
          layer6: 2.4,
          layer7: 2.8,
          layer8:3,
          layer9:3.4,
          layer10:3.92,
          layer11:4,
        });
      } else {
        setOffsets({//desktop
          layer1: 0,
          layer2: 1,
          layer3: 1.5,
          layer4:1.95,
          layer5:2,
          layer6:2.4,
          layer7:2.9,
          layer8:3,
          layer9:3.4,
          layer10:3.9,
          layer11:4,
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='history-page'>
    <Parallax pages={6}>
      <ParallaxLayer
          offset={offsets.layer1}
          speed={0.5}
          className="history-layer"
        >
          <div className="logo-container">
            <img src={images.WPowertechSystemLogoWhite} alt="WP Logo" className="wp-logo" />
            <h1 className="timeline-title">{t('roadmap')}</h1>
          </div>
        </ParallaxLayer>
      <ParallaxLayer
        offset={offsets.layer2}
        speed={0.5}
        className="history-layer"
      >
        <div className="timeline-container">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h2>
                  <span className="quarter">{t('year-1')}</span>
                </h2>
                <ul>
                  <li>{t('year-1-element-1')}</li>
                  <li>{t('year-1-element-2')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offsets.layer3}
        speed={0.5}
        className="history-layer"
      >
        <div className="timeline-container">
          <div className="timeline-2">
            <div className="timeline-item">
              <div className="timeline-content">
                <h2>
                  <span className="quarter">{t('year-2')}</span>
                </h2>
                <ul>
                  <li>{t('year-2-element-1')}</li>
                  <li>{t('year-2-element-2')}</li>
                  <li>{t('year-2-element-3')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offsets.layer4}
        speed={0.5}
        className="history-layer"
      >
        <div className="timeline-container">
          <div className="timeline-4">
            <div className="timeline-item">
              <div className="timeline-content">
                <h2>
                  <span className="quarter">{t('year-3')}</span>
                </h2>
                <ul>
                  <li>{t('year-3-element-1')}</li>
                  <li>{t('year-3-element-2')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offsets.layer5}
        speed={0.5}
        className="history-layer"
      >
        <div className="timeline-container">
          <div className="timeline-4">
            <div className="timeline-item">
              <div className="timeline-content">
                <h2>
                  <span className="quarter">{t('year-4')}</span>
                </h2>
                <ul>
                <li>{t('blank')}</li>
                  <li>{t('year-4-element-1')}</li>
                  <li>{t('year-4-element-2')}</li>
                  <li>{t('blank')}</li><li>{t('blank')}</li><li>{t('blank')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offsets.layer6}
        speed={0.5}
        className="history-layer"
      >
        <div className="timeline-container">
          <div className="timeline-5">
            <div className="timeline-item">
              <div className="timeline-content">
                <h2>
                  <span className="quarter">{t('year-5')}</span>
                </h2>
                <ul>
                <li>{t('blank')}</li>
                  <li>{t('year-5-element-2')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offsets.layer7}
        speed={0.5}
        className="history-layer"
      >
        <div className="timeline-container">
          <div className="timeline-5">
            <div className="timeline-item">
              <div className="timeline-content">
                <h2>
                  <span className="quarter">{t('year-6')}</span>
                </h2>
                <ul>
                  <li>{t('year-6-element-1')}</li>
                  <li>{t('year-6-element-2')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offsets.layer8}
        speed={0.5}
        className="history-layer"
      >
        <div className="timeline-container">
          <div className="timeline-4">
            <div className="timeline-item">
              <div className="timeline-content">
                <h2>
                  <span className="quarter">{t('year-7')}</span>
                </h2>
                <ul>
                  <li>{t('year-7-element-1')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offsets.layer9}
        speed={0.5}
        className="history-layer"
      >
        <div className="timeline-container">
          <div className="timeline-4">
            <div className="timeline-item">
              <div className="timeline-content">
                <h2>
                  <span className="quarter">{t('year-8')}</span>
                </h2>
                <ul>
                  <li>{t('year-8-element-1')}</li>
                  <li>{t('year-8-element-2')}</li>
                  <li>{t('year-8-element-3')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offsets.layer10}
        speed={0.5}
        className="history-layer"
      >
        <div className="timeline-container">
          <div className="timeline-2">
            <div className="timeline-item">
              <div className="timeline-content">
                <h2>
                  <span className="quarter">{t('year-9')}</span>
                </h2>
                <ul>
                  <li>{t('year-9-element-1')}</li>
                  <li>{t('year-9-element-2')}</li>
                  <li>{t('year-9-element-3')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offsets.layer11}
        speed={0.5}
        className="history-layer"
      >
        <div className="timeline-container">
          <div className="timeline-2">
            <div className="timeline-item">
              <div className="timeline-content">
                <h2>
                  <span className="quarter">{t('year-10')}</span>
                </h2>
                <ul>
                  <li>{t('year-10-element-1')}</li>
                  <li>{t('year-10-element-2')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                  <li>{t('blank')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  </div>
  );
};

export default History;