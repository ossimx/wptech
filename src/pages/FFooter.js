import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaFacebook, FaYoutube } from "react-icons/fa6";
const FFooter = () => {
  const { t } = useTranslation();

  return (
            <div className="footer-content">
              <div className="contact-details">
                <h2><b>{t('contact_us')}</b></h2>
                <p>SC Waste Powertech SRL</p>
                <p><FaEnvelope />: office@wpowertech.ro</p>
                <p><FaPhone />: (+40) 751-624-810</p>
                <a href="https://www.facebook.com/profile.php?id=61559358922953"><FaFacebook />: Waste Powertech SRL</a>
                <a href="https://www.youtube.com/@wastepowertech4213" ><FaYoutube />: Waste Powertech</a>
              </div>
              <div className="location-container">
                <h2><b>{t('location')}</b></h2>
                <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.169190103212!2d24.534909911835964!3d46.5245537709907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bb7e9900eb79d%3A0x9c083a4c2c100032!2sStrada%20Gheorghe%20Doja%20177%2C%20T%C3%A2rgu%20Mure%C8%99%20540210!5e0!3m2!1sen!2sro!4v1721725697092!5m2!1sen!2sro" width="500" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
  );
};

export default FFooter;