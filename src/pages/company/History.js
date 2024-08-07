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
    layer3: 1.7,
    layer4:2.4,
    layer5:3.1,
    layer6:3.8,
  });

  useEffect(() => {
    const handleResize = () => {//phone
      if (window.innerWidth <= 768) {
        setOffsets({
          layer1: 0,
          layer2: 0.6,
          layer3: 0.925,
          layer4: 1.,
          layer5: 1.325,
          layer6: 1.650,
        });
      } else if (window.innerWidth <= 1024) {//tablet
        setOffsets({
          layer1: 0,
          layer2: 1,
          layer3: 1.4,
          layer4: 1.8,
          layer5: 2,
          layer6: 2.4,
        });
      } else {
        setOffsets({//desktop
          layer1: 0,
          layer2: 1,
          layer3: 1.7,
          layer4:2,
          layer5:2.7,
          layer6:3,
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
                  <li>{t('year-1-element-3')}</li>
                  <li>{t('year-1-element-4')}</li>
                  <li>{t('year-1-element-5')}</li>
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
                  <li>{t('year-2-element-4')}</li>
                  <li>{t('year-2-element-5')}</li>
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
          <div className="timeline-3">
            <div className="timeline-item">
              <div className="timeline-content">
                <h2>
                  <span className="quarter">{t('year-3')}</span>
                </h2>
                <ul>
                  <li>{t('year-3-element-1')}</li>
                  <li>{t('year-3-element-2')}</li>
                  <li>{t('year-3-element-3')}</li>
                  <li>{t('year-3-element-4')}</li>
                  <li>{t('year-3-element-5')}</li>
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
                  <li>{t('year-4-element-1')}</li>
                  <li>{t('year-4-element-2')}</li>
                  <li>{t('year-4-element-3')}</li>
                  <li>{t('year-4-element-4')}</li>
                  <li>{t('year-4-element-5')}</li>
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
                  <li>{t('year-5-element-1')}</li>
                  <li>{t('year-5-element-2')}</li>
                  <li>{t('year-5-element-3')}</li>
                  <li>{t('year-5-element-4')}</li>
                  <li>{t('year-5-element-5')}</li>
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