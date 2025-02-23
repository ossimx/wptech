import React from 'react';
import { Grid2, Button, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import images from '../../images/Imageholder';
import FFooter from '../FFooter';
import './News.css';
const News = () => {
    const { t } = useTranslation();
    const newsArray = [
        {
            title: t('news5.title'),
            paragraph: t('news5.paragraph'),
            image: images.news5,
            link: 'https://napocalive.ro/administrativ/ministrul-energiei-vom-sustine-extinderea-la-nivel-national-a-proiectului-de-dezintegrare-moleculara-al-consiliului-judetean-cluj'
        },
        {
            title: t('news4.title'),
            paragraph: t('news4.paragraph'),
            image: images.news4,
            link: 'https://cjcluj.ro/un-nou-pas-important-in-vederea-transformarii-deseurilor-in-energie/'
        },
        {
            title: t('news1.title'),
            paragraph: t('news1.paragraph'),
            image: images.Wpowertech2,
            link: 'https://www.transilvaniabusiness.ro/2024/05/08/waste-powertech-va-furniza-clujului-o-statie-de-dezintegrare-moleculara/'
        },
        {
            title: t('news2.title'),
            paragraph: t('news2.paragraph'),
            image: images.news2,
            link: 'https://cjcluj.ro/a-fost-semnat-contractul-de-achizitie-a-primei-instalatii-de-tratare-prin-dezintegrare-moleculara-a-deseurilor-municipale-de-pe-teritoriul-judetului-cluj/'
        },
        {
            title: t('news3.title'),
            paragraph: t('news3.paragraph'),
            image: images.news3,
            link: 'https://maszol.ro/belfold/Energiat-termelnek-a-szemetbol-61-millio-lejes-beruhazasbol-epit-modern-hulladekkezelot-a-Kolozs-Megyei-Tanacs'
        }
    ];
    return (
        <div>
        <Box
            sx={{
                backgroundImage: 'url("/bg-out-news.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            { }
            <Box
                sx={{
                    backgroundImage: 'url("/bg-news.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        color: 'white',
                        zIndex: 10,
                        maxWidth: '80%',
                        padding: '0 1rem',
                    }}
                >
                    <img
                        src={images.WPowertechSystemLogoBlack}
                        alt="WP Logo"
                        className="wp-logo"
                        style={{
                            maxWidth: '40vw',
                        }}
                    />
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '12vw', sm: '9vw', md: '7vw' },
                            fontWeight: 'bold',
                            marginTop: '1rem',
                        }}
                    >
                        {t('about-us')}
                    </Typography>
                </Box>
            </Box>
            { }
            <Box
                sx={{
                    clipPath: 'polygon(0 0, 7% 0, 0 10%, 0 100%, 100% 100%, 100% 0)',
                    backgroundColor: '#f4f4f4',
                    padding: '5rem 2rem',
                    position: 'relative',
                    top: '-60px',
                    zIndex: 1,
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        color: '#333',
                        fontWeight: 'bold',
                        padding: '0 1rem',
                    }}
                >
                    {t('sust-1')}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        color: '#555',
                        padding: '0 1rem',
                    }}
                >
                    {t('sust-2')}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        color: '#555',
                        padding: '0 1rem',
                    }}
                >
                    {t('plusmission1')}
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: '1.8rem',
                        marginBottom: '0.5rem',
                        color: '#666',
                        fontWeight: 'bold',
                        padding: '0 1rem',
                    }}
                >
                    {t('plusmission2')}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        color: '#555',
                        padding: '0 1rem',
                    }}
                >
                    {t('plusmission3')}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        color: '#555',
                        padding: '0 1rem',
                    }}
                >
                    {t('plusmission4')}
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: '1.8rem',
                        marginBottom: '0.5rem',
                        color: 'green',
                        fontWeight: 'bold',
                        padding: '0 1rem',
                    }}
                >
                    {t('plusmission5')}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        color: '#555',
                        padding: '0 1rem',
                    }}
                >
                    {t('plusmission6')}
                </Typography>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        color: '#333',
                        fontWeight: 'bold',
                        padding: '0 1rem',
                    }}
                >
                    {t('sust-3')}
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '1.8rem',
                        marginBottom: '0.5rem',
                        color: '#666',
                        fontWeight: 'bold',
                        padding: '0 1rem',
                    }}
                >
                    {t('sust-5')}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        color: '#555',
                        padding: '0 1rem',
                    }}
                >
                    {t('sust-6')}
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '1.8rem',
                        marginBottom: '0.5rem',
                        color: '#666',
                        fontWeight: 'bold',
                        padding: '0 1rem',
                    }}
                >
                    {t('sust-7')}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        color: '#555',
                        padding: '0 1rem',
                    }}
                >
                    {t('sust-8')}
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '1.8rem',
                        marginBottom: '0.5rem',
                        color: '#666',
                        fontWeight: 'bold',
                        padding: '0 1rem',
                    }}
                >
                    {t('sust-9')}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        color: '#555',
                        padding: '0 1rem',
                    }}
                >
                    {t('sust-10')}
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '1.8rem',
                        marginBottom: '0.5rem',
                        color: '#666',
                        fontWeight: 'bold',
                        padding: '0 1rem',
                    }}
                >
                    {t('sust-11')}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        color: '#555',
                        padding: '0 1rem',
                    }}
                >
                    {t('sust-12')}
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '1.8rem',
                        marginBottom: '0.5rem',
                        color: '#666',
                        fontWeight: 'bold',
                        padding: '0 1rem',
                    }}
                >
                    {t('sust-13')}
                </Typography>
            </Box>
            { }
            <div className="separator-banner">
                <Typography variant="h2">{t('news')}</Typography>
            </div>
            { }
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                {/* Adding a wrapping box with the silk grey border around the grids */}
                <Box
                    sx={{
                        border: '2px solid #d3d3d3', // Silk grey border
                        borderRadius: '8px', // Optional: Rounded corners for the border
                        width: '100%',
                        padding: '1rem', // Padding inside the border to give space between border and grids
                    }}
                >
                    <Grid2 container spacing={2} justifyContent="center">
                        {newsArray.map((newsItem, index) => (
                            <Grid2
                                key={index}
                                xs={12} sm={6} md={4} lg={3}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    padding: '1rem',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    height: 'auto',
                                    maxWidth: '350px',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                    '@media (max-width: 600px)': {
                                        maxWidth: '100%',
                                    },
                                }}
                            >
                                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                                    {newsItem.title}
                                </Typography>
                                <Box sx={{ width: '100%', borderBottom: '2px solid #1190ff', margin: '1rem 0' }} />
                                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                                    {newsItem.paragraph}
                                </Typography>
                                <Box
                                    component="img"
                                    src={newsItem.image}
                                    alt="News Image"
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        marginTop: '1rem',
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={newsItem.link}
                                    sx={{
                                        marginTop: '1rem',
                                        width: '100%',
                                    }}
                                >
                                    {t('learn_more')}
                                </Button>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>
            </Box>

        </Box>
        <FFooter /> 
        </div>
    );
};
export default News;
