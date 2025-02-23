import React from 'react';
import { Box, Typography, Grid2, Link } from '@mui/material';
import { FaEnvelope, FaPhone, FaFacebook, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const FFooter = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: '#4CAF50',
        width: '100%',
        padding: '2rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid2 container spacing={4} justifyContent="center" alignItems="flex-start" sx={{ maxWidth: '1200px', width: '100%' }}>
        <Grid2 item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
              {t('contact_us')}
            </Typography>
            <Typography sx={{ color: 'white', marginTop: '0.5rem' }}>
              SC Waste Powertech SRL
            </Typography>
            <Typography sx={{ color: 'white', marginTop: '0.5rem' }}>
              <FaEnvelope />: office@wpowertech.ro
            </Typography>
            <Typography sx={{ color: 'white', marginTop: '0.5rem' }}>
              <FaPhone />: (+40) 751-624-810
            </Typography>
            <Link
              href="https://www.facebook.com/profile.php?id=61559358922953"
              sx={{
                display: 'block',
                color: 'white',
                marginTop: '0.5rem',
                paddingLeft: '0',
                fontSize: '1.1rem',
                textDecoration: 'none',
              }}
            >
              <FaFacebook />: Waste Powertech SRL
            </Link>
            <Link
              href="https://www.youtube.com/@wastepowertech4213"
              sx={{
                display: 'block',
                color: 'white',
                marginTop: '0.5rem',
                paddingLeft: '0',
                fontSize: '1.1rem',
                textDecoration: 'none',
              }}
            >
              <FaYoutube />: Waste Powertech
            </Link>
          </Box>
        </Grid2>

        <Grid2 item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
              {t('location')}
            </Typography>
            <Box sx={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2747.6658435540853!2d24.445345141412496!3d46.47512648859989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDbCsDI4JzMxLjMiTiAyNMKwMjYnNTEuNCJF!5e0!3m2!1sen!2sro!4v1740240734377!5m2!1sen!2sro"
                width="500"
                height="450"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{ border: '0', borderRadius: '8px' }}
              ></iframe>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default FFooter;
