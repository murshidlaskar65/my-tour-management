import { 
  Compass, 
  Luggage, 
  ShieldCheck, 
  Globe2, 
  Sparkles, 
  Bookmark,
  SlidersHorizontal,
  Navigation,
  User,
  LogOut,
  LogIn
} from 'lucide-react';
import { CURRENCIES } from '../data/toursData';

export default function Navbar({ 
  currency, 
  setCurrency, 
  bookingsCount, 
  onOpenBookings, 
  onOpenAdmin,
  isAdminActive,
  onOpenCustomPlanner,
  onOpenMap,
  currentUser,
  onOpenAuth,
  onOpenSignUp,
  onLogout
}) {
  return (
    <header className="navbar-wrapper">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="brand-logo-icon">
            <Compass className="icon-pulse" size={26} />
          </div>
          <div className="brand-text">
            <span className="brand-title">Voyage<span className="brand-highlight">Pulse</span></span>
            <span className="brand-tagline">LUXURY TOUR MANAGEMENT</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <a href="#tours-catalog" className="nav-link">
            Explore Tours
          </a>
          <a 
            href="#interactive-tour-map" 
            className="nav-link nav-link-map" 
            onClick={(e) => {
              if (onOpenMap) {
                e.preventDefault();
                onOpenMap();
              }
            }}
          >
            <Navigation size={14} className="text-cyan" /> World Tour Map
          </a>
          <a href="#custom-planner" className="nav-link" onClick={onOpenCustomPlanner}>
            <Sparkles size={15} className="text-gold" /> Custom Trip Planner
          </a>
          <a href="#why-us" className="nav-link">
            Why VoyagePulse
          </a>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* Currency Switcher */}
          <div className="currency-selector-box">
            <Globe2 size={16} className="currency-icon" />
            <select 
              value={currency.code} 
              onChange={(e) => setCurrency(CURRENCIES[e.target.value])}
              className="currency-dropdown"
              aria-label="Select Currency"
            >
              {Object.values(CURRENCIES).map((curr) => (
                <option key={curr.code} value={curr.code}>
                  {curr.label}
                </option>
              ))}
            </select>
          </div>

          {/* My Bookings Button */}
          <button 
            className="nav-btn-bookings" 
            onClick={onOpenBookings}
            title="View My Booked Tours & Tickets"
          >
            <Luggage size={18} />
            <span className="btn-text">My Bookings</span>
            {bookingsCount > 0 && (
              <span className="badge-count">{bookingsCount}</span>
            )}
          </button>

          {/* Tour Operator / Admin Mode Toggle */}
          <button 
            className={`nav-btn-admin ${isAdminActive ? 'admin-active' : ''}`}
            onClick={onOpenAdmin}
            title="Switch to Operator / Admin Management Console"
          >
            <SlidersHorizontal size={17} />
            <span className="btn-text">{isAdminActive ? 'Tour Catalog' : 'Operator Console'}</span>
          </button>

          {/* User Authentication Profile / Sign In */}
          {currentUser ? (
            <div className="nav-user-profile-box">
              <div className="nav-user-info" title={currentUser.email}>
                {currentUser.avatar ? (
                  <img src={currentUser.avatar} alt={currentUser.name} className="nav-user-avatar" />
                ) : (
                  <div className="nav-user-initial">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="nav-user-name">{currentUser.name.split(' ')[0]}</span>
              </div>
              <button 
                type="button" 
                className="nav-btn-logout"
                onClick={onLogout}
                title="Sign Out"
              >
                <LogOut size={15} />
              </button>
            </div>
          ) : (
            <div className="nav-auth-buttons">
              <button 
                type="button" 
                className="nav-btn-auth-signin"
                onClick={onOpenAuth}
                title="Sign In with Google or Email"
              >
                <LogIn size={15} className="text-cyan" />
                <span className="btn-text">Sign In</span>
              </button>
              <button 
                type="button" 
                className="nav-btn-auth-signup"
                onClick={onOpenSignUp}
                title="Create VIP Account"
              >
                <Sparkles size={14} className="text-gold" />
                <span className="btn-text">Sign Up</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
