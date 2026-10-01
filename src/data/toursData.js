export const CURRENCIES = {
  USD: { code: 'USD', symbol: '$', rate: 1.0, label: 'USD ($)' },
  BDT: { code: 'BDT', symbol: '৳', rate: 121.5, label: 'BDT (৳)' },
  INR: { code: 'INR', symbol: '₹', rate: 86.8, label: 'INR (₹)' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79, label: 'GBP (£)' }
};

export const CATEGORIES = [
  'All Tours',
  'Beach & Island',
  'Mountain & Alpine',
  'Cultural & Heritage',
  'Luxury & Honeymoon',
  'Wildlife & Safari',
  'Adventure & Trekking'
];

export const REGIONS = [
  'All Regions',
  'Asia & Southeast Asia',
  'Europe',
  'Middle East',
  'South Asia',
  'Africa'
];

export const INITIAL_TOURS = [
  {
    id: 'tour-1',
    title: 'Bali Tropical Paradise & Nusa Penida Island Escape',
    subtitle: 'Private Ocean Villa, Snorkeling with Manta Rays & Ubud Sacred Sanctuary',
    destination: 'Bali, Indonesia',
    country: 'Indonesia',
    city: 'Bali / Ubud',
    region: 'Asia & Southeast Asia',
    category: 'Beach & Island',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    groupSize: 'Up to 10 Travelers',
    price: 1150,
    originalPrice: 1450,
    rating: 4.95,
    reviewsCount: 238,
    badge: 'Best Seller',
    featured: true,
    coordinates: { lat: -8.3405, lng: 115.0920 },
    mapZoom: 10,
    itineraryStops: [
      { name: 'Seminyak Luxury Coastal Resort', lat: -8.6913, lng: 115.1682, day: 1 },
      { name: 'Tegallalang Rice Terraces & Ubud', lat: -8.4312, lng: 115.2798, day: 2 },
      { name: 'Nusa Penida & Kelingking Beach', lat: -8.7492, lng: 115.5458, day: 3 },
      { name: 'Mount Batur Sunrise Volcano', lat: -8.2422, lng: 115.3753, day: 4 },
      { name: 'Uluwatu Cliffside Temple', lat: -8.8291, lng: 115.0849, day: 5 }
    ],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559628233-eb1b1a45564b?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Immerse yourself in the ethereal beauty of Bali. From sunrise swings over emerald Tegallalang rice terraces to the crystal-clear azure waters of Kelingking Beach in Nusa Penida, this curated luxury tour blends thrilling island excursions with tranquil spa wellness and 5-star oceanfront living.',
    highlights: [
      'Private speedboat excursion to Nusa Penida & Angel’s Billabong',
      'Romantic sunset seafood dinner at Jimbaran Bay',
      'Guided spiritual purification blessing at Tirta Empul Temple',
      'Luxury private pool villa stay in Seminyak and Ubud',
      'Sunset cocktail experience overlooking Uluwatu Cliff'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Denpasar & VIP Villa Check-In',
        description: 'VIP private airport welcome with floral garlands and refrigerated transfer to your luxury cliffside resort in Seminyak. Welcome dinner & Balinese cultural performance.',
        meals: 'Dinner Included',
        hotel: 'W Bali Seminyak / Maya Sanur Resort (5-Star)'
      },
      {
        day: 2,
        title: 'Ubud Cultural Heartland & Rice Terraces',
        description: 'Discover the iconic Tegallalang Rice Terraces, test the jungle swings, visit the sacred Monkey Forest sanctuary, and explore local artisan craft villages.',
        meals: 'Breakfast & Gourmet Lunch Included',
        hotel: 'Maya Ubud Resort & Spa'
      },
      {
        day: 3,
        title: 'Nusa Penida Island Adventure & Manta Point',
        description: 'Board a private yacht to Nusa Penida. Visit Kelingking Beach (T-Rex Cliff), Crystal Bay, and snorkel along coral gardens frequented by majestic manta rays.',
        meals: 'Breakfast & Seafood Beach Barbecue',
        hotel: 'Maya Ubud Resort & Spa'
      },
      {
        day: 4,
        title: 'Mount Batur Sunrise Jeep & Natural Hot Springs',
        description: 'Early morning 4x4 open-top jeep safari across the black lava plains of Mount Batur for sunrise, followed by a soothing soak in thermal mineral springs.',
        meals: 'Breakfast & Brunch Included',
        hotel: 'Maya Ubud Resort & Spa'
      },
      {
        day: 5,
        title: 'Uluwatu Temple & Fire Kecak Dance at Sunset',
        description: 'Relax with a 90-minute Balinese herbal massage, followed by sunset ocean views at Uluwatu Temple and an enchanting Kecak Fire Dance performance.',
        meals: 'Breakfast & Candlelight Jimbaran Dinner',
        hotel: 'W Bali Seminyak'
      },
      {
        day: 6,
        title: 'Leisure Souvenir Shopping & Departure',
        description: 'Savor a leisurely floating breakfast in your private pool. Chauffeur transfer to Ngurah Rai International Airport for your return flight.',
        meals: 'Floating Breakfast Included',
        hotel: 'Check-out'
      }
    ],
    inclusions: [
      '5 Nights in 5-Star Luxury Private Pool Villas',
      'All daily gourmet breakfasts, 3 lunches & 2 signature dinners',
      'Private air-conditioned chauffeur vehicle throughout',
      'Private yacht charter to Nusa Penida Island',
      'All sanctuary, temple & activity entrance fees',
      'English-speaking certified personal tour guide',
      'Complimentary airport VIP fast-track transfers'
    ],
    exclusions: [
      'International round-trip flights',
      'Travel insurance (available as add-on)',
      'Personal laundry & alcoholic premium beverages'
    ],
    departureDates: ['2026-10-10', '2026-10-24', '2026-11-08', '2026-11-22', '2026-12-05'],
    availableSeats: 6,
    difficulty: 'Easy'
  },
  {
    id: 'tour-2',
    title: 'Swiss Alps Glacier Express & Zermatt Matterhorn Odyssey',
    subtitle: 'Panoramic Alpine Trains, First-Class Mountain Resorts & Glacial Peaks',
    destination: 'Zermatt & Lucerne, Switzerland',
    country: 'Switzerland',
    city: 'Zermatt & Lucerne',
    region: 'Europe',
    category: 'Mountain & Alpine',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    groupSize: 'Up to 12 Travelers',
    price: 2450,
    originalPrice: 2890,
    rating: 4.98,
    reviewsCount: 194,
    badge: 'Iconic Journey',
    featured: true,
    coordinates: { lat: 46.0207, lng: 7.7491 },
    mapZoom: 9,
    itineraryStops: [
      { name: 'Lake Lucerne & Chapel Bridge', lat: 47.0502, lng: 8.3093, day: 1 },
      { name: 'Mount Pilatus Alpine Summit', lat: 46.9798, lng: 8.2536, day: 2 },
      { name: 'Glacier Express Scenic Railway', lat: 46.4908, lng: 9.8355, day: 3 },
      { name: 'Zermatt & Matterhorn Viewpoint', lat: 46.0207, lng: 7.7491, day: 4 },
      { name: 'Jungfraujoch - Top of Europe', lat: 46.5475, lng: 7.9824, day: 5 }
    ],
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Experience the crown jewel of Europe. Ride world-famous panoramic trains through dramatic Alpine gorges, marvel at the jagged pyramid of the Matterhorn, cruise pristine Lake Lucerne, and indulge in traditional Swiss fondue and world-class luxury hospitality.',
    highlights: [
      'First-Class Glacier Express panoramic glass-domed train journey',
      'Gornergrat cogwheel train ascent facing the iconic Matterhorn',
      'Private boat cruise across turquoise Lake Lucerne',
      'Exclusive Swiss artisanal cheese & Lindt chocolate masterclass',
      'Alpine thermal spa relaxation with heated infinity pools'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Zurich & Scenic Transit to Lucerne',
        description: 'Meet your private alpine concierge at Zurich Airport. Scenic lakefront train to Lucerne and check-in at historic lakefront palace hotel.',
        meals: 'Welcome Alpine Dinner',
        hotel: 'Hotel Schweizerhof Luzern (5-Star)'
      },
      {
        day: 2,
        title: 'Mount Pilatus Golden Roundtrip & Lake Cruise',
        description: 'Ascend Mt. Pilatus via the world’s steepest cogwheel railway. Breathtaking 360-degree views over 73 alpine peaks followed by an afternoon steamer boat cruise.',
        meals: 'Breakfast & Mountaintop Lunch',
        hotel: 'Hotel Schweizerhof Luzern'
      },
      {
        day: 3,
        title: 'The Legendary Glacier Express to Zermatt',
        description: 'Board the Glacier Express Excellence Class. Cross 291 bridges and 91 tunnels over the Oberalp Pass while enjoying a 5-course gourmet menu.',
        meals: 'Breakfast & 5-Course Train Lunch',
        hotel: 'Mont Cervin Palace Zermatt (5-Star)'
      },
      {
        day: 4,
        title: 'Matterhorn Glacier Paradise & Gornergrat',
        description: 'Travel up to Europe’s highest cable car station at 3,883m. Walk inside crystal ice palaces and capture postcard-perfect views of the Matterhorn.',
        meals: 'Breakfast & Traditional Fondue Dinner',
        hotel: 'Mont Cervin Palace Zermatt'
      },
      {
        day: 5,
        title: 'Interlaken & Jungfraujoch - Top of Europe',
        description: 'Day trip to Jungfraujoch, the UNESCO-listed saddle between Jungfrau and Mönch peaks, offering vistas across the gigantic Aletsch Glacier.',
        meals: 'Breakfast & Lunch',
        hotel: 'Mont Cervin Palace Zermatt'
      },
      {
        day: 6,
        title: 'Alpine Spa Day & St. Moritz Discovery',
        description: 'Indulge in heated mineral pools overlooking snow-draped pine forests. Evening alpine walk and fine wine tasting in Zermatt car-free village.',
        meals: 'Breakfast & Farewell Gala Dinner',
        hotel: 'Mont Cervin Palace Zermatt'
      },
      {
        day: 7,
        title: 'Scenic Zurich Transit & Departure',
        description: 'First-class rail return to Zurich Airport with memorable scenic views along the way.',
        meals: 'Breakfast Included',
        hotel: 'Departure'
      }
    ],
    inclusions: [
      '6 Nights in Luxury 5-Star Alpine Swiss Hotels',
      'Swiss Travel Pass First Class (unlimited trains, buses, boats)',
      'Glacier Express Excellence Class seat reservation & 5-course meal',
      'Gornergrat and Mount Pilatus summit excursions',
      'Daily Swiss buffet breakfast and 3 curated dinners',
      'Personal multilingual Swiss mountain guide'
    ],
    exclusions: [
      'International flights',
      'Personal ski/snowboard equipment rentals',
      'Gratuities'
    ],
    departureDates: ['2026-10-15', '2026-11-01', '2026-11-20', '2026-12-10', '2026-12-24'],
    availableSeats: 4,
    difficulty: 'Easy to Moderate'
  },
  {
    id: 'tour-3',
    title: 'Dubai Ultra-Luxury Sky, Desert Safari & Marina Yacht Expedition',
    subtitle: 'Helicopter City Tour, Private Red Dune Glamping & Burj Khalifa VIP Access',
    destination: 'Dubai, United Arab Emirates',
    country: 'United Arab Emirates',
    city: 'Dubai',
    region: 'Middle East',
    category: 'Luxury & Honeymoon',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    groupSize: 'Up to 8 Travelers',
    price: 1390,
    originalPrice: 1750,
    rating: 4.93,
    reviewsCount: 310,
    badge: 'Popular',
    featured: true,
    coordinates: { lat: 25.2048, lng: 55.2708 },
    mapZoom: 11,
    itineraryStops: [
      { name: 'Dubai Marina & Bluewaters', lat: 25.0805, lng: 55.1403, day: 1 },
      { name: 'Burj Khalifa Level 148 Sky Lounge', lat: 25.1972, lng: 55.2744, day: 2 },
      { name: 'Lahbab Red Dunes Desert Glamping', lat: 24.8986, lng: 55.5901, day: 3 },
      { name: 'Dubai Miracle Garden', lat: 25.0600, lng: 55.2447, day: 4 }
    ],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Discover futuristic splendor and Bedouin luxury. Soar above the Palm Jumeirah in a private helicopter, glide across Dubai Marina on a private catamaran yacht, conquer high desert dunes in luxury Land Cruisers, and dine at Michelin-star sky lounges.',
    highlights: [
      'At The Top Sky VIP Burj Khalifa Lounge (Level 148)',
      '17-minute private helicopter aerial tour of the Palm and coastline',
      'Sunset 4x4 dune bashing with luxury Bedouin camp dining & falconry',
      'Private sunset charter yacht across Dubai Marina and Bluewaters',
      'Chauffeured Rolls-Royce / Mercedes S-Class airport transfers'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chauffeured VIP Arrival & Downtown Marina Check-In',
        description: 'Private chauffeur pickup from Dubai International Airport. Check into your luxury suite overlooking the Arabian Gulf. Welcome cocktail on the rooftop terrace.',
        meals: 'Welcome Dinner',
        hotel: 'Address Downtown / Atlantis The Royal (5-Star)'
      },
      {
        day: 2,
        title: 'Skyline Helicopter Flight & Burj Khalifa Level 148',
        description: 'Morning scenic helicopter flight over Burj Al Arab and The World Islands. Afternoon VIP skip-the-line access to Burj Khalifa SKY Lounge with tea service.',
        meals: 'Breakfast & High Tea',
        hotel: 'Address Downtown'
      },
      {
        day: 3,
        title: 'Premium Red Dunes Desert Safari & Stargazing',
        description: 'Thrilling 4x4 desert dune safari, sandboarding, camel rides, falconry show, and an Arabian feast with belly dance and Tanoura fire dancers.',
        meals: 'Breakfast & Desert Barbecue Dinner',
        hotel: 'Bab Al Shams Desert Resort'
      },
      {
        day: 4,
        title: 'Private Yacht Cruise & Dubai Miracle Garden',
        description: 'Afternoon private luxury yacht cruise around Ain Dubai Ferris wheel and Marina towers. Evening stroll through the vibrant Dubai Miracle Garden.',
        meals: 'Breakfast & Sunset Seafood Dinner',
        hotel: 'Address Downtown'
      },
      {
        day: 5,
        title: 'Gold Souk Shopping & Private Departure',
        description: 'Explore the heritage Gold and Spice Souks in Deira with a personal shopping escort. Chauffeured transfer to DXB Airport.',
        meals: 'Breakfast Included',
        hotel: 'Departure'
      }
    ],
    inclusions: [
      '4 Nights in Luxury 5-Star Downtown & Desert Resorts',
      'Private Helicopter 17-Minute Palm Flight',
      'Burj Khalifa Level 148 VIP Access Tickets',
      'Desert Safari with VIP Private Camp Seating',
      '2-Hour Private Yacht Cruise with Refreshments',
      'Private Luxury Car with Personal Chauffeur'
    ],
    exclusions: ['Visa fees', 'Optional skydiving experience', 'International airfare'],
    departureDates: ['2026-10-12', '2026-10-25', '2026-11-10', '2026-11-28', '2026-12-15'],
    availableSeats: 8,
    difficulty: 'Easy'
  },
  {
    id: 'tour-4',
    title: 'Cox’s Bazar & Saint Martin Coral Island Luxury Cruise',
    subtitle: 'Longest Natural Sea Beach, Bay of Bengal Catamaran & Marine Sanctuary',
    destination: 'Cox’s Bazar & Saint Martin, Bangladesh',
    country: 'Bangladesh',
    city: 'Cox’s Bazar & Saint Martin',
    region: 'South Asia',
    category: 'Beach & Island',
    duration: '4 Days / 3 Nights',
    durationDays: 4,
    groupSize: 'Up to 14 Travelers',
    price: 490,
    originalPrice: 650,
    rating: 4.91,
    reviewsCount: 165,
    badge: 'Trending Local Gem',
    featured: true,
    coordinates: { lat: 21.4272, lng: 92.0058 },
    mapZoom: 10,
    itineraryStops: [
      { name: 'Kolatoli & Inani Marine Drive', lat: 21.3204, lng: 92.0520, day: 1 },
      { name: 'Teknaf Luxury Cruise Pier', lat: 20.8643, lng: 92.2985, day: 2 },
      { name: 'Saint Martin Coral Island Resort', lat: 20.6273, lng: 92.3225, day: 3 },
      { name: 'Chera Dwip Coral Sanctuary', lat: 20.5960, lng: 92.3364, day: 4 }
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Unwind along the unbroken 120km golden sands of Cox’s Bazar before cruising on a luxury ship across the turquoise Bay of Bengal to Saint Martin’s Island and the secluded Chera Dwip coral paradise. Enjoy fresh king prawns, coconut groves, and spectacular ocean sunsets.',
    highlights: [
      'Marine Drive scenic coastal drive via open-top Jeep',
      'Luxury ship cruise across the Bay of Bengal to Saint Martin',
      'Chera Dwip coral reef exploration by wooden speed craft',
      'Live coral fish and lobster barbecue on the beach under stars',
      'Inani Beach coral stone walk and Himchari waterfall trek'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Cox’s Bazar & Marine Drive Sunset',
        description: 'Meet and greet at Cox’s Bazar Airport. Check into oceanfront luxury resort. Late afternoon scenic drive down the world-famous Marine Drive to Inani Beach.',
        meals: 'Welcome Seafood Dinner',
        hotel: 'Sayeman Beach Resort / Mermaid Beach Resort (5-Star)'
      },
      {
        day: 2,
        title: 'Luxury Cruise to Saint Martin Island',
        description: 'Board the premium air-conditioned cruise vessel from Teknaf/Nuniarchara to Saint Martin Island. Check in to beachfront eco-cottages surrounded by coconut palms.',
        meals: 'Breakfast & Fresh Seafood Lunch',
        hotel: 'Saint Martin Beach Eco Luxury Resort'
      },
      {
        day: 3,
        title: 'Chera Dwip Exploration & Coral Reef Walk',
        description: 'Trek or boat to Chera Dwip, the southernmost tip of Bangladesh. Experience crystal-clear waters and vibrant marine life. Evening beach bonfire with musical acoustic session.',
        meals: 'Breakfast & Island Barbecue Dinner',
        hotel: 'Saint Martin Beach Eco Luxury Resort'
      },
      {
        day: 4,
        title: 'Return Cruise & Cox’s Bazar Departure',
        description: 'Morning swim in the blue ocean. Midday return cruise to Cox’s Bazar mainland, followed by airport transfer for your flight home.',
        meals: 'Breakfast & Lunch',
        hotel: 'Departure'
      }
    ],
    inclusions: [
      '3 Nights in Premium Beachfront Resorts & Island Cottages',
      'Round-trip Luxury Cruise tickets to Saint Martin',
      'All meals featuring fresh coastal seafood & authentic local cuisine',
      'Private AC transport for Cox’s Bazar sightseeing and transfers',
      'Chera Dwip boat expedition and guide service'
    ],
    exclusions: ['Airfare to/from Cox’s Bazar', 'Personal shopping', 'Water sports rentals'],
    departureDates: ['2026-10-18', '2026-11-05', '2026-11-20', '2026-12-08', '2026-12-25'],
    availableSeats: 10,
    difficulty: 'Easy'
  },
  {
    id: 'tour-5',
    title: 'Cappadocia Hot Air Balloon Sunrise & Cave Suites Experience',
    subtitle: 'Fairy Chimneys, Underground Cities, Pottery Villages & Whirling Dervishes',
    destination: 'Cappadocia & Goreme, Turkey',
    country: 'Turkey',
    city: 'Goreme, Cappadocia',
    region: 'Europe',
    category: 'Adventure & Trekking',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    groupSize: 'Up to 10 Travelers',
    price: 1280,
    originalPrice: 1590,
    rating: 4.97,
    reviewsCount: 221,
    badge: 'Dream Destination',
    featured: true,
    coordinates: { lat: 38.6431, lng: 34.8289 },
    mapZoom: 11,
    itineraryStops: [
      { name: 'Goreme Historical Park', lat: 38.6431, lng: 34.8289, day: 1 },
      { name: 'Hot Air Balloon Launch Site', lat: 38.6534, lng: 34.8430, day: 2 },
      { name: 'Kaymakli Underground City', lat: 38.4597, lng: 34.7521, day: 3 },
      { name: 'Pigeon Valley & Uchisar Castle', lat: 38.6298, lng: 34.8055, day: 4 }
    ],
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Float amidst hundreds of vibrant balloons over otherworldly valleys and rock formations at sunrise. Sleep in an authentic luxury cave suite carved into volcanic tufa, explore deep subterranean cities, and relish Anatolian gourmet delicacies.',
    highlights: [
      'VIP sunrise hot air balloon flight with champagne toast',
      'Luxury authentic cave suite hotel with terrace balloon views',
      'Tour of Kaymakli ancient underground city (8 levels underground)',
      'Horseback riding at sunset through the Valley of the Swords',
      'Traditional pottery making workshop in Avanos'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Cappadocia & Cave Suite Check-In',
        description: 'Transfer from Nevsehir or Kayseri Airport to Goreme. Settle into your hand-carved stone cave suite with panoramic valley terrace views.',
        meals: 'Turkish Welcome Feast',
        hotel: 'Museum Hotel / Argos in Cappadocia (5-Star Luxury Cave)'
      },
      {
        day: 2,
        title: 'Dawn Hot Air Balloon Flight & Goreme Open Air Museum',
        description: 'Pre-dawn pickup for a hot air balloon flight over fairy chimneys. Afternoon exploration of UNESCO Byzantine rock-cut monasteries with pristine frescoes.',
        meals: 'Breakfast & Traditional Pottery Kebab Lunch',
        hotel: 'Museum Hotel Cappadocia'
      },
      {
        day: 3,
        title: 'Kaymakli Underground City & Pigeon Valley Hike',
        description: 'Explore the maze of Kaymakli Underground City, followed by a gentle hike through the picturesque Pigeon Valley and Uchisar Castle fortress.',
        meals: 'Breakfast & Organic Farmstead Lunch',
        hotel: 'Museum Hotel Cappadocia'
      },
      {
        day: 4,
        title: 'Sunset ATV Quad Tour & Whirling Dervish Ceremony',
        description: 'Drive ATVs through Love Valley and Red Valley during golden hour. Evening spiritual Sema ceremony of the Whirling Dervishes in a 13th-century Caravanserai.',
        meals: 'Breakfast & Dinner',
        hotel: 'Museum Hotel Cappadocia'
      },
      {
        day: 5,
        title: 'Leisure Stroll & Airport Departure',
        description: 'Enjoy Turkish breakfast on your cave terrace watching balloons before your airport transfer.',
        meals: 'Grand Turkish Breakfast',
        hotel: 'Departure'
      }
    ],
    inclusions: [
      '4 Nights in Luxury 5-Star Heritage Cave Suite Hotel',
      'Guaranteed Sunrise Hot Air Balloon Flight with certificate',
      'All airport private chauffeur transfers',
      'Daily Turkish organic breakfast and 3 special dinners',
      'Professional licensed English-speaking Turkish guide',
      'All museum and underground city entry tickets'
    ],
    exclusions: ['International flights', 'Personal tips', 'Alcoholic drinks outside meals'],
    departureDates: ['2026-10-14', '2026-10-28', '2026-11-12', '2026-11-26'],
    availableSeats: 5,
    difficulty: 'Moderate'
  },
  {
    id: 'tour-6',
    title: 'Kyoto Zen Temples & Mount Fuji Cherry Blossom Tour',
    subtitle: 'Shinkansen Bullet Train, Geisha Districts, Bamboo Groves & Onsen Hot Springs',
    destination: 'Kyoto & Tokyo, Japan',
    country: 'Japan',
    city: 'Kyoto & Tokyo',
    region: 'Asia & Southeast Asia',
    category: 'Cultural & Heritage',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    groupSize: 'Up to 10 Travelers',
    price: 2190,
    originalPrice: 2590,
    rating: 4.96,
    reviewsCount: 187,
    badge: 'Cultural Wonder',
    featured: true,
    coordinates: { lat: 35.0116, lng: 135.7681 },
    mapZoom: 10,
    itineraryStops: [
      { name: 'Tokyo Shinjuku & Shibuya Crossing', lat: 35.6595, lng: 139.7004, day: 1 },
      { name: 'Mount Fuji & Lake Ashi Onsen', lat: 35.3606, lng: 138.7274, day: 2 },
      { name: 'Arashiyama Bamboo Forest Kyoto', lat: 35.0170, lng: 135.6710, day: 3 },
      { name: 'Fushimi Inari-taisha Torii Gates', lat: 34.9671, lng: 135.7727, day: 4 },
      { name: 'Nara Deer Park & Todai-ji Temple', lat: 34.6851, lng: 135.8398, day: 5 }
    ],
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Step into a world of timeless elegance. Walk under thousands of vermilion torii gates at Fushimi Inari, listen to the whisper of the Arashiyama Bamboo Forest, witness Mount Fuji from Hakone onsen baths, and ride the bullet train across Japan.',
    highlights: [
      'Private tea ceremony with a Geisha in historical Gion',
      'Shinkansen Bullet Train first-class reserved ride from Tokyo to Kyoto',
      'Traditional Ryokan stay with private open-air Onsen bath facing Mt. Fuji',
      'Authentic Kaiseki 9-course culinary dining experience',
      'Early morning private walk through Fushimi Inari Taisha gates'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Tokyo & Modern Skyline Welcome',
        description: 'Private airport greeting. Check into Shinjuku luxury hotel. Evening neon city stroll through Shibuya Crossing and welcome Wagyu dinner.',
        meals: 'Tokyo Welcome Wagyu Dinner',
        hotel: 'The Capitol Hotel Tokyu (5-Star)'
      },
      {
        day: 2,
        title: 'Mount Fuji, Hakone Ropeway & Thermal Onsen',
        description: 'Private coach to Hakone. Lake Ashi pirate boat cruise, Owakudani volcanic sulphur valley ropeway, and night at a traditional hot spring Ryokan.',
        meals: 'Breakfast & Kaiseki Multi-Course Dinner',
        hotel: 'Hakone Ginyu Luxury Ryokan'
      },
      {
        day: 3,
        title: 'Bullet Train to Ancient Imperial Kyoto',
        description: 'Board the Shinkansen reaching 300 km/h to Kyoto. Afternoon visit to the gleaming Golden Pavilion (Kinkaku-ji) and Ryoan-ji rock garden.',
        meals: 'Breakfast & Bento Box on Bullet Train',
        hotel: 'The Ritz-Carlton Kyoto (5-Star)'
      },
      {
        day: 4,
        title: 'Arashiyama Bamboo Forest & Fushimi Inari',
        description: 'Sunrise at Fushimi Inari 10,000 torii gates. Afternoon stroll through the towering Arashiyama Bamboo Grove and Tenryu-ji Temple.',
        meals: 'Breakfast & Kyoto Kaiseki Dinner',
        hotel: 'The Ritz-Carlton Kyoto'
      },
      {
        day: 5,
        title: 'Gion Geisha District & Private Tea Ceremony',
        description: 'Explore preserved wooden machiya houses in Gion. Participate in a private Chado tea ceremony conducted by a senior master.',
        meals: 'Breakfast & Lunch',
        hotel: 'The Ritz-Carlton Kyoto'
      },
      {
        day: 6,
        title: 'Nara Deer Park & Giant Buddha at Todai-ji',
        description: 'Short day trip to Nara. Feed friendly bow-greeting sacred deer and gaze upon the bronze Daibutsu at Todai-ji.',
        meals: 'Breakfast & Farewell Sukiyaki Dinner',
        hotel: 'The Ritz-Carlton Kyoto'
      },
      {
        day: 7,
        title: 'Kansai / Tokyo Airport Departure',
        description: 'Convenient transfer to Osaka Kansai (KIX) or Tokyo Haneda (HND) Airport for departure.',
        meals: 'Breakfast Included',
        hotel: 'Departure'
      }
    ],
    inclusions: [
      '6 Nights in 5-Star Luxury Hotels & Traditional Onsen Ryokans',
      'Japan Rail Pass Bullet Train Reserved Tickets',
      'Private Geisha Tea Ceremony Experience',
      'Daily authentic Japanese & western breakfasts, 3 Kaiseki feasts',
      'Dedicated certified English tour guide',
      'All local transit and private luggage transfers between hotels'
    ],
    exclusions: ['International flights', 'Personal kimono rentals (optional)', 'Travel insurance'],
    departureDates: ['2026-10-20', '2026-11-04', '2026-11-18', '2026-12-02'],
    availableSeats: 6,
    difficulty: 'Easy'
  },
  {
    id: 'tour-7',
    title: 'Maldives Private Overwater Villa & Coral Atoll Retreat',
    subtitle: 'Private Infinity Pool, Seaplane Flight, Dolphin Sunset Cruise & Spa Haven',
    destination: 'South Male Atoll, Maldives',
    country: 'Maldives',
    city: 'South Male Atoll',
    region: 'South Asia',
    category: 'Luxury & Honeymoon',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    groupSize: 'Private (2-4 Travelers)',
    price: 1890,
    originalPrice: 2350,
    rating: 4.99,
    reviewsCount: 156,
    badge: 'Ultra Luxury',
    featured: true,
    coordinates: { lat: 4.1755, lng: 73.5093 },
    mapZoom: 11,
    itineraryStops: [
      { name: 'Velana International Seaplane Terminal', lat: 4.1918, lng: 73.5290, day: 1 },
      { name: 'Private Lagoon Overwater Villa', lat: 3.9520, lng: 73.4730, day: 2 },
      { name: 'Baa Atoll Manta Biosphere', lat: 5.1322, lng: 73.0163, day: 3 },
      { name: 'Deserted Sandbank Sunset Island', lat: 3.9800, lng: 73.4900, day: 4 }
    ],
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Wake up to the gentle lap of turquoise waves right beneath your bedroom. Descend your private stairs directly into a protected lagoon teeming with tropical fish, dine under the stars on a secluded sandbank, and enjoy the ultimate luxury island escape.',
    highlights: [
      'Scenic seaplane transfer over turquoise coral atolls',
      'Overwater pool villa with direct ocean staircase & glass floor',
      'Private sunset dolphin-watching champagne cruise',
      'All-inclusive fine dining with sommelier wine pairings',
      'Underwater restaurant dining experience'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Seaplane Arrival & Overwater Villa Check-In',
        description: 'Lounge greeting at Velana International Airport, followed by a scenic 30-minute seaplane flight to your private coral island resort. Personal villa butler introduction.',
        meals: 'Gourmet Dinner Included',
        hotel: 'Anantara Kihavah / Soneva Jani (5-Star Overwater)'
      },
      {
        day: 2,
        title: 'Lagoon Snorkeling & Sandbank Sunset Dinner',
        description: 'Guided coral reef safari with marine biologists. Evening candlelit 4-course dinner set on a deserted white sandbank isolated in the ocean.',
        meals: 'Breakfast, Lunch & Sandbank Dinner',
        hotel: 'Anantara Kihavah Overwater Villa'
      },
      {
        day: 3,
        title: 'Underwater Spa Treatment & Dolphin Cruise',
        description: 'Relax with signature botanical massage treatments inside an overwater spa with glass viewing floor. At golden hour, cruise out to watch wild spinner dolphins.',
        meals: 'All-Inclusive Dine Around',
        hotel: 'Anantara Kihavah Overwater Villa'
      },
      {
        day: 4,
        title: 'Water Sports & Stargazing Observatory',
        description: 'Complimentary paddleboarding, transparent sea kayaking, and night stargazing with the island astronomer through the resort telescope.',
        meals: 'All-Inclusive Dine Around',
        hotel: 'Anantara Kihavah Overwater Villa'
      },
      {
        day: 5,
        title: 'Floating Champagne Breakfast & Farewell Seaplane',
        description: 'Enjoy a luxurious floating breakfast served in your private infinity pool. Return seaplane flight to Male Airport.',
        meals: 'Floating Breakfast Included',
        hotel: 'Departure'
      }
    ],
    inclusions: [
      '4 Nights in Luxury Ocean Pool Overwater Villa',
      'Round-trip Scenic Seaplane Transfers',
      'All-inclusive breakfast, lunch, 3-course dinners and drinks',
      'Sunset Dolphin Cruise with Champagne and Canapés',
      'Complimentary snorkeling gear and non-motorized water sports',
      'Dedicated 24/7 Island Villa Host / Butler'
    ],
    exclusions: ['International airfare to Male', 'Motorized jet ski rentals', 'Gratuities'],
    departureDates: ['2026-10-10', '2026-10-25', '2026-11-15', '2026-12-01', '2026-12-20'],
    availableSeats: 4,
    difficulty: 'Easy'
  },
  {
    id: 'tour-8',
    title: 'Sundarbans Royal Bengal Tiger Mangrove Safari',
    subtitle: 'World Heritage Mangrove Forest, Private River Vessel & Wildlife Safari',
    destination: 'Sundarbans, Bangladesh',
    country: 'Bangladesh',
    city: 'Sundarbans Mangrove',
    region: 'South Asia',
    category: 'Wildlife & Safari',
    duration: '4 Days / 3 Nights',
    durationDays: 4,
    groupSize: 'Up to 12 Travelers',
    price: 420,
    originalPrice: 550,
    rating: 4.88,
    reviewsCount: 112,
    badge: 'Eco Safari',
    featured: false,
    coordinates: { lat: 21.9497, lng: 89.1833 },
    mapZoom: 10,
    itineraryStops: [
      { name: 'Mongla Port Private Vessel Pier', lat: 22.4842, lng: 89.6012, day: 1 },
      { name: 'Kotka Wildlife Sanctuary Watch Tower', lat: 21.8530, lng: 89.7890, day: 2 },
      { name: 'Kochikhali Tiger Trail & Quiet Canals', lat: 21.8490, lng: 89.8400, day: 3 },
      { name: 'Hiron Point & Karamjal Eco Center', lat: 21.7820, lng: 89.4670, day: 4 }
    ],
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Navigate deep into the world’s largest mangrove forest. Aboard a comfortable safari vessel, glide along silent tidal creeks in search of Royal Bengal tigers, spotted deer, estuarine crocodiles, and rare kingfishers under the guidance of forest security guards.',
    highlights: [
      'Exclusive air-conditioned safari cruise vessel with private cabins',
      'Kotka Wildlife Sanctuary watchtower wildlife sighting',
      'Silent country boat morning creek cruising for birding',
      'Armed forest guards & veteran wildlife naturalist accompaniment',
      'Traditional Bengali river cuisine with fresh Hilsha & Bhetki fish'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Khulna / Mongla Port Boarding & Forest Entry',
        description: 'Morning boarding at Mongla Port. Cruise past river bends into the forest. Briefing and entry permit registration at Harbaria Eco-tourism center.',
        meals: 'Lunch & Welcome River Dinner',
        hotel: 'MV The Wave Luxury Cruiser (En-suite Cabin)'
      },
      {
        day: 2,
        title: 'Kotka Wildlife Sanctuary & Jamtola Sea Beach',
        description: 'Early morning silent canal cruise to observe spotted deer and birds. Hike through Jamtola Beach pine forest and ascend Kotka watchtower.',
        meals: 'Breakfast, Forest Picnic Lunch & BBQ Dinner',
        hotel: 'MV The Wave Luxury Cruiser'
      },
      {
        day: 3,
        title: 'Kachikhali Tiger Point & Mangrove Canopy Walk',
        description: 'Morning exploration of Kachikhali wildlife trail. Observe giant mudskippers, monitor lizards, and tiger pugmarks along soft riverbanks.',
        meals: 'Breakfast, Lunch & Bengali Feast',
        hotel: 'MV The Wave Luxury Cruiser'
      },
      {
        day: 4,
        title: 'Karamjal Crocodile Breeding Center & Disembarkation',
        description: 'Visit Karamjal eco-center to see endangered batagur baska turtles and saltwater crocodiles. Return cruise to Mongla port for onward travel.',
        meals: 'Breakfast & Farewell Lunch',
        hotel: 'Disembarkation'
      }
    ],
    inclusions: [
      '3 Nights accommodation aboard air-conditioned cruiser vessel',
      'All meals freshly cooked on board (Bengali and Continental dishes)',
      'Forest department revenue, permits, and 2 armed security guards',
      'Experienced English-speaking wildlife naturalist guide',
      'Unlimited tea, coffee, and bottled drinking water'
    ],
    exclusions: ['Transit to Mongla / Khulna', 'Personal camera fees', 'Tips for ship crew'],
    departureDates: ['2026-10-16', '2026-11-06', '2026-11-20', '2026-12-11'],
    availableSeats: 8,
    difficulty: 'Moderate'
  }
];

