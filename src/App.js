import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Technology from './pages/products/Technology';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;