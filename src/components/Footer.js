


import { FiMail, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';

import '../styles/main.css';

const Footer = () => {

  return (
    <>
      <div className="footer-blue-bar"></div>
      <footer className="main-footer split-footer" style={{marginTop: 0, paddingTop: 0}}>
        <div className="split-footer-content" style={{marginTop: 0, paddingTop: 0}}>
          <div className="split-footer-left" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
              <img src={require('../assets/Images/new-logo.jpg')} alt="Logo" style={{height: 32, width: 32, objectFit: 'contain', borderRadius: 4, marginRight: 6}} />
              <h3 style={{margin: 0}}>Radioception</h3>
            </div>
            <p>Smarter Radiology with MedGemma.<br />AI-powered radiographic image analysis.</p>
            <div style={{marginTop: 6}}>
              <div style={{color: '#e3e9f6', fontSize: '0.95rem', opacity: 0.8}}>
                <strong>Address:</strong> Mac height, H-sector Bahria Enclave Islamabad
              </div>
              <div style={{color: '#e3e9f6', fontSize: '0.95rem', opacity: 0.8}}>
                <strong>Phone:</strong> <a href="tel:+923365859359" style={{color: '#e3e9f6', textDecoration: 'none'}}>+92 336 5859359</a>
              </div>
            </div>
          </div>
          <div className="split-footer-center">
            <ul className="split-footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/certifications" className="footer-link">Certifications</a></li>
              <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/disclaimer" className="footer-link">Disclaimer</a></li>
            </ul>
          </div>
          <div className="split-footer-right">
            <div className="footer-social-row">
              <a href="mailto:info@radioception.com" className="footer-social-icon" title="Email"><FiMail /></a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="GitHub"><FiGithub /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="LinkedIn"><FiLinkedin /></a>
              <a href="https://radioception.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="Website"><FiGlobe /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom improved-footer-bottom">
          &copy; {new Date().getFullYear()} Radioception. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
