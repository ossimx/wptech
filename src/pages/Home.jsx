/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import { motion } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { CustomPrevButton, CustomNextButton } from '../components/CustomButtons';
import { FaArrowRight } from 'react-icons/fa';
import { Box, Typography, Button } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import FFooter from './FFooter';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../App.css';
import '../components/Carousel.css';

import images from '../images/Imageholder';

import items from '../components/CarouselItems';

const Home = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
            offset={0.999}
            speed={0.4
            }
            className='inbet'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VxSnO7LLpgM?si=ib48DnmM1VdKoT9y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.48}
            speed={0.5}
            className="technology-section-a"
          >
            <Box
              sx={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                backgroundImage: 'url("/Wpowertech-24.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0 3vw 5vw rgba(0, 0, 0, 0.8)',
              }}
            >
              <div>
                {isMobile ? (
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, type: 'spring', stiffness: 50, delay: 4 }}
                    className="technology-section-phone"
                    style={{
                      position: 'absolute',
                      top: '4%',
                      height: 'auto',
                      maxHeight: '50%',
                      transform: 'translateY(0)',
                      background: 'rgba(255, 255, 255, 0.43)',
                      padding: '5vw 5vw',
                      zIndex: 2,
                      maxWidth: '90%',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        color: '#009eed',
                        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
                        fontSize: '3.4rem',
                        marginBottom: 2,
                      }}
                    >
                      {t('technology')}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '2rem',
                        color: '#333',
                        marginBottom: 2,
                      }}
                    >
                      {t('learn_more_desc')}
                    </Typography>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, type: 'spring', stiffness: 50, delay: 4 }}
                    className="technology-section-desktop"
                    style={{
                      position: 'absolute',
                      left: { xs: '2%', md: '6%' },
                      top: '0%',
                      height: '100%',
                      transform: 'translateY(0)',
                      background: 'rgba(255, 255, 255, 0.43)',
                      padding: { xs: '10vw 5vw', sm: '2vw 2vw' },
                      zIndex: 2,
                      maxWidth: '500px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        color: '#009eed',
                        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
                        fontSize: { xs: '3.4rem', sm: '6rem' },
                        marginBottom: 2,
                      }}
                    >
                      {t('technology')}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '2rem', sm: '4rem' },
                        color: '#333',
                        marginBottom: 2,
                      }}
                    >
                      {t('learn_more_desc')}
                    </Typography>
                  </motion.div>
                )}
              </div>

              {/* Video with animation from right to left */}
              <motion.div
                initial={{ opacity: 0, x: '100vw' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 2.5 }}
                style={{
                  position: 'absolute',
                  right: '10%',
                  bottom: '20%',
                  width: '50vw',
                  height: '50vh',
                  minHeight: '200px',
                  minWidth: '305px',
                  boxShadow: '0 2vw 4vw rgba(0, 0, 0, 0.7)',
                  borderRadius: 2,
                  zIndex: 1,
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/p8VD26dwU14?si=LXVS9aIcTAND8aRg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.5, delay: 5 }}
                style={{
                  position: 'absolute',
                  right: '5%',
                  bottom: '5%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <FaArrowRight
                  style={{
                    width: '40px',
                    height: '40px',
                    color: 'blue',
                    marginRight: '10px',
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  href="/#/products/technology"
                  sx={{
                    padding: '10px 20px',
                    fontSize: '1.5rem',
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: '#0056b3',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  {t('learn_more')}
                </Button>
              </motion.div>
            </Box>

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
