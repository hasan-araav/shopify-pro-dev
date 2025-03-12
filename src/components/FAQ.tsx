import React, { useState } from 'react';

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const faqs = [
    {
      id: "faq1",
      question: "How long does a typical store optimization take?",
      answer: "Most optimization projects are completed within 1-2 weeks, depending on the scope and complexity of the requirements."
    },
    {
      id: "faq2",
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer various support packages to ensure your store continues to perform optimally after the initial optimization."
    },
    {
      id: "faq3",
      question: "What's included in the store audit?",
      answer: "Our comprehensive store audit includes performance analysis, SEO review, conversion optimization opportunities, and security assessment."
    }
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion">
              {faqs.map((faq) => (
                <div key={faq.id} className="faq-item pb-3">
                  <div className={`accordion-item ${activeAccordion === faq.id ? 'shadow-sm' : ''}`}>
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button ${activeAccordion !== faq.id ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => setActiveAccordion(activeAccordion === faq.id ? null : faq.id)}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div className={`accordion-collapse collapse ${activeAccordion === faq.id ? 'show' : ''}`}>
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;