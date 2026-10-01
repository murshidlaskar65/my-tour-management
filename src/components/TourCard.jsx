import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Heart, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck,
  CheckCircle2 
} from 'lucide-react';

export default function TourCard({ 
  tour, 
  currency, 
  onSelectTour, 
  onDirectBook,
  onViewOnMap 
}) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const formatPrice = (usd) => {
    const val = Math.round(usd * currency.rate);
    return `${currency.symbol}${val.toLocaleString()}`;
  };

  const discountPercent = Math.round(
    ((tour.originalPrice - tour.price) / tour.originalPrice) * 100
  );

  return (
    <div className="tour-card glass-card">
      {/* Media Header */}
      <div className="tour-card-image-wrapper">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="tour-card-img"
          loading="lazy"
        />
        <div className="tour-card-gradient"></div>

        {/* Badge */}
        {tour.badge && (
          <div className="tour-card-badge-container">
            <span className="badge badge-gold">
              <Sparkles size={13} /> {tour.badge}
            </span>
          </div>
        )}

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="tour-discount-tag">
            SAVE {discountPercent}%
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          type="button" 
          className={`tour-wishlist-btn ${isWishlisted ? 'wishlisted' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          title={isWishlisted ? 'Remove from Saved' : 'Save to Wishlist'}
        >
          <Heart size={18} fill={isWishlisted ? '#f43f5e' : 'none'} color={isWishlisted ? '#f43f5e' : '#fff'} />
        </button>

        {/* Floating Quick Info Pill */}
        <div className="tour-card-floating-meta">
          <span className="meta-pill">
            <Clock size={13} /> {tour.duration}
          </span>
          <span className="meta-pill">
            <Users size={13} /> {tour.groupSize}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="tour-card-content">
        {/* Destination & Rating */}
        <div className="tour-card-subrow">
          <div 
            className="tour-location clickable-location"
            onClick={(e) => {
              e.stopPropagation();
              if (onViewOnMap) onViewOnMap(tour);
            }}
            title="Click to view & verify on interactive world map"
          >
            <MapPin size={14} className="text-cyan" />
            <span>{tour.destination}</span>
          </div>
          <div className="tour-rating">
            <Star size={15} className="star-gold" fill="#f59e0b" />
            <span className="rating-score">{tour.rating}</span>
            <span className="rating-count">({tour.reviewsCount})</span>
          </div>
        </div>

        {/* GPS Coordinates Badge */}
        {tour.coordinates && (
          <div 
            className="tour-card-coords-bar"
            onClick={(e) => {
              e.stopPropagation();
              if (onViewOnMap) onViewOnMap(tour);
            }}
          >
            <span className="coords-tag">
              📍 {tour.coordinates.lat.toFixed(2)}° N/S, {tour.coordinates.lng.toFixed(2)}° E/W
            </span>
            <span className="coords-action">View Map ↗</span>
          </div>
        )}

        {/* Title */}
        <h3 className="tour-title" onClick={() => onSelectTour(tour)}>
          {tour.title}
        </h3>

        {/* Subtitle / Key Highlights */}
        <p className="tour-card-subtitle">{tour.subtitle}</p>

        {/* Inclusions summary pills */}
        <div className="tour-perks-row">
          {tour.inclusions.slice(0, 2).map((inc, i) => (
            <span key={i} className="perk-pill">
              <CheckCircle2 size={12} className="text-emerald" /> {inc}
            </span>
          ))}
        </div>

        {/* Price & Action Row */}
        <div className="tour-card-footer">
          <div className="tour-price-box">
            <span className="price-label">Starting from</span>
            <div className="price-amounts">
              <span className="current-price">{formatPrice(tour.price)}</span>
              {tour.originalPrice && (
                <span className="original-price">{formatPrice(tour.originalPrice)}</span>
              )}
            </div>
            <span className="price-unit">/ person</span>
          </div>

          <div className="tour-card-actions">
            <button 
              type="button" 
              className="btn btn-glass btn-map-card"
              onClick={(e) => {
                e.stopPropagation();
                if (onViewOnMap) onViewOnMap(tour);
              }}
              title="Pin and verify on world map"
            >
              <MapPin size={14} />
            </button>
            <button 
              type="button" 
              className="btn btn-glass btn-view-details"
              onClick={() => onSelectTour(tour)}
            >
              Details
            </button>
            <button 
              type="button" 
              className="btn btn-primary btn-book-card"
              onClick={() => onDirectBook(tour)}
            >
              Book Now <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
