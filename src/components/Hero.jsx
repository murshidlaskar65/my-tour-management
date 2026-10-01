import React from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Layers, 
  DollarSign, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Star, 
  Award 
} from 'lucide-react';

export default function Hero({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  categories,
  selectedRegion,
  setSelectedRegion,
  regions,
  maxBudget,
  setMaxBudget,
  currency,
  onPerformSearch,
  onExploreMap
}) {
  const formatPrice = (usd) => {
    const val = Math.round(usd * currency.rate);
    return `${currency.symbol}${val.toLocaleString()}`;
  };

  return (
    <section className="hero-section">
      {/* Background with Ambient Glow */}
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-container">
        {/* Top Tag */}
        <div className="hero-tag-wrapper">
          <span className="badge badge-gold hero-badge">
            <Sparkles size={14} /> Luxury World Travel & Tour Management
          </span>
          <span className="badge badge-cyan hero-badge-secondary">
            <ShieldCheck size={14} /> 100% Verified Concierge & Insured Packages
          </span>
          <button 
            type="button" 
            className="badge badge-purple hero-badge-map"
            onClick={onExploreMap}
          >
            <MapPin size={13} /> Interactive Tour Map Active ↗
          </button>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          Discover Extraordinary Journeys Across <span className="gradient-text">The Entire Globe</span>
        </h1>
        <p className="hero-subtitle">
          Bespoke expeditions, private island villas, scenic alpine railways, and cultural wonders.
          Customize your travelers, select premium room tiers, and receive instant confirmed vouchers.
        </p>

        {/* Search Engine Bar */}
        <div className="hero-search-card">
          <div className="search-grid">
            {/* Destination Input */}
            <div className="search-field">
              <label className="search-label">
                <MapPin size={16} className="search-icon-cyan" /> Where to?
              </label>
              <input 
                type="text" 
                placeholder="e.g. Bali, Switzerland, Dubai, Cox's Bazar..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Select */}
            <div className="search-field">
              <label className="search-label">
                <Layers size={16} className="search-icon-gold" /> Tour Category
              </label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="search-select"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Region Select */}
            <div className="search-field">
              <label className="search-label">
                <Calendar size={16} className="search-icon-purple" /> Destination Region
              </label>
              <select 
                value={selectedRegion} 
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="search-select"
              >
                {regions.map((reg) => (
                  <option key={reg} value={reg}>{reg}</option>
                ))}
              </select>
            </div>

            {/* Budget Slider */}
            <div className="search-field budget-field">
              <div className="budget-label-row">
                <label className="search-label">
                  <DollarSign size={16} className="search-icon-emerald" /> Max Budget:
                </label>
                <span className="budget-value">{formatPrice(maxBudget)}</span>
              </div>
              <input 
                type="range" 
                min="400" 
                max="3000" 
                step="50"
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="budget-slider"
              />
            </div>

            {/* Search Buttons */}
            <div className="search-action">
              <button 
                type="button" 
                className="btn btn-primary search-submit-btn"
                onClick={onPerformSearch}
              >
                <Search size={18} />
                <span>Find Tours</span>
              </button>
              <button 
                type="button" 
                className="btn btn-gold search-map-btn"
                onClick={onExploreMap}
                title="Search and verify any destination on the world map"
              >
                <MapPin size={17} />
                <span>Map View</span>
              </button>
            </div>
          </div>

          {/* Quick Categories Filter Pills */}
          <div className="quick-filter-pills">
            <span className="pills-title">Popular Trends:</span>
            {['All Tours', 'Beach & Island', 'Mountain & Alpine', 'Luxury & Honeymoon', 'Wildlife & Safari'].map((pill) => (
              <button 
                key={pill} 
                type="button"
                className={`pill-btn ${selectedCategory === pill ? 'pill-active' : ''}`}
                onClick={() => setSelectedCategory(pill)}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Stats / Trust Badges */}
        <div className="hero-stats-row">
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-text">Handcrafted Global Tours</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <div className="stat-number">28,500+</div>
            <div className="stat-text">Delighted Global Travelers</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <div className="stat-number stat-rating">
              <Star size={18} className="star-icon-filled" /> 4.96/5
            </div>
            <div className="stat-text">Verified Traveler Rating</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-text">Instant Voucher & Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}
