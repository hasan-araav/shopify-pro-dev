import React from 'react';
import { Link } from 'react-scroll';
import { ExternalLink, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex align-items-center mb-4">
              <Sparkles className="text-primary me-3" size={30} />
              <span className="text-primary">Shopify Expert & Developer</span>
            </div>
            <h1 className="display-4 fw-bold mb-4">Transform Your E-commerce Vision Into Digital Reality</h1>
            <p className="lead mb-4 text-secondary">Elevate your Shopify store with custom development, optimization, and professional solutions that drive results.</p>
            <div className="d-flex gap-3">
              <a href="https://www.fiverr.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Hire on Fiverr <ExternalLink size={20} className="ms-2" />
              </a>
              <Link to="contact" smooth={true} className="btn btn-outline-primary">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;