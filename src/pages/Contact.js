import React from 'react';
import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { MdFactory } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TbTournament } from "react-icons/tb";

import './Contact.css'
import images from '../images/Imageholder';
const Contact = () => {
  const { t } = useTranslation();

  return (
    <Parallax pages={2}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        className="contact-layer">
          
          <div className="text-content-contact">
          <img src={images.WPowertechSystemLogoBlack} alt="WP Waste Powertech Logo" className="logo-cont" />
          <div>
            <div className="text-section">
              <h1>{t('contact')}</h1>

              <h2><TbTournament/> SC Waste Powertech SRL</h2>
              <div className='office-part'>
              <h2><HiBuildingOffice2/> {t('office')}</h2>
              <p>{t('office-address')}</p>
              </div>
              <div className='factory-part'>
              <h2><MdFactory/> {t('factory')}</h2>
              <p>{t('factory-address')}</p>
              </div>
              <h1><FaEnvelope/>: office@wpowertech.ro</h1>
              <h2><FaPhone/>: (+40) 751-624-810</h2>
              <a href="https://www.facebook.com/profile.php?id=61559358922953" style={{ textDecoration: 'none' , color:'black'}}><FaFacebook />: Waste Powertech SRL</a>
              <a href="https://www.youtube.com/@wastepowertech4213" style={{ textDecoration: 'none' , color:'black'}}><FaYoutube />: Waste Powertech</a>
            </div>
            <div className="map-section">
              <iframe title="office-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.169190103212!2d24.534909911835964!3d46.5245537709907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bb7e9900eb79d%3A0x9c083a4c2c100032!2sStrada%20Gheorghe%20Doja%20177%2C%20T%C3%A2rgu%20Mure%C8%99%20540210!5e0!3m2!1sen!2sro!4v1721725697092!5m2!1sen!2sro" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <iframe title='tarnaveni-location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.6185323333743!2d24.242500511824204!3d46.317412970980214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bec702064187d%3A0x74acd25b02e27c7e!2sStrada%20Avram%20Iancu%20270%2C%20T%C3%A2rn%C4%83veni%20545600!5e0!3m2!1sen!2sro!4v1722520018024!5m2!1sen!2sro" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Contact;