import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Play, 
  Pause, 
  MapPin, 
  Camera, 
  CalendarCheck, 
  Download, 
  Maximize2 
} from 'lucide-react';

export default function DestinationPhotoLightbox({
  isOpen,
  onClose,
  photos = [],
  captions = [],
  destinationName = '',
  country = '',
  initialIndex = 0,
  onBookNow,
  price = null,
  currency = { symbol: '$', rate: 1 }
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsZoomed(false);
  }, [initialIndex, isOpen]);

  const handleNext = useCallback(() => {
    if (!photos || photos.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, [photos]);

  const handlePrev = useCallback(() => {
    if (!photos || photos.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Autoplay slideshow
  useEffect(() => {
    if (!isOpen || !isPlaying || photos.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3800);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, handleNext, photos.length]);

  if (!isOpen || !photos || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];
  const currentCaption = captions[currentIndex] || `Breathtaking scenic beauty of ${destinationName}`;
  const formattedPrice = price ? `${currency.symbol}${Math.round(price * currency.rate).toLocaleString()}` : null;

  return (
    <div className="photo-lightbox-overlay" onClick={onClose}>
      <div className="photo-lightbox-modal" onClick={(e) => e.stopPropagation()}>
        {/* Top Navigation Bar */}
        <div className="lightbox-top-bar">
          <div className="lightbox-dest-info">
            <div className="lightbox-badge">
              <Camera size={13} className="text-gold" />
              <span>Scenic Beauty Showcase</span>
            </div>
            <h3 className="lightbox-dest-title">
              {destinationName}
              {country && <span className="lightbox-country-tag"> • {country}</span>}
            </h3>
          </div>

          <div className="lightbox-actions">
            {/* Auto Play Slideshow Toggle */}
            <button
              type="button"
              className={`lightbox-tool-btn ${isPlaying ? 'active' : ''}`}
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause Slideshow (Space)' : 'Play Slideshow (Space)'}
            >
              {isPlaying ? <Pause size={17} /> : <Play size={17} />}
              <span className="tool-text">{isPlaying ? 'Pause' : 'Auto Tour'}</span>
            </button>

            {/* Zoom Toggle */}
            <button
              type="button"
              className={`lightbox-tool-btn ${isZoomed ? 'active' : ''}`}
              onClick={() => setIsZoomed(!isZoomed)}
              title="Toggle Zoom"
            >
              <Maximize2 size={17} />
            </button>

            {/* Direct Booking CTA */}
            {onBookNow && (
              <button
                type="button"
                className="btn btn-gold btn-sm lightbox-book-btn"
                onClick={() => {
                  onClose();
                  onBookNow();
                }}
              >
                <CalendarCheck size={15} />
                <span>Book This Destination {formattedPrice && `(${formattedPrice})`}</span>
              </button>
            )}

            {/* Close Button */}
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={onClose}
              title="Close (Esc)"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Main Stage Image Area */}
        <div className="lightbox-main-stage">
          {photos.length > 1 && (
            <button
              type="button"
              className="lightbox-nav-btn prev-btn"
              onClick={handlePrev}
              title="Previous Photo (Left Arrow)"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div className={`lightbox-image-container ${isZoomed ? 'zoomed' : ''}`}>
            <img
              src={currentPhoto}
              alt={currentCaption}
              className="lightbox-active-img"
              key={currentPhoto}
            />
            <div className="lightbox-counter-pill">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>

          {photos.length > 1 && (
            <button
              type="button"
              className="lightbox-nav-btn next-btn"
              onClick={handleNext}
              title="Next Photo (Right Arrow)"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>

        {/* Caption & Storytelling Bar */}
        <div className="lightbox-caption-bar">
          <div className="caption-content">
            <div className="caption-icon-wrap">
              <Sparkles size={18} className="text-gold" />
            </div>
            <p className="caption-text">{currentCaption}</p>
          </div>

          <div className="caption-meta">
            <span className="caption-counter-badge">
              HD Photography
            </span>
          </div>
        </div>

        {/* Thumbnail Filmstrip */}
        {photos.length > 1 && (
          <div className="lightbox-filmstrip">
            {photos.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                className={`filmstrip-thumb-btn ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              >
                <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="filmstrip-img" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
