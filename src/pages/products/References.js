import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useTranslation } from 'react-i18next';
import FFooter from '../FFooter';
import { FaTrash } from 'react-icons/fa';
import { FaIndustry } from 'react-icons/fa';
import { PiPlantFill } from "react-icons/pi";
import { PiWarningDiamondFill } from "react-icons/pi";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CustomPrevButton, CustomNextButton } from '../../components/CustomButtons'

import './References.css';
import '../../components/Carousel.css';
import images from '../../images/Imageholder';
import { useRef } from 'react';

const References = () => {
    const { t } = useTranslation();
    const urbanRef = useRef(null);
    const industryRef = useRef(null);
    const biomassRef = useRef(null);
    const dangerRef = useRef(null);
    const imageSources = {
        tarnaveni: [
            images.tarnaveni1,
        ],
        jidvei: [
            images.jidvei1,
        ],
        ramnicu: [
            images.ramnicu1,
            images.ramnicu2,
            images.ramnicu3,
            images.ramnicu4,
            images.ramnicu5,
        ],
        darmanesti: [
            images.darmanesti1,
            images.darmanesti2,
            images.darmanesti3,
            images.darmanesti4,
        ],
        cluj: [images.inConstruction],
        satumare: [images.inConstruction],
    };
    const scrollToRef = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'instant' });
        }
    };
    const createCarouselItems = (imageArray) => (
        imageArray.map((src, index) => (
            <div className="gallery-item" key={index}>
                <img src={src} alt={`Gallery ${index}`} />
            </div>
        ))
    );
    return (
        <div className='references-page'>
        <Parallax pages={10}>
            <ParallaxLayer offset={0} speed={0.5} className="hero-section">
                <img src={images.refBackground} alt="Background" className="background-image" />
                <div className="reference-box">
                    <h1>{t('references')}</h1>
                    <div className="button-container">
                        <div className="button-background"></div>
                        <button onClick={() => scrollToRef(urbanRef)}><FaTrash /><br></br>{t('urban-waste')}</button>
                        <button onClick={() => scrollToRef(industryRef)}><FaIndustry /><br></br>{t('industrial-waste')}</button>
                        <button onClick={() => scrollToRef(biomassRef)}><PiPlantFill /><br></br>{t('biomass')}</button>
                        <button onClick={() => scrollToRef(dangerRef)}><PiWarningDiamondFill />
                            {t('dangerous-waste')}</button>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.1} className="reference-layer">
                <div className="reference-container scroll-margin" ref={urbanRef}>
                    <div className="reference-content">
                        <div className="title-bar">
                            {t('title-cluj')}
                        </div>
                        <div className="description">
                            {t('desc-cluj')}
                        </div>
                        <div className="gallery">
                            <AliceCarousel
                                mouseTracking
                                infinite
                                items={createCarouselItems(imageSources.cluj)}
                                renderPrevButton={() => <CustomPrevButton onClick={() => { }} />}
                                renderNextButton={() => <CustomNextButton onClick={() => { }} />}
                            />
                        </div>
                    </div>

                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.1} className="reference-layer">
                <div className="reference-container scroll-margin" ref={industryRef}>
                    <div className="reference-content">
                        <div className="title-bar">
                            {t('title-tarnaveni')}
                        </div>
                        <div className="description">
                            {t('desc-tarnaveni')}
                        </div>
                        <div className="gallery">
                            <AliceCarousel
                                mouseTracking
                                infinite
                                items={createCarouselItems(imageSources.tarnaveni)}
                                renderPrevButton={() => <CustomPrevButton onClick={() => { }} />}
                                renderNextButton={() => <CustomNextButton onClick={() => { }} />}
                            />
                        </div>
                    </div>

                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.1} className="reference-layer">
                <div className="reference-container">
                    <div className="reference-content">
                        <div className="title-bar">
                            {t('title-satumare')}
                        </div>
                        <div className="description">
                            {t('desc-satumare')}
                        </div>
                        <div className="gallery">
                            <AliceCarousel
                                mouseTracking
                                infinite
                                items={createCarouselItems(imageSources.satumare)}
                                renderPrevButton={() => <CustomPrevButton onClick={() => { }} />}
                                renderNextButton={() => <CustomNextButton onClick={() => { }} />}
                            />
                        </div>
                    </div>

                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={0.1} className="reference-layer">
                <div className="reference-container scroll-margin">
                    <div className="reference-content">
                        <div className="title-bar">
                            {t('title-ramnicu')}
                        </div>
                        <div className="description">
                            {t('desc-ramnicu')}
                        </div>
                        <div className="gallery">
                            <AliceCarousel
                                mouseTracking
                                infinite
                                items={createCarouselItems(imageSources.ramnicu)}
                                renderPrevButton={() => <CustomPrevButton onClick={() => { }} />}
                                renderNextButton={() => <CustomNextButton onClick={() => { }} />}
                            />
                        </div>
                    </div>

                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={5} speed={0.1} className="reference-layer">
                <div className="reference-container scroll-margin" ref={biomassRef}>
                    <div className="reference-content">
                        <div className="title-bar">
                            {t('title-jidvei')}
                        </div>
                        <div className="description">
                            {t('desc-jidvei')}
                        </div>
                        <div className="gallery">
                            <AliceCarousel
                                mouseTracking
                                infinite
                                items={createCarouselItems(imageSources.jidvei)}
                                renderPrevButton={() => <CustomPrevButton onClick={() => { }} />}
                                renderNextButton={() => <CustomNextButton onClick={() => { }} />}
                            />
                        </div>
                    </div>

                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={6} speed={0.1} className="reference-layer">
                <div className="reference-container scroll-margin" ref={dangerRef}>
                    <div className="reference-content">
                        <div className="title-bar">
                            {t('title-darmanesti')}
                        </div>
                        <div className="description">
                            {t('desc-darmanesti')}
                        </div>
                        <div className="gallery">
                            <AliceCarousel
                                mouseTracking
                                infinite
                                items={createCarouselItems(imageSources.darmanesti)}
                                renderPrevButton={() => <CustomPrevButton onClick={() => { }} />}
                                renderNextButton={() => <CustomNextButton onClick={() => { }} />}
                            />
                        </div>
                    </div>
                </div>

            </ParallaxLayer>

            <ParallaxLayer
                offset={8}
                speed={0.1}
                className="footer"
            >
               <FFooter></FFooter>
            </ParallaxLayer>
        </Parallax>
        </div>
    );
};

export default References;