export const INITIAL_BOOKINGS = [
  {
    id: 'TRV-84920-X',
    tourId: 'tour-1',
    tourTitle: 'Bali Tropical Paradise & Nusa Penida Island Escape',
    destination: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
    coordinates: { lat: -8.3405, lng: 115.0920 },
    leadTraveler: {
      fullName: 'Tahmidur Rahman',
      email: 'tahmid.travels@example.com',
      phone: '+880 1712 345678',
      passportOrId: 'A09482194',
      specialRequests: 'Honeymoon arrangement, vegetarian meal on day 2'
    },
    travelDate: '2026-10-24',
    guests: { adults: 2, children: 0 },
    tier: 'Deluxe Ocean View Villa',
    tierMultiplier: 1.25,
    addOns: ['Airport VIP Chauffeur', 'Travel Insurance Coverage'],
    totalPriceUSD: 2950,
    status: 'Confirmed',
    paymentMethod: 'Credit Card (Visa)',
    bookingDate: '2026-09-15'
  }
];

// Popular global locations for instant autocomplete, offline verification, and custom booking
export const POPULAR_GLOBAL_LOCATIONS = [
  {
    name: 'Paris, France',
    city: 'Paris',
    country: 'France',
    region: 'Europe',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    category: 'Cultural & Heritage',
    suggestedPrice: 1650,
    suggestedDays: '6 Days / 5 Nights',
    description: 'City of Lights, Eiffel Tower, Louvre Museum, Seine River Cruise and Haute Cuisine.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1471623432079-b009d30b6729?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1520939817895-060bdef4dc1a?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'The Eiffel Tower rising majestically against a pastel Parisian sunset',
      'Intricate Parisian haussmannian architecture along the Seine River',
      'The Louvre glass pyramid illuminated under the Parisian night sky',
      'Cobblestone romance in the historic bohemian alleys of Montmartre',
      'Café culture and flower stalls along Saint-Germain-des-Prés'
    ],
    aestheticScore: 9.8,
    vibeTags: ['City of Romance', 'Architectural Splendor', 'Golden Hour Lights', 'Haute Couture'],
    scenicHighlights: ['Eiffel Tower Summit', 'Louvre Museum', 'Seine Twilight Cruise', 'Montmartre Sacré-Cœur']
  },
  {
    name: 'Rome, Italy',
    city: 'Rome',
    country: 'Italy',
    region: 'Europe',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    category: 'Cultural & Heritage',
    suggestedPrice: 1580,
    suggestedDays: '5 Days / 4 Nights',
    description: 'Colosseum, Vatican City, Roman Forum, Trevi Fountain and authentic Italian dining.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'The colossal amphitheater bathed in dramatic Mediterranean twilight',
      'Trevi Fountain glowing with baroque marble elegance and turquoise waters',
      'St. Peter’s Basilica dome silhouetted against glowing Tuscan skies',
      'Charming ivy-draped piazzas and classic trattorias of Trastevere'
    ],
    aestheticScore: 9.7,
    vibeTags: ['Ancient Marvels', 'Baroque Fountains', 'Vibrant Piazzas', 'Golden Sunsets'],
    scenicHighlights: ['The Colosseum', 'Trevi Fountain Coins', 'Vatican St. Peter’s', 'Spanish Steps']
  },
  {
    name: 'Santorini, Greece',
    city: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    coordinates: { lat: 36.3932, lng: 25.4615 },
    category: 'Luxury & Honeymoon',
    suggestedPrice: 1950,
    suggestedDays: '5 Days / 4 Nights',
    description: 'Whitewashed cliffside villas, cobalt Aegean Sea, Oia sunset and private catamaran cruise.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'World-famous blue domes and whitewashed villas cascading down the volcanic caldera',
      'Breathtaking Oia sunset painting the Aegean Sea in fiery amber hues',
      'Cliffside private infinity pools suspended over the crystalline sea',
      'Catamaran cruising alongside the dramatic volcanic Red Beach'
    ],
    aestheticScore: 9.9,
    vibeTags: ['Cycladic Elegance', 'Iconic Blue Domes', 'Dream Sunsets', 'Caldera Views'],
    scenicHighlights: ['Oia Sunset Castle', 'Fira Cliffside Walk', 'Amoudi Bay', 'Red Beach']
  },
  {
    name: 'Cairo & Giza, Egypt',
    city: 'Cairo',
    country: 'Egypt',
    region: 'Africa',
    coordinates: { lat: 30.0444, lng: 31.2357 },
    category: 'Cultural & Heritage',
    suggestedPrice: 1350,
    suggestedDays: '6 Days / 5 Nights',
    description: 'Great Pyramids of Giza, Sphinx, Nile River luxury Felucca cruise and Egyptian Museum.',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'The Great Pyramids of Giza rising silently against the golden desert dawn',
      'The mythical Great Sphinx standing guard over millenniums of pharaonic wonders',
      'Sunset felucca sailing with white canvas along the tranquil Nile River',
      'Bustling Khan el-Khalili bazaar illuminated with ornate brass lanterns'
    ],
    aestheticScore: 9.6,
    vibeTags: ['Wonder of Antiquity', 'Nile Felucca', 'Golden Dunes', 'Pharaonic Royalty'],
    scenicHighlights: ['Pyramid of Khufu', 'Great Sphinx', 'Nile Sunset Cruise', 'Grand Egyptian Museum']
  },
  {
    name: 'Bangkok & Phuket, Thailand',
    city: 'Bangkok',
    country: 'Thailand',
    region: 'Asia & Southeast Asia',
    coordinates: { lat: 13.7563, lng: 100.5018 },
    category: 'Beach & Island',
    suggestedPrice: 890,
    suggestedDays: '6 Days / 5 Nights',
    description: 'Grand Palace, floating markets, Phi Phi islands private yacht and Thai street food tours.',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Gilded spires of Wat Arun catching radiant sunset reflections across Chao Phraya',
      'Towering limestone karsts rising out of emerald Andaman waters at Phi Phi',
      'Monks in saffron robes amidst the sacred serenity of ancient Buddhist temples',
      'Traditional longtail boats resting on powdery white sands of Maya Bay'
    ],
    aestheticScore: 9.7,
    vibeTags: ['Emerald Lagoons', 'Golden Temples', 'Limestone Cliffs', 'Tropical Haven'],
    scenicHighlights: ['Wat Arun Sunset', 'Phi Phi Islands', 'James Bond Island', 'Grand Palace']
  },
  {
    name: 'Singapore Marina Bay',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia & Southeast Asia',
    coordinates: { lat: 1.3521, lng: 103.8198 },
    category: 'Luxury & Honeymoon',
    suggestedPrice: 1450,
    suggestedDays: '4 Days / 3 Nights',
    description: 'Gardens by the Bay, Marina Bay Sands infinity pool, Sentosa Island and Michelin dining.',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Futuristic Supertree Grove at Gardens by the Bay aglow with neon luminescence',
      'The iconic skyline of Marina Bay Sands reflected in still harbor waters',
      'Indoor waterfalls and lush cloud forest biomes in the Flower Dome',
      'Vibrant night laser and water fountain spectacle over Marina Bay'
    ],
    aestheticScore: 9.7,
    vibeTags: ['Futuristic Garden City', 'Skyline Wonder', 'Laser Night Show', 'Ultramodern Luxury'],
    scenicHighlights: ['Supertree Grove', 'Marina Bay Sands SkyPark', 'Cloud Forest Waterfall', 'Sentosa Cove']
  },
  {
    name: 'Sylhet & Ratargul, Bangladesh',
    city: 'Sylhet',
    country: 'Bangladesh',
    region: 'South Asia',
    coordinates: { lat: 24.8949, lng: 91.8687 },
    category: 'Wildlife & Safari',
    suggestedPrice: 350,
    suggestedDays: '3 Days / 2 Nights',
    description: 'Rolling tea gardens, Ratargul freshwater swamp forest, Jaflong zero point and Lalakhal crystal river.',
    image: 'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Endless rolling emerald tea estates carpeted across gentle mist-covered hills',
      'Amazon of Bangladesh: Gliding quietly through the submerged canopies of Ratargul Swamp Forest',
      'Crystal emerald waters of Lalakhal River flowing against the Meghalaya mountain backdrop',
      'Cascading stone water streams and pebble shores of Jaflong Zero Point'
    ],
    aestheticScore: 9.6,
    vibeTags: ['Emerald Tea Gardens', 'Freshwater Swamp Forest', 'Crystal Rivers', 'Meghalaya Foothills'],
    scenicHighlights: ['Ratargul Swamp Forest', 'Malnicherra Tea Estate', 'Lalakhal Blue River', 'Jaflong Springs']
  },
  {
    name: 'Sajek Valley & Bandarban, Bangladesh',
    city: 'Sajek Valley',
    country: 'Bangladesh',
    region: 'South Asia',
    coordinates: { lat: 23.3820, lng: 92.2938 },
    category: 'Mountain & Alpine',
    suggestedPrice: 380,
    suggestedDays: '4 Days / 3 Nights',
    description: 'Kingdom of clouds in Sajek, Konglak hill peak, Nilgiri clouds, Boga Lake and tribal culture.',
    image: 'https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Ocean of floating white clouds engulfing the peaks of Sajek Valley at sunrise',
      'Panoramic 360-degree vistas from Konglak Pahar overlooking the Lushai mountain range',
      'Nilgiri cloud resort touching the heaven above Bandarban hill tract valleys',
      'Stargazing and Milky Way canopy over rustic bamboo wooden cottages'
    ],
    aestheticScore: 9.8,
    vibeTags: ['Kingdom of Clouds', 'Valley Sunrise', 'Hill Tribe Harmony', 'Milky Way Skies'],
    scenicHighlights: ['Konglak Pahar Peak', 'Helipad Sunset Point', 'Nilgiri Hill Resort', 'Ruilui Para Cottages']
  },
  {
    name: 'Reykjavik & Aurora, Iceland',
    city: 'Reykjavik',
    country: 'Iceland',
    region: 'Europe',
    coordinates: { lat: 64.1466, lng: -21.9426 },
    category: 'Adventure & Trekking',
    suggestedPrice: 2250,
    suggestedDays: '6 Days / 5 Nights',
    description: 'Blue Lagoon geothermal waters, Golden Circle waterfalls, black sand beach and Northern Lights chasing.',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1483373018724-770a096812ff?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'The ethereal green ribbons of the Aurora Borealis dancing across Arctic night skies',
      'Steaming milky-blue geothermal waters of the world-famous Blue Lagoon',
      'Mighty Gullfoss waterfall roaring through a snow-covered canyon',
      'Black basalt columns and crashing North Atlantic swells at Reynisfjara'
    ],
    aestheticScore: 9.9,
    vibeTags: ['Northern Lights Aurora', 'Geothermal Spas', 'Black Sand Beach', 'Glacial Falls'],
    scenicHighlights: ['Aurora Borealis Chasing', 'Blue Lagoon Retreat', 'Gullfoss Falls', 'Reynisfjara Coast']
  },
  {
    name: 'London, United Kingdom',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    category: 'Cultural & Heritage',
    suggestedPrice: 1720,
    suggestedDays: '5 Days / 4 Nights',
    description: 'Tower of London, Big Ben, Westminster Abbey, London Eye and West End theater shows.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Big Ben and the Palace of Westminster illuminated across the River Thames',
      'Tower Bridge suspended in golden sunset light with red double-decker buses',
      'Regent Street curves decorated with festive celestial angel lights',
      'The London Eye rotating slowly above the bustling South Bank cultural promenade'
    ],
    aestheticScore: 9.6,
    vibeTags: ['Royal Heritage', 'Thames River Vistas', 'Historic Architecture', 'Cosmopolitan Charm'],
    scenicHighlights: ['Tower Bridge', 'Big Ben & Parliament', 'London Eye Sunset', 'Westminster Abbey']
  },
  {
    name: 'New York City, USA',
    city: 'New York',
    country: 'United States',
    region: 'Americas',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    category: 'Luxury & Honeymoon',
    suggestedPrice: 1890,
    suggestedDays: '5 Days / 4 Nights',
    description: 'Times Square, Central Park, Broadway shows, Statue of Liberty and Manhattan skyline helicopter tour.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'The dazzling, neon-drenched electricity of Times Square at midnight',
      'Iconic Empire State Building towering over Manhattan’s grid of city lights',
      'Central Park lake reflecting golden autumn canopies amidst soaring skyscrapers',
      'Walking across the wooden planks of Brooklyn Bridge with East River breezes'
    ],
    aestheticScore: 9.7,
    vibeTags: ['Skyline of Dreams', 'Central Park Oases', 'Times Square Glow', 'Broadway Nights'],
    scenicHighlights: ['Empire State Building', 'Central Park Bow Bridge', 'Brooklyn Bridge', 'Times Square']
  },
  {
    name: 'Sydney, Australia',
    city: 'Sydney',
    country: 'Australia',
    region: 'Oceania',
    coordinates: { lat: -33.8688, lng: 151.2093 },
    category: 'Beach & Island',
    suggestedPrice: 1850,
    suggestedDays: '6 Days / 5 Nights',
    description: 'Sydney Opera House, Harbour Bridge climb, Bondi Beach surfing and Blue Mountains day excursion.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1524293581917-878a6d017cba?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'The architectural shells of the Sydney Opera House shining beside Sydney Harbour',
      'The arch of the Harbour Bridge silhouetted against a vibrant Australian sunset',
      'Golden swells and rolling Pacific waves crashing on the sands of Bondi Beach',
      'Blue Mountains eucalypt haze and the dramatic sandstone Three Sisters peaks'
    ],
    aestheticScore: 9.8,
    vibeTags: ['Harbour Architecture', 'Pacific Surf Sands', 'Blue Mountains Mist', 'Sun-Kissed Coast'],
    scenicHighlights: ['Sydney Opera House', 'Bondi Icebergs Pool', 'Sydney Harbour Bridge', 'Three Sisters Lookout']
  },
  {
    name: 'Serengeti & Zanzibar, Tanzania',
    city: 'Serengeti',
    country: 'Tanzania',
    region: 'Africa',
    coordinates: { lat: -2.3333, lng: 34.8333 },
    category: 'Wildlife & Safari',
    suggestedPrice: 2390,
    suggestedDays: '7 Days / 6 Nights',
    description: 'The Great Migration, Big Five wildlife safari, hot air balloon savanna flight and Zanzibar spices.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80'
    ],
    photoCaptions: [
      'Magnificent male lion surveying the boundless gold savannas of the Serengeti',
      'Hot air balloon floating at dawn above herds during the Great Migration',
      'Acacia tree silhouette against a blazing African sunset over the plains',
      'Zanzibar turquoise sandbanks and traditional wooden dhow boats'
    ],
    aestheticScore: 9.9,
    vibeTags: ['Great Migration', 'African Savanna Sunset', 'Zanzibar Turquoise', 'Big Five Kingdom'],
    scenicHighlights: ['Serengeti Balloon Safari', 'Ngorongoro Crater', 'Zanzibar Nungwi Beach', 'Mara River Crossing']
  }
];

