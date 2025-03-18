import React from 'react';

const Portfolio = () => {
  const portfolio = [
    {
      image: "https://i.imghippo.com/files/AtO8848LFQ.png",
      title: "FlowerChimp",
      description: "Malaysia's #1 Online Florist"
    },
    {
      image: "https://i.imghippo.com/files/ofN2519MuM.png",
      title: "CakeRush",
      description: "Malaysia's #1 Online Same Day Cake Delivery"
    },
    {
      image: "https://i.imghippo.com/files/rsk5313TY.png",
      title: "LVLY",
      description: "Flower Delivery Austrailia"
    },
    {
      image: "https://i.imghippo.com/files/xzTW9459qew.png",
      title: "LVLY",
      description: "Bloomeroo - Same Day Flower Delivery Austrailia"
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