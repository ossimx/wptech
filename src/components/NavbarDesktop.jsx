import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoLanguage } from 'react-icons/io5';
import { MdLanguage } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import images from '../images/Imageholder';
import './NavbarDesktop.css';

const NavbarDesktop = () => {
    const { t, i18n } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={images.WPowertechSystemLogoBlack} alt="Logo" className='logo-black' />
                    <img src={images.WPowertechSystemLogoWhite} alt="Logo" className='logo-white' />
                </Link>
            </div>
            <ul className="nav-links">
                <li className="dropdown" onClick={() => toggleDropdown(0)}>
                    <button type="button">{t('company')}<IoMdArrowDropdown /></button>
                    <div className={`dropdown-content ${dropdownOpen === 0 ? 'show' : ''}`}>
                        <Link to="/company/sustainability"><button type="button">{t('sustainability')}</button></Link>
                        <Link to="/company/certificates"><button type="button">{t('certificates')}</button></Link>
                    </div>
                </li>
                <li className="dropdown" onClick={() => toggleDropdown(1)}>
                    <button type="button">{t('products')}<IoMdArrowDropdown /></button>
                    <div className={`dropdown-content ${dropdownOpen === 1 ? 'show' : ''}`}>
                        <Link to="/products/technology"><button type="button">{t('technology')}</button></Link>
                        <Link to="/products/references"><button type="button">{t('references')}</button></Link>
                    </div>
                </li>
                <li className="dropdown" onClick={() => toggleDropdown(2)}>
                    <button type="button">{t('about-us')}<IoMdArrowDropdown /></button>
                    <div className={`dropdown-content ${dropdownOpen === 2 ? 'show' : ''}`}>
                        <Link to="/about/news"><button type="button">{t('news')}</button></Link>
                        <Link to="/about/history"><button type="button">{t('history')}</button></Link>
                        <Link to="/about/team"><button type="button">{t('team')}</button></Link>
                    </div>
                </li>
                <li><Link to="/contact"><button type="button">{t('contact')}</button></Link></li>
            </ul>
            <div className="lang-container">
                        <button type="button">
                            <IoLanguage /><MdLanguage />
                        </button>
                        <div className="lang-dropdown">
                            <button type="button" onClick={() => changeLanguage('en')}>
                                <img src={images.us} alt="English" />
                            </button>
                            <button type="button" onClick={() => changeLanguage('ro')}>
                                <img src={images.ro} alt="Romanian" />
                            </button>
                            <button type="button" onClick={() => changeLanguage('hu')}>
                                <img src={images.hu} alt="Hungarian" />
                            </button>
                            <button type="button" onClick={() => changeLanguage('de')}>
                                <img src={images.de} alt="German" />
                            </button>
                            <button type="button" onClick={() => changeLanguage('gr')}>
                                <img src={images.gr} alt="Greek" />
                            </button>
                            <button type="button" onClick={() => changeLanguage('tr')}>
                                <img src={images.tr} alt="Turkish" />
                            </button>
                            <button type="button" onClick={() => changeLanguage('zh')}>
                                <img src={images.zh} alt="Chinese" />
                            </button>
                            <button type="button" onClick={() => changeLanguage('es')}>
                                <img src={images.es} alt="Spanish" />
                            </button>

                        </div>
                    </div>
        </nav>
    );
};

export default NavbarDesktop;
