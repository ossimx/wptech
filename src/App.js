import React, {useState} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Technology from './pages/products/Technology';
import Certificates from './pages/company/Certificates';
import References from './pages/products/References';
import History from './pages/company/History';
import Sustainability from './pages/company/Sustainability';
import News from './pages/company/News';
const App = () => {
  const [isNavbarDisabled, setIsNavbarDisabled] = useState(false);

  const disableNavbar = () => {
    setIsNavbarDisabled(true);
  };

  const enableNavbar = () => {
    setIsNavbarDisabled(false);
  };
  return (
    <Router>
        <Layout isNavbarDisabled={isNavbarDisabled}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wptech" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/company/history" element={<History />} />
            <Route path="/company/news" element={<News />} />
            <Route path="/company/sustainability" element={<Sustainability />} />
            <Route path="/company/certificates" element={<Certificates disableNavbar={disableNavbar} enableNavbar={enableNavbar} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/technology" element={<Technology />} />
            <Route path="/products/references" element={<References disableNavbar={disableNavbar} enableNavbar={enableNavbar}/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
    </Router>
  );
};

export default App;