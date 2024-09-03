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
            images.Wpowertech2, 
            images.Wpowertech1,
            images.news3,
            images.tarnaveni2,
            images.tarnaveni3,
        ],
        jidvei: [
            images.jid4,
            images.jid5,
            images.jid6,
            images.jid7,
            images.jid8,
            images.jid9,
            images.jid10,
            images.jid1,
            images.jid2,
            images.jid3,
            images.jidvei1,
        ],
        ramnicu: [
            images.vl1,
            images.vl2,
            images.vl3,
            images.vl4,
        ],
        darmanesti: [
            images.darm1,
            images.darm2,
            images.darm3,
            images.darm4,
        ],
        cluj: [images.cj1,
        images.cj2,
        images.cj3,
        images.cj4,
        ],
        satumare: [images.inConstruction],
        prototype: [images.tarnaveni1],
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
            <Parallax pages={8}>
                <ParallaxLayer offset={0} speed={0.5} className="hero-section">
                    <img src={images.refBackground} alt="Background" className="background-image" />
                    <div className="reference-box">
                        <h1>{t('references')}</h1>
                        <div className="button-container">
                            <div className="button-background"></div>
                            <button><FaTrash /><br></br>{t('urban-waste')}</button>
                            <button><FaIndustry /><br></br>{t('industrial-waste')}</button>
                            <button><PiPlantFill /><br></br>{t('biomass')}</button>
                            <button><PiWarningDiamondFill />
                                {t('dangerous-waste')}</button>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.8} speed={0.3} className="reference-layer">
                    <div className="reference-container scroll-margin" ref={urbanRef}>
                        <div className="reference-content">
                            <div className="title-bar">
                                {t('title-cluj')} <FaTrash />
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
                <ParallaxLayer offset={1.6} speed={0.3} className="reference-layer">
                    <div className="reference-container scroll-margin" ref={industryRef}>
                        <div className="reference-content">
                            <div className="title-bar">
                                {t('title-tarnaveni')} <FaIndustry />
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
                <ParallaxLayer offset={2.4} speed={0.3} className="reference-layer">
                    <div className="reference-container">
                        <div className="reference-content">
                            <div className="title-bar">
                                {t('title-satumare')} <FaIndustry />
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
                <ParallaxLayer offset={3.2} speed={0.3} className="reference-layer">
                    <div className="reference-container scroll-margin">
                        <div className="reference-content">
                            <div className="title-bar">
                                {t('title-ramnicu')} <FaIndustry />
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
                <ParallaxLayer offset={4} speed={0.3} className="reference-layer">
                    <div className="reference-container scroll-margin" ref={biomassRef}>
                        <div className="reference-content">
                            <div className="title-bar">
                                {t('title-jidvei')} <PiPlantFill />
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
                <ParallaxLayer offset={5} speed={0.3} className="reference-layer">
                    <div className="reference-container scroll-margin" ref={dangerRef}>
                        <div className="reference-content">
                            <div className="title-bar">
                                {t('title-darmanesti')} <PiWarningDiamondFill />
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
                <ParallaxLayer offset={6} speed={0.3} className="reference-layer">
                    <div className="reference-container scroll-margin">
                        <div className="reference-content">
                            <div className="title-bar">
                                {t('prototype')}
                            </div>
                            <div className="gallery">
                                <AliceCarousel
                                    mouseTracking
                                    infinite
                                    items={createCarouselItems(imageSources.prototype)}
                                    renderPrevButton={() => <CustomPrevButton onClick={() => { }} />}
                                    renderNextButton={() => <CustomNextButton onClick={() => { }} />}
                                />
                            </div>
                        </div>
                    </div>

                </ParallaxLayer>

                <ParallaxLayer
                    offset={7.3}
                    speed={0.4}
                    className="footer"
                >
                    <FFooter></FFooter>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default References;
