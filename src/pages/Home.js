/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { CustomPrevButton, CustomNextButton } from '../components/CustomButtons';
import { FaArrowRight } from 'react-icons/fa';
import FFooter from './FFooter';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../App.css';
import '../components/Carousel.css';

import images from '../images/Imageholder';

import items from '../components/CarouselItems';

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="home-page">
        <Parallax pages={5}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className="about-section"
          >
            <div className="overlay">
              <div className="background-image">
                <img src={images.Wpowertech2} alt="Background" />
              </div>
              <div className="about-image">
                <img src={images.WPowertechSystemLogoWhite} alt="Wpowertech Logo" />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
          offset = {0.999}
          speed={0.4  
          }
          className='inbet'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VxSnO7LLpgM?si=ib48DnmM1VdKoT9y"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.48}
            speed={0.5}
            className="technology-section"
          >
            <div className="overlay">
              <h2 className="tech-title">{t('technology')}</h2>
              <p>{t('learn_more_desc')}</p>
            </div>
            <iframe width="600" height="385" src="https://www.youtube.com/embed/p8VD26dwU14?si=LXVS9aIcTAND8aRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="button-container-tech">
              <FaArrowRight className="arrow" />
              <a href="/#/products/technology" className="learn-more">{t('learn_more')}</a>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={0.5}
            className="news-section"
          >
            <AliceCarousel
              mouseTracking
              infinite
              items={items}
              renderPrevButton={() => <CustomPrevButton onClick={() => { }} />}
              renderNextButton={() => <CustomNextButton onClick={() => { }} />}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3.5}
            speed={0.1}
            className="footer"
          >
           <FFooter></FFooter>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>

  );
}

export default Home;
