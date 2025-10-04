import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, navigate to the Store page, select your products, and click the "Add to Cart" button. Proceed to checkout to complete your purchase.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept credit/debit cards, mobile money, and bank transfers. More options may be available during checkout.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is processed, you’ll receive a tracking ID via email. Use this ID on the Dashboard page to track your shipment.',
    },
    {
      question: 'What is the return policy?',
      answer: 'You can return products within 7 days of delivery if they are unused and in original packaging. Contact us via the Help page for assistance.',
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-container">
        <div className="search-bar">
            <h1 className="faqlogo">Frequently Asked Question</h1>
            <p>Find answers to common questions about using Agromy to connect farmers and buyers across Nigeria</p>
            <input
                type="text"
                placeholder="Search for an Answer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"/>
                
        </div>
      <main className="faq-main">
        
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No results found.</p>
        )}
      </main>
    </div>
  );
};

export default FAQ;