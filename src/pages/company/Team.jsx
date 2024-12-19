/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useEffect } from 'react';
import { useState } from 'react';
import FFooter from '../FFooter';
import images from '../../images/Imageholder';

import './Team.css'
const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Szakács János',
      position: 'CEO',
      email: 'janos@wpowertech.ro',
      phone: '+40 751 624 810',
      image: images.teammember1,
      descriptionKey: 'team.teammember1desc',
    },
    {
      name: 'Bogdan Busioc',
      position: 'CCO',
      email: 'b.bogdan@wpowertech.ro',
      phone: '+40 769 992 044',
      image: images.teammember2,
      descriptionKey: 'team.teammember2desc',
    },
    {
      name: 'Podar Iosif Cristian',
      position: 'CFO',
      email: 'p.cristian@wpowertech.ro',
      phone: '+40 740 198 626',
      image: images.teammember3,
      descriptionKey: 'team.teammember1desc',
    },
    {
      name: 'Szakács Róbert',
      position: 'CMO',
      email: 'robert@wpowertech.ro',
      phone: '+40 743 483 439',
      image: images.teammember4,
      descriptionKey: 'team.teammember1desc',
    },
  ];
  const [offsets, setOffsets] = useState({
    layer1: 0,
    layer2: 2,
    layer3: 3,
  });

  useEffect(() => {
    const handleResize = () => {//phone
      if (window.innerWidth <= 768) {
        setOffsets({
          layer1: 0,
          layer2: 3,
          layer3: 4.2,
        });
      } else if (window.innerWidth <= 1024) {//tablet
        setOffsets({
          layer1: 0,
          layer2: 2,
          layer3: 2.4,
        });
      } else {
        setOffsets({//desktop
          layer1: 0,
          layer2: 3,
          layer3: 3.3,
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Parallax pages={4}>
      <ParallaxLayer
        offset={offsets.layer1}
        speed={0.1}
        className="team-hero"
      >
        <div className="logo-section">
          <img src={images.WPowertechSystemLogoWhite} alt="Powertech Logo" className="team-logo" />
          <h1 className="team-title">{t('team')}</h1>
        </div>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-photo" />
              <h2 className="team-name">{member.name}</h2>
              <h3 className="team-position">{member.position}</h3>
              <div className="team-contact">
                <FaEnvelope className="icon" /> <span>{member.email}</span>
              </div>
              <div className="team-contact">
                <FaPhone className="icon" /> <span>{member.phone}</span>
              </div>
            </div>
          ))}
          <div className='team-member'>
          <img src={images.teammember5} alt="Crowe" className="team-photo-crowe"/>
              <h1 className="team-name">Crowe</h1>
              <h3 className="team-position">{t('partner')}</h3>
              <h3><a href="https://www.crowe.com" style={{ color: 'white', textDecoration: 'none' }}>www.crowe.com</a></h3>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offsets.layer2}
        speed={0.1}
        className="footer"
      >
        <FFooter />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Team;