import React from 'react';
import NavbarDesktop from '../components/NavbarDesktop';
import NavbarMobile from '../components/NavbarMobile';
import { useMediaQuery } from '@mui/material';

const Layout = ({ children }) => {
    const isMobile = useMediaQuery('(max-width: 900px)');

    return (
        <div className="layout">
            <header>
                {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
            </header>
            <main>{children}</main>  {/* Make sure this contains your page's children */}
        </div>
    );
};

export default Layout;