// Global Intelligent Scenic Photo Vault for any country, city, or terrain clicked on Earth
export const GLOBAL_SCENIC_PHOTO_VAULT = {
  // Countries
  'India': {
    gallery: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'The pure white marble wonder of the Taj Mahal glowing at sunrise in Agra',
      'Majestic palaces of Rajasthan reflecting across tranquil lake waters in Udaipur',
      'Serene backwaters of Kerala with traditional luxury houseboats gliding by',
      'Snow-capped Himalayan peaks of Kashmir with blooming saffron valleys'
    ],
    highlights: ['Taj Mahal Wonder', 'Udaipur Lake Palace', 'Kerala Backwaters', 'Kashmir Dal Lake'],
    vibeTags: ['Taj Mahal Wonder', 'Royal Palaces', 'Himalayan Vistas', 'Spice Coasts'],
    score: 9.8
  },
  'Japan': {
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'Mount Fuji capped in snow framed by blooming pink cherry blossoms',
      'Electric neon streets of Shinjuku and Shibuya crossing in Tokyo',
      'Torii gates of Fushimi Inari winding through sacred forest paths in Kyoto',
      'Bamboo grove of Arashiyama bathed in serene morning emerald light'
    ],
    highlights: ['Mount Fuji Sunrise', 'Fushimi Inari Torii', 'Arashiyama Bamboo', 'Shibuya Neon'],
    vibeTags: ['Sakura Cherry Blossoms', 'Mount Fuji Majesty', 'Zen Gardens', 'Neon Metropolises'],
    score: 9.9
  },
  'Switzerland': {
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'The iconic jagged pyramid of the Matterhorn rising over alpine meadows in Zermatt',
      'Turquoise waters of Lake Lucerne framed by snow-dusted Alpine summits',
      'First-class red train crossing historic stone viaducts through mountain passes',
      'Lush Swiss valleys adorned with traditional chalets and wild alpine flora'
    ],
    highlights: ['Matterhorn Zermatt', 'Lake Lucerne Cruise', 'Glacier Express', 'Jungfraujoch'],
    vibeTags: ['Alpine Splendor', 'Matterhorn Views', 'Glacial Lakes', 'Scenic Rail Journeys'],
    score: 9.9
  },
  'Spain': {
    gallery: [
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1520645521318-f03a712f0e67?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'The soaring spires of Sagrada Família bathed in brilliant Catalan sunlight',
      'Plaza de España in Seville with ornate tiled bridges and baroque arches',
      'Sun-drenched beaches of Costa Brava with azure Mediterranean waters',
      'Historic cobblestone passages and tapas plazas in Madrid’s Old Town'
    ],
    highlights: ['Sagrada Família', 'Plaza de España Seville', 'Alhambra Granada', 'Costa Brava Bays'],
    vibeTags: ['Gaudí Masterpieces', 'Flamenco Soul', 'Mediterranean Sun', 'Historic Plazas'],
    score: 9.7
  },
  'Norway': {
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'Breathtaking Geirangerfjord with dramatic waterfalls dropping straight into crystal waters',
      'Red fisherman cabins (Rorbuer) of Reine in the Lofoten Islands under midnight sun',
      'Trolltunga rock ledge suspended high above lake Ringedalsvatnet',
      'Glacial valleys carving through untouched Scandinavian wilderness'
    ],
    highlights: ['Geirangerfjord', 'Lofoten Islands', 'Trolltunga Cliff', 'Bergen Bryggen'],
    vibeTags: ['Fjord Majesty', 'Midnight Sun', 'Nordic Wilderness', 'Arctic Splendor'],
    score: 9.9
  },
  'Turkey': {
    gallery: [
      'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'Dozens of vibrant hot air balloons floating over Cappadocia’s fairy chimneys at sunrise',
      'The majestic Blue Mosque and Hagia Sophia overlooking the Bosphorus Strait in Istanbul',
      'Turquoise coastal bays and ancient Lycian ruins along the Turkish Riviera',
      'Intricate mosaic courtyards and Ottoman grand bazaars glistening with lanterns'
    ],
    highlights: ['Cappadocia Hot Air Balloons', 'Hagia Sophia & Blue Mosque', 'Bosphorus Cruise', 'Pamukkale Travertines'],
    vibeTags: ['Fairy Chimneys', 'Hot Air Balloons', 'Ottoman Heritage', 'Turquoise Coast'],
    score: 9.8
  },
  'UAE': {
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'Burj Khalifa soaring above glittering downtown fountains in Dubai',
      'Rolling crimson dunes of the Arabian desert bathed in golden hour sunset',
      'Sheikh Zayed Grand Mosque glowing in immaculate white marble and gold leaf',
      'Palm Jumeirah luxury archipelago reaching into warm Arabian Gulf waters'
    ],
    highlights: ['Burj Khalifa At The Top', 'Desert 4x4 Safari', 'Sheikh Zayed Mosque', 'Palm Jumeirah'],
    vibeTags: ['Futuristic Skylines', 'Golden Desert Dunes', '7-Star Luxury', 'Arabian Glamour'],
    score: 9.8
  },
  'Maldives': {
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'Private overwater bungalows perched directly over crystal turquoise lagoons',
      'Powdery white coral beaches lined with swaying coconut palms',
      'Bioluminescent phytoplankton illuminating the shoreline like liquid stars',
      'Vibrant coral reefs teeming with sea turtles, manta rays, and tropical fish'
    ],
    highlights: ['Overwater Ocean Villa', 'Coral Garden Snorkeling', 'Sunset Dolphin Cruise', 'Underwater Dining'],
    vibeTags: ['Overwater Bungalows', 'Crystal Coral Lagoons', 'Tropical Luxury', 'Pure Paradise'],
    score: 9.9
  },

  // Fallback Terrains by Visual Nature
  'coastal': {
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'Endless turquoise sea kissing pristine golden shoreline at low tide',
      'Gentle waves reflecting radiant sunset gradients across coastal waters',
      'Tropical palms casting soothing shadows on white sand dunes',
      'Dramatic coastal cliffs dropping into cobalt marine depths'
    ],
    highlights: ['Pristine Sandy Beaches', 'Sunset Ocean Horizons', 'Coral Snorkeling', 'Coastal Breezes'],
    vibeTags: ['Coastal Paradise', 'Sun & Surf', 'Turquoise Horizons', 'Ocean Serenity'],
    score: 9.7
  },
  'mountain': {
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'Towering mountain peaks bathed in golden alpenglow at first light',
      'Glacial alpine lakes reflecting razor-sharp snow-covered summits',
      'Pine-forested valleys carving serene paths through mountain ranges',
      'Sea of clouds floating gently beneath lofty mountain ridges'
    ],
    highlights: ['Alpenglow Peaks', 'Glacial Alpine Lakes', 'High-Altitude Lookouts', 'Crisp Mountain Air'],
    vibeTags: ['Majestic Summits', 'Alpenglow Magic', 'Alpine Freshness', 'Untamed Nature'],
    score: 9.8
  },
  'heritage': {
    gallery: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'Ancient stone monuments and historic arches illuminated with golden twilight',
      'Cobblestone medieval plazas lined with quaint traditional architecture',
      'Majestic cathedral spires rising above historic terracotta rooftops',
      'Timeless bridges connecting rich heritage quarters across historic waterways'
    ],
    highlights: ['Ancient Citadels', 'Historic Cobblestone Alleys', 'Royal Palaces & Spires', 'Baroque Piazzas'],
    vibeTags: ['Living History', 'Architectural Wonders', 'Timeless Romance', 'Cultural Grandeur'],
    score: 9.6
  },
  'tropical': {
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'Lush emerald rainforests meeting crystal turquoise sea waters',
      'Private luxury villa nestled amidst exotic tropical blossoms',
      'Cascading waterfalls tumbling into crystal natural freshwater pools',
      'Golden sunset bathing palm-fringed coastal beaches in warm radiant glow'
    ],
    highlights: ['Lush Tropical Jungle', 'Secret Waterfalls', 'Exotic Flora & Palms', 'Island Lagoon Stays'],
    vibeTags: ['Tropical Sanctuary', 'Island Bliss', 'Emerald Canopies', 'Warm Sea Breezes'],
    score: 9.8
  },
  'city': {
    gallery: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1000&q=80'
    ],
    captions: [
      'Futuristic urban skyline glistening under a star-filled evening sky',
      'Vibrant city boulevards flowing with luminous kinetic night lights',
      'Glass-encased observation decks overlooking boundless city horizons',
      'Waterfront promenade reflecting illuminated architectural towers'
    ],
    highlights: ['Skyline Observation Views', 'Vibrant Nightlife', 'Iconic Modern Architecture', 'World-Class Gastronomy'],
    vibeTags: ['Metropolis Energy', 'Skyline Illumination', 'Cosmopolitan Marvels', 'Night City Glow'],
    score: 9.6
  }
};

