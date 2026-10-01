import React, { useState, useEffect } from 'react';
import { 
  INITIAL_TOURS, 
  INITIAL_BOOKINGS, 
  CURRENCIES, 
  CATEGORIES, 
  REGIONS 
} from './data/toursData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveTourMap from './components/InteractiveTourMap';
import TourCard from './components/TourCard';
import TourDetailModal from './components/TourDetailModal';
import BookingModal from './components/BookingModal';
import MyBookingsModal from './components/MyBookingsModal';
import TicketVoucherModal from './components/TicketVoucherModal';
import AdminDashboard from './components/AdminDashboard';
import CustomTripPlanner from './components/CustomTripPlanner';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { 
  Compass, 
  CheckCircle, 
  Search, 
  Filter 
} from 'lucide-react';
import './App.css';

export default function App() {
  // Persistence for Tours and Bookings with robust coordinate merging
  const [tours, setTours] = useState(() => {
    try {
      const saved = localStorage.getItem('voyagepulse_tours');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure all saved tours retain verified coordinates and itinerary waypoints
        return parsed.map(t => {
          const fallback = INITIAL_TOURS.find(init => init.id === t.id);
          if (fallback && (!t.coordinates || !t.itineraryStops)) {
            return {
              ...fallback,
              ...t,
              coordinates: fallback.coordinates,
              itineraryStops: fallback.itineraryStops,
              country: fallback.country || t.country,
              city: fallback.city || t.city
            };
          }
          return t;
        });
      }
      return INITIAL_TOURS;
    } catch (e) {
      return INITIAL_TOURS;
    }
  });

  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('voyagepulse_bookings');
      return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
    } catch (e) {
      return INITIAL_BOOKINGS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('voyagepulse_tours', JSON.stringify(tours));
    } catch (e) {}
  }, [tours]);

  useEffect(() => {
    try {
      localStorage.setItem('voyagepulse_bookings', JSON.stringify(bookings));
    } catch (e) {}
  }, [bookings]);

  // User Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('voyagepulse_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('voyagepulse_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('voyagepulse_user');
      }
    } catch {}
  }, [currentUser]);

  // Show Sign Up immediately upon opening the website if the user is not signed in
  const [showAuthModal, setShowAuthModal] = useState(() => {
    try {
      const saved = localStorage.getItem('voyagepulse_user');
      return !saved; // Opens signup modal upfront on website launch!
    } catch {
      return true;
    }
  });
  const [authInitialMode, setAuthInitialMode] = useState('signup');

  // Global Settings State
  const [currency, setCurrency] = useState(CURRENCIES.USD);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tours');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [maxBudget, setMaxBudget] = useState(3000);
  const [sortBy, setSortBy] = useState('featured');

  // Modals & Navigation State
  const [selectedTourForDetails, setSelectedTourForDetails] = useState(null);
  const [selectedTourForBooking, setSelectedTourForBooking] = useState(null);
  const [showMyBookings, setShowMyBookings] = useState(false);
  const [selectedBookingForTicket, setSelectedBookingForTicket] = useState(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [focusedTourId, setFocusedTourId] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
    showToast(`✨ Welcome ${userData.name}! Successfully signed in.`);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    showToast('👋 You have been logged out securely.');
  };

  // Filtered Tours Calculation
  const filteredTours = tours.filter((tour) => {
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchDest = tour.destination.toLowerCase().includes(q);
      const matchTitle = tour.title.toLowerCase().includes(q);
      const matchSub = (tour.subtitle || '').toLowerCase().includes(q);
      const matchCountry = (tour.country || '').toLowerCase().includes(q);
      if (!matchDest && !matchTitle && !matchSub && !matchCountry) return false;
    }

    // Category
    if (selectedCategory !== 'All Tours' && tour.category !== selectedCategory) {
      return false;
    }

    // Region
    if (selectedRegion !== 'All Regions' && tour.region !== selectedRegion) {
      return false;
    }

    // Budget
    if (tour.price > maxBudget) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'duration') return b.durationDays - a.durationDays;
    return b.featured ? 1 : -1;
  });

  // Handler to jump and focus a tour on the interactive world map
  const handleViewOnMap = (tour) => {
    setFocusedTourId(tour.id);
    const el = document.getElementById('interactive-tour-map');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    showToast(`📍 Focusing "${tour.destination}" on Interactive World Map!`);
  };

  // Handler for custom tour booking for any valid location verified on map
  const handleBookCustomLocation = (loc) => {
    const customTour = {
      id: `tour-custom-${Date.now()}`,
      title: `Private Luxury Expedition: ${loc.destination}`,
      subtitle: `Curated bespoke holiday experience in ${loc.destination}`,
      destination: loc.destination,
      country: loc.country || 'Global Destination',
      region: loc.region || 'World Tour',
      category: 'Luxury & Honeymoon',
      duration: loc.suggestedDays || '5 Days / 4 Nights',
      durationDays: 5,
      groupSize: 'Private Party (1-10 Travelers)',
      price: loc.suggestedPrice || 1250,
      rating: 5.0,
      reviewsCount: 1,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80',
      coordinates: loc.coordinates,
      departureDates: ['2026-10-20', '2026-11-05', '2026-11-20', '2026-12-10']
    };
    setSelectedTourForBooking(customTour);
    showToast(`🌍 Valid Map Location Verified! Ready to complete reservation for ${loc.destination}.`);
  };

  // Handler for booking creation
  const handleBookingSuccess = (newBooking) => {
    setBookings((prev) => [newBooking, ...prev]);
    showToast(`🎉 Reservation ${newBooking.id} confirmed! Digital pass generated with verified location.`);
  };

  // Handler for custom trip inquiry booking
  const handleCustomBookingCreated = (customBooking) => {
    setBookings((prev) => [customBooking, ...prev]);
    showToast(`✨ Custom trip to ${customBooking.destination} created and saved in My Bookings!`);
  };

  // Handler for booking cancellation
  const handleCancelBooking = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: 'Cancelled' } : b))
    );
    showToast(`Reservation ${bookingId} has been cancelled. 100% refund initiated.`);
  };

  // Admin: Add tour
  const handleAddNewTour = (newTour) => {
    setTours((prev) => [newTour, ...prev]);
    showToast(`✅ New tour package "${newTour.title}" published successfully!`);
  };

  // Admin: Delete tour
  const handleDeleteTour = (tourId) => {
    setTours((prev) => prev.filter((t) => t.id !== tourId));
    showToast(`Package removed from catalog.`);
  };

  // Admin: Update booking status
  const handleUpdateBookingStatus = (bookingId, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: newStatus } : b))
    );
    showToast(`Booking ${bookingId} status updated to ${newStatus}.`);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('tours-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMap = () => {
    const el = document.getElementById('interactive-tour-map');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="floating-toast">
          <CheckCircle size={18} className="text-emerald" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar 
        currency={currency}
        setCurrency={setCurrency}
        bookingsCount={bookings.filter(b => b.status === 'Confirmed').length}
        onOpenBookings={() => setShowMyBookings(true)}
        onOpenAdmin={() => setIsAdminMode(!isAdminMode)}
        isAdminActive={isAdminMode}
        onOpenCustomPlanner={() => {
          setIsAdminMode(false);
          const el = document.getElementById('custom-planner');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenMap={() => {
          setIsAdminMode(false);
          scrollToMap();
        }}
        currentUser={currentUser}
        onOpenAuth={() => {
          setAuthInitialMode('signin');
          setShowAuthModal(true);
        }}
        onOpenSignUp={() => {
          setAuthInitialMode('signup');
          setShowAuthModal(true);
        }}
        onLogout={handleLogout}
      />

      {/* View Switcher: Admin Operator View vs Customer Booking Portal */}
      {isAdminMode ? (
        <AdminDashboard 
          tours={tours}
          onAddNewTour={handleAddNewTour}
          onDeleteTour={handleDeleteTour}
          bookings={bookings}
          onUpdateBookingStatus={handleUpdateBookingStatus}
          currency={currency}
          onExitAdmin={() => setIsAdminMode(false)}
        />
      ) : (
        <main>
          {/* Hero Section */}
          <Hero 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={CATEGORIES}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            regions={REGIONS}
            maxBudget={maxBudget}
            setMaxBudget={setMaxBudget}
            currency={currency}
            onPerformSearch={scrollToCatalog}
            onExploreMap={scrollToMap}
          />

          {/* SECTION 2: INTERACTIVE GLOBAL TOUR MAP & LOCATION VALIDATION EXPLORER */}
          <InteractiveTourMap 
            tours={tours}
            currency={currency}
            onSelectTour={(t) => setSelectedTourForDetails(t)}
            onDirectBook={(t) => setSelectedTourForBooking(t)}
            onBookCustomLocation={handleBookCustomLocation}
            focusedTourId={focusedTourId}
          />

          {/* SECTION 3: TOURS CATALOG */}
          <section id="tours-catalog" className="catalog-section">
            <div className="container">
              {/* Catalog Section Header */}
              <div className="catalog-header-row">
                <div>
                  <span className="badge badge-cyan mb-2">
                    <Compass size={14} /> Curated Worldwide Itineraries
                  </span>
                  <h2 className="section-title">
                    Explore Handcrafted <span className="gradient-text">Holiday Packages</span>
                  </h2>
                  <p className="section-subtitle">
                    Select any package to view day-by-day routes, 5-star villas, or pin on the interactive world map.
                  </p>
                </div>

                {/* Catalog Controls: Sorting & Results Counter */}
                <div className="catalog-controls">
                  <div className="results-counter">
                    Showing <strong className="text-cyan">{filteredTours.length}</strong> of {tours.length} tours
                  </div>

                  <div className="sort-box">
                    <label className="sort-label">
                      <Filter size={14} /> Sort By:
                    </label>
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)}
                      className="sort-select"
                    >
                      <option value="featured">Featured & Recommended</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="duration">Trip Duration</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Tours Grid */}
              {filteredTours.length > 0 ? (
                <div className="tour-grid">
                  {filteredTours.map((tour) => (
                    <TourCard 
                      key={tour.id}
                      tour={tour}
                      currency={currency}
                      onSelectTour={(t) => setSelectedTourForDetails(t)}
                      onDirectBook={(t) => setSelectedTourForBooking(t)}
                      onViewOnMap={(t) => handleViewOnMap(t)}
                    />
                  ))}
                </div>
              ) : (
                <div className="catalog-no-results glass-card">
                  <Search size={40} className="text-cyan mb-2" />
                  <h3>No matching tour packages found</h3>
                  <p>Try resetting your destination search or increasing your maximum budget filter.</p>
                  <button 
                    type="button" 
                    className="btn btn-primary mt-3"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All Tours');
                      setSelectedRegion('All Regions');
                      setMaxBudget(3000);
                    }}
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Custom Trip Planner Section */}
          <CustomTripPlanner 
            currency={currency}
            onCustomBookingCreated={handleCustomBookingCreated}
          />

          {/* Why VoyagePulse Features */}
          <FeaturesSection />
        </main>
      )}

      {/* Footer */}
      <Footer />

      {/* MODAL 1: TOUR DETAIL & ITINERARY (WITH INTERACTIVE ROUTE MAP TAB) */}
      {selectedTourForDetails && (
        <TourDetailModal 
          tour={selectedTourForDetails}
          currency={currency}
          onClose={() => setSelectedTourForDetails(null)}
          onStartBooking={(t) => {
            setSelectedTourForDetails(null);
            setSelectedTourForBooking(t);
          }}
        />
      )}

      {/* MODAL 2: 4-STEP BOOKING & VOUCHER GENERATOR */}
      {selectedTourForBooking && (
        <BookingModal 
          tour={selectedTourForBooking}
          currency={currency}
          onClose={() => setSelectedTourForBooking(null)}
          onBookingSuccess={handleBookingSuccess}
          currentUser={currentUser}
        />
      )}

      {/* MODAL 3: MY BOOKINGS HUB */}
      {showMyBookings && (
        <MyBookingsModal 
          bookings={bookings}
          onClose={() => setShowMyBookings(false)}
          onCancelBooking={handleCancelBooking}
          onOpenTicketVoucher={(b) => {
            setSelectedBookingForTicket(b);
          }}
        />
      )}

      {/* MODAL 4: TICKET VOUCHER PRINT VIEW */}
      {selectedBookingForTicket && (
        <TicketVoucherModal 
          booking={selectedBookingForTicket}
          onClose={() => setSelectedBookingForTicket(null)}
        />
      )}

      {/* MODAL 5: GOOGLE SIGN-IN & AUTHENTICATION MODAL */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
        initialMode={authInitialMode}
      />
    </div>
  );
}
