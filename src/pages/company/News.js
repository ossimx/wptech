import React from 'react';
import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import FFooter from '../FFooter';
import images from '../../images/Imageholder';
import './News.css';
const News = () => {
    const { t } = useTranslation();
    const newsArray = [
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
            link: '/news3'
        },
        /*{
            title: t('news4.title'),
            paragraph: t('news4.paragraph'),
            image: images.news4,
            link: '/news4'
        },
        {
            title: t('news5.title'),
            paragraph: t('news5.paragraph'),
            image: images.news5,
            link: '/news5'
        },*/
    ];

    return (
        <div className='news-page'>
        <Parallax pages={4}>
            <ParallaxLayer
                offset={0}
                speed={0.5}
                className="news-layer-hero"
            >
                <div className='hero-news'>
                    <div className="logo-container">
                        <img src={images.WPowertechSystemLogoBlack} alt="WP Logo" className="wp-logo" />
                        <h1 className="news-title">{t('News')}</h1>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0.950}
                speed={0.5}
                className="news-container"
            >
                <div className="news-grid">
                    {newsArray.map((news, index) => (
                        <div key={index} className="news-item">
                            <h2>{news.title}</h2>
                            <p>{news.paragraph}</p>
                            <img src={news.image} alt={news.title} />
                            <div className='news-button-container'>
                            <a href={news.link} className="news-button">{t('learn_more')}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={3}
                speed={0.1}
                className="footer"
            >
                <FFooter></FFooter>
            </ParallaxLayer>
        </Parallax>
        </div>
    );
};

export default News;