/**
 * Intelligent helper to extract or generate a comprehensive visual beauty package
 * for ANY location selected from the map, searched, or clicked anywhere on Earth.
 */
export function getLocationScenicData(locationObj, catalogTours = []) {
  if (!locationObj) return null;

  const name = locationObj.name || locationObj.destination || 'Dream Destination';
  const country = locationObj.country || '';
  const searchStr = `${name} ${country}`.toLowerCase();

  // 1. Check if it matches a catalog tour (Rich package gallery)
  const matchedTour = locationObj.matchingTour || (catalogTours && catalogTours.find(t => 
    t.id === locationObj.id ||
    t.destination.toLowerCase().includes(searchStr) ||
    searchStr.includes(t.destination.toLowerCase()) ||
    (t.country && searchStr.includes(t.country.toLowerCase()))
  ));

  if (matchedTour) {
    const tourGallery = matchedTour.gallery && matchedTour.gallery.length > 0
      ? matchedTour.gallery
      : [matchedTour.image];

    // Build rich descriptive captions for this tour
    const captions = matchedTour.highlights && matchedTour.highlights.length >= tourGallery.length
      ? matchedTour.highlights.slice(0, tourGallery.length)
      : [
          `Signature scenic view of ${matchedTour.destination}`,
          `Breathtaking natural beauty & 5-star experience in ${matchedTour.destination}`,
          `Iconic vantage point & cultural landmark in ${matchedTour.destination}`,
          `Unforgettable sunset over ${matchedTour.destination}`
        ];

    return {
      name: matchedTour.destination,
      title: matchedTour.title,
      country: matchedTour.country || country || 'Global Destination',
      region: matchedTour.region || 'World Tour',
      coordinates: matchedTour.coordinates || locationObj.coordinates,
      gallery: tourGallery,
      photoCaptions: captions,
      scenicHighlights: matchedTour.highlights ? matchedTour.highlights.slice(0, 4) : [matchedTour.destination],
      aestheticScore: matchedTour.rating ? Math.min(9.9, +(matchedTour.rating * 2).toFixed(1)) : 9.8,
      vibeTags: [
        matchedTour.category || 'Luxury Tour',
        'Verified Package',
        'Top Scenic Spot',
        'Photographer’s Pick'
      ],
      overview: matchedTour.overview || matchedTour.subtitle || `Experience the captivating visual splendor of ${matchedTour.destination}.`,
      photographerNote: `Known worldwide for its scenic beauty, golden hour vistas, and breathtaking photography angles.`,
      isCatalogTour: true,
      matchingTour: matchedTour,
      price: matchedTour.price,
      days: matchedTour.duration
    };
  }

  // 2. Check Popular Global Destinations
  const matchedPopular = POPULAR_GLOBAL_LOCATIONS.find(p => 
    searchStr.includes(p.name.toLowerCase()) || 
    searchStr.includes(p.city.toLowerCase()) ||
    (p.country && searchStr.includes(p.country.toLowerCase()))
  );

  if (matchedPopular) {
    return {
      name: matchedPopular.name,
      title: `${matchedPopular.name} Scenic Expedition`,
      country: matchedPopular.country,
      region: matchedPopular.region,
      coordinates: matchedPopular.coordinates || locationObj.coordinates,
      gallery: matchedPopular.gallery || [matchedPopular.image],
      photoCaptions: matchedPopular.photoCaptions || [
        `Spectacular scenic panorama of ${matchedPopular.name}`,
        `Cultural landmarks and natural vistas of ${matchedPopular.name}`,
        `Golden hour splendor in ${matchedPopular.name}`
      ],
      scenicHighlights: matchedPopular.scenicHighlights || [matchedPopular.name],
      aestheticScore: matchedPopular.aestheticScore || 9.8,
      vibeTags: matchedPopular.vibeTags || ['Global Wonder', 'Scenic Beauty', 'Curated Travel'],
      overview: matchedPopular.description || `Discover the iconic landscapes, historic architecture, and magical beauty of ${matchedPopular.name}.`,
      photographerNote: `A premier travel destination celebrated for postcard-perfect vistas, vibrant cultural vibes, and timeless charm.`,
      isCatalogTour: false,
      matchingTour: null,
      price: matchedPopular.suggestedPrice || 1450,
      days: matchedPopular.suggestedDays || '5 Days / 4 Nights'
    };
  }

  // 3. Match from GLOBAL_SCENIC_PHOTO_VAULT by Country or Key Geography
  for (const [key, val] of Object.entries(GLOBAL_SCENIC_PHOTO_VAULT)) {
    if (searchStr.includes(key.toLowerCase())) {
      return {
        name: name,
        title: `Luxury Expedition: ${name}`,
        country: country || key,
        region: locationObj.region || 'International',
        coordinates: locationObj.coordinates,
        gallery: val.gallery,
        photoCaptions: val.captions,
        scenicHighlights: val.highlights,
        aestheticScore: val.score,
        vibeTags: val.vibeTags,
        overview: `Witness the authentic scenic charm, radiant sunsets, and unique natural atmosphere of ${name}.`,
        photographerNote: `Travelers flock to ${name} for its unparalleled photographic scenery, serene landscapes, and authentic ambiance.`,
        isCatalogTour: false,
        matchingTour: null,
        price: locationObj.suggestedPrice || 1350,
        days: locationObj.suggestedDays || '5 Days / 4 Nights'
      };
    }
  }

  // 4. Intelligent Fallback by terrain keywords or coordinates
  let fallbackKey = 'coastal';
  if (searchStr.includes('mountain') || searchStr.includes('peak') || searchStr.includes('hill') || searchStr.includes('alps') || searchStr.includes('valley')) {
    fallbackKey = 'mountain';
  } else if (searchStr.includes('city') || searchStr.includes('capital') || searchStr.includes('metro') || searchStr.includes('downtown')) {
    fallbackKey = 'city';
  } else if (searchStr.includes('temple') || searchStr.includes('fort') || searchStr.includes('palace') || searchStr.includes('historic') || searchStr.includes('castle')) {
    fallbackKey = 'heritage';
  } else if (searchStr.includes('beach') || searchStr.includes('island') || searchStr.includes('coast') || searchStr.includes('bay') || searchStr.includes('sea')) {
    fallbackKey = 'tropical';
  }

  const fb = GLOBAL_SCENIC_PHOTO_VAULT[fallbackKey];
  return {
    name: name,
    title: `Private Holiday Discovery: ${name}`,
    country: country || 'International Destination',
    region: 'Global Exploration',
    coordinates: locationObj.coordinates,
    gallery: fb.gallery,
    photoCaptions: fb.captions.map(c => `${c} — inspired by ${name}`),
    scenicHighlights: fb.highlights,
    aestheticScore: fb.score,
    vibeTags: fb.vibeTags,
    overview: `Immerse yourself in the captivating charm and scenic horizons of ${name}. Our concierge crafts private tailor-made stays with chauffeured travel.`,
    photographerNote: `Celebrated by photographers for its vibrant horizons, atmospheric lighting, and unspoiled scenic beauty.`,
    isCatalogTour: false,
    matchingTour: null,
    price: locationObj.suggestedPrice || 1250,
    days: locationObj.suggestedDays || '5 Days / 4 Nights'
  };
}

