import React from 'react';
import { Link } from 'react-scroll';
import { ShoppingBag, Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <ShoppingBag className="me-2" />
          <span>ShopifyPro</span>
          <Sparkles className="ms-2" size={16} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="home" smooth={true}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="services" smooth={true}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="portfolio" smooth={true}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="process" smooth={true}>Process</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="pricing" smooth={true}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;