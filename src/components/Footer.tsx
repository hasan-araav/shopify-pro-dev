import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="mb-lg-0">© 2024 ShopifyPro. All rights reserved.</p>
          </div>
          <div className="col-lg-6">
            <ul className="list-inline mb-0 text-center text-lg-end">
              <li className="list-inline-item"><a href="#" className="text-decoration-none">Privacy Policy</a></li>
              <li className="list-inline-item mx-3">|</li>
              <li className="list-inline-item"><a href="#" className="text-decoration-none">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;