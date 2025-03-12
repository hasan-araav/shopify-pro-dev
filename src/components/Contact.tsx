import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="retro-card h-100 p-4">
              <div className="card-body">
                <div className="mb-4">
                  <Mail className="text-primary mb-3" size={30} />
                  <h5>Email</h5>
                  <p className="mb-0">contact@shopifypro.com</p>
                </div>
                <div className="mb-4">
                  <Phone className="text-primary mb-3" size={30} />
                  <h5>Phone</h5>
                  <p className="mb-0">+1 (555) 123-4567</p>
                </div>
                <div>
                  <MapPin className="text-primary mb-3" size={30} />
                  <h5>Location</h5>
                  <p className="mb-0">New York, NY</p>
                </div>
                <hr className="my-4" />
                <div className="d-flex justify-content-center gap-3">
                  <a href="#" className="social-icon"><Github size={24} /></a>
                  <a href="#" className="social-icon"><Linkedin size={24} /></a>
                  <a href="#" className="social-icon"><Twitter size={24} /></a>
                  <a href="#" className="social-icon"><Facebook size={24} /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="retro-card">
              <div className="card-body p-5">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows={5} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message <MessageSquare size={20} className="ms-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;