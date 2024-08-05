import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useTranslation } from 'react-i18next';
import './Certificates.css';

import images from '../../images/Imageholder';

const Certificates = ({ disableNavbar, enableNavbar }) => {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const certificateGallery = [
    { id: 1, src: images.certificate1, alt: 'Certificate 1' },
    { id: 2, src: images.certificate2, alt: 'Certificate 2' },
    { id: 3, src: images.certificate3, alt: 'Certificate 3' },
  ];

  const handleClick = (certificate) => {
    setSelectedCertificate(certificate);
    disableNavbar();
  };

  const handleClose = () => {
    setSelectedCertificate(null);
    enableNavbar();
  };
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCertificate]);
  return (
    <div className="certificatePage">
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.5} className="text-layer">
          <div className="text-content">
            <h1>{t('certificates')}</h1>
            <div className="certificates-gallery">
              {certificateGallery.map((certificate) => (
                <img
                  key={certificate.id}
                  src={certificate.src}
                  alt={certificate.alt}
                  onClick={() => handleClick(certificate)}
                  className="certificate-thumbnail"
                />
              ))}
            </div>
            <ul>
              <li>
                <p>EU Directive: 2000/76 EG 2014/35/EU 2014/30/EU 2006/42/EC</p>
              </li>
              <li>
                <p>SR EN ISO12100:2011</p>
              </li>
              <li>
                <p>SR EN 60204 1:2007</p>
              </li>
              <li>
                <p>SR EN 62061:2005</p>
              </li>
              <li>
                <p>SR EN 842+A1:2009</p>
                </li>
            </ul>
          </div>
          {selectedCertificate && (
            <div className={`certificate-overlay ${selectedCertificate ? 'active' : ''}`} onClick={handleClose}>
              <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
                <IoMdClose className="close-icon" onClick={handleClose} />
                <img
                  src={selectedCertificate.src}
                  alt={selectedCertificate.alt}
                  className="certificate-full"
                />
              </div>
            </div>
          )}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Certificates;
