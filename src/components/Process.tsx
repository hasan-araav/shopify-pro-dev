import React from 'react';
import { Coffee, MonitorSmartphone, Rocket, Zap } from 'lucide-react';

const Process = () => {
  const process = [
    {
      icon: <Coffee size={40} />,
      title: "Initial Consultation",
      description: "We discuss your needs and goals for your Shopify store"
    },
    {
      icon: <MonitorSmartphone size={40} />,
      title: "Analysis & Planning",
      description: "Detailed analysis of your current setup and improvement plan"
    },
    {
      icon: <Rocket size={40} />,
      title: "Implementation",
      description: "Expert execution of agreed improvements and features"
    },
    {
      icon: <Zap size={40} />,
      title: "Testing & Launch",
      description: "Thorough testing and smooth deployment of changes"
    }
  ];

  return (
    <section id="process" className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">How We Work</h2>
        <div className="row">
          {process.map((step, index) => (
            <div key={index} className="col-lg-3">
              <div className="process-step text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  {step.icon}
                </div>
                <h4 className="mb-3">{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;