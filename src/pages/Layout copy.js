import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoLanguage } from 'react-icons/io5';
import { MdLanguage } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { HiOutlineBars3 } from 'react-icons/hi2';
import '../Navbar.css';
import images from '../images/Imageholder';


const Layout = ({ children, isNavbarDisabled }) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);

    };

    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const navbarRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setMenuOpen(false);
            setDropdownOpen(null);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos) {
                setIsNavbarVisible(false);
            } else {
                setIsNavbarVisible(true);
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
    return (
        <div className="layout">
            <header>
                <nav
                    className={`navbar ${isNavbarDisabled || !isNavbarVisible ? 'disabled' : ''}`}
                    ref={navbarRef}
                >
                    <div className="logo">
                        <Link to="/">
                            <img src={images.WPowertechSystemLogoBlack} alt="Logo" className='logo-black' />
                            <img src={images.WPowertechSystemLogoWhite} alt="Logo" className='logo-white' />
                        </Link>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {menuOpen ? <IoMdClose /> : <HiOutlineBars3 />}
                    </div>
                    <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
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
                                <Link to="/products/technology"><IoMdArrowDropdown className="dropdown-arrow" /><button type="button">{t('technology')}</button></Link>
                                <Link to="/products/references"><button type="button">{t('references')}</button></Link>
                            </div>
                        </li>
                        <li className="dropdown" onClick={() => toggleDropdown(1)}>
                            <button type="button">{t('about-us')}<IoMdArrowDropdown /></button>
                            <div className={`dropdown-content ${dropdownOpen === 1 ? 'show' : ''}`}>
                                <Link to="/about/news"><button type="button"><IoMdArrowDropdown className="dropdown-arrow" />{t('about-us')}</button></Link>
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
            </header>
            <main>
                {children}
            </main>

        </div>
    );
};

export default Layout;
