import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import images from '../../images/Imageholder';
import { useState } from 'react';
import './News.css';
const News = () => {
    const { t } = useTranslation();
    const newsArray = [
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
            link: '/news3'
        },
       
       /* {
            title: t('news5.title'),
            paragraph: t('news5.paragraph'),
            image: images.news5,
            link: '/news5'
        },*/
    ];
    const [offsets, setOffsets] = useState({
        layer1: 0,
        layer2: 0.950,
        layer3: 2,
    });

    useEffect(() => {
        const handleResize = () => {//phone
            if (window.innerWidth <= 768) {
                setOffsets({
                    layer1: 0,
                    layer2: 0.7,
                    layer3: 6,
                });
            } else if (window.innerWidth <= 1024) {//tablet
                setOffsets({
                    layer1: 0,
                    layer2: 1,
                    layer3: 4.5,
                });
            } else {
                setOffsets({//desktop
                    layer1: 0,
                    layer2: 0.950,
                    layer3: 3.3,
                });
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div className='news-page'>
            <Parallax pages={7.3}>
                <ParallaxLayer
                    offset={offsets.layer1}
                    speed={0.5}
                    className="news-layer-hero"
                >
                    <div className='hero-news'>
                        <div className="logo-container">
                            <img src={images.WPowertechSystemLogoBlack} alt="WP Logo" className="wp-logo" />
                            <h1 className="news-title">{t('about-us')}</h1>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={offsets.layer2}
                    speed={0.5}
                    className="news-container"
                >
                    <div className="mission">
                        <h1>{t('sust-1')}</h1>
                        <p>{t('sust-2')}</p>
                        <p>{t('plusmission1')}</p>
                        <h2>{t('plusmission2')}</h2>
                        <p>{t('plusmission3')}</p>
                        <p>{t('plusmission4')}</p>
                        <h2 style={{color: 'green'}}>{t('plusmission5')}</h2>
                        <p>{t('plusmission6')}</p>
                        <h1>{t('sust-3')}</h1>
                        <h3>{t('sust-5')}</h3>
                        <p>{t('sust-6')}</p>
                        <h3>{t('sust-7')}</h3>
                        <p>{t('sust-8')}</p>
                        <h3>{t('sust-9')}</h3>
                        <p>{t('sust-10')}</p>
                        <h3>{t('sust-11')}</h3>
                        <p>{t('sust-12')}</p>
                        <h3>{t('sust-13')}</h3>
                        <p>{t('sust-14')}</p>
                    </div>
                    <div className="separator-banner">
                        <h2>{t('news')}</h2>
                    </div>
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
                    offset={offsets.layer3}
                    speed={0.5}
                    className="footer"
                >
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default News;
