import React from 'react';
import { Link } from 'react-scroll';
import { ChevronRight } from 'lucide-react';

const Pricing = () => {
  const pricing = [
    {
      title: "Basic",
      price: "$499",
      features: [
        "Store Setup",
        "Basic Theme Customization",
        "Performance Optimization",
        "1 Month Support"
      ]
    },
    {
      title: "Professional",
      price: "$999",
      features: [
        "Advanced Store Setup",
        "Custom Feature Development",
        "SEO Optimization",
        "3 Months Support",
        "Priority Support"
      ]
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "Full Store Development",
        "Custom App Development",
        "Advanced Analytics",
        "12 Months Support",
        "24/7 Priority Support"
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <h2 className="section-title">Pricing Plans</h2>
        <div className="row">
          {pricing.map((plan, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="retro-card h-100">
                <div className="card-body p-5">
                  <h3 className="text-center mb-4">{plan.title}</h3>
                  <div className="text-center mb-4">
                    <span className="display-4 fw-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted">/project</span>}
                  </div>
                  <ul className="list-unstyled">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-3">
                        <ChevronRight className="text-primary me-2" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-4">
                    <Link to="contact" smooth={true} className="btn btn-primary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;