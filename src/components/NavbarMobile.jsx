import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, Divider, IconButton } from '@mui/material';
import { IoLanguage } from 'react-icons/io5';
import { MdLanguage } from 'react-icons/md';
import { BsBuildingsFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { BiSolidFactory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

import images from '../images/Imageholder';

const NavbarMobile = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageDrawerOpen, setLanguageDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleLanguageDrawer = () => {
        setLanguageDrawerOpen(!languageDrawerOpen);
    };

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        setLanguageDrawerOpen(false);
    };

    return (
        <>
            { }
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: 'darkgreen',
                padding: '1rem 1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>            { }
                <Link to="/">
                    <img src={images.WPowertechSystemLogoWhite} alt="Logo" className="logo-white" style={{ height: '40px' }} />
                </Link>

                { }
                <IconButton
                    onClick={toggleLanguageDrawer}
                    sx={{ color: 'white', fontSize: '1.5rem' }}
                >
                    <IoLanguage />
                    <MdLanguage />
                </IconButton>

                { }
                <IconButton color="inherit" edge="end" onClick={toggleDrawer} sx={{ display: { md: "none" } }}>
                    {menuOpen ? <IoMdClose /> : <HiOutlineBars3 />}
                </IconButton>
            </Box>

            { }
            <Drawer anchor="left" open={languageDrawerOpen} onClose={toggleLanguageDrawer}>
                <Box sx={{ width: "250px", padding: "1rem", fontSize: "4vw" }}>
                    <List>
                        <ListItem button onClick={() => handleLanguageChange('en')}>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={images.us} alt="English" style={{ width: '10vw', height: 'auto', marginRight: '10px' }} />
                                <span>English</span>
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{ borderColor: 'gray', marginBottom: '8px' }} />
                        <ListItem button onClick={() => handleLanguageChange('ro')}>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={images.ro} alt="Romanian" style={{ width: '10vw', height: 'auto', marginRight: '10px' }} />
                                <span>Română</span>
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{ borderColor: 'gray', marginBottom: '8px' }} />
                        <ListItem button onClick={() => handleLanguageChange('hu')}>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={images.hu} alt="Hungarian" style={{ width: '10vw', height: 'auto', marginRight: '10px' }} />
                                <span>Magyar</span>
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{ borderColor: 'gray', marginBottom: '8px' }} />
                        <ListItem button onClick={() => handleLanguageChange('de')}>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={images.de} alt="German" style={{ width: '10vw', height: 'auto', marginRight: '10px' }} />
                                <span>Deutsch</span>
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{ borderColor: 'gray', marginBottom: '8px' }} />
                        <ListItem button onClick={() => handleLanguageChange('gr')}>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={images.gr} alt="Greek" style={{ width: '10vw', height: 'auto', marginRight: '10px' }} />
                                <span>Ελληνικά</span>
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{ borderColor: 'gray', marginBottom: '8px' }} />
                        <ListItem button onClick={() => handleLanguageChange('tr')}>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={images.tr} alt="Turkish" style={{ width: '10vw', height: 'auto', marginRight: '10px' }} />
                                <span>Türkçe</span>
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{ borderColor: 'gray', marginBottom: '8px' }} />
                        <ListItem button onClick={() => handleLanguageChange('zh')}>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={images.zh} alt="Chinese" style={{ width: '10vw', height: 'auto', marginRight: '10px' }} />
                                <span>中文</span>
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{ borderColor: 'gray', marginBottom: '8px' }} />
                        <ListItem button onClick={() => handleLanguageChange('es')}>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={images.es} alt="Spanish" style={{ width: '10vw', height: 'auto', marginRight: '10px' }} />
                                <span>Español</span>
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{ borderColor: 'gray', marginBottom: '8px' }} />
                        <ListItem button onClick={() => handleLanguageChange('pl')}>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={images.pl} alt="Polish" style={{ width: '10vw', height: 'auto', marginRight: '10px' }} />
                                <span>Polska</span>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            { }
            <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer}>
                <Box sx={{ width: "250px", padding: "1rem" }}>
                    <List>
                        { }
                        <ListItem
                            component={Link}
                            to="/company/sustainability"
                            sx={{ textDecoration: 'none', color: 'black', paddingLeft: 0 }}
                        >
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ display: 'inline-flex', width: '24px', justifyContent: 'center' }}>
                                    <BsBuildingsFill />
                                </span>
                                <ListItemText primary={t("sustainability")} />
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{ borderColor: 'gray', marginBottom: '8px' }} />

                        { }
                        <ListItem component={Link} to="/company/certificates" sx={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemButton>
                                <ListItemText primary={t("certificates")} />
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{
                            borderColor: 'gray',
                            marginBottom: '12px',
                            borderWidth: '2px',
                            transition: 'all 0.5s ease-in-out',
                            opacity: 0.5,
                            background: 'linear-gradient(90deg, rgba(169, 169, 169, 0.6), rgba(169, 169, 169, 1))'
                        }} /> { }

                        { }
                        <ListItem
                            component={Link}
                            to="/products/technology"
                            sx={{ textDecoration: 'none', color: 'black', paddingLeft: 0 }}
                        >
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ display: 'inline-flex', width: '24px', justifyContent: 'center' }}>
                                    <BiSolidFactory />

                                </span>
                                <ListItemText primary={t("technology")} />
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{ borderColor: 'gray', marginBottom: '8px' }} />
                        <ListItem component={Link} to="/products/references" sx={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemButton>
                                <ListItemText primary={t("references")} />
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{
                            borderColor: 'gray',
                            marginBottom: '12px',
                            borderWidth: '2px',
                            transition: 'all 0.5s ease-in-out',
                            opacity: 0.5,
                            background: 'linear-gradient(90deg, rgba(169, 169, 169, 0.6), rgba(169, 169, 169, 1))'
                        }} />
                        <ListItem
                            component={Link}
                            to="/about/news"
                            sx={{ textDecoration: 'none', color: 'black', paddingLeft: 0 }}
                        >
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ display: 'inline-flex', width: '24px', justifyContent: 'center' }}>
                                    <FaUsers />
                                </span>
                                <ListItemText primary={t("news")} />
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{ borderColor: 'gray', marginBottom: '8px' }} />
                        <ListItem component={Link} to="/about/history" sx={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemButton>
                                <ListItemText primary={t("history")} />
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{ borderColor: 'gray', marginBottom: '8px' }} />
                        <ListItem component={Link} to="/about/team" sx={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemButton>
                                <ListItemText primary={t("team")} />
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{
                            borderColor: 'gray',
                            marginBottom: '12px',
                            borderWidth: '2px',
                            transition: 'all 0.5s ease-in-out',
                            opacity: 0.5,
                            background: 'linear-gradient(90deg, rgba(169, 169, 169, 0.6), rgba(169, 169, 169, 1))'
                        }} />
                                                <ListItem
                            component={Link}
                            to="/contact"
                            sx={{ textDecoration: 'none', color: 'black', paddingLeft: 0 }}
                        >
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ display: 'inline-flex', width: '24px', justifyContent: 'center' }}>
                                    <FaPhone />
                                </span>
                                <ListItemText primary={t("contact")} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default NavbarMobile;