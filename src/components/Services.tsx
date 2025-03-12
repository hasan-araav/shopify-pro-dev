import React from 'react';
import { Store, Settings, ShoppingBag, PieChart, Code, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Store className="mb-4" size={40} />,
      title: "Store Setup & Configuration",
      description: "Complete Shopify store setup with professional configuration and optimization"
    },
    {
      icon: <Settings className="mb-4" size={40} />,
      title: "Store Customization",
      description: "Custom theme modifications and feature implementations"
    },
    {
      icon: <ShoppingBag className="mb-4" size={40} />,
      title: "Performance Optimization",
      description: "Speed optimization and conversion rate improvements"
    },
    {
      icon: <PieChart className="mb-4" size={40} />,
      title: "Analytics Setup",
      description: "Advanced tracking and reporting implementation"
    },
    {
      icon: <Code className="mb-4" size={40} />,
      title: "Custom Development",
      description: "Bespoke features and functionality development"
    },
    {
      icon: <Shield className="mb-4" size={40} />,
      title: "Security Enhancement",
      description: "Store protection and security implementation"
    }
  ];

  return (
    <section id="services" className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Services & Expertise</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card service-card h-100">
                <div className="card-body text-center p-5">
                  <p className="text-primary">{service.icon}</p>
                  <h5 className=" mb-3">{service.title}</h5>
                  <p className="card-text text-white">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;