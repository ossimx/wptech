import React from 'react';
import { Link } from 'react-router-dom';
import { IoLanguage } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import '../App.css'; // Add styling if needed

const Layout = ({ children }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="layout">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
                    <img src="/WPowertech System logo black.png" alt="Logo" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/technology">{t('technology')}</Link></li>
                    <li><Link to="/references">{t('references')}</Link></li>
                    <li><Link to="/contact">{t('contact')}</Link></li>
                </ul>
                <div className="lang-container">
                    <a href=" ">
                        <IoLanguage />
                    </a>
                    <div className="lang-dropdown">
                        <a href=" " onClick={() => changeLanguage('en')}>
                            <img src="us.png" alt="English" />
                        </a>
                        <a href=" " onClick={() => changeLanguage('ro')}>
                            <img src="ro.png" alt="Romanian" />
                        </a>
                        <a href=" " onClick={() => changeLanguage('hu')}>
                            <img src="hu.png" alt="Hungarian" />
                        </a>
                        <a href=" " onClick={() => changeLanguage('de')}>
                            <img src="de.png" alt="German" />
                        </a>
                        <a href=" " onClick={() => changeLanguage('zh')}>
                            <img src="zh.png" alt="Chinese" />
                        </a>
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
