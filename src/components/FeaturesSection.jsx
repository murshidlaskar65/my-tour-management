import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Headphones, 
  CreditCard, 
  Plane, 
  Award, 
  ThumbsUp 
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Sparkles className="text-gold" size={28} />,
      title: 'Curated 5-Star Itineraries',
      desc: 'Each journey is meticulously tested and fine-tuned by certified destination experts, ensuring unmatched luxury and authentic local immersion.'
    },
    {
      icon: <ShieldCheck className="text-emerald" size={28} />,
      title: '100% Guaranteed Reservations',
      desc: 'Instant confirmed booking IDs with official QR boarding passes, hotel confirmations, and accredited private tour guides.'
    },
    {
      icon: <Headphones className="text-cyan" size={28} />,
      title: '24/7 Dedicated Concierge',
      desc: 'Your personal travel specialist is on standby via WhatsApp and direct hotline from airport arrival until you return safely home.'
    },
    {
      icon: <CreditCard className="text-purple" size={28} />,
      title: 'Flexible Booking & Refund',
      desc: 'Zero-hassle cancellations and transfers. Seamless multi-currency payment with SSL military-grade encryption.'
    }
  ];

  return (
    <section id="why-us" className="features-section">
      <div className="container">
        <div className="features-header text-center">
          <span className="badge badge-cyan mb-2">
            <Award size={14} /> The VoyagePulse Standard
          </span>
          <h2 className="section-title">
            Why Discerning Travelers <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="section-subtitle">
            We eliminate travel anxiety by pairing personalized bespoke service with instant digital management.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card glass-card">
              <div className="feature-icon-wrapper">
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
