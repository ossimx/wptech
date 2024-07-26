/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';
import { IoLanguage } from "react-icons/io5";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { CustomPrevButton, CustomNextButton } from './CustomButtons';
import { FaFacebook, FaYoutube } from "react-icons/fa6";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './App.css';
import './Carousel.css';

import items from './CarouselItems';

const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <Router>
        <nav className="navbar">
          <div className="logo">
            <img src="/favicon.ico" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="/technology">{t('technology')}</Link></li>
            <li><Link to="/references">{t('references')}</Link></li>
            <li><Link to="/contact">{t('contact')}</Link></li>
          </ul>
          <div className="lang-container">
            <a href=" ">
              <IoLanguage />
            </a>
            <div className="lang-dropdown">
              <a href=" " onClick={() => changeLanguage('en')}>
                <img src="us.png" alt="English" />
              </a>
              <a href=" " onClick={() => changeLanguage('ro')}>
                <img src="ro.png" alt="Romanian" />
              </a>
              <a href=" " onClick={() => changeLanguage('hu')}>
                <img src="hu.png" alt="Hungarian" />
              </a>
              <a href=" " onClick={() => changeLanguage('de')}>
                <img src="de.png" alt="German" />
              </a>
              <a href=" " onClick={() => changeLanguage('zh')}>
                <img src="zh.png" alt="Chinese" />
              </a>
            </div>
          </div>
        </nav>
        <Parallax pages={4}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className="about-section"
          >
            <div className="overlay">
              <div className="about-image">
                <img src="/Wpowertech_logo_white.png" alt="Wpowertech Logo" />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            className="technology-section"
          >
            <div className="overlay">
              <h2 className="tech-title">{t('technology')}</h2>
              <p>{t('learn_more_desc')}</p>
            </div>
            <div className="button-container">
              <FaArrowRight className="arrow" />
              <a href="/technology" className="learn-more">{t('learn_more')}</a>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.5}
            className="news-section"
          >
            <AliceCarousel
              mouseTracking
              infinite
              items={items}
              renderPrevButton={() => <CustomPrevButton onClick={() => {}} />}
              renderNextButton={() => <CustomNextButton onClick={() => {}} />}
            />
          </ParallaxLayer>

          {/* Footer */}
          <ParallaxLayer
            offset={3}
            speed={0.1}
            className="footer"
          >
            <div className="footer-content">
              <div className="contact-details">
                <h2><b>{t('contact_us')}</b></h2>
                <p>SC Waste Powertech SRL</p>
                <p><FaEnvelope />: office@wpowertech.ro</p>
                <p><FaPhone />: (+40) 751-624-810</p>
                <a href="https://www.facebook.com/profile.php?id=61559358922953"  style={{ textDecoration: 'none' }}><FaFacebook/>: Waste Powertech SRL</a>
                <a href="https://www.youtube.com/@wastepowertech4213"  style={{ textDecoration: 'none' }}><FaYoutube/>: Waste Powertech</a>
              </div>
              <div className="location-container">
                <h2><b>{t('location')}</b></h2>
                <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.169190103212!2d24.534909911835964!3d46.5245537709907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bb7e9900eb79d%3A0x9c083a4c2c100032!2sStrada%20Gheorghe%20Doja%20177%2C%20T%C3%A2rgu%20Mure%C8%99%20540210!5e0!3m2!1sen!2sro!4v1721725697092!5m2!1sen!2sro" width="500" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </Router>
    </>

  );
}

export default App;
