import React from 'react';
import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import ReactModalImage from 'react-modal-image';
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
            <div className="text-section" style={{
              backgroundColor: 'rgb(222, 222, 222)',
              borderRadius: '0.5rem',
              padding:'2rem',
              fontSize: '1rem',
              width: '100%',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <h1 style={{ textDecoration: 'none', color: 'black', display: 'block', fontSize: '3rem', margin: '0.5rem 0' }}>{t('contact')}</h1>
              <h2 style={{ textDecoration: 'none', color: 'black', display: 'block', fontSize: '1.7rem', margin: '0.5rem 0' }}><TbTournament /> SC Waste Powertech SRL</h2>
              <h2 style={{ textDecoration: 'none', color: 'black', display: 'block', fontSize: '1.3rem', margin: '0.5rem 0' }}><HiBuildingOffice2 /> Ungheni 161/J, Mureș , Mures</h2>
              <div className='office-part' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="map-section-phone" style={{ width: '100%' }}>
                  <ReactModalImage
                    small={images.office}
                    large={images.office}
                    alt="Office Location Ungheni"
                    hideDownload={true}
                    style={{ width: '70vw', height: 'auto' }}
                  />
                  <iframe title="office-location" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2747.6658435540853!2d24.445345141412496!3d46.47512648859989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDbCsDI4JzMxLjMiTiAyNMKwMjYnNTEuNCJF!5e0!3m2!1sen!2sro!4v1740240734377!5m2!1sen!2sro" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              <div style={{
                backgroundColor: 'lightgray',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                padding: '2vh',
                width: '113%',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                <h2 style={{ fontSize: '1rem', margin: '0.5rem 0' }}>
                  <FaEnvelope />: office@wpowertech.ro
                </h2>
                <a
                  href="https://www.facebook.com/profile.php?id=61559358922953"
                  style={{ textDecoration: 'none', color: 'black', display: 'block', fontSize: '1rem', margin: '0.5rem 0' }}
                >
                  <FaFacebook />: Waste Powertech SRL
                </a>
                <a
                  href="https://www.youtube.com/@wastepowertech4213"
                  style={{ textDecoration: 'none', color: 'black', display: 'block', fontSize: '1rem', margin: '0.5rem 0' }}
                >
                  <FaYoutube />: Waste Powertech
                </a>
              </div>
            </div>
            <div className='map-section'>
              <img src={images.office} alt="Office Location Ungheni" style={{ height: '50vh', width: '50vw' }} />
              <iframe title="office-location" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2747.6658435540853!2d24.445345141412496!3d46.47512648859989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDbCsDI4JzMxLjMiTiAyNMKwMjYnNTEuNCJF!5e0!3m2!1sen!2sro!4v1740240734377!5m2!1sen!2sro" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Contact;