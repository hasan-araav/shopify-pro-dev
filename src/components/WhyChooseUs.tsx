import React from 'react';
import { CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="bg-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="mb-4 text-white">Why Choose My Services?</h3>
            <ul className="list-unstyled">
              <li className="mb-3"><CheckCircle className="me-2" /> 5+ Years Shopify Experience</li>
              <li className="mb-3"><CheckCircle className="me-2" /> 100+ Stores Optimized</li>
              <li className="mb-3"><CheckCircle className="me-2" /> 24/7 Support</li>
              <li><CheckCircle className="me-2" /> Satisfaction Guaranteed</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="retro-card p-4">
              <div className="d-flex align-items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-warning me-2" fill="currentColor" />
                ))}
              </div>
              <p className="text-white mb-0">"Outstanding service! Transformed our store completely. Sales increased by 150% after the optimization."</p>
              <p className="text-white mt-3">- John Doe, Fashion Store Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;