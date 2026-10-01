import React, { useState } from 'react';
import { 
  PlusCircle, 
  BarChart3, 
  DollarSign, 
  Users, 
  Luggage, 
  CheckCircle2, 
  Trash2, 
  Edit3, 
  SlidersHorizontal, 
  Sparkles, 
  X,
  UploadCloud,
  Layers,
  MapPin,
  Calendar
} from 'lucide-react';
import { CATEGORIES, REGIONS } from '../data/toursData';

export default function AdminDashboard({ 
  tours, 
  onAddNewTour, 
  onDeleteTour, 
  bookings, 
  onUpdateBookingStatus,
  currency,
  onExitAdmin 
}) {
  const [activeTab, setActiveTab] = useState('bookings');
  const [showAddTourModal, setShowAddTourModal] = useState(false);

  // Add Tour Form State
  const [newTour, setNewTour] = useState({
    title: '',
    subtitle: '',
    destination: '',
    region: 'Asia & Southeast Asia',
    category: 'Beach & Island',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    groupSize: 'Up to 10 Travelers',
    price: 950,
    originalPrice: 1200,
    badge: 'New Package',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    overview: '',
    highlights: '5-Star Resort Stay, Private Guide, Airport VIP Transfers',
    inclusions: 'Luxury accommodation, Daily breakfast, Guided sightseeing tours, Private AC transport',
    exclusions: 'International flights, Personal tips, Travel insurance',
    difficulty: 'Easy'
  });

  const formatPrice = (usd) => {
    const val = Math.round(usd * currency.rate);
    return `${currency.symbol}${val.toLocaleString()}`;
  };

  // Metrics Calculations
  const totalRevenueUSD = bookings
    .filter(b => b.status !== 'Cancelled')
    .reduce((sum, b) => sum + (b.totalPriceUSD || 0), 0);

  const activeBookingsCount = bookings.filter(b => b.status === 'Confirmed').length;

  const handleAddTourSubmit = (e) => {
    e.preventDefault();
    if (!newTour.title.trim() || !newTour.destination.trim() || !newTour.price) {
      alert('Please fill in Tour Title, Destination, and Price.');
      return;
    }

    const createdTour = {
      ...newTour,
      id: `tour-${Date.now()}`,
      coordinates: newTour.coordinates || { lat: 21.4272, lng: 92.0058 },
      mapZoom: 10,
      rating: 5.0,
      reviewsCount: 1,
      featured: true,
      gallery: [newTour.image],
      highlights: newTour.highlights.split(',').map(h => h.trim()).filter(Boolean),
      inclusions: newTour.inclusions.split(',').map(i => i.trim()).filter(Boolean),
      exclusions: newTour.exclusions.split(',').map(e => e.trim()).filter(Boolean),
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Welcome Dinner',
          description: `VIP greeting at airport and luxury transfer to resort in ${newTour.destination}.`,
          meals: 'Dinner Included',
          hotel: '5-Star Luxury Resort'
        },
        {
          day: 2,
          title: 'Guided Signature Highlights Exploration',
          description: `Full day exploration of the top landmarks in ${newTour.destination} with a private guide.`,
          meals: 'Breakfast & Lunch',
          hotel: '5-Star Luxury Resort'
        },
        {
          day: 3,
          title: 'Leisure Day & Departure',
          description: 'Relaxation and shopping before private transfer to airport.',
          meals: 'Breakfast Included',
          hotel: 'Departure'
        }
      ],
      departureDates: ['2026-11-01', '2026-11-15', '2026-12-01', '2026-12-20']
    };

    onAddNewTour(createdTour);
    setShowAddTourModal(false);
    // Reset
    setNewTour({
      title: '',
      subtitle: '',
      destination: '',
      region: 'Asia & Southeast Asia',
      category: 'Beach & Island',
      duration: '5 Days / 4 Nights',
      durationDays: 5,
      groupSize: 'Up to 10 Travelers',
      price: 950,
      originalPrice: 1200,
      badge: 'New Package',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      overview: '',
      highlights: '5-Star Resort Stay, Private Guide, Airport VIP Transfers',
      inclusions: 'Luxury accommodation, Daily breakfast, Guided sightseeing tours, Private AC transport',
      exclusions: 'International flights, Personal tips, Travel insurance',
      difficulty: 'Easy'
    });
  };

  return (
    <section className="admin-dashboard-wrapper">
      <div className="container">
        {/* Top Header */}
        <div className="admin-top-bar">
          <div>
            <div className="badge badge-purple mb-1">
              <SlidersHorizontal size={13} /> Tour Operator Console
            </div>
            <h2 className="admin-headline">Agency Tour Management & Analytics</h2>
            <p className="admin-subtext">
              Real-time reservation controls, package catalogue publisher, and financial turnover summary.
            </p>
          </div>

          <div className="admin-top-actions">
            <button 
              type="button" 
              className="btn btn-gold"
              onClick={() => setShowAddTourModal(true)}
            >
              <PlusCircle size={16} /> Add New Tour Package
            </button>
            <button 
              type="button" 
              className="btn btn-glass"
              onClick={onExitAdmin}
            >
              Back to Catalog
            </button>
          </div>
        </div>

        {/* Analytics KPI Metric Cards */}
        <div className="kpi-grid">
          <div className="kpi-card glass-card">
            <div className="kpi-icon-wrap bg-cyan-soft">
              <DollarSign size={24} className="text-cyan" />
            </div>
            <div>
              <span className="kpi-title">Total Booked Volume</span>
              <h3 className="kpi-val">{formatPrice(totalRevenueUSD)}</h3>
              <span className="kpi-trend text-emerald">+18.4% this month</span>
            </div>
          </div>

          <div className="kpi-card glass-card">
            <div className="kpi-icon-wrap bg-purple-soft">
              <Luggage size={24} className="text-purple" />
            </div>
            <div>
              <span className="kpi-title">Active Reservations</span>
              <h3 className="kpi-val">{activeBookingsCount}</h3>
              <span className="kpi-trend text-cyan">{bookings.length} Total Processed</span>
            </div>
          </div>

          <div className="kpi-card glass-card">
            <div className="kpi-icon-wrap bg-gold-soft">
              <Layers size={24} className="text-gold" />
            </div>
            <div>
              <span className="kpi-title">Published Tour Packages</span>
              <h3 className="kpi-val">{tours.length}</h3>
              <span className="kpi-trend text-gold">Ready for Booking</span>
            </div>
          </div>

          <div className="kpi-card glass-card">
            <div className="kpi-icon-wrap bg-emerald-soft">
              <CheckCircle2 size={24} className="text-emerald" />
            </div>
            <div>
              <span className="kpi-title">Guest Satisfaction</span>
              <h3 className="kpi-val">99.4%</h3>
              <span className="kpi-trend text-emerald">Verified Reviews</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="admin-tabs-row">
          <button 
            type="button" 
            className={`admin-tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            Manage Reservations ({bookings.length})
          </button>
          <button 
            type="button" 
            className={`admin-tab-btn ${activeTab === 'packages' ? 'active' : ''}`}
            onClick={() => setActiveTab('packages')}
          >
            Tour Packages Catalog ({tours.length})
          </button>
        </div>

        {/* TAB 1: RESERVATIONS MANAGEMENT */}
        {activeTab === 'bookings' && (
          <div className="admin-content-card glass-card">
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Ref ID</th>
                    <th>Lead Traveler</th>
                    <th>Tour Package</th>
                    <th>Travel Date</th>
                    <th>Guests</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Operator Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id}>
                      <td>
                        <strong className="text-cyan">{b.id}</strong>
                      </td>
                      <td>
                        <div className="traveler-cell">
                          <strong>{b.leadTraveler.fullName}</strong>
                          <small>{b.leadTraveler.phone}</small>
                        </div>
                      </td>
                      <td>
                        <span>{b.tourTitle}</span>
                        <div className="text-secondary text-xs">{b.destination}</div>
                      </td>
                      <td>{b.travelDate}</td>
                      <td>{b.guests.adults}A + {b.guests.children}C</td>
                      <td>
                        <strong>{b.totalPaidFormatted || formatPrice(b.totalPriceUSD)}</strong>
                      </td>
                      <td>
                        <select 
                          value={b.status} 
                          onChange={(e) => onUpdateBookingStatus(b.id, e.target.value)}
                          className={`status-select status-${b.status.toLowerCase()}`}
                        >
                          <option value="Confirmed">Confirmed</option>
                          <option value="Voucher Issued">Voucher Issued</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td>
                        <span className="text-secondary text-xs">{b.paymentMethod}</span>
                      </td>
                    </tr>
                  ))}
                  {bookings.length === 0 && (
                    <tr>
                      <td colSpan="8" className="text-center py-4 text-secondary">
                        No reservations received yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: PACKAGES CATALOG */}
        {activeTab === 'packages' && (
          <div className="admin-content-card glass-card">
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Tour Image</th>
                    <th>Title & Destination</th>
                    <th>Category</th>
                    <th>Duration</th>
                    <th>Base Price</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tours.map((t) => (
                    <tr key={t.id}>
                      <td style={{ width: '80px' }}>
                        <img src={t.image} alt={t.title} className="table-tour-thumb" />
                      </td>
                      <td>
                        <strong>{t.title}</strong>
                        <div className="text-cyan text-xs">{t.destination}</div>
                      </td>
                      <td>
                        <span className="badge badge-cyan">{t.category}</span>
                      </td>
                      <td>{t.duration}</td>
                      <td>
                        <strong className="text-gold">{formatPrice(t.price)}</strong>
                      </td>
                      <td>★ {t.rating} ({t.reviewsCount})</td>
                      <td>
                        <button 
                          type="button" 
                          className="btn-icon-danger"
                          onClick={() => {
                            if (window.confirm(`Delete package "${t.title}"?`)) {
                              onDeleteTour(t.id);
                            }
                          }}
                          title="Delete Tour Package"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ADD TOUR PACKAGE MODAL */}
        {showAddTourModal && (
          <div className="modal-overlay" onClick={() => setShowAddTourModal(false)}>
            <div className="modal-content add-tour-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setShowAddTourModal(false)}>
                <X size={20} />
              </button>

              <div className="add-tour-header">
                <span className="badge badge-gold">
                  <Sparkles size={13} /> New Package Creator
                </span>
                <h3>Add New Tour to Global Catalog</h3>
                <p className="text-secondary text-sm">Fill in package details to immediately display on the booking portal.</p>
              </div>

              <form onSubmit={handleAddTourSubmit} className="add-tour-form">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Tour Title *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Santorini Luxury Caldera Sunset Odyssey"
                      value={newTour.title}
                      onChange={(e) => setNewTour({ ...newTour, title: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subtitle / Key Catchphrase</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Private Cliffside Infinity Villa & Catamaran Sailing"
                      value={newTour.subtitle}
                      onChange={(e) => setNewTour({ ...newTour, subtitle: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Destination Location *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Santorini & Mykonos, Greece"
                      value={newTour.destination}
                      onChange={(e) => setNewTour({ ...newTour, destination: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Region</label>
                    <select 
                      value={newTour.region}
                      onChange={(e) => setNewTour({ ...newTour, region: e.target.value })}
                      className="form-input"
                    >
                      {REGIONS.filter(r => r !== 'All Regions').map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-grid-3">
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <select 
                      value={newTour.category}
                      onChange={(e) => setNewTour({ ...newTour, category: e.target.value })}
                      className="form-input"
                    >
                      {CATEGORIES.filter(c => c !== 'All Tours').map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Duration Text</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 6 Days / 5 Nights"
                      value={newTour.duration}
                      onChange={(e) => setNewTour({ ...newTour, duration: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Base Price (USD $) *</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 1250"
                      value={newTour.price}
                      onChange={(e) => setNewTour({ ...newTour, price: Number(e.target.value) })}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">High-Resolution Image URL</label>
                  <input 
                    type="url" 
                    placeholder="https://images.unsplash.com/photo-..."
                    value={newTour.image}
                    onChange={(e) => setNewTour({ ...newTour, image: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Tour Overview & Experience Description</label>
                  <textarea 
                    rows="3"
                    placeholder="Describe the magical experience of this tour..."
                    value={newTour.overview}
                    onChange={(e) => setNewTour({ ...newTour, overview: e.target.value })}
                    className="form-input"
                  ></textarea>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Highlights (comma-separated)</label>
                    <input 
                      type="text" 
                      value={newTour.highlights}
                      onChange={(e) => setNewTour({ ...newTour, highlights: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inclusions (comma-separated)</label>
                    <input 
                      type="text" 
                      value={newTour.inclusions}
                      onChange={(e) => setNewTour({ ...newTour, inclusions: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="add-tour-actions">
                  <button 
                    type="button" 
                    className="btn btn-glass"
                    onClick={() => setShowAddTourModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                  >
                    Publish Package Immediately
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
