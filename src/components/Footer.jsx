import React, { useState } from 'react';
import { 
  Compass, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Heart,
  Globe
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col-brand">
            <div className="navbar-brand mb-3">
              <div className="brand-logo-icon">
                <Compass size={24} className="icon-pulse" />
              </div>
              <div className="brand-text">
                <span className="brand-title">Voyage<span className="brand-highlight">Pulse</span></span>
                <span className="brand-tagline">LUXURY TOUR MANAGEMENT</span>
              </div>
            </div>
            <p className="footer-bio">
              Crafting extraordinary worldwide vacations, luxury island escapes, and tailor-made expeditions. Trusted by 28,000+ travelers with verified digital vouchers.
            </p>
            <div className="footer-contact-info">
              <div className="f-contact-item">
                <PhoneCall size={15} className="text-gold" />
                <span>+1 (800) 868-7857 (24/7 VIP Hotline)</span>
              </div>
              <div className="f-contact-item">
                <Mail size={15} className="text-cyan" />
                <span>concierge@voyagepulse.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Popular Escapes */}
          <div className="footer-col">
            <h4 className="footer-heading">Iconic Destinations</h4>
            <ul className="footer-links">
              <li><a href="#tours-catalog">Bali Nusa Penida Island</a></li>
              <li><a href="#tours-catalog">Swiss Alps Glacier Express</a></li>
              <li><a href="#tours-catalog">Dubai Desert Safari & Marina</a></li>
              <li><a href="#tours-catalog">Cappadocia Sunrise Balloons</a></li>
              <li><a href="#tours-catalog">Cox’s Bazar & Saint Martin</a></li>
              <li><a href="#tours-catalog">Maldives Overwater Villas</a></li>
            </ul>
          </div>

          {/* Column 3: Travel Concierge */}
          <div className="footer-col">
            <h4 className="footer-heading">Travel Services</h4>
            <ul className="footer-links">
              <li><a href="#custom-planner">Bespoke Custom Trip Planner</a></li>
              <li><a href="#why-us">Flexible Refund Guarantee</a></li>
              <li><a href="#why-us">Private Jet & Yacht Charters</a></li>
              <li><a href="#why-us">Corporate & Group Retreats</a></li>
              <li><a href="#why-us">Visa & Fast-Track Assistance</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="footer-col">
            <h4 className="footer-heading">Exclusive Travel Club</h4>
            <p className="footer-subtext">
              Join 45,000+ wanderlust insiders. Receive secret luxury deals and newly released departure slots directly.
            </p>

            {isSubscribed ? (
              <div className="newsletter-success">
                <CheckCircle size={18} className="text-emerald" />
                <span>Welcome aboard! Check your inbox for secret travel perks.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn btn-primary btn-newsletter">
                  <Send size={15} />
                </button>
              </form>
            )}

            <div className="payment-security-tags mt-3">
              <span className="secure-badge">
                <ShieldCheck size={14} className="text-emerald" /> PCI-DSS Level 1 Secure
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} VoyagePulse Global Leisure Ltd. All rights reserved. Designed for elite travel management.
          </p>

          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
