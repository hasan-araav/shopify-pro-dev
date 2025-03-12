import React from 'react';

const Portfolio = () => {
  const portfolio = [
    {
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
      title: "Footwear Store",
      description: "Complete store redesign with custom product configurator"
    },
    {
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80",
      title: "Fashion Boutique",
      description: "Theme customization and performance optimization"
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80",
      title: "Electronics Shop",
      description: "Advanced filtering and search implementation"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="row g-4">
          {portfolio.map((item, index) => (
            <div key={index} className="col-lg-4">
              <div className="portfolio-item">
                <img src={item.image} alt={item.title} className="img-fluid" />
                <div className="portfolio-overlay text-white p-3">
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
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

export default Portfolio;