import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoLanguage } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { HiOutlineBars3 } from 'react-icons/hi2';
import '../Navbar.css';

const Layout = ({ children }) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);

    };
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
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
    return (
        <div className="layout">
            <nav className="navbar" ref={navbarRef}>
                <div className="logo">
                    <Link to="/">
                        <img src="/WPowertech System logo black.png" alt="Logo" className='logo-black' />
                        <img src="/Wpowertech_logo_white.png" alt="Logo" className='logo-white' />
                    </Link>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <IoMdClose /> : <HiOutlineBars3 />}
            </div>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li className="dropdown" onClick={() => toggleDropdown(0)}>
                <button type="button">{t('company')}<IoMdArrowDropdown/></button>
                <div className={`dropdown-content ${dropdownOpen === 0 ? 'show' : ''}`}>
                            <Link to="/company/news"><button type="button"><IoMdArrowDropdown className="dropdown-arrow" />{t('news')}</button></Link>
                            <Link to="/company/history"><button type="button">{t('history')}</button></Link>
                            <Link to="/company/certificates"><button type="button">{t('certificates')}</button></Link>
                            <Link to="/company/sustainability"><button type="button">{t('sustainability')}</button></Link>
                        </div>
                    </li>
                    <li className="dropdown" onClick={() => toggleDropdown(1)}>
                    <button type="button">{t('products')}<IoMdArrowDropdown /></button>
                    <div className={`dropdown-content ${dropdownOpen === 1 ? 'show' : ''}`}>
                            <Link to="/products/ourproduct"><button><IoMdArrowDropdown className="dropdown-arrow" />{t('ourproduct')}</button></Link>
                            <Link to="/products/technology"><button type="button">{t('technology')}</button></Link>
                            <Link to="/products/references"><button type="button">{t('references')}</button></Link>
                            <Link to="/products/certificates"><button type="button">{t('certificates')}</button></Link>
                        </div>
                    </li>
                    <li><Link to="/contact"><button type="button">{t('contact')}</button></Link></li>
                </ul>
                <div className="lang-container">
                <button type="button">
                    <IoLanguage />
                </button>
                <div className="lang-dropdown">
                    <button type="button" onClick={() => changeLanguage('en')}>
                        <img src="us.png" alt="English" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('ro')}>
                        <img src="ro.png" alt="Romanian" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('hu')}>
                        <img src="hu.png" alt="Hungarian" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('de')}>
                        <img src="de.png" alt="German" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('gr')}>
                        <img src="gr.png" alt="Greek" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('zh')}>
                        <img src="zh.png" alt="Chinese" />
                    </button>

                    </div>
                </div>
            </nav>
            <main>
                {children}
            </main>

        </div>
    );
};

export default Layout;
