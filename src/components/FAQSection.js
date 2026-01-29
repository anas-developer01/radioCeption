import React, { useState } from 'react';
import '../styles/main.css';

const faqs = [
  {
    question: 'What is Radioception?',
    answer: 'Radioception is an AI-powered platform for smarter radiology and radiographic image analysis.'
  },
  {
    question: 'How does the AI analysis work?',
    answer: 'Our AI models analyze uploaded X-rays and provide detailed, accurate reports to assist radiologists and clinicians.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, all uploads and reports are encrypted and handled with strict privacy and security standards.'
  },
  {
    question: 'Can I use Radioception for free?',
    answer: 'We offer both free and premium plans. Free users can access basic features, while premium users get advanced analytics and priority support.'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team via the Contact Us page or by emailing info@radioception.com.'
  }
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div className={`faq-item${openIdx === idx ? ' open' : ''}`} key={idx}>
              <button
                className="faq-question"
                aria-expanded={openIdx === idx}
                onClick={() => handleToggle(idx)}
                type="button"
              >
                {faq.question}
              </button>
              {openIdx === idx && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
