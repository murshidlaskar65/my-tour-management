import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, Compass, Calendar, ArrowRight } from 'lucide-react';

export default function TourLocationMiniMap({
  tour,
  currency,
  onStartBooking
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const formatPrice = (usd) => {
    if (!currency) return `$${usd}`;
    const val = Math.round(usd * currency.rate);
    return `${currency.symbol}${val.toLocaleString()}`;
  };

  useEffect(() => {
    if (!mapContainerRef.current || !tour || !tour.coordinates) return;

    // Center coordinates
    const center = [tour.coordinates.lat, tour.coordinates.lng];
    const zoomLevel = tour.mapZoom || 10;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: center,
        zoom: zoomLevel,
        minZoom: 3,
        maxZoom: 18,
        scrollWheelZoom: false
      });

      // Add Voyager carto tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CARTO &copy; OpenStreetMap',
        maxZoom: 19
      }).addTo(map);

      // Main Destination Marker
      const mainIcon = L.divIcon({
        className: 'mini-map-main-pin',
        html: `
          <div class="mini-main-marker">
            <span class="mini-pin-pulse"></span>
            <div class="mini-pin-icon">★</div>
            <div class="mini-pin-name">${tour.city || tour.destination.split(',')[0]}</div>
          </div>
        `,
        iconSize: [120, 40],
        iconAnchor: [60, 40]
      });

      L.marker(center, { icon: mainIcon }).addTo(map)
        .bindPopup(`<strong>${tour.destination}</strong><br/>Main Base & Departure Point`);

      // Itinerary Stops & Route Polyline
      if (tour.itineraryStops && tour.itineraryStops.length > 0) {
        const latLngs = [];

        tour.itineraryStops.forEach((stop) => {
          const stopLatLng = [stop.lat, stop.lng];
          latLngs.push(stopLatLng);

          const stopIcon = L.divIcon({
            className: 'mini-map-stop-pin',
            html: `
              <div class="mini-stop-marker">
                <span class="stop-day-num">D${stop.day}</span>
                <span class="stop-label">${stop.name}</span>
              </div>
            `,
            iconSize: [110, 32],
            iconAnchor: [16, 16]
          });

          L.marker(stopLatLng, { icon: stopIcon })
            .addTo(map)
            .bindPopup(`<strong>Day ${stop.day}: ${stop.name}</strong><br/>Curated Tour Excursion Point`);
        });

        // Add connecting scenic route polyline
        if (latLngs.length > 1) {
          L.polyline(latLngs, {
            color: '#06b6d4',
            weight: 3.5,
            opacity: 0.85,
            dashArray: '6, 8',
            smoothFactor: 1
          }).addTo(map);

          // Fit bounds to show all stops nicely
          const bounds = L.latLngBounds([center, ...latLngs]);
          map.fitBounds(bounds, { padding: [40, 40] });
        }
      }

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [tour]);

  if (!tour || !tour.coordinates) {
    return (
      <div className="mini-map-empty glass-card">
        <MapPin size={32} className="text-cyan mb-2" />
        <p>Location coordinates are being mapped for this tour.</p>
      </div>
    );
  }

  return (
    <div className="tour-location-mini-map-wrapper glass-card">
      <div className="mini-map-header">
        <div className="mini-map-meta">
          <span className="badge badge-cyan">
            <MapPin size={13} /> {tour.destination}
          </span>
          <span className="mini-map-coords">
            GPS: {tour.coordinates.lat.toFixed(4)}° N/S, {tour.coordinates.lng.toFixed(4)}° E/W
          </span>
        </div>
        <div className="mini-map-region">
          <Navigation size={13} className="text-gold" /> Region: <strong>{tour.region}</strong>
        </div>
      </div>

      {/* Leaflet Container */}
      <div className="mini-map-container-box">
        <div ref={mapContainerRef} className="mini-map-leaflet-element" />
      </div>

      {/* Itinerary Waypoints List */}
      {tour.itineraryStops && tour.itineraryStops.length > 0 && (
        <div className="mini-map-stops-row">
          <span className="stops-row-title">Verified Route Waypoints:</span>
          <div className="stops-list-scroll">
            {tour.itineraryStops.map((stop) => (
              <div key={stop.day} className="stop-chip">
                <span className="chip-day">Day {stop.day}</span>
                <span className="chip-name">{stop.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Booking CTA inside Map Tab */}
      {onStartBooking && (
        <div className="mini-map-footer-cta">
          <div>
            <span className="cta-label">Ready to explore this destination?</span>
            <div className="cta-price">{formatPrice(tour.price)} <span className="cta-unit">/ person</span></div>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-cta-book"
            onClick={() => onStartBooking(tour)}
          >
            <span>Book Tour for this Route</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
