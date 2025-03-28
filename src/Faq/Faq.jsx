import React from "react";
import "./FAQ.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "Can I upload a CV?",
      answer:
        "Yes, you can upload your CV directly to your profile. This allows employers to view your qualifications and experience, increasing your chances of finding the right job.",
    },
    {
      id: 2,
      question: "How long will the recruitment process take?",
      answer:
        "The recruitment process typically takes between 2-4 weeks, depending on the position and company. Some roles may require additional steps like technical assessments.",
    },
    {
      id: 3,
      question: "Do you recruit for Graduates and Students?",
      answer:
        "Absolutely! We have special programs designed for graduates and students looking to start their career in tech.",
    },
    {
      id: 4,
      question: "What does the recruitment process involve?",
      answer:
        "Our standard process includes resume screening, phone interview, technical evaluation (if applicable), and final interviews with the hiring team.",
    },
    {
      id: 5,
      question: "Can I receive job notifications?",
      answer:
        "Yes, you can enable job alerts in your account settings to receive notifications about new positions matching your criteria.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Find answers to common questions about our platform
        </p>

        <div className="faq-items">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-header" onClick={() => toggleFAQ(index)}>
                <span className="faq-number">
                  {String(faq.id).padStart(2, "0")}
                </span>
                <h3 className="faq-question">{faq.question}</h3>
                <div className="faq-toggle">
                  {activeIndex === index ? (
                    <RemoveIcon className="toggle-icon" />
                  ) : (
                    <AddIcon className="toggle-icon" />
                  )}
                </div>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
