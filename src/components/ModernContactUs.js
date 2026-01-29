
import React from 'react';
import { FiUser, FiMail, FiMessageCircle, FiSend } from 'react-icons/fi';
// Use public/contactUs.png for the image

const ModernContactUs = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = React.useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="modern-contact-section">
      <div className="modern-contact-row">
        <div className="modern-contact-card modern-contact-card-left">
          <h2 className="modern-contact-title">Contact Us</h2>
          <form className="modern-contact-form" onSubmit={handleSubmit}>
            <div className="modern-input-group">
              <FiUser className="modern-input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="modern-input-group">
              <FiMail className="modern-input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="modern-input-group">
              <FiMessageCircle className="modern-input-icon" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>
            <button className="modern-send-btn" type="submit">
              <FiSend style={{ marginRight: 8 }} /> Send
            </button>
            {success && <div className="modern-success-msg">Message sent successfully!</div>}
          </form>
        </div>
        <div className="modern-contact-card modern-contact-card-right">
          <img src={process.env.PUBLIC_URL + '/contactUs.png'} alt="Contact Illustration" className="modern-contact-image" />
        </div>
      </div>
    </section>
  );
};

export default ModernContactUs;
