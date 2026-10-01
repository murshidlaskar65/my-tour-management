import React from 'react';
import { 
  X, 
  Printer, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  QrCode, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';

export default function TicketVoucherModal({ booking, onClose }) {
  if (!booking) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content ticket-viewer-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Ticket">
          <X size={20} />
        </button>

        <div className="ticket-viewer-body">
          <div className="ticket-viewer-header">
            <span className="badge badge-gold">
              <Sparkles size={14} /> Official Travel Voucher & Boarding Pass
            </span>
            <h3>Reservation Document</h3>
            <p className="text-secondary text-sm">Present this QR boarding pass to your tour concierge upon hotel/airport greeting.</p>
          </div>

          {/* Printable Pass Card */}
          <div className="boarding-pass-card ticket-full-view" id="print-area">
            <div className="ticket-header">
              <div className="ticket-brand">
                <Sparkles size={18} className="text-gold" />
                <span>VoyagePulse Global Luxury Tours</span>
              </div>
              <div className="ticket-ref-badge">
                <span>PASS ID: </span>
                <strong>{booking.id}</strong>
              </div>
            </div>

            <div className="ticket-body">
              <div className="ticket-left">
                <h4 className="ticket-tour-title">{booking.tourTitle}</h4>
                <span className="ticket-destination">
                  <MapPin size={14} className="text-cyan" /> {booking.destination}
                </span>
                {booking.coordinates && (
                  <div className="ticket-coords-badge">
                    <ShieldCheck size={12} className="text-emerald" />
                    <span>GPS Verified: {booking.coordinates.lat.toFixed(3)}°, {booking.coordinates.lng.toFixed(3)}°</span>
                  </div>
                )}

                <div className="ticket-grid">
                  <div className="ticket-field">
                    <span className="tf-label">PASSENGER NAME</span>
                    <span className="tf-val">{booking.leadTraveler.fullName}</span>
                  </div>
                  <div className="ticket-field">
                    <span className="tf-label">DEPARTURE DATE</span>
                    <span className="tf-val">{booking.travelDate}</span>
                  </div>
                  <div className="ticket-field">
                    <span className="tf-label">CONTACT EMAIL</span>
                    <span className="tf-val">{booking.leadTraveler.email}</span>
                  </div>
                  <div className="ticket-field">
                    <span className="tf-label">CONTACT PHONE</span>
                    <span className="tf-val">{booking.leadTraveler.phone}</span>
                  </div>
                  <div className="ticket-field">
                    <span className="tf-label">PASSPORT / NID</span>
                    <span className="tf-val">{booking.leadTraveler.passportOrId}</span>
                  </div>
                  <div className="ticket-field">
                    <span className="tf-label">ACCOMMODATION TIER</span>
                    <span className="tf-val">{booking.tier}</span>
                  </div>
                  <div className="ticket-field">
                    <span className="tf-label">PARTY SIZE</span>
                    <span className="tf-val">
                      {booking.guests.adults} Adults, {booking.guests.children} Children
                    </span>
                  </div>
                  <div className="ticket-field">
                    <span className="tf-label">PAYMENT METHOD</span>
                    <span className="tf-val">{booking.paymentMethod}</span>
                  </div>
                </div>

                {booking.addOns && booking.addOns.length > 0 && (
                  <div className="ticket-addons-strip">
                    <span className="tf-label">CONFIRMED ADD-ONS: </span>
                    <span>{booking.addOns.join(' • ')}</span>
                  </div>
                )}

                {booking.leadTraveler.specialRequests && (
                  <div className="ticket-special-notes">
                    <span className="tf-label">SPECIAL REQUESTS: </span>
                    <span>{booking.leadTraveler.specialRequests}</span>
                  </div>
                )}
              </div>

              <div className="ticket-stub">
                <div className="qr-box">
                  <QrCode size={110} className="qr-graphic" />
                </div>
                <span className={`stub-status status-${booking.status.toLowerCase()}`}>
                  ● {booking.status.toUpperCase()}
                </span>
                <span className="stub-price">{booking.totalPaidFormatted || `$${booking.totalPriceUSD}`}</span>
                <span className="stub-date">Verified & Protected</span>
              </div>
            </div>
          </div>

          <div className="ticket-actions-bar">
            <button 
              type="button" 
              className="btn btn-gold"
              onClick={() => window.print()}
            >
              <Printer size={16} /> Print or Save Voucher (PDF)
            </button>
            <button 
              type="button" 
              className="btn btn-glass"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
