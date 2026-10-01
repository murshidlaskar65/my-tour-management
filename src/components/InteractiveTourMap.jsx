import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Navigation, 
  Layers, 
  ChevronRight, 
  ChevronLeft,
  ShieldCheck, 
  RefreshCw,
  Camera,
  Play,
  Pause,
  Maximize2,
  Eye,
  Star,
  CalendarCheck,
  Compass
} from 'lucide-react';
import { POPULAR_GLOBAL_LOCATIONS, getLocationScenicData } from '../data/toursData';
import DestinationPhotoLightbox from './DestinationPhotoLightbox';

// Custom Map Tile Providers
const TILE_LAYERS = {
  voyager: {
    name: 'Luxury Voyager',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  dark: {
    name: 'Night Luxury Dark',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  osm: {
    name: 'Standard Street',
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
};

// Scenic Vibe Quick Discover Presets
const SCENIC_VIBES = [
  { label: '🌟 All Wonders', key: 'All' },
  { label: '🏝 Tropical Beaches', key: 'Beach & Island', dest: 'Bali, Indonesia', coords: [-8.3405, 115.0920] },
  { label: '🏔 Alpine Summits', key: 'Mountain & Alpine', dest: 'Zermatt & Lucerne, Switzerland', coords: [46.0207, 7.7491] },
  { label: '☁️ Cloud Kingdoms', key: 'Clouds', dest: 'Sajek Valley & Bandarban, Bangladesh', coords: [23.3820, 92.2938] },
  { label: '🏛 Historic Palaces', key: 'Cultural & Heritage', dest: 'Paris, France', coords: [48.8566, 2.3522] },
  { label: '💎 Overwater Paradise', key: 'Luxury & Honeymoon', dest: 'South Male Atoll, Maldives', coords: [3.8500, 73.4500] },
  { label: '🎈 Fairy Chimneys', key: 'Adventure & Trekking', dest: 'Cappadocia & Goreme, Turkey', coords: [38.6431, 34.8289] }
];

export default function InteractiveTourMap({
  tours = [],
  currency,
  onSelectTour,
  onDirectBook,
  onBookCustomLocation,
  focusedTourId = null
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const tileLayerRef = useRef(null);
  const markersLayerRef = useRef(null);
  const customMarkerRef = useRef(null);
  const handleMapCoordinatesClickedRef = useRef(null);

  const [activeTileStyle, setActiveTileStyle] = useState('voyager');
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [validationStatus, setValidationStatus] = useState(null);
  const [isSearchingLocation, setIsSearchingLocation] = useState(false);
  const [selectedMapLocation, setSelectedMapLocation] = useState(null);
  const [activeRegionFilter, setActiveRegionFilter] = useState('All');

  // Scenic Photo Showcase & Lightbox State
  const [selectedScenicData, setSelectedScenicData] = useState(() => {
    if (tours && tours.length > 0) {
      return getLocationScenicData(tours[0], tours);
    }
    return null;
  });
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeScenicVibe, setActiveScenicVibe] = useState('All');

  const formatPrice = (usd) => {
    const val = Math.round(usd * currency.rate);
    return `${currency.symbol}${val.toLocaleString()}`;
  };

  // Helper to create glowing HTML markers for tours
  const createTourMarkerIcon = (tour, isSelected = false) => {
    const priceText = formatPrice(tour.price);
    return L.divIcon({
      className: 'custom-leaflet-marker-wrapper',
      html: `
        <div class="map-tour-pin ${isSelected ? 'pin-selected' : ''}">
          <div class="pin-pulse"></div>
          <div class="pin-badge">
            <span class="pin-camera-icon">📸</span>
            <span class="pin-price">${priceText}</span>
          </div>
          <div class="pin-point"></div>
        </div>
      `,
      iconSize: [88, 48],
      iconAnchor: [44, 48],
      popupAnchor: [0, -48]
    });
  };

  // Helper for popular global scenic location markers
  const createScenicPinIcon = (pop, isSelected = false) => {
    return L.divIcon({
      className: 'custom-scenic-marker-wrapper',
      html: `
        <div class="map-scenic-pin ${isSelected ? 'scenic-selected' : ''}">
          <div class="scenic-pin-pulse"></div>
          <div class="scenic-pin-badge">
            <span class="scenic-pin-icon">📷</span>
            <span class="scenic-pin-label">${pop.city || pop.name.split(',')[0]}</span>
          </div>
          <div class="scenic-pin-point"></div>
        </div>
      `,
      iconSize: [110, 42],
      iconAnchor: [55, 42],
      popupAnchor: [0, -42]
    });
  };

  // Helper for custom clicked/searched location marker
  const createCustomLocationIcon = (label) => {
    return L.divIcon({
      className: 'custom-location-marker-wrapper',
      html: `
        <div class="map-custom-pin">
          <div class="custom-pin-pulse"></div>
          <div class="custom-pin-label">
            <span class="custom-pin-icon">📍</span>
            <span class="custom-pin-text">${label || 'Verified Location'}</span>
          </div>
          <div class="custom-pin-arrow"></div>
        </div>
      `,
      iconSize: [140, 44],
      iconAnchor: [70, 44],
      popupAnchor: [0, -44]
    });
  };

  // Select a scenic destination & update showcase
  const handleSelectScenicDestination = (locData, flyToCoords = true) => {
    const scenic = getLocationScenicData(locData, tours);
    if (!scenic) return;

    setSelectedScenicData(scenic);
    setActivePhotoIndex(0);

    const locationObj = {
      name: scenic.name,
      country: scenic.country,
      coordinates: scenic.coordinates,
      isCatalogTour: scenic.isCatalogTour,
      matchingTour: scenic.matchingTour,
      suggestedPrice: scenic.price,
      suggestedDays: scenic.days,
      description: scenic.overview
    };
    setSelectedMapLocation(locationObj);

    if (flyToCoords && scenic.coordinates && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([scenic.coordinates.lat, scenic.coordinates.lng], 9, { duration: 1.4 });
    }
  };

  // Auto-advance photos when slideshow is playing
  useEffect(() => {
    if (!isSlideshowPlaying || !selectedScenicData?.gallery || selectedScenicData.gallery.length <= 1) return;

    const timer = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % selectedScenicData.gallery.length);
    }, 3600);

    return () => clearInterval(timer);
  }, [isSlideshowPlaying, selectedScenicData]);

  // Synchronize when focusedTourId changes from outside
  useEffect(() => {
    if (focusedTourId) {
      const tour = tours.find((t) => t.id === focusedTourId);
      if (tour) {
        handleSelectScenicDestination(tour, true);
      }
    }
  }, [focusedTourId, tours]);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [23.5, 70.0],
        zoom: 3,
        minZoom: 2,
        maxZoom: 18,
        scrollWheelZoom: false
      });

      tileLayerRef.current = L.tileLayer(TILE_LAYERS[activeTileStyle].url, {
        attribution: TILE_LAYERS[activeTileStyle].attribution,
        maxZoom: 19
      }).addTo(map);

      markersLayerRef.current = L.layerGroup().addTo(map);

      // Map Click Handler: geocode and load scenic photos for ANY coordinate
      map.on('click', async (e) => {
        const { lat, lng } = e.latlng;
        if (handleMapCoordinatesClickedRef.current) {
          handleMapCoordinatesClickedRef.current(lat, lng);
        }
      });

      mapInstanceRef.current = map;
    }

    return () => {
      // Map cleanup if needed
    };
  }, []);

  // Update tile layer if style changes
  useEffect(() => {
    if (mapInstanceRef.current && tileLayerRef.current) {
      mapInstanceRef.current.removeLayer(tileLayerRef.current);
      tileLayerRef.current = L.tileLayer(TILE_LAYERS[activeTileStyle].url, {
        attribution: TILE_LAYERS[activeTileStyle].attribution,
        maxZoom: 19
      }).addTo(mapInstanceRef.current);
    }
  }, [activeTileStyle]);

  // Render / Update Tour Markers & Global Scenic Wonder Pins
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;

    markersLayerRef.current.clearLayers();

    // 1. Catalog Tour Markers
    tours.forEach((tour) => {
      if (!tour.coordinates) return;
      const { lat, lng } = tour.coordinates;

      const isSelected = selectedScenicData?.matchingTour?.id === tour.id || focusedTourId === tour.id;
      const marker = L.marker([lat, lng], {
        icon: createTourMarkerIcon(tour, isSelected),
        title: tour.title
      });

      // Custom rich popup
      const popupContent = document.createElement('div');
      popupContent.className = 'map-popup-card';
      popupContent.innerHTML = `
        <div class="popup-img-wrapper">
          <img src="${tour.image}" alt="${tour.title}" class="popup-thumb" />
          <span class="popup-badge">${tour.category}</span>
          <span class="popup-photo-count-badge">📸 ${tour.gallery?.length || 4}+ Photos</span>
        </div>
        <div class="popup-info">
          <div class="popup-location"><span class="pin-symbol">📍</span> ${tour.destination}</div>
          <h4 class="popup-title">${tour.title}</h4>
          <div class="popup-meta">
            <span class="popup-duration">⏱ ${tour.duration}</span>
            <span class="popup-rating">★ ${tour.rating}</span>
            <span class="popup-scenic-score">💎 9.9 Beauty</span>
          </div>
          <div class="popup-footer">
            <div class="popup-price-box">
              <span class="popup-from">From</span>
              <span class="popup-price">${formatPrice(tour.price)}</span>
            </div>
            <div class="popup-buttons">
              <button type="button" class="btn-popup-photos">📸 View Photos</button>
              <button type="button" class="btn-popup-book">Book</button>
            </div>
          </div>
        </div>
      `;

      popupContent.querySelector('.btn-popup-photos')?.addEventListener('click', () => {
        handleSelectScenicDestination(tour, false);
      });
      popupContent.querySelector('.btn-popup-book')?.addEventListener('click', () => {
        onDirectBook(tour);
      });
      popupContent.querySelector('.popup-thumb')?.addEventListener('click', () => {
        handleSelectScenicDestination(tour, false);
        setIsLightboxOpen(true);
      });

      marker.on('click', () => {
        handleSelectScenicDestination(tour, false);
      });

      marker.bindPopup(popupContent, {
        maxWidth: 320,
        className: 'luxury-map-popup'
      });

      markersLayerRef.current.addLayer(marker);

      if (isSelected && focusedTourId === tour.id) {
        mapInstanceRef.current.flyTo([lat, lng], 10, { duration: 1.2 });
        setTimeout(() => marker.openPopup(), 1300);
      }
    });

    // 2. Global Scenic Wonder Pins (Popular destinations)
    POPULAR_GLOBAL_LOCATIONS.forEach((pop) => {
      if (!pop.coordinates) return;
      const { lat, lng } = pop.coordinates;

      // Avoid duplicate pins if very close to a catalog tour
      const isOverlap = tours.some(
        (t) => t.coordinates && Math.abs(t.coordinates.lat - lat) < 0.4 && Math.abs(t.coordinates.lng - lng) < 0.4
      );
      if (isOverlap) return;

      const isSelected = selectedScenicData?.name === pop.name;
      const scenicMarker = L.marker([lat, lng], {
        icon: createScenicPinIcon(pop, isSelected),
        title: pop.name
      });

      const popContent = document.createElement('div');
      popContent.className = 'map-popup-card';
      popContent.innerHTML = `
        <div class="popup-img-wrapper">
          <img src="${pop.image}" alt="${pop.name}" class="popup-thumb" />
          <span class="popup-badge">${pop.category}</span>
          <span class="popup-photo-count-badge">📸 ${pop.gallery?.length || 4} HD Photos</span>
        </div>
        <div class="popup-info">
          <div class="popup-location"><span class="pin-symbol">📍</span> ${pop.name}</div>
          <h4 class="popup-title">${pop.city || pop.name} Scenic Wonder</h4>
          <p class="popup-desc-line">${pop.description}</p>
          <div class="popup-meta">
            <span class="popup-rating">★ ${pop.aestheticScore || 9.8} Visual Splendor</span>
            <span class="popup-duration">⏱ ${pop.suggestedDays}</span>
          </div>
          <div class="popup-footer">
            <div class="popup-price-box">
              <span class="popup-from">Est.</span>
              <span class="popup-price">${formatPrice(pop.suggestedPrice || 1450)}</span>
            </div>
            <div class="popup-buttons">
              <button type="button" class="btn-popup-photos">📸 View Photos</button>
              <button type="button" class="btn-popup-book">Book</button>
            </div>
          </div>
        </div>
      `;

      popContent.querySelector('.btn-popup-photos')?.addEventListener('click', () => {
        handleSelectScenicDestination(pop, false);
      });
      popContent.querySelector('.btn-popup-book')?.addEventListener('click', () => {
        handleInitiateBookingForLocation(pop);
      });
      popContent.querySelector('.popup-thumb')?.addEventListener('click', () => {
        handleSelectScenicDestination(pop, false);
        setIsLightboxOpen(true);
      });

      scenicMarker.on('click', () => {
        handleSelectScenicDestination(pop, false);
      });

      scenicMarker.bindPopup(popContent, {
        maxWidth: 320,
        className: 'luxury-map-popup'
      });

      markersLayerRef.current.addLayer(scenicMarker);
    });
  }, [tours, currency, focusedTourId, selectedScenicData]);

  // Handle coordinates clicked directly on the map
  const handleMapCoordinatesClicked = async (lat, lng) => {
    setIsSearchingLocation(true);
    setValidationStatus(null);

    if (customMarkerRef.current && mapInstanceRef.current) {
      mapInstanceRef.current.removeLayer(customMarkerRef.current);
    }

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=12&addressdetails=1`,
        { headers: { Accept: 'application/json' } }
      );
      const data = await res.json();

      let locationTitle = 'Selected Map Location';
      let countryName = 'Global Destination';
      let fullAddress = `Latitude: ${lat.toFixed(4)}°, Longitude: ${lng.toFixed(4)}°`;

      if (data && data.display_name) {
        const addr = data.address || {};
        const city = addr.city || addr.town || addr.village || addr.county || addr.state || '';
        countryName = addr.country || 'International Destination';
        locationTitle = city ? `${city}, ${countryName}` : data.display_name.split(',').slice(0, 2).join(', ');
        fullAddress = data.display_name;
      }

      const nearbyTour = tours.find((t) => {
        if (!t.coordinates) return false;
        const dLat = Math.abs(t.coordinates.lat - lat);
        const dLng = Math.abs(t.coordinates.lng - lng);
        return dLat < 0.6 && dLng < 0.6;
      });

      const locationObj = {
        name: locationTitle,
        country: countryName,
        fullAddress: fullAddress,
        coordinates: { lat, lng },
        isCatalogTour: !!nearbyTour,
        matchingTour: nearbyTour || null
      };

      setSelectedMapLocation(locationObj);

      // Load attractive scenic photography package for this location!
      const scenic = getLocationScenicData(locationObj, tours);
      setSelectedScenicData(scenic);
      setActivePhotoIndex(0);

      if (nearbyTour) {
        setValidationStatus({
          type: 'tour',
          message: `Location verified! Found official package "${nearbyTour.title}" for this area. Explore photos below.`,
          data: locationObj
        });
      } else {
        setValidationStatus({
          type: 'valid_location',
          message: `Location verified on World Map! Curated scenic photography and custom package ready for ${locationTitle}.`,
          data: locationObj
        });
      }

      if (mapInstanceRef.current) {
        customMarkerRef.current = L.marker([lat, lng], {
          icon: createCustomLocationIcon(locationTitle)
        }).addTo(mapInstanceRef.current);
      }
    } catch {
      const fallbackObj = {
        name: `Map Coordinates (${lat.toFixed(3)}°, ${lng.toFixed(3)}°)`,
        country: 'Global Destination',
        coordinates: { lat, lng },
        isCatalogTour: false,
        matchingTour: null
      };
      setSelectedMapLocation(fallbackObj);

      const scenic = getLocationScenicData(fallbackObj, tours);
      setSelectedScenicData(scenic);
      setActivePhotoIndex(0);

      setValidationStatus({
        type: 'valid_location',
        message: `Coordinates verified (${lat.toFixed(4)}°, ${lng.toFixed(4)}°). Scenic visuals loaded.`,
        data: fallbackObj
      });

      if (mapInstanceRef.current) {
        customMarkerRef.current = L.marker([lat, lng], {
          icon: createCustomLocationIcon('Custom Destination')
        }).addTo(mapInstanceRef.current);
      }
    } finally {
      setIsSearchingLocation(false);
    }
  };

  useEffect(() => {
    handleMapCoordinatesClickedRef.current = handleMapCoordinatesClicked;
  });

  // Autocomplete suggestions as user types
  const handleSearchInputChange = (e) => {
    const val = e.target.value;
    setSearchInput(val);

    if (!val.trim()) {
      setSuggestions([]);
      return;
    }

    const query = val.toLowerCase().trim();

    const matchedTours = tours
      .filter(
        (t) =>
          t.destination.toLowerCase().includes(query) ||
          t.title.toLowerCase().includes(query) ||
          t.country?.toLowerCase().includes(query)
      )
      .map((t) => ({
        type: 'tour',
        label: `${t.destination} - ${t.title}`,
        destination: t.destination,
        coordinates: t.coordinates,
        tour: t
      }));

    const matchedPopular = POPULAR_GLOBAL_LOCATIONS.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.country.toLowerCase().includes(query) ||
        p.city.toLowerCase().includes(query)
    ).map((p) => ({
      type: 'popular',
      label: `${p.name} (Scenic Wonder)`,
      destination: p.name,
      coordinates: p.coordinates,
      popularData: p
    }));

    const combined = [...matchedTours, ...matchedPopular].slice(0, 6);
    setSuggestions(combined);
  };

  // Search & Validation submission
  const handlePerformLocationSearch = async (targetQuery = null) => {
    const query = (targetQuery || searchInput).trim();
    if (!query) return;

    setIsSearchingLocation(true);
    setValidationStatus(null);
    setSuggestions([]);

    const qLower = query.toLowerCase();

    // 1. Catalog Tour Check
    const matchedTour = tours.find(
      (t) =>
        t.destination.toLowerCase().includes(qLower) ||
        t.title.toLowerCase().includes(qLower) ||
        t.country?.toLowerCase().includes(qLower) ||
        (t.city && t.city.toLowerCase().includes(qLower))
    );

    if (matchedTour && matchedTour.coordinates) {
      const { lat, lng } = matchedTour.coordinates;
      const locationObj = {
        name: matchedTour.destination,
        country: matchedTour.country || '',
        coordinates: { lat, lng },
        isCatalogTour: true,
        matchingTour: matchedTour
      };

      handleSelectScenicDestination(matchedTour, true);

      setValidationStatus({
        type: 'tour',
        message: `Verified Tour Package available for "${matchedTour.destination}"! Scenic photos loaded.`,
        data: locationObj
      });

      setIsSearchingLocation(false);
      return;
    }

    // 2. Popular Location Check
    const matchedPopular = POPULAR_GLOBAL_LOCATIONS.find(
      (p) =>
        p.name.toLowerCase().includes(qLower) ||
        p.city.toLowerCase().includes(qLower) ||
        p.country.toLowerCase().includes(qLower)
    );

    if (matchedPopular) {
      const { lat, lng } = matchedPopular.coordinates;
      const locationObj = {
        name: matchedPopular.name,
        country: matchedPopular.country,
        coordinates: { lat, lng },
        isCatalogTour: false,
        matchingTour: null,
        suggestedPrice: matchedPopular.suggestedPrice,
        suggestedDays: matchedPopular.suggestedDays,
        description: matchedPopular.description
      };

      handleSelectScenicDestination(matchedPopular, true);

      setValidationStatus({
        type: 'valid_location',
        message: `Scenic Wonder verified! "${matchedPopular.name}" photos loaded.`,
        data: locationObj
      });

      if (mapInstanceRef.current) {
        if (customMarkerRef.current) {
          mapInstanceRef.current.removeLayer(customMarkerRef.current);
        }
        customMarkerRef.current = L.marker([lat, lng], {
          icon: createCustomLocationIcon(matchedPopular.name)
        }).addTo(mapInstanceRef.current);
      }
      setIsSearchingLocation(false);
      return;
    }

    // 3. Online Geocoding
    try {
      const resp = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1&addressdetails=1`,
        { headers: { Accept: 'application/json' } }
      );
      const results = await resp.json();

      if (results && results.length > 0) {
        const item = results[0];
        const lat = parseFloat(item.lat);
        const lng = parseFloat(item.lon);
        const addr = item.address || {};
        const country = addr.country || 'International';
        const displayName = item.display_name.split(',').slice(0, 3).join(', ');

        const locationObj = {
          name: displayName,
          country: country,
          coordinates: { lat, lng },
          isCatalogTour: false,
          matchingTour: null,
          fullAddress: item.display_name
        };

        handleSelectScenicDestination(locationObj, true);

        setValidationStatus({
          type: 'valid_location',
          message: `Location Verified! "${displayName}" scenic gallery and travel package ready.`,
          data: locationObj
        });

        if (mapInstanceRef.current) {
          if (customMarkerRef.current) {
            mapInstanceRef.current.removeLayer(customMarkerRef.current);
          }
          customMarkerRef.current = L.marker([lat, lng], {
            icon: createCustomLocationIcon(displayName)
          }).addTo(mapInstanceRef.current);
        }
      } else {
        setValidationStatus({
          type: 'error',
          message: `Location "${query}" was not found on the world map. Please check spelling or select one of the suggested scenic wonders.`
        });
      }
    } catch {
      setValidationStatus({
        type: 'error',
        message: 'Could not connect to map geocoding service. Please pick a destination from our catalog or click directly on the map.'
      });
    } finally {
      setIsSearchingLocation(false);
    }
  };

  // Region Quick Filter FlyTo
  const handleRegionFilter = (regionName) => {
    setActiveRegionFilter(regionName);
    if (!mapInstanceRef.current) return;

    switch (regionName) {
      case 'Asia & Southeast Asia':
        mapInstanceRef.current.flyTo([15.0, 105.0], 4, { duration: 1.2 });
        break;
      case 'Europe':
        mapInstanceRef.current.flyTo([48.0, 15.0], 4, { duration: 1.2 });
        break;
      case 'Middle East':
        mapInstanceRef.current.flyTo([25.0, 48.0], 5, { duration: 1.2 });
        break;
      case 'South Asia':
        mapInstanceRef.current.flyTo([20.0, 85.0], 5, { duration: 1.2 });
        break;
      case 'Africa':
        mapInstanceRef.current.flyTo([0.0, 25.0], 4, { duration: 1.2 });
        break;
      default:
        mapInstanceRef.current.flyTo([23.5, 70.0], 3, { duration: 1.2 });
        break;
    }
  };

  // Quick Scenic Vibe Presets
  const handleScenicVibeSelect = (vibe) => {
    setActiveScenicVibe(vibe.key);
    if (vibe.key === 'All') {
      if (tours.length > 0) {
        handleSelectScenicDestination(tours[0], true);
      }
      return;
    }

    if (vibe.coords && mapInstanceRef.current) {
      const matchTour = tours.find((t) => t.category === vibe.key || t.destination.includes(vibe.dest));
      if (matchTour) {
        handleSelectScenicDestination(matchTour, true);
      } else {
        const matchPop = POPULAR_GLOBAL_LOCATIONS.find((p) => p.name.includes(vibe.dest) || p.city?.includes(vibe.dest));
        if (matchPop) {
          handleSelectScenicDestination(matchPop, true);
        }
      }
    }
  };

  // Direct booking trigger for valid location
  const handleInitiateBookingForLocation = (locationObj) => {
    if (!locationObj) return;

    if (locationObj.isCatalogTour && locationObj.matchingTour) {
      onDirectBook(locationObj.matchingTour);
    } else {
      onBookCustomLocation({
        destination: locationObj.name,
        country: locationObj.country,
        coordinates: locationObj.coordinates,
        suggestedPrice: locationObj.suggestedPrice || locationObj.price || 1250,
        suggestedDays: locationObj.suggestedDays || locationObj.days || '5 Days / 4 Nights'
      });
    }
  };

  return (
    <section id="interactive-tour-map" className="map-explorer-section">
      <div className="container">
        {/* Section Header */}
        <div className="map-section-header">
          <div className="header-left">
            <span className="badge badge-cyan mb-2">
              <Camera size={14} /> Interactive Global Tour Map & Scenic Photo Explorer
            </span>
            <h2 className="section-title">
              Select Any Place on Map & <span className="gradient-text">Explore Scenic Beauty</span>
            </h2>
            <p className="section-subtitle">
              Click anywhere on Earth or choose any destination marker to discover breathtaking high-definition photography, natural wonders, aesthetic highlights, and book verified trips instantly.
            </p>
          </div>

          {/* Map Tile Style Switcher */}
          <div className="map-style-controls">
            <label className="style-label">
              <Layers size={14} /> Map Style:
            </label>
            <div className="style-pill-group">
              {Object.keys(TILE_LAYERS).map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`style-pill-btn ${activeTileStyle === key ? 'active' : ''}`}
                  onClick={() => setActiveTileStyle(key)}
                >
                  {TILE_LAYERS[key].name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scenic Vibe Quick Discovery Hotspots Bar */}
        <div className="scenic-vibes-navbar glass-card">
          <div className="scenic-vibes-label">
            <Sparkles size={15} className="text-gold" />
            <span>Discover by Scenic Vibe:</span>
          </div>
          <div className="scenic-vibes-list">
            {SCENIC_VIBES.map((vibe) => (
              <button
                key={vibe.key}
                type="button"
                className={`scenic-vibe-pill-btn ${activeScenicVibe === vibe.key ? 'active' : ''}`}
                onClick={() => handleScenicVibeSelect(vibe)}
              >
                {vibe.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Search & Validation Bar */}
        <div className="map-search-bar-card glass-card">
          <div className="search-bar-inner">
            <div className="search-input-field">
              <MapPin size={20} className="text-cyan search-pin-icon" />
              <input
                type="text"
                placeholder="Search any destination on Earth (e.g. Bali, Switzerland, Paris, Cox's Bazar, Dubai, Rome, Sylhet, Maldives)..."
                value={searchInput}
                onChange={handleSearchInputChange}
                onKeyDown={(e) => e.key === 'Enter' && handlePerformLocationSearch()}
                className="map-search-input"
              />
              {isSearchingLocation && (
                <RefreshCw size={18} className="icon-spinning text-gold me-2" />
              )}
            </div>

            <button
              type="button"
              className="btn btn-primary map-search-submit-btn"
              onClick={() => handlePerformLocationSearch()}
              disabled={isSearchingLocation}
            >
              <Search size={16} />
              <span>Explore Photos & Book</span>
            </button>
          </div>

          {/* Autocomplete suggestions dropdown */}
          {suggestions.length > 0 && (
            <div className="map-search-suggestions">
              <div className="suggestions-header">Verified Map Locations & Scenic Packages</div>
              {suggestions.map((item, idx) => (
                <div
                  key={idx}
                  className="suggestion-item"
                  onClick={() => {
                    setSearchInput(item.destination);
                    handlePerformLocationSearch(item.destination);
                  }}
                >
                  <div className="sugg-left">
                    <Camera size={14} className={item.type === 'tour' ? 'text-cyan' : 'text-gold'} />
                    <span className="sugg-label">{item.label}</span>
                  </div>
                  <span className="sugg-type-badge">
                    {item.type === 'tour' ? 'Tour Package' : 'Scenic Wonder'}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Quick Region Filters */}
          <div className="map-regions-row">
            <span className="region-title">Jump to Region:</span>
            {['All', 'Asia & Southeast Asia', 'Europe', 'Middle East', 'South Asia', 'Africa'].map((reg) => (
              <button
                key={reg}
                type="button"
                className={`region-btn ${activeRegionFilter === reg ? 'active' : ''}`}
                onClick={() => handleRegionFilter(reg)}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Validation Status Alert */}
        {validationStatus && (
          <div className={`map-validation-alert alert-${validationStatus.type} glass-card`}>
            <div className="alert-content-row">
              <div className="alert-icon-wrap">
                {validationStatus.type === 'tour' && <CheckCircle2 size={24} className="text-emerald" />}
                {validationStatus.type === 'valid_location' && <Sparkles size={24} className="text-gold" />}
                {validationStatus.type === 'error' && <AlertCircle size={24} className="text-rose" />}
              </div>
              <div className="alert-text-wrap">
                <div className="alert-title">
                  {validationStatus.type === 'tour' && '✅ Verified Tour Package Located!'}
                  {validationStatus.type === 'valid_location' && '🌍 Valid Map Location Verified & Ready for Booking!'}
                  {validationStatus.type === 'error' && 'Location Not Found'}
                </div>
                <p className="alert-desc">{validationStatus.message}</p>
              </div>

              {validationStatus.data && (
                <div className="alert-action-wrap">
                  <button
                    type="button"
                    className="btn btn-gold btn-alert-book"
                    onClick={() => handleInitiateBookingForLocation(validationStatus.data)}
                  >
                    <span>
                      {validationStatus.data.isCatalogTour
                        ? 'Book Package Now'
                        : `Book Trip for ${validationStatus.data.name.split(',')[0]}`}
                    </span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main Map + Scenic Photo Showcase Drawer Layout */}
        <div className="map-wrapper-layout glass-card">
          {/* Main Leaflet Map Viewport */}
          <div className="leaflet-outer-container">
            <div ref={mapContainerRef} className="leaflet-map-element" />

            {/* Floating Map Helper Badge */}
            <div className="map-hint-badge">
              <Camera size={13} className="text-gold" /> Click any point or 📸 pin on the world map to view scenic photos
            </div>
          </div>

          {/* SCENIC BEAUTY & PHOTO SHOWCASE SIDEBAR */}
          {selectedScenicData ? (
            <div className="map-scenic-showcase-sidebar glass-card">
              {/* Sidebar Header */}
              <div className="scenic-sidebar-header">
                <div className="header-badge-row">
                  <span className="badge badge-gold">
                    <Camera size={12} /> Scenic Showcase
                  </span>
                  {selectedScenicData.aestheticScore && (
                    <span className="scenic-score-pill">
                      <Star size={11} className="text-gold fill-gold" /> {selectedScenicData.aestheticScore}/10 Visuals
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  className="sidebar-close"
                  onClick={() => {
                    setSelectedScenicData(null);
                    setSelectedMapLocation(null);
                  }}
                  title="Close Showcase"
                >
                  ✕
                </button>
              </div>

              {/* Destination Title & Country */}
              <div className="scenic-title-box">
                <h3 className="scenic-dest-title">{selectedScenicData.name}</h3>
                <p className="scenic-dest-country">
                  <MapPin size={14} className="text-cyan" />
                  <span>{selectedScenicData.country}</span>
                  {selectedScenicData.region && <span className="text-secondary"> • {selectedScenicData.region}</span>}
                </p>
              </div>

              {/* Vibe Tags */}
              {selectedScenicData.vibeTags && selectedScenicData.vibeTags.length > 0 && (
                <div className="scenic-vibes-row">
                  {selectedScenicData.vibeTags.map((tag, i) => (
                    <span key={i} className="scenic-vibe-tag">
                      <Sparkles size={10} className="text-cyan" /> {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Hero Photo Carousel Viewer */}
              <div className="scenic-hero-viewer">
                <div
                  className="hero-img-wrapper"
                  onClick={() => setIsLightboxOpen(true)}
                  title="Click to view Fullscreen HD Lightbox"
                >
                  <img
                    src={selectedScenicData.gallery[activePhotoIndex] || selectedScenicData.gallery[0]}
                    alt={selectedScenicData.photoCaptions?.[activePhotoIndex] || selectedScenicData.name}
                    className="scenic-hero-img"
                    key={activePhotoIndex}
                  />
                  <div className="hero-img-overlay">
                    <span className="expand-hint">
                      <Maximize2 size={15} /> Fullscreen HD
                    </span>
                  </div>

                  {/* Photo Counter Pill */}
                  <div className="scenic-counter-pill">
                    <Camera size={12} /> {activePhotoIndex + 1} / {selectedScenicData.gallery.length}
                  </div>

                  {/* Previous / Next Slide Nav */}
                  {selectedScenicData.gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="scenic-slide-nav prev"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePhotoIndex(
                            (prev) =>
                              (prev - 1 + selectedScenicData.gallery.length) % selectedScenicData.gallery.length
                          );
                        }}
                        title="Previous Photo"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        className="scenic-slide-nav next"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePhotoIndex((prev) => (prev + 1) % selectedScenicData.gallery.length);
                        }}
                        title="Next Photo"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}
                </div>

                {/* Photo Caption & Slideshow Toggle Bar */}
                <div className="scenic-photo-caption-bar">
                  <p className="caption-text">
                    "{selectedScenicData.photoCaptions?.[activePhotoIndex] || `Scenic view of ${selectedScenicData.name}`}"
                  </p>
                  <button
                    type="button"
                    className={`slideshow-toggle-btn ${isSlideshowPlaying ? 'active' : ''}`}
                    onClick={() => setIsSlideshowPlaying(!isSlideshowPlaying)}
                    title={isSlideshowPlaying ? 'Pause Slideshow' : 'Auto Tour Slideshow'}
                  >
                    {isSlideshowPlaying ? <Pause size={12} /> : <Play size={12} />}
                    <span>{isSlideshowPlaying ? 'Pause' : 'Auto Tour'}</span>
                  </button>
                </div>

                {/* Clickable Thumbnail Strip */}
                {selectedScenicData.gallery.length > 1 && (
                  <div className="scenic-thumbnails-strip">
                    {selectedScenicData.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`scenic-thumb-btn ${idx === activePhotoIndex ? 'active' : ''}`}
                        onClick={() => setActivePhotoIndex(idx)}
                      >
                        <img src={img} alt={`Thumb ${idx + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Top Scenic Highlights */}
              {selectedScenicData.scenicHighlights && selectedScenicData.scenicHighlights.length > 0 && (
                <div className="scenic-highlights-box">
                  <div className="highlights-header">
                    <Sparkles size={13} className="text-gold" />
                    <span>Must-Experience Scenic Sights:</span>
                  </div>
                  <div className="highlights-chips">
                    {selectedScenicData.scenicHighlights.map((spot, idx) => (
                      <span key={idx} className="highlight-chip">
                        📍 {spot}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Overview / Story */}
              <div className="scenic-story-box">
                <p className="scenic-overview-text">{selectedScenicData.overview}</p>
                {selectedScenicData.photographerNote && (
                  <p className="photographer-note">
                    💡 <em>{selectedScenicData.photographerNote}</em>
                  </p>
                )}
              </div>

              {/* Price & Action Buttons */}
              <div className="scenic-action-card">
                <div className="action-price-box">
                  <span className="price-label">
                    {selectedScenicData.isCatalogTour ? 'Tour Package From' : 'Estimated Custom Tour'}
                  </span>
                  <strong className="price-amount">
                    {formatPrice(selectedScenicData.price || 1250)}
                    <span className="price-sub"> / person</span>
                  </strong>
                </div>

                <div className="action-buttons-group">
                  <button
                    type="button"
                    className="btn btn-primary btn-scenic-book"
                    onClick={() => handleInitiateBookingForLocation(selectedMapLocation || selectedScenicData)}
                  >
                    <CalendarCheck size={15} />
                    <span>Book Trip to {selectedScenicData.name.split(',')[0]}</span>
                  </button>

                  <div className="action-secondary-row">
                    {selectedScenicData.isCatalogTour && selectedScenicData.matchingTour && (
                      <button
                        type="button"
                        className="btn btn-glass btn-sm btn-scenic-details"
                        onClick={() => onSelectTour(selectedScenicData.matchingTour)}
                      >
                        <Compass size={14} /> Full Route
                      </button>
                    )}

                    <button
                      type="button"
                      className="btn btn-glass btn-sm btn-scenic-lightbox"
                      onClick={() => setIsLightboxOpen(true)}
                    >
                      <Eye size={14} /> HD Gallery ({selectedScenicData.gallery.length})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="map-scenic-placeholder glass-card">
              <div className="placeholder-icon-wrap">
                <Camera size={38} className="text-cyan animate-pulse" />
              </div>
              <h4 className="placeholder-title">Select Any Place on the World Map</h4>
              <p className="placeholder-desc">
                Click any destination pin or click anywhere on Earth to explore its breathtaking photos and scenic beauty.
              </p>
              <div className="placeholder-hotspots-title">Top Scenic Hotspots:</div>
              <div className="placeholder-hotspots-grid">
                {tours.slice(0, 6).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className="hotspot-mini-pill"
                    onClick={() => handleSelectScenicDestination(t, true)}
                  >
                    <MapPin size={11} className="text-gold" />
                    <span>{t.destination}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FULLSCREEN IMMERSIVE PHOTO LIGHTBOX */}
      {selectedScenicData && (
        <DestinationPhotoLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          photos={selectedScenicData.gallery}
          captions={selectedScenicData.photoCaptions}
          destinationName={selectedScenicData.name}
          country={selectedScenicData.country}
          initialIndex={activePhotoIndex}
          price={selectedScenicData.price}
          currency={currency}
          onBookNow={() => handleInitiateBookingForLocation(selectedMapLocation || selectedScenicData)}
        />
      )}
    </section>
  );
}
