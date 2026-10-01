import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Check, 
  ShieldAlert, 
  Calendar, 
  Sparkles, 
  CheckCircle, 
  XCircle, 
  Utensils, 
  Building2, 
  ChevronRight,
  Plane,
  HeartHandshake,
  Navigation
} from 'lucide-react';
import TourLocationMiniMap from './TourLocationMiniMap';

export default function TourDetailModal({ 
  tour, 
  currency, 
  onClose, 
  onStartBooking 
}) {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);

  if (!tour) return null;

  const formatPrice = (usd) => {
    const val = Math.round(usd * currency.rate);
    return `${currency.symbol}${val.toLocaleString()}`;
  };

  const galleryImages = tour.gallery && tour.gallery.length > 0 ? tour.gallery : [tour.image];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content tour-detail-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Media Banner & Thumbnails */}
        <div className="detail-media-section">
          <div className="detail-main-image-box">
            <img 
              src={galleryImages[selectedGalleryIdx] || tour.image} 
              alt={tour.title}
              className="detail-main-img" 
            />
            <div className="detail-media-overlay">
              <span className="badge badge-gold">
                <Sparkles size={13} /> {tour.badge || 'Featured Tour'}
              </span>
              <span className="badge badge-cyan">
                {tour.category}
              </span>
            </div>
          </div>

          {/* Thumbnails Row */}
          {galleryImages.length > 1 && (
            <div className="detail-thumbnails-row">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`thumbnail-btn ${selectedGalleryIdx === idx ? 'thumb-active' : ''}`}
                  onClick={() => setSelectedGalleryIdx(idx)}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="detail-body">
          {/* Header Info */}
          <div className="detail-header-info">
            <div className="detail-meta-tags">
              <button 
                type="button"
                className="detail-meta-item meta-location-btn"
                onClick={() => setActiveTab('map')}
                title="Click to view interactive route map"
              >
                <MapPin size={15} className="text-cyan" /> {tour.destination}
                <span className="meta-map-hint">📍 View Map</span>
              </button>
              {tour.coordinates && (
                <span className="detail-meta-item meta-coords-tag">
                  GPS: {tour.coordinates.lat.toFixed(2)}°, {tour.coordinates.lng.toFixed(2)}°
                </span>
              )}
              <span className="detail-meta-item">
                <Clock size={15} className="text-gold" /> {tour.duration}
              </span>
              <span className="detail-meta-item">
                <Users size={15} className="text-purple" /> {tour.groupSize}
              </span>
              <span className="detail-meta-item">
                <Star size={15} fill="#f59e0b" color="#f59e0b" /> 
                <strong>{tour.rating}</strong> ({tour.reviewsCount} verified reviews)
              </span>
            </div>

            <h2 className="detail-title">{tour.title}</h2>
            <p className="detail-subtitle">{tour.subtitle}</p>
          </div>

          {/* Overview Section */}
          <div className="detail-overview-box">
            <h4 className="section-mini-heading">Tour Overview</h4>
            <p className="detail-overview-text">{tour.overview}</p>
          </div>

          {/* Key Highlights */}
          {tour.highlights && tour.highlights.length > 0 && (
            <div className="detail-highlights-box">
              <h4 className="section-mini-heading">Curated Highlights</h4>
              <div className="highlights-grid">
                {tour.highlights.map((item, idx) => (
                  <div key={idx} className="highlight-pill">
                    <Sparkles size={15} className="text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="detail-tabs-nav">
            <button 
              type="button" 
              className={`tab-nav-btn ${activeTab === 'itinerary' ? 'active' : ''}`}
              onClick={() => setActiveTab('itinerary')}
            >
              Day-by-Day Itinerary ({tour.itinerary ? tour.itinerary.length : 0} Days)
            </button>
            <button 
              type="button" 
              className={`tab-nav-btn ${activeTab === 'map' ? 'active' : ''}`}
              onClick={() => setActiveTab('map')}
            >
              <Navigation size={14} /> Location & Route Map
            </button>
            <button 
              type="button" 
              className={`tab-nav-btn ${activeTab === 'inclusions' ? 'active' : ''}`}
              onClick={() => setActiveTab('inclusions')}
            >
              Inclusions & Exclusions
            </button>
            <button 
              type="button" 
              className={`tab-nav-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Traveler Reviews ({tour.reviewsCount})
            </button>
          </div>

          {/* Tab Content: Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="tab-pane itinerary-timeline">
              {tour.itinerary && tour.itinerary.map((dayPlan) => (
                <div key={dayPlan.day} className="timeline-item">
                  <div className="timeline-badge">Day {dayPlan.day}</div>
                  <div className="timeline-content">
                    <h5 className="timeline-day-title">{dayPlan.title}</h5>
                    <p className="timeline-day-desc">{dayPlan.description}</p>
                    
                    <div className="timeline-meta-chips">
                      {dayPlan.meals && (
                        <span className="chip-meal">
                          <Utensils size={13} /> {dayPlan.meals}
                        </span>
                      )}
                      {dayPlan.hotel && (
                        <span className="chip-hotel">
                          <Building2 size={13} /> {dayPlan.hotel}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content: Live Location & Route Map */}
          {activeTab === 'map' && (
            <div className="tab-pane map-tab-pane">
              <TourLocationMiniMap 
                tour={tour} 
                currency={currency} 
                onStartBooking={onStartBooking} 
              />
            </div>
          )}

          {/* Tab Content: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="tab-pane inclusions-exclusions-grid">
              <div className="inc-col">
                <h5 className="inc-col-title text-emerald">
                  <CheckCircle size={18} /> What's Included in Package
                </h5>
                <ul className="inc-list">
                  {tour.inclusions && tour.inclusions.map((item, idx) => (
                    <li key={idx} className="inc-item">
                      <Check size={16} className="text-emerald check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exc-col">
                <h5 className="inc-col-title text-rose">
                  <XCircle size={18} /> What's Not Included
                </h5>
                <ul className="exc-list">
                  {tour.exclusions && tour.exclusions.map((item, idx) => (
                    <li key={idx} className="exc-item">
                      <XCircle size={16} className="text-rose check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab Content: Reviews */}
          {activeTab === 'reviews' && (
            <div className="tab-pane reviews-pane">
              <div className="reviews-summary-bar">
                <div className="score-big">{tour.rating}</div>
                <div>
                  <div className="stars-row">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="text-secondary text-sm">Based on {tour.reviewsCount} verified guest bookings</span>
                </div>
              </div>

              <div className="sample-reviews-list">
                <div className="review-card">
                  <div className="review-header">
                    <div className="avatar-circle">TR</div>
                    <div>
                      <h6 className="reviewer-name">Tanvir Ahmed & Family</h6>
                      <span className="review-date">Travelled in August 2026 • Verified Booking</span>
                    </div>
                    <div className="stars-row ms-auto">
                      <Star size={14} fill="#f59e0b" color="#f59e0b" /> 5.0
                    </div>
                  </div>
                  <p className="review-text">
                    "Unforgettable luxury experience! Every single detail from airport chauffeur greeting, 5-star villa accommodations, private yachting and personal guide was handled flawlessly. Booking through VoyagePulse gave us complete peace of mind."
                  </p>
                </div>

                <div className="review-card">
                  <div className="review-header">
                    <div className="avatar-circle">SM</div>
                    <div>
                      <h6 className="reviewer-name">Sarah Jenkins</h6>
                      <span className="review-date">Travelled in July 2026 • Verified Booking</span>
                    </div>
                    <div className="stars-row ms-auto">
                      <Star size={14} fill="#f59e0b" color="#f59e0b" /> 5.0
                    </div>
                  </div>
                  <p className="review-text">
                    "The itinerary was paced to perfection. Having all temple tickets, private guides, and transport pre-organized saved us hours in queues. Will definitely book our next vacation with VoyagePulse!"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Bottom Booking Footer */}
        <div className="detail-footer-bar">
          <div className="detail-price-preview">
            <span className="footer-label">Package Price per Person</span>
            <div className="footer-price-val">
              <span className="price-big">{formatPrice(tour.price)}</span>
              {tour.originalPrice && (
                <span className="price-strike">{formatPrice(tour.originalPrice)}</span>
              )}
            </div>
          </div>

          <div className="detail-footer-buttons">
            <button 
              type="button" 
              className="btn btn-primary btn-launch-booking"
              onClick={() => onStartBooking(tour)}
            >
              <span>Book This Tour</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
