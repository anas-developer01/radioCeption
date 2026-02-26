import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import { FaUserPlus, FaUpload, FaListOl, FaRobot, FaFilePdf, FaCheckCircle } from 'react-icons/fa';
import ModernContactUs from '../components/ModernContactUs';
import FAQSection from '../components/FAQSection'; 

const Home = () => { 
  return (
    <>
      <ParticlesBackground />
      <div className="home-root">
    {/* Hero Section */}
    <section className="home-hero improved-hero modern-home-hero">
      <div className="improved-hero-inner">
        {/* Removed hero SVG card */}
        <div className="improved-hero-text">
          <h1 className="improved-hero-title">Smarter Radiology with <span>MedGemma</span></h1>
          <p className="improved-hero-lead">
            Empowering radiologists and healthcare providers with <b>advanced, AI-powered radiographic image analysis</b>.<br />
            Instantly validate your reports, improve diagnostic confidence, and streamline your workflow.
          </p>
          <div className="improved-hero-btn-row">
            <a href="/register" className="improved-hero-btn modern-hero-btn">Start Free Trial</a>
          </div>
        </div>
      </div>

    </section>
    {/* Spacer for clear gap between Why Choose Radioception and next section */}
    <div style={{height: '36px'}}></div>

    <section className="home-section home-how">
      <h3 className="how-title">How It Works</h3>
      <div className="how-cards-horizontal">
        <div className="how-card">
          <div className="how-card-icon-wrap"><FaUserPlus className="how-card-icon" /></div>
          <h4 className="how-card-title">Register & Subscribe</h4>
          <p className="how-card-desc">Sign up and choose a subscription plan to access the platform.</p>
        </div>
        <div className="how-card">
          <div className="how-card-icon-wrap"><FaUpload className="how-card-icon" /></div>
          <h4 className="how-card-title">Upload Radiographic Images</h4>
          <p className="how-card-desc">Upload X-ray, CT-Scan, MRI, PET-Scan, or Ultrasound images securely.</p>
        </div>
        <div className="how-card">
          <div className="how-card-icon-wrap"><FaListOl className="how-card-icon" /></div>
          <h4 className="how-card-title">Select Scan Type</h4>
          <p className="how-card-desc">Choose the scan type for accurate AI analysis.</p>
        </div>
        <div className="how-card">
          <div className="how-card-icon-wrap"><FaRobot className="how-card-icon" /></div>
          <h4 className="how-card-title">AI-Powered Report</h4>
          <p className="how-card-desc">MedGemma analyzes your image and generates a detailed report in seconds.</p>
        </div>
        <div className="how-card">
          <div className="how-card-icon-wrap"><FaFilePdf className="how-card-icon" /></div>
          <h4 className="how-card-title">Download as PDF</h4>
          <p className="how-card-desc">Instantly download your report in PDF format.</p>
        </div>
      </div>
    </section>


    <section className="home-section home-benefits improved-benefits-section">
      <h3 className="improved-benefits-title">Why Choose Radioception?</h3>
      <ul className="home-benefits-list improved-benefits-list">
        <li><FaCheckCircle className="benefit-icon" />Fast, accurate, and secure AI-assisted radiology reporting</li>
        <li><FaCheckCircle className="benefit-icon" />Multi-Modal Imagery Support</li>
        <li><FaCheckCircle className="benefit-icon" />Easy PDF download for every report</li>
        <li><FaCheckCircle className="benefit-icon" />Subscription-based access for clinics, hospitals, and professionals</li>
        <li><FaCheckCircle className="benefit-icon" />Compliant with healthcare privacy and security standards</li>
      </ul>
    </section>


    {/* Return and Refund Policy Section */}
    <section className="home-section policy-section modern-policy-section dark-policy-section" style={{marginTop: '48px'}}>
      <div className="dark-policy-inner">
        <h2 className="policy-section-title white-policy-title">Return and Refund Policy</h2>
        <p className="policy-section-text white-policy-text">
          At Radioception, we strive to provide the highest quality AI-powered radiology services. Due to the digital and instant nature of our reports and subscriptions, all purchases are considered final and non-refundable once the service is delivered. If you experience any technical issues or believe you have been charged in error, please contact our support team within 24 hours. We are committed to resolving genuine concerns promptly and fairly.
        </p>
      </div>
    </section>

    {/* Terms and Conditions Section */}
    <section className="home-section policy-section modern-policy-section dark-policy-section" style={{marginTop: '40px', marginBottom: '40px'}}>
      <div className="dark-policy-inner">
        <h2 className="policy-section-title white-policy-title">Terms and Conditions</h2>
        <p className="policy-section-text white-policy-text">
          By using Radioception, you agree to our terms: All uploaded images and generated reports are handled securely and confidentially. Our AI analysis is intended to assist, not replace, professional medical judgment. Users are responsible for the accuracy of uploaded data. Misuse of the platform, including unauthorized sharing or commercial redistribution, is strictly prohibited. For full details, please review our complete Terms and Conditions page.
        </p>
      </div>
    </section>

    <ModernContactUs />
    <FAQSection />

      </div>
    </>
  );
}

export default Home;
