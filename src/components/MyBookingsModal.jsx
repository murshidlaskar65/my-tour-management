import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Users, 
  QrCode, 
  Printer, 
  Trash2, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Sparkles,
  Plane,
  ChevronRight
} from 'lucide-react';

export default function MyBookingsModal({ 
  bookings, 
  onClose, 
  onCancelBooking,
  onOpenTicketVoucher 
}) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [cancelModalBooking, setCancelModalBooking] = useState(null);

  const filteredBookings = bookings.filter((b) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'confirmed') return b.status === 'Confirmed';
    if (activeFilter === 'cancelled') return b.status === 'Cancelled';
    return true;
  });

  const handleConfirmCancel = () => {
    if (cancelModalBooking) {
      onCancelBooking(cancelModalBooking.id);
      setCancelModalBooking(null);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content my-bookings-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close My Bookings">
          <X size={20} />
        </button>

        {/* Header */}
        <div className="bookings-modal-header">
          <div className="header-title-box">
            <span className="badge badge-gold">
              <Sparkles size={13} /> Traveler Hub
            </span>
            <h3 className="modal-heading">My Tour Reservations & Passes</h3>
            <p className="modal-subheading">
              Manage your confirmed trips, print official travel vouchers, and check departure itineraries.
            </p>
          </div>

          {/* Filter pills */}
          <div className="bookings-filter-tabs">
            <button 
              type="button" 
              className={`filter-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Bookings ({bookings.length})
            </button>
            <button 
              type="button" 
              className={`filter-tab-btn ${activeFilter === 'confirmed' ? 'active' : ''}`}
              onClick={() => setActiveFilter('confirmed')}
            >
              Confirmed ({bookings.filter(b => b.status === 'Confirmed').length})
            </button>
          </div>
        </div>

        {/* Bookings List Body */}
        <div className="bookings-modal-body">
          {filteredBookings.length === 0 ? (
            <div className="bookings-empty-state">
              <div className="empty-icon-wrap">
                <Plane size={44} className="text-secondary" />
              </div>
              <h4>No Reservations Found</h4>
              <p>You have not booked any tours in this category yet. Explore our curated catalog and embark on your journey!</p>
              <button 
                type="button" 
                className="btn btn-primary mt-3"
                onClick={onClose}
              >
                Browse Global Tours
              </button>
            </div>
          ) : (
            <div className="bookings-cards-list">
              {filteredBookings.map((b) => (
                <div key={b.id} className="booking-item-card glass-card">
                  {/* Card Left / Thumbnail */}
                  <div className="booking-card-thumb">
                    <img src={b.image} alt={b.tourTitle} />
                    <span className={`booking-status-tag status-${b.status.toLowerCase()}`}>
                      {b.status}
                    </span>
                  </div>

                  {/* Card Center / Info */}
                  <div className="booking-card-main">
                    <div className="booking-card-top">
                      <span className="booking-ref-code">Ref: <strong>{b.id}</strong></span>
                      <span className="booking-timestamp">Booked on {b.bookingDate}</span>
                    </div>

                    <h4 className="booking-title">{b.tourTitle}</h4>

                    <div className="booking-meta-row">
                      <span className="meta-item">
                        <MapPin size={14} className="text-cyan" /> {b.destination}
                      </span>
                      <span className="meta-item">
                        <Calendar size={14} className="text-gold" /> {b.travelDate}
                      </span>
                      <span className="meta-item">
                        <Users size={14} className="text-purple" /> {b.guests.adults} Adults, {b.guests.children} Kids
                      </span>
                    </div>

                    <div className="booking-tier-tag">
                      <strong>Tier:</strong> {b.tier}
                    </div>

                    {b.addOns && b.addOns.length > 0 && (
                      <div className="booking-addons-preview">
                        <strong>Add-ons:</strong> {b.addOns.join(', ')}
                      </div>
                    )}
                  </div>

                  {/* Card Right / Total & Actions */}
                  <div className="booking-card-actions-col">
                    <div className="booking-cost-block">
                      <span className="cost-label">Total Paid</span>
                      <span className="cost-amount">
                        {b.totalPaidFormatted || `$${b.totalPriceUSD}`}
                      </span>
                      <span className="cost-payment-method">{b.paymentMethod}</span>
                    </div>

                    <div className="booking-buttons-group">
                      <button 
                        type="button" 
                        className="btn btn-outline-cyan btn-sm"
                        onClick={() => onOpenTicketVoucher(b)}
                        title="View & Print Official Ticket Pass"
                      >
                        <QrCode size={14} /> View Ticket
                      </button>

                      {b.status === 'Confirmed' && (
                        <button 
                          type="button" 
                          className="btn btn-glass btn-sm btn-cancel-booking"
                          onClick={() => setCancelModalBooking(b)}
                          title="Cancel Tour Reservation"
                        >
                          <Trash2 size={14} className="text-rose" /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cancellation Confirmation Dialog */}
        {cancelModalBooking && (
          <div className="cancel-confirm-dialog-overlay">
            <div className="cancel-confirm-box">
              <AlertCircle size={36} className="text-rose mb-2" />
              <h4>Cancel Tour Reservation?</h4>
              <p>
                Are you sure you want to cancel booking <strong>{cancelModalBooking.id}</strong> for{' '}
                <strong>{cancelModalBooking.tourTitle}</strong>?
              </p>
              <p className="refund-notice">
                As per our Flexible Cancellation Guarantee, a 100% refund will be credited back to your original payment method.
              </p>
              <div className="dialog-actions-row">
                <button 
                  type="button" 
                  className="btn btn-glass"
                  onClick={() => setCancelModalBooking(null)}
                >
                  Keep Reservation
                </button>
                <button 
                  type="button" 
                  className="btn btn-rose"
                  onClick={handleConfirmCancel}
                >
                  Yes, Cancel & Refund
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
