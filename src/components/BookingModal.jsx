import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Calendar, 
  Users, 
  Check, 
  ShieldCheck, 
  CreditCard, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Printer, 
  CheckCircle2, 
  QrCode, 
  Smartphone, 
  Building, 
  Clock, 
  MapPin 
} from 'lucide-react';

export default function BookingModal({ 
  tour, 
  currency, 
  onClose, 
  onBookingSuccess,
  currentUser 
}) {
  const [step, setStep] = useState(1);

  // Step 1: Configuration
  const [travelDate, setTravelDate] = useState(tour.departureDates?.[0] || '2026-10-20');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedTier, setSelectedTier] = useState('deluxe');
  const [selectedAddOns, setSelectedAddOns] = useState(['insurance', 'chauffeur']);

  // Step 2: Traveler Info (pre-filled with logged-in user if available)
  const [formData, setFormData] = useState({
    fullName: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: '',
    passportOrId: '',
    dietary: 'None',
    specialRequests: ''
  });
  const [formErrors, setFormErrors] = useState({});

  // Step 3: Payment
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '4242 •••• •••• 4242',
    expiry: '12/28',
    cvv: '888',
    cardHolder: ''
  });
  const [walletPhone, setWalletPhone] = useState('+880 1700 000000');
  const [isProcessing, setIsProcessing] = useState(false);

  // Step 4: Final Confirmation
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const tiers = [
    { id: 'standard', name: 'Standard Comfort Room', multiplier: 1.0, desc: '5-Star Resort Standard Luxury Room' },
    { id: 'deluxe', name: 'Deluxe Ocean / Alpine View', multiplier: 1.25, desc: 'Higher floor suite with panoramic balcony' },
    { id: 'presidential', name: 'Presidential Private Villa', multiplier: 1.6, desc: 'Private heated pool, dedicated butler service' }
  ];

  const addOnsList = [
    { id: 'chauffeur', name: 'VIP Private Chauffeur Airport Transfer', priceUSD: 120 },
    { id: 'insurance', name: 'Comprehensive Global Travel Insurance', priceUSD: 65, perPerson: true },
    { id: 'drone', name: 'Private Drone & 4K Vacation Photographer', priceUSD: 180 },
    { id: 'gala', name: 'Private Candlelight Sunset Gala Dinner', priceUSD: 140 }
  ];

  // Price Calculation
  const currentTierObj = tiers.find(t => t.id === selectedTier) || tiers[0];
  const baseAdultRate = tour.price * currentTierObj.multiplier;
  const baseChildRate = tour.price * 0.6 * currentTierObj.multiplier;
  
  let addOnsTotalUSD = 0;
  selectedAddOns.forEach(addOnId => {
    const item = addOnsList.find(a => a.id === addOnId);
    if (item) {
      if (item.perPerson) {
        addOnsTotalUSD += item.priceUSD * (adults + children);
      } else {
        addOnsTotalUSD += item.priceUSD;
      }
    }
  });

  const totalUSD = Math.round((baseAdultRate * adults) + (baseChildRate * children) + addOnsTotalUSD);

  const formatPrice = (usd) => {
    const val = Math.round(usd * currency.rate);
    return `${currency.symbol}${val.toLocaleString()}`;
  };

  const handleToggleAddOn = (id) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter(a => a !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const validateStep2 = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.passportOrId.trim()) errors.passportOrId = 'Passport or ID Number is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 2) {
      if (!validateStep2()) return;
      if (!cardInfo.cardHolder) {
        setCardInfo(prev => ({ ...prev, cardHolder: formData.fullName }));
      }
    }
    setStep(prev => prev + 1);
  };

  const handleCompletePayment = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const bookingRef = `TRV-${Math.floor(10000 + Math.random() * 90000)}-${tour.id.split('-')[1]?.toUpperCase() || 'X'}`;
      
      const newBooking = {
        id: bookingRef,
        tourId: tour.id,
        tourTitle: tour.title,
        destination: tour.destination,
        coordinates: tour.coordinates || null,
        image: tour.image,
        leadTraveler: { ...formData },
        travelDate,
        guests: { adults, children },
        tier: currentTierObj.name,
        addOns: selectedAddOns.map(a => addOnsList.find(item => item.id === a)?.name).filter(Boolean),
        totalPriceUSD: totalUSD,
        totalPaidFormatted: formatPrice(totalUSD),
        currencyCode: currency.code,
        status: 'Confirmed',
        paymentMethod: paymentMethod === 'card' 
          ? 'Credit Card (Visa/Mastercard)' 
          : paymentMethod === 'wallet' 
            ? `Mobile Wallet (${walletPhone})` 
            : 'Bank Wire Transfer',
        bookingDate: new Date().toISOString().split('T')[0]
      };

      setConfirmedBooking(newBooking);
      setStep(4);
      onBookingSuccess(newBooking);

      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log(err);
      }
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content booking-wizard-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close booking modal">
          <X size={20} />
        </button>

        {/* Wizard Step Progress Header */}
        <div className="wizard-header">
          <div className="wizard-steps-indicator">
            {[
              { num: 1, title: 'Trip Options' },
              { num: 2, title: 'Traveler Details' },
              { num: 3, title: 'Payment' },
              { num: 4, title: 'Boarding Voucher' }
            ].map((s) => (
              <div 
                key={s.num} 
                className={`wizard-step-node ${step >= s.num ? 'active' : ''} ${step === s.num ? 'current' : ''}`}
              >
                <div className="node-number">{step > s.num ? <Check size={14} /> : s.num}</div>
                <span className="node-label">{s.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wizard Body */}
        <div className="wizard-body">
          {/* STEP 1: OPTIONS & CUSTOMIZATION */}
          {step === 1 && (
            <div className="wizard-step-pane">
              <div className="step-pane-header">
                <span className="badge badge-cyan">Step 1 of 4</span>
                <h3 className="wizard-title">Customize Your Tour Experience</h3>
                <p className="wizard-desc">
                  Select your departure date, room tier, party size, and luxury add-on services.
                </p>
              </div>

              {/* Selected Tour Summary Strip */}
              <div className="tour-summary-strip">
                <img src={tour.image} alt={tour.title} className="summary-thumb" />
                <div>
                  <h4 className="summary-tour-title">{tour.title}</h4>
                  <div className="summary-tour-meta">
                    <span><MapPin size={13} className="text-cyan" /> {tour.destination}</span>
                    <span><Clock size={13} className="text-gold" /> {tour.duration || 'Flexible Days'}</span>
                    {tour.coordinates && (
                      <span className="summary-coords-pill">
                        📍 GPS: {tour.coordinates.lat.toFixed(2)}°, {tour.coordinates.lng.toFixed(2)}°
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Date & Guests Row */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">
                    <Calendar size={15} className="text-cyan" /> Select Departure Date
                  </label>
                  <select 
                    value={travelDate} 
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="form-input"
                  >
                    {(tour.departureDates && tour.departureDates.length > 0 ? tour.departureDates : ['2026-10-20', '2026-11-05', '2026-11-20', '2026-12-10']).map((d) => (
                      <option key={d} value={d}>{new Date(d).toLocaleDateString('en-US', { dateStyle: 'full' })}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Users size={15} className="text-gold" /> Travelers Count
                  </label>
                  <div className="travelers-counter-grid">
                    <div className="counter-col">
                      <span className="counter-label">Adults (12+ yrs)</span>
                      <div className="counter-controls">
                        <button 
                          type="button" 
                          className="counter-btn"
                          disabled={adults <= 1}
                          onClick={() => setAdults(adults - 1)}
                        >-</button>
                        <span className="counter-val">{adults}</span>
                        <button 
                          type="button" 
                          className="counter-btn"
                          onClick={() => setAdults(adults + 1)}
                        >+</button>
                      </div>
                    </div>

                    <div className="counter-col">
                      <span className="counter-label">Kids (2-11 yrs) -40%</span>
                      <div className="counter-controls">
                        <button 
                          type="button" 
                          className="counter-btn"
                          disabled={children <= 0}
                          onClick={() => setChildren(children - 1)}
                        >-</button>
                        <span className="counter-val">{children}</span>
                        <button 
                          type="button" 
                          className="counter-btn"
                          onClick={() => setChildren(children + 1)}
                        >+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accommodation Tier Select */}
              <div className="form-group">
                <label className="form-label">Choose Accommodation & Villa Tier</label>
                <div className="tiers-grid">
                  {tiers.map((t) => (
                    <div 
                      key={t.id}
                      className={`tier-card ${selectedTier === t.id ? 'tier-selected' : ''}`}
                      onClick={() => setSelectedTier(t.id)}
                    >
                      <div className="tier-radio-row">
                        <input 
                          type="radio" 
                          name="tierRadio" 
                          checked={selectedTier === t.id}
                          onChange={() => setSelectedTier(t.id)} 
                        />
                        <strong>{t.name}</strong>
                      </div>
                      <p className="tier-desc">{t.desc}</p>
                      <span className="tier-multiplier-badge">
                        {t.multiplier === 1.0 ? 'Included' : `+${Math.round((t.multiplier - 1) * 100)}% Upgrade`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-on Experiences */}
              <div className="form-group">
                <label className="form-label">Luxury Add-Ons & Enhancements</label>
                <div className="addons-grid">
                  {addOnsList.map((addon) => {
                    const isSelected = selectedAddOns.includes(addon.id);
                    return (
                      <div 
                        key={addon.id}
                        className={`addon-card ${isSelected ? 'addon-selected' : ''}`}
                        onClick={() => handleToggleAddOn(addon.id)}
                      >
                        <div className="addon-check-box">
                          {isSelected ? <Check size={14} /> : null}
                        </div>
                        <div className="addon-info">
                          <span className="addon-name">{addon.name}</span>
                          <span className="addon-price">
                            +{formatPrice(addon.priceUSD)} {addon.perPerson ? '/ traveler' : '/ total'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Live Cost Summary Bar */}
              <div className="wizard-live-summary">
                <div>
                  <span className="summary-total-label">Estimated Total (Taxes & Fees Included)</span>
                  <div className="summary-total-value">
                    <span className="big-sum">{formatPrice(totalUSD)}</span>
                    <span className="currency-notice">({totalUSD} USD)</span>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="btn btn-primary btn-wizard-next"
                  onClick={handleNextStep}
                >
                  Continue to Traveler Details <ArrowRight size={17} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: TRAVELER DETAILS */}
          {step === 2 && (
            <div className="wizard-step-pane">
              <div className="step-pane-header">
                <span className="badge badge-cyan">Step 2 of 4</span>
                <h3 className="wizard-title">Primary Traveler & Contact Information</h3>
                <p className="wizard-desc">
                  This information will be used for your flight/hotel vouchers and emergency traveler insurance.
                </p>
              </div>

              <div className="traveler-form-container">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name (as in Passport/NID) *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Shakib Al Hasan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`form-input ${formErrors.fullName ? 'input-error' : ''}`}
                    />
                    {formErrors.fullName && <span className="error-text">{formErrors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="e.g. traveler@voyagepulse.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`form-input ${formErrors.email ? 'input-error' : ''}`}
                    />
                    {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Mobile / WhatsApp Contact Number *</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. +880 1712 345678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`form-input ${formErrors.phone ? 'input-error' : ''}`}
                    />
                    {formErrors.phone && <span className="error-text">{formErrors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Passport No. or National ID *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. A04829103 or 1994821038"
                      value={formData.passportOrId}
                      onChange={(e) => setFormData({ ...formData, passportOrId: e.target.value })}
                      className={`form-input ${formErrors.passportOrId ? 'input-error' : ''}`}
                    />
                    {formErrors.passportOrId && <span className="error-text">{formErrors.passportOrId}</span>}
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Dietary Preferences</label>
                    <select 
                      value={formData.dietary}
                      onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                      className="form-input"
                    >
                      <option value="None">Regular / No Restrictions</option>
                      <option value="Halal">100% Halal Certified Meals</option>
                      <option value="Vegetarian">Strict Vegetarian / Vegan</option>
                      <option value="GlutenFree">Gluten-Free</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Special Occasions / Notes</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Honeymoon cake, ground floor room..."
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Step Navigation Bar */}
              <div className="wizard-actions-bar">
                <button 
                  type="button" 
                  className="btn btn-glass"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft size={16} /> Back to Options
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={handleNextStep}
                >
                  Continue to Secure Payment <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PAYMENT SIMULATION */}
          {step === 3 && (
            <div className="wizard-step-pane">
              <div className="step-pane-header">
                <span className="badge badge-gold">Step 3 of 4</span>
                <h3 className="wizard-title">Secure Checkout & Confirmation</h3>
                <p className="wizard-desc">
                  Simulated sandbox transaction. Select your preferred payment method.
                </p>
              </div>

              <div className="payment-layout-grid">
                {/* Method Selector */}
                <div className="payment-methods-column">
                  <button 
                    type="button"
                    className={`pay-method-pill ${paymentMethod === 'card' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <CreditCard size={18} />
                    <span>Credit / Debit Card</span>
                  </button>

                  <button 
                    type="button"
                    className={`pay-method-pill ${paymentMethod === 'wallet' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('wallet')}
                  >
                    <Smartphone size={18} />
                    <span>Mobile Banking (bKash / Nagad / UPI)</span>
                  </button>

                  <button 
                    type="button"
                    className={`pay-method-pill ${paymentMethod === 'bank' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('bank')}
                  >
                    <Building size={18} />
                    <span>Direct Wire / Agency Counter</span>
                  </button>

                  {/* Trust Seal */}
                  <div className="ssl-seal-box">
                    <ShieldCheck size={28} className="text-emerald" />
                    <div>
                      <strong>256-Bit SSL Encrypted</strong>
                      <p>PCI-DSS Certified simulated gateway for safe travel checkout.</p>
                    </div>
                  </div>
                </div>

                {/* Form based on selected payment */}
                <div className="payment-fields-card">
                  {paymentMethod === 'card' && (
                    <div className="card-payment-form">
                      <div className="form-group">
                        <label className="form-label">Cardholder Name</label>
                        <input 
                          type="text" 
                          value={cardInfo.cardHolder}
                          onChange={(e) => setCardInfo({ ...cardInfo, cardHolder: e.target.value })}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Card Number</label>
                        <input 
                          type="text" 
                          value={cardInfo.cardNumber}
                          onChange={(e) => setCardInfo({ ...cardInfo, cardNumber: e.target.value })}
                          className="form-input"
                        />
                      </div>

                      <div className="form-grid-2">
                        <div className="form-group">
                          <label className="form-label">Expires</label>
                          <input 
                            type="text" 
                            value={cardInfo.expiry}
                            onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">CVV</label>
                          <input 
                            type="text" 
                            value={cardInfo.cvv}
                            onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
                            className="form-input"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'wallet' && (
                    <div className="wallet-payment-form">
                      <p className="wallet-instructions">
                        Enter your mobile banking number to authorize the instant deposit.
                      </p>
                      <div className="form-group">
                        <label className="form-label">Wallet Account Number</label>
                        <input 
                          type="text" 
                          value={walletPhone}
                          onChange={(e) => setWalletPhone(e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div className="wallet-tags">
                        <span className="badge badge-cyan">bKash</span>
                        <span className="badge badge-gold">Nagad</span>
                        <span className="badge badge-emerald">Rocket</span>
                        <span className="badge badge-purple">UPI / GPay</span>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'bank' && (
                    <div className="bank-payment-info">
                      <h5>Agency Corporate Escrow Account</h5>
                      <p>Beneficiary: VoyagePulse Global Leisure Ltd.</p>
                      <p>Bank: Standard Chartered Bank / Eastern Bank</p>
                      <p>SWIFT Code: SCBLBDDX</p>
                      <small className="text-secondary">
                        A provisional voucher will be generated immediately; verified upon wire receipt.
                      </small>
                    </div>
                  )}

                  {/* Summary amount */}
                  <div className="checkout-breakdown">
                    <div className="bd-row">
                      <span>{adults} Adult(s) & {children} Kid(s)</span>
                      <span>{formatPrice((baseAdultRate * adults) + (baseChildRate * children))}</span>
                    </div>
                    {addOnsTotalUSD > 0 && (
                      <div className="bd-row">
                        <span>Selected Add-Ons</span>
                        <span>{formatPrice(addOnsTotalUSD)}</span>
                      </div>
                    )}
                    <div className="bd-row bd-total">
                      <span>Total Charge:</span>
                      <span className="total-highlight">{formatPrice(totalUSD)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wizard Action */}
              <div className="wizard-actions-bar">
                <button 
                  type="button" 
                  className="btn btn-glass"
                  onClick={() => setStep(2)}
                  disabled={isProcessing}
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button 
                  type="button" 
                  className="btn btn-gold btn-pay-action"
                  onClick={handleCompletePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span>Processing Secure Reservation...</span>
                  ) : (
                    <>
                      <ShieldCheck size={18} />
                      <span>Confirm & Pay {formatPrice(totalUSD)}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: BOARDING PASS & CONFIRMATION VOUCHER */}
          {step === 4 && confirmedBooking && (
            <div className="wizard-step-pane step-voucher-pane">
              <div className="success-banner">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={40} className="text-emerald" />
                </div>
                <h3 className="success-title">Booking Confirmed & Guaranteed!</h3>
                <p className="success-subtitle">
                  Your electronic travel voucher and itinerary pass have been generated.
                </p>
              </div>

              {/* DIGITAL BOARDING PASS / TICKET */}
              <div className="boarding-pass-card" id="printable-ticket">
                {/* Ticket Top Header */}
                <div className="ticket-header">
                  <div className="ticket-brand">
                    <Sparkles size={18} className="text-gold" />
                    <span>VoyagePulse Premium Pass</span>
                  </div>
                  <div className="ticket-ref-badge">
                    <span>REF: </span>
                    <strong>{confirmedBooking.id}</strong>
                  </div>
                </div>

                {/* Ticket Main Body */}
                <div className="ticket-body">
                  <div className="ticket-left">
                    <h4 className="ticket-tour-title">{confirmedBooking.tourTitle}</h4>
                    <span className="ticket-destination">
                      <MapPin size={14} className="text-cyan" /> {confirmedBooking.destination}
                    </span>
                    {confirmedBooking.coordinates && (
                      <div className="ticket-coords-badge">
                        <ShieldCheck size={12} className="text-emerald" />
                        <span>GPS Verified: {confirmedBooking.coordinates.lat.toFixed(3)}°, {confirmedBooking.coordinates.lng.toFixed(3)}°</span>
                      </div>
                    )}

                    <div className="ticket-grid">
                      <div className="ticket-field">
                        <span className="tf-label">LEAD PASSENGER</span>
                        <span className="tf-val">{confirmedBooking.leadTraveler.fullName}</span>
                      </div>
                      <div className="ticket-field">
                        <span className="tf-label">DEPARTURE DATE</span>
                        <span className="tf-val">{confirmedBooking.travelDate}</span>
                      </div>
                      <div className="ticket-field">
                        <span className="tf-label">TRAVELERS</span>
                        <span className="tf-val">
                          {confirmedBooking.guests.adults} Adult(s), {confirmedBooking.guests.children} Kid(s)
                        </span>
                      </div>
                      <div className="ticket-field">
                        <span className="tf-label">ROOM / VILLA TIER</span>
                        <span className="tf-val">{confirmedBooking.tier}</span>
                      </div>
                    </div>

                    {confirmedBooking.addOns.length > 0 && (
                      <div className="ticket-addons-strip">
                        <span className="tf-label">INCLUDED ADD-ONS: </span>
                        <span>{confirmedBooking.addOns.join(' • ')}</span>
                      </div>
                    )}
                  </div>

                  {/* Ticket Stub / QR Code */}
                  <div className="ticket-stub">
                    <div className="qr-box">
                      <QrCode size={90} className="qr-graphic" />
                    </div>
                    <span className="stub-status">STATUS: CONFIRMED</span>
                    <span className="stub-price">{confirmedBooking.totalPaidFormatted}</span>
                    <span className="stub-date">Booked: {confirmedBooking.bookingDate}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="voucher-buttons-row">
                <button 
                  type="button" 
                  className="btn btn-glass"
                  onClick={() => window.print()}
                >
                  <Printer size={16} /> Print Voucher / Save PDF
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={onClose}
                >
                  Done & View in My Bookings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
