import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Compass, 
  Send, 
  CheckCircle2, 
  DollarSign,
  ShieldCheck
} from 'lucide-react';

export default function CustomTripPlanner({ currency, onCustomBookingCreated }) {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(7);
  const [travelers, setTravelers] = useState(2);
  const [style, setStyle] = useState('luxury');
  const [departureMonth, setDepartureMonth] = useState('November 2026');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Price estimate calculation
  const styleMultiplier = style === 'budget' ? 120 : style === 'deluxe' ? 220 : 380;
  const estimatedTotalUSD = Math.round(days * travelers * styleMultiplier);

  const formatPrice = (usd) => {
    const val = Math.round(usd * currency.rate);
    return `${currency.symbol}${val.toLocaleString()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination.trim() || !contactName.trim() || !contactEmail.trim()) {
      alert('Please provide destination, your name, and email.');
      return;
    }

    const customBooking = {
      id: `CUST-${Math.floor(10000 + Math.random() * 90000)}`,
      tourId: 'custom-tour',
      tourTitle: `Custom Expedition: ${destination}`,
      destination: destination,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80',
      leadTraveler: {
        fullName: contactName,
        email: contactEmail,
        phone: '+1 555-VOYAGE',
        passportOrId: 'CUSTOM-PASS-01',
        specialRequests: notes || `Customized ${days} days ${style} tour`
      },
      travelDate: departureMonth,
      guests: { adults: travelers, children: 0 },
      tier: style === 'luxury' ? 'Ultra-VIP Luxury Tailored' : style === 'deluxe' ? 'Deluxe Comfort' : 'Standard Explorer',
      addOns: ['Tailor-made Itinerary Concierge', 'VIP Fast-track'],
      totalPriceUSD: estimatedTotalUSD,
      totalPaidFormatted: formatPrice(estimatedTotalUSD),
      currencyCode: currency.code,
      status: 'Confirmed',
      paymentMethod: 'Custom Quote & Deposit Confirmed',
      bookingDate: new Date().toISOString().split('T')[0]
    };

    setIsSubmitted(true);
    if (onCustomBookingCreated) {
      onCustomBookingCreated(customBooking);
    }

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {}
  };

  return (
    <section id="custom-planner" className="custom-planner-section">
      <div className="container">
        <div className="custom-planner-box glass-card">
          <div className="planner-left">
            <span className="badge badge-gold mb-2">
              <Sparkles size={14} /> Bespoke Tailored Travel
            </span>
            <h2 className="planner-heading">
              Can’t Find Your Dream Destination? <span className="gradient-text">We Build It For You</span>
            </h2>
            <p className="planner-desc">
              Whether it’s the Northern Lights of Norway, the Pyramids of Giza, the serenity of Sajek Valley, or a safari in Serengeti — design your personalized custom itinerary anywhere on Earth.
            </p>

            <div className="planner-guarantees">
              <div className="guarantee-item">
                <ShieldCheck size={18} className="text-emerald" />
                <span>Dedicated 1-on-1 Senior Travel Specialist</span>
              </div>
              <div className="guarantee-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Custom Flight, 5★ Villa & Private Chauffeur Matching</span>
              </div>
              <div className="guarantee-item">
                <Compass size={18} className="text-gold" />
                <span>Instant Quotation & 100% Transparent Pricing</span>
              </div>
            </div>

            {/* Estimated Quote Card */}
            <div className="planner-quote-badge">
              <span className="quote-label">Estimated Custom Budget ({days} Days, {travelers} Travelers):</span>
              <div className="quote-value">{formatPrice(estimatedTotalUSD)}</div>
              <small className="text-secondary">Includes accommodations, private transfers & guided touring</small>
            </div>
          </div>

          <div className="planner-right">
            {isSubmitted ? (
              <div className="planner-success-box">
                <CheckCircle2 size={48} className="text-emerald mb-2" />
                <h3>Custom Expedition Created!</h3>
                <p>
                  Thank you, <strong>{contactName}</strong>. Your tailored trip to <strong>{destination}</strong> has been registered and added to your <strong>My Bookings</strong> hub!
                </p>
                <p className="text-secondary text-sm">
                  Our private concierge will contact you at <strong>{contactEmail}</strong> within 4 hours.
                </p>
                <button 
                  type="button" 
                  className="btn btn-outline-cyan mt-3"
                  onClick={() => setIsSubmitted(false)}
                >
                  Create Another Custom Trip
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="planner-form">
                <h4 className="form-inner-title">Design Your Custom Itinerary</h4>

                <div className="form-group">
                  <label className="form-label">
                    <MapPin size={15} className="text-cyan" /> Dream Destination (Anywhere in the World) *
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Norway Fjords, Cairo & Nile, Sajek Valley, Santorini..."
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">
                      Duration: <strong>{days} Days</strong>
                    </label>
                    <input 
                      type="range" 
                      min="3" 
                      max="21" 
                      value={days}
                      onChange={(e) => setDays(Number(e.target.value))}
                      className="budget-slider"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Travelers: <strong>{travelers} Person(s)</strong>
                    </label>
                    <input 
                      type="range" 
                      min="1" 
                      max="16" 
                      value={travelers}
                      onChange={(e) => setTravelers(Number(e.target.value))}
                      className="budget-slider"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Travel Standard</label>
                  <div className="style-pills-row">
                    {[
                      { id: 'budget', label: 'Comfort ($)' },
                      { id: 'deluxe', label: 'Deluxe 5★ ($$)' },
                      { id: 'luxury', label: 'Ultra-VIP Luxury ($$$)' }
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        className={`style-pill-btn ${style === s.id ? 'active' : ''}`}
                        onClick={() => setStyle(s.id)}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rafiqul Islam"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Email *</label>
                    <input 
                      type="email" 
                      placeholder="e.g. rafiq@example.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Special Requests or Must-See Attractions</label>
                  <textarea 
                    rows="2"
                    placeholder="e.g. Must include helicopter ride, photography guide, beachfront stay..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="form-input"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-gold btn-block">
                  <Send size={16} /> Reserve & Request Custom Itinerary
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
