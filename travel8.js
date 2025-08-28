// Sample data for the website
const destinations = [
    {
        id: 1,
        title: "Santorini, Greece",
        description: "Beautiful white-washed buildings and stunning sunsets over the Aegean Sea.",
        price: "$1,299",
        image:"https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&w=1600",
        images: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
         "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
         "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
         ],
         longDescription:"Santorini, Greece is a magical destination famous for its white-washed buildings, blue domes, and breathtaking sunsets. Perfect for a romantic getaway or a relaxing vacation, it offers charming villages, unique beaches, and delicious local cuisine.Step into a dream destination where white-washed buildings meet endless blue skies.Wander through the charming streets of Oia and Fira, relax on unique black and red sand beaches, and sip world-class local wine while watching the legendary sunsets over the caldera. Santorini is perfect for romantic escapes, cultural adventures, and picture-perfect memories that last a lifetime. ✈️🏖️",
       features:["5 Days","4 Nights","Luxury Hotel","Private Tours","Wine Tasting",]
       

    },
    {
        id: 2,
        title: "Tokyo, Japan",
        description: "Modern metropolis blending traditional culture with cutting-edge technology.",
        price: "$1,899",
        image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
            "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        longDescription: "Experience the perfect blend of ancient traditions and modern innovations in Tokyo. From serene temples to bustling streets, incredible cuisine to cutting-edge technology, Tokyo offers endless discoveries. Visit iconic landmarks, enjoy authentic sushi, and immerse yourself in Japanese culture.Dive into the electrifying energy of Tokyo, where ultramodern skyscrapers meet ancient temples. Stroll through bustling neighborhoods like Shibuya and Shinjuku, savor authentic sushi at Tsukiji Market, and experience the serene beauty of the Meiji Shrine. From vibrant nightlife and cutting-edge technology to traditional tea ceremonies and cherry blossom parks, Tokyo offers an unforgettable mix of culture, adventure, and excitement.",
        features: ["7 Days", "6 Nights", "Cultural Tours", "Sushi Making", "Temple Visits"]
    },
    {
        id: 3,
        title: "Bali, Indonesia",
        description: "Tropical paradise with pristine beaches, lush rice terraces, and rich culture.",
        price: "$999",
        image: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
            "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        longDescription: "Bali is a tropical paradise that captivates visitors with its stunning natural beauty, rich cultural heritage, and warm hospitality. Explore ancient temples, relax on pristine beaches, trek through lush rice terraces, and indulge in world-class spa treatments.Escape to Bali, the Island of the Gods, where lush rice terraces, tropical beaches, and vibrant culture come together. Explore the sacred Uluwatu Temple, surf world-class waves at Kuta Beach, and unwind in serene jungle retreats. From traditional Balinese ceremonies to stunning sunsets over the ocean, Bali promises adventure, relaxation, and memories that last a lifetime. 🏖️🌺",
        features: ["6 Days", "5 Nights", "Beach Resort", "Spa Treatments", "Temple Tours"]
    },
    {
        id: 4,
        title: "Paris, France",
        description: "The City of Light with iconic landmarks, world-class cuisine, and romance.",
        price: "$1,699",
        image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        longDescription: "Paris, the eternal City of Light, enchants visitors with its timeless elegance and romantic atmosphere. Marvel at iconic landmarks like the Eiffel Tower and Louvre Museum, stroll along the Seine, and indulge in world-renowned cuisine and fashion.tep into the City of Light, where iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral await. Stroll along the charming streets of Montmartre, sip coffee at cozy cafés, and indulge in world-famous French cuisine and pastries. From romantic Seine river cruises to art, fashion, and culture around every corner, Paris is a timeless destination that captures hearts and imaginations. 🇫🇷✨",
        features: ["5 Days", "4 Nights", "Luxury Hotel", "Museum Tours", "Seine Cruise"]
    },
    {
    id: 5,
    title: "Goa, India",
    description: "Golden beaches, vibrant nightlife, and a blend of Indian and Portuguese culture.",
    price: "$899",
    image: "https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
        "https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2236713/pexels-photo-2236713.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    longDescription: "Goa is India’s party capital with sun-kissed beaches, seafood shacks, yoga retreats, and Portuguese-inspired architecture. It’s the perfect mix of relaxation and adventure.Sun, sand, and vibrant culture await in Goa, India’s ultimate beach paradise. Relax on golden beaches like Baga and Palolem, soak up the lively nightlife in Calangute, and explore charming Portuguese architecture in Old Goa. From thrilling water sports and colorful festivals to serene sunsets and local seafood delights, Goa offers the perfect blend of adventure, relaxation, and unforgettable memories. 🇮🇳✨",
    features: ["5 Days", "4 Nights", "Beach Resort", "Nightlife", "Yoga Retreat"]
},
{
    id: 6,
    title: "London, UK",
    description: "Historic landmarks, royal palaces, and modern culture in England's capital.",
    price: "$1,299",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
        "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/221166/pexels-photo-221166.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2116717/pexels-photo-2116717.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    longDescription: "London combines history and modernity like no other city. Explore Buckingham Palace, the British Museum, the London Eye, and enjoy a vibrant culinary and theater scene.Step into London, a city where history meets modern excitement. Marvel at iconic landmarks like Big Ben, Tower Bridge, and the London Eye, explore world-class museums like the British Museum, and wander through charming neighborhoods like Covent Garden and Notting Hill. From royal palaces and historic streets to bustling markets and vibrant nightlife, London offers endless adventures for every traveler. ✨🛶",
    features: ["6 Days", "5 Nights", "Boutique Hotel", "City Tours", "River Cruise"]
}

];

const deals = [
    {
        id: 5,
        title:"Maldives Getaway",
        description: "Overwater bungalows and crystal-clear lagoons at unbeatable prices.",
        price: "$2,299",
        originalPrice: "$3,299",
        image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
            "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        longDescription: "Escape to paradise in the Maldives, where pristine white sand beaches meet crystal-clear turquoise waters. Stay in luxurious overwater bungalows, snorkel with tropical fish, and enjoy world-class dining with your toes in the sand.Experience paradise in the Maldives, where turquoise waters meet pristine white-sand beaches. Stay in luxurious overwater villas, snorkel among vibrant coral reefs, and watch breathtaking sunsets over the Indian Ocean. Perfect for honeymooners, relaxation seekers, or anyone craving tropical serenity, the Maldives promises an unforgettable escape into pure bliss. 🌊✨",
        features: ["7 Days", "6 Nights", "Overwater Villa", "All Inclusive", "Snorkeling"]
    },
    {
        id: 6,
        title: "Swiss Alps Adventure",
        description: "Mountain peaks, scenic railways, and charming alpine villages.",
        price: "$1,799",
        originalPrice: "$2,499",
        image: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
            "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/2832039/pexels-photo-2832039.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        longDescription: "Discover the breathtaking beauty of the Swiss Alps with its snow-capped peaks, pristine lakes, and charming villages. Experience scenic train journeys, outdoor adventures, and Swiss hospitality at its finest.Discover the breathtaking beauty of the Swiss Alps, where snow-capped peaks, alpine meadows, and crystal-clear lakes create a landscape straight out of a postcard. Ski down world-class slopes, hike scenic trails, or take a scenic train ride through charming mountain villages. From adrenaline-packed adventures to peaceful nature escapes, the Swiss Alps offer an unforgettable experience for every traveler. ❄️✨",
        features: ["6 Days", "5 Nights", "Mountain Lodge", "Train Tours", "Hiking"]
    },
    ];

const airlines = [
    {
        id: 7,
        title: "Emirates Airlines",
        description: "Award-winning service with luxurious amenities and global destinations.",
        price: "From $899",
        image: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
            "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        longDescription: "Experience world-class service with Emirates Airlines. Enjoy spacious seating, gourmet dining, award-winning entertainment, and exceptional hospitality that makes every journey memorable.Experience world-class travel with Emirates Airlines, renowned for its luxury, comfort, and exceptional service. From spacious seating and gourmet in-flight dining to award-winning entertainment systems, every journey is designed to make flying a pleasure. Explore destinations across six continents while enjoying the signature Emirates hospitality that turns every flight into a memorable experience. 🌍✨",
        features: ["Business Class", "In-flight Entertainment", "Gourmet Dining", "Lounge Access", "Wi-Fi"]
    },
    {
        id: 8,
        title: "Singapore Airlines",
        description: "Exceptional service and comfort for the discerning traveler.",
        price: "From $1,199",
        image: "https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
            "https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        longDescription: "Singapore Airlines sets the standard for aviation excellence with its commitment to service, safety, and innovation. Experience the luxury of flying with the world's most awarded airline.Experience excellence in the skies with Singapore Airlines, known for its award-winning service, luxurious comfort, and world-class in-flight amenities. Enjoy spacious seating, gourmet meals, and cutting-edge entertainment as you travel to destinations across the globe. Singapore Airlines turns every journey into a seamless, unforgettable travel experience. 🌏✨",
        features: ["First Class", "Premium Service", "Fine Dining", "Flat Bed Seats", "Priority Boarding"]
    }
];

const hotels = [
    {
        id: 9,
        title: "Four Seasons Resort",
        description: "Luxury beachfront resort with world-class amenities and service.",
        price: "$450/night",
        image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
            "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        longDescription: "Indulge in the ultimate luxury experience at Four Seasons Resort. With pristine beaches, world-class spa services, gourmet dining, and impeccable service, every moment is crafted to perfection.Indulge in the ultimate getaway at Four Seasons Resort, where elegance, comfort, and impeccable service meet breathtaking surroundings. Whether it’s a tropical beach, serene mountain, or vibrant city location, enjoy world-class amenities, exquisite dining, and personalized experiences. Perfect for romantic escapes, family vacations, or ultimate relaxation, Four Seasons promises a stay that’s truly unforgettable. ✨🌿",
        features: ["Ocean View", "Spa Services", "Fine Dining", "Private Beach", "Concierge"]
    },
    {
        id: 10,
        title: "Boutique City Hotel",
        description: "Stylish urban retreat in the heart of the city with modern amenities.",
        price: "$289/night",
        image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
            "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        longDescription: "Stay in the heart of the action at our stylish boutique hotel. Modern design meets comfort with premium amenities, rooftop dining, and personalized service in the city center.Experience charm, comfort, and personalized service at a Boutique City Hotel. Nestled in the heart of the city, these stylish hotels combine modern design with local character, offering cozy rooms, curated amenities, and a unique atmosphere. Perfect for travelers seeking an intimate and memorable urban stay, boutique hotels turn every trip into a one-of-a-kind experience. ✨🌆",
        features: ["City Center", "Modern Design", "Rooftop Bar", "Fitness Center", "Business Center"]
    }
];

const packages = [
    {
        id: 11,
        title: "European Grand Tour",
        description: "Visit 6 countries in 14 days with guided tours and luxury accommodations.",
        price: "$3,499",
        image: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
            "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        longDescription: "Embark on the ultimate European adventure visiting Paris, Rome, Barcelona, Amsterdam, Prague, and Vienna. Experience the rich history, diverse cultures, and stunning architecture of Europe with expert guides and luxury accommodations.Discover the best of Europe with a Grand Tour, from the romantic streets of Paris and historic landmarks of Rome to the charming canals of Amsterdam and scenic landscapes of Switzerland. Immerse yourself in diverse cultures, savor world-class cuisine, and explore iconic attractions across multiple countries. Perfect for adventurers, culture lovers, and lifelong learners, a European Grand Tour promises memories that span a lifetime. ✨🌍",
        features: ["14 Days", "6 Countries", "Guided Tours", "Luxury Hotels", "All Meals"]
    },
    {
        id: 12,
        title: "Asian Discovery",
        description: "Explore the diverse cultures and landscapes of Asia in 12 days.",
        price: "$2,899",
        image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
            "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        longDescription: "Discover the magic of Asia with visits to Tokyo, Bangkok, Singapore, and Hong Kong. Experience ancient temples, modern cities, incredible cuisine, and warm hospitality across diverse cultures.Experience the diverse wonders of Asia, from bustling cities like Tokyo and Bangkok to serene landscapes in Bali and Bhutan. Explore rich cultures, ancient temples, vibrant markets, and exquisite cuisine that spans the continent. Perfect for adventurers and culture enthusiasts alike, an Asian Discovery journey offers unforgettable experiences and memories across Asia’s most iconic destinations. ✨🕌",
        features: ["12 Days", "4 Cities", "Cultural Tours", "Local Cuisine", "Shopping"]
    },
    {
        id: 13,
        title: "African Safari",
        description: "Wildlife adventure with luxury lodges and expert guides in Kenya.",
        price: "$4,299",
        image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
            "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/2562992/pexels-photo-2562992.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        longDescription: "Experience the ultimate African safari adventure in Kenya's most famous national parks. Witness the Big Five, stay in luxury tented camps, and create memories that will last a lifetime with expert safari guides.Venture into the wild on an African Safari, where majestic landscapes meet incredible wildlife. Witness lions, elephants, giraffes, and rhinos in their natural habitats across iconic destinations like Serengeti, Kruger National Park, and Maasai Mara. From thrilling game drives to luxurious lodges under the stars, an African Safari offers adventure, breathtaking scenery, and memories that last a lifetime. 🌍✨",
        features: ["10 Days", "Safari Game Drives", "Luxury Camps", "Expert Guides", "All Inclusive"]
    },
    {
    id: 17,
    title: "Royal Rajasthan Experience",
    description: "10 days exploring the palaces, forts, and culture of Rajasthan with luxury stays and guided tours.",
    price: "$2,799",
    image: "https://images.pexels.com/photos/1619311/pexels-photo-1619311.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
        "https://images.pexels.com/photos/1619311/pexels-photo-1619311.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/279418/pexels-photo-279418.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    longDescription: "Experience the grandeur and culture of **Rajasthan** on a 10-day journey through Jaipur, Udaipur, Jodhpur, and Jaisalmer. Explore majestic palaces, ancient forts, vibrant markets, and traditional arts. Stay in luxury heritage hotels, enjoy local cuisine, and immerse yourself in the rich history of India’s royal state. Perfect for culture enthusiasts and history lovers seeking an unforgettable Indian adventure.Stay in luxury heritage hotels that blend royal charm with modern comfort, savor authentic Rajasthani cuisine, and witness traditional music and dance performances. This journey offers an immersive experience of India’s rich history, culture, and architectural splendor, perfect for travelers seeking adventure, culture, and unforgettable memories.",
    features: ["10 Days", "4 Cities", "Luxury Heritage Hotels", "Guided Tours", "Cultural Experiences"]
},
{
    id: 18,
    title: "Tokyo & Japan Highlights",
    description: "7 days exploring Tokyo, Kyoto, and Osaka with culture, cuisine, and modern cityscapes.",
    price: "$3,199",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
        "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/208817/pexels-photo-208817.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    longDescription: "Discover Japan in 7 days with visits to **Tokyo**, **Kyoto**, and **Osaka**. Explore ancient temples, modern skyscrapers, traditional markets, and world-class cuisine. Experience the harmony of Japan’s history and innovation, enjoy scenic gardens, and immerse yourself in cultural performances. Ideal for travelers seeking a blend of tradition and modernity.This tour also includes guided cultural experiences, scenic excursions, and opportunities to witness Japan’s rich heritage alongside its cutting-edge innovation. Perfect for travelers seeking a mix of history, culture, cuisine, and city adventures. ✨🗾",
    features: ["7 Days", "3 Cities", "Guided Tours", "Cultural Experiences", "Local Cuisine"]
},
];

const reviews = [
    {
        id: 14,
        title: "Amazing Experience!",
        description: "\"The trip to Santorini was absolutely magical. Everything was perfectly organized and the service was exceptional.\"",
        author: "Sarah Johnson",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
        rating: 5
    },
    {
        id: 15,
        title: "Unforgettable Journey",
        description: "\"Tokyo exceeded all my expectations. The cultural tours were fascinating and the hotels were luxurious.\"",
        author: "Michael Chen",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
        rating: 5
    },
    {
        id: 16,
        title: "Perfect Vacation",
        description: "\"Bali was the perfect tropical getaway. The beaches were pristine and the spa treatments were heavenly.\"",
        author: "Emma Davis",
        avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
        rating: 5
    }
];

// Global variables
let currentSlide = 0;
let currentModalSlide = 0;
let currentPackageIndex = 0;
let isLoggedIn = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Setup event listeners
    setupAuthSystem();
    setupNavigation();
    setupHeroSlider();
    setupSearch();
    setupPackagesSlider();
    setupModals();
    setupThemeToggle();        // <-- add this
    setupProfileDropdown();   
    
    // Populate content
    populateDestinations();
    populateDeals();
    populateAirlines();
    populateHotels();
    populatePackages();
    populateReviews();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
}

// Auth System
function setupAuthSystem() {
    const authModal = document.getElementById('authModal');
    const mainWebsite = document.getElementById('mainWebsite');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const switchBtn = document.getElementById('switchBtn');
    const authTitle = document.getElementById('authTitle');
    const authSubtitle = document.getElementById('authSubtitle');
    const switchText = document.getElementById('switchText');
    
    let isLogin = true;
    
    // Switch between login and signup
    switchBtn.addEventListener('click', function() {
        isLogin = !isLogin;
        
        if (isLogin) {
            loginForm.style.display = 'flex';
            signupForm.style.display = 'none';
            authTitle.textContent = 'Welcome Back';
            authSubtitle.textContent = 'Sign in to your account';
            switchText.innerHTML = 'Don\'t have an account? <span id="switchBtn">Sign up</span>';
        } else {
            loginForm.style.display = 'none';
            signupForm.style.display = 'flex';
            authTitle.textContent = 'Create Account';
            authSubtitle.textContent = 'Join us for amazing travels';
            switchText.innerHTML = 'Already have an account? <span id="switchBtn">Sign in</span>';
        }
        
        // Re-attach event listener to new switch button
        document.getElementById('switchBtn').addEventListener('click', arguments.callee);
    });
    
    // Handle login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        simulateLogin();
    });
    
    // Handle signup
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        simulateLogin();
    });
    
    function simulateLogin() {
        // Add loading effect
        const submitBtn = isLogin ? loginForm.querySelector('.auth-btn') : signupForm.querySelector('.auth-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Loading...</span>';
        
        setTimeout(() => {
            isLoggedIn = true;
            authModal.style.display = 'none';
            mainWebsite.style.display = 'block';
            document.body.style.overflow = 'auto';
        }, 2000);
    }
}

// Navigation
function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.className = 'fas fa-sun';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Profile Dropdown
function setupProfileDropdown() {
    const profileBtn = document.getElementById('profileBtn');
    const profileMenu = document.getElementById('profileMenu');
    const signOutBtn = document.getElementById('signOutBtn');
    
    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        profileMenu.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        profileMenu.classList.remove('active');
    });
    
    // Prevent dropdown from closing when clicking inside
    profileMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
   // Handel sign out
   signOutBtn.addEventListener('click',function(e){
    e.preventDefault();
    handleSignOut();
   });
   // Handle My Profile
document.getElementById('myProfileBtn').addEventListener('click', function(e) {
    e.preventDefault();
    openModal('profileModal');
});

// Handle My Bookings
document.getElementById('myBookingsBtn').addEventListener('click', function(e) {
    e.preventDefault();
    openModal('bookingsModal');
});

// Handle Settings
document.getElementById('mySettingsBtn').addEventListener('click', function(e) {
    e.preventDefault();
    openModal('settingsModal');
});

}
function handleSignOut() {
    const signOutBtn = document.getElementById('signOutBtn');
    if (!signOutBtn) return;
    function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex"; // or "block"
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}


    // Add spinner effect (CSS class)
    signOutBtn.classList.add('signing-out');

    setTimeout(() => {
        // Hide website, show login modal
        document.getElementById('mainWebsite').style.display = 'none';
        document.getElementById('authModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
        isLoggedIn = false;

        // Reset forms
        document.getElementById('loginForm').reset();
        document.getElementById('signupForm').reset();

        // Remove spinner effect for next time
        signOutBtn.classList.remove('signing-out');

        // Close profile menu
        document.getElementById('profileMenu').classList.remove('active');
    }, 1500);
}

// Hero Slider
function setupHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// Search Functionality
function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const searchModal = document.getElementById('searchModal');
    const searchResults = document.getElementById('searchResults');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (!query) {
            alert('Please enter a destination to search');
            return;
        }
        
        // Search through all data
        const allItems = [...destinations, ...deals, ...packages];
        const results = allItems.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
        
        displaySearchResults(results, query);
        openModal('searchModal');
    }
    
    function displaySearchResults(results, query) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-result-item">
                    <div class="search-result-title">No results found</div>
                    <div class="search-result-description">Sorry, we couldn't find any destinations matching "${query}". Try searching for popular destinations like Paris, Tokyo, or Bali.</div>
                </div>
            `;
            return;
        }
        
        results.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.className = 'search-result-item';
            resultElement.innerHTML = `
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-description">${item.description}</div>
                <div class="search-result-price">${item.price}</div>
            `;
            
            resultElement.addEventListener('click', () => {
                closeModal('searchModal');
                openDetailModal(item);
            });
            
            searchResults.appendChild(resultElement);
        });
    }
}

// Content Population Functions
function populateDestinations() {
    const grid = document.getElementById('destinationsGrid');
    grid.innerHTML = '';
    
    destinations.forEach(destination => {
        const card = createCard(destination);
        grid.appendChild(card);
    });
}

function populateDeals() {
    const grid = document.getElementById('dealsGrid');
    grid.innerHTML = '';
    
    deals.forEach(deal => {
        const card = createCard(deal, true);
        grid.appendChild(card);
    });
}

function populateAirlines() {
    const grid = document.getElementById('airlinesGrid');
    grid.innerHTML = '';
    
    airlines.forEach(airline => {
        const card = createCard(airline);
        grid.appendChild(card);
    });
}

function populateHotels() {
    const grid = document.getElementById('hotelsGrid');
    grid.innerHTML = '';
    
    hotels.forEach(hotel => {
        const card = createCard(hotel);
        grid.appendChild(card);
    });
}

function populatePackages() {
    const container = document.getElementById('packagesContainer');
    container.innerHTML = '';
    
    packages.forEach(pkg => {
        const card = createPackageCard(pkg);
        container.appendChild(card);
    });
}

function populateReviews() {
    const grid = document.getElementById('reviewsGrid');
    grid.innerHTML = '';
    
    reviews.forEach(review => {
        const card = createReviewCard(review);
        grid.appendChild(card);
    });
}

// Card Creation Functions
function createCard(item, isDeal = false) {
    const card = document.createElement('div');
    card.className = 'card';
    
    let priceHTML = `<span class="price">${item.price}</span>`;
    if (isDeal && item.originalPrice) {
        priceHTML = `
            <div>
                <span class="price">${item.price}</span>
                <span style="text-decoration: line-through; color: rgba(255,255,255,0.5); margin-left: 10px;">${item.originalPrice}</span>
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${item.image}')"></div>
        <div class="card-content">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-description">${item.description}</p>
            <div class="card-price">
                ${priceHTML}
                <span class="price-label">per person</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openDetailModal(item));
    
    return card;
}

function createPackageCard(pkg) {
    const card = document.createElement('div');
    card.className = 'package-card';
    
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${pkg.image}')"></div>
        <div class="card-content">
            <h3 class="card-title">${pkg.title}</h3>
            <p class="card-description">${pkg.description}</p>
            <div class="card-price">
                <span class="price">${pkg.price}</span>
                <span class="price-label">total</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openDetailModal(pkg));
    
    return card;
}

function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    
    card.innerHTML = `
        <div class="review-avatar" style="background-image: url('${review.avatar}')"></div>
        <div class="review-stars">${stars}</div>
        <p class="review-text">${review.description}</p>
        <div class="review-author">- ${review.author}</div>
    `;
    
    return card;
}

// Packages Slider
function setupPackagesSlider() {
    const container = document.getElementById('packagesContainer');
    const prevBtn = document.getElementById('prevPackage');
    const nextBtn = document.getElementById('nextPackage');
    
    prevBtn.addEventListener('click', () => {
        currentPackageIndex = Math.max(0, currentPackageIndex - 1);
        updatePackagesSlider();
    });
    
    nextBtn.addEventListener('click', () => {
        const maxIndex = Math.max(0, packages.length - 2);
        currentPackageIndex = Math.min(maxIndex, currentPackageIndex + 1);
        updatePackagesSlider();
    });
    
    function updatePackagesSlider() {
        const translateX = currentPackageIndex * -370; // 350px card width + 20px gap
        container.style.transform = `translateX(${translateX}px)`;
    }
}

// Modal System
function setupModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeModal(modal.id);
            });
        }
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Setup modal slider navigation
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    if (modalPrev) modalPrev.addEventListener('click', () => changeModalSlide(-1));
    if (modalNext) modalNext.addEventListener('click', () => changeModalSlide(1));
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openDetailModal(item) {
    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalSlides = document.getElementById('modalSlides');
    const bookNowBtn = document.getElementById('bookNowBtn');
    
    // Populate modal content
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.longDescription || item.description;
    modalPrice.textContent = item.price;
    
    // Populate features
    modalFeatures.innerHTML = '';
    if (item.features) {
        item.features.forEach(feature => {
            const featureTag = document.createElement('span');
            featureTag.className = 'feature-tag';
            featureTag.textContent = feature;
            modalFeatures.appendChild(featureTag);
        });
    }
    
    // Populate image slider
    modalSlides.innerHTML = '';
    currentModalSlide = 0;
    
    if (item.images && item.images.length > 0) {
        item.images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = `modal-slide ${index === 0 ? 'active' : ''}`;
            slide.style.backgroundImage = `url('${image}')`;
            modalSlides.appendChild(slide);
        });
    } else {
        const slide = document.createElement('div');
        slide.className = 'modal-slide active';
        slide.style.backgroundImage = `url('${item.image}')`;
        modalSlides.appendChild(slide);
    }
    
    // Setup book now button
    bookNowBtn.onclick = () => bookItem(item);
    
    openModal('detailModal');
}

function changeModalSlide(direction) {
    const slides = document.querySelectorAll('#modalSlides .modal-slide');
    if (slides.length <= 1) return;
    
    slides[currentModalSlide].classList.remove('active');
    
    currentModalSlide += direction;
    if (currentModalSlide >= slides.length) currentModalSlide = 0;
    if (currentModalSlide < 0) currentModalSlide = slides.length - 1;
    
    slides[currentModalSlide].classList.add('active');
}

function bookItem(item) {
    closeModal('detailModal');
    
    // Simulate booking process
    setTimeout(() => {
        showBookingConfirmation(item);
    }, 500);
}

function showBookingConfirmation(item) {
    const modal = document.getElementById('bookingModal');
    const bookingDetails = document.getElementById('bookingDetails');
    
    // Generate booking details
    const bookingId = 'WL' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const travelDate = new Date();
    travelDate.setDate(travelDate.getDate() + 30);
    
    bookingDetails.innerHTML = `
        <div class="booking-detail">
            <span class="detail-label">Booking ID:</span>
            <span class="detail-value">${bookingId}</span>
        </div>
        <div class="booking-detail">
            <span class="detail-label">Destination:</span>
            <span class="detail-value">${item.title}</span>
        </div>
        <div class="booking-detail">
            <span class="detail-label">Price:</span>
            <span class="detail-value">${item.price}</span>
        </div>
        <div class="booking-detail">
            <span class="detail-label">Travel Date:</span>
            <span class="detail-value">${travelDate.toDateString()}</span>
        </div>
        <div class="booking-detail">
            <span class="detail-label">Status:</span>
            <span class="detail-value">Confirmed</span>
        </div>
    `;
    
    openModal('bookingModal');
}

function closeBookingModal() {
    closeModal('bookingModal');
}

// Smooth Scrolling
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hero scroll arrow
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', function() {
            const destinationsSection = document.getElementById('destinations');
            if (destinationsSection) {
                const offsetTop = destinationsSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to cards when they come into view
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const cards = document.querySelectorAll('.card, .package-card, .review-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }, 100);
});

// Window load event
window.addEventListener('load', function() {
    // Hide any loading screens if they exist
    document.body.classList.add('loaded');
});
document.addEventListener('DOMContentLoaded', () => {
  const chatBtn = document.getElementById('chatBtn');
  const chatbox = document.getElementById('chatbox');
  const closeChat = document.getElementById('closeChat');
  const sendBtn = document.getElementById('sendBtn');
  const userInput = document.getElementById('userInput');
  const chatBody = document.getElementById('chatBody');

 chatBtn.addEventListener('click', () => {
  if (chatbox.style.display === 'flex') {
    chatbox.style.display = 'none';
  } else {
    chatbox.style.display = 'flex';
  }
});

  closeChat.addEventListener('click', () => chatbox.style.display = 'none');
  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendMessage(); });

  function addMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender === 'user' ? 'user-msg' : 'bot-msg');
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    if(sender === 'bot') {
      msgDiv.innerText = '';
      let i = 0;
      const interval = setInterval(() => {
        msgDiv.innerText = text.slice(0, i + 1);
        i++;
        chatBody.scrollTop = chatBody.scrollHeight;
        if(i >= text.length) clearInterval(interval);
      }, 20);
    } else {
      msgDiv.innerText = text;
    }
  }

  function generateResponse(message) {
    return new Promise(resolve => {
      setTimeout(() => {
        const text = message.toLowerCase();
        let reply;

        // Helper function for best time regex
        const bestTimeRegex = /(best time to visit|when to visit|visit|visiting)/;

        // Paris
        if(/paris/.test(text) && /(plan|trip|itinerary)/.test(text)) {
          reply = "🌟 Paris 5-Day Trip Plan 🌟\n\n" +
                  "Day 1: Explore the Eiffel Tower, Champs-Élysées, and Arc de Triomphe.\n" +
                  "Day 2: Visit Louvre Museum and Notre-Dame Cathedral.\n" +
                  "Day 3: Day trip to Versailles Palace.\n" +
                  "Day 4: Stroll Montmartre and Sacré-Cœur.\n" +
                  "Day 5: Seine River Cruise and shopping in Le Marais district.\n\n" +
                  "Recommended: Try French pastries, café culture, and local bistros for authentic experience.";
        } else if(/paris/.test(text) && bestTimeRegex.test(text)) {
          reply = "The best time to visit Paris is **April to June** and **September to November**. " +
                  "During these months, the weather is pleasant, tourist crowds are smaller, and you can enjoy outdoor cafés and sightseeing comfortably.";
        }

        // New York
        else if(/new york/.test(text) && /(plan|trip|itinerary)/.test(text)) {
          reply = "🗽 New York 4-Day Trip Plan 🗽\n\n" +
                  "Day 1: Visit Times Square, Broadway, and Rockefeller Center.\n" +
                  "Day 2: Explore Central Park and the MET museum.\n" +
                  "Day 3: Statue of Liberty & Ellis Island tour.\n" +
                  "Day 4: Brooklyn Bridge walk and DUMBO area.\n\n" +
                  "Recommended: Try NYC bagels, pizza, and street food. Book Broadway tickets in advance.";
        } else if(/new york/.test(text) && bestTimeRegex.test(text)) {
          reply = "The best time to visit New York is **April to June** and **September to early November**. " +
                  "The weather is mild, and you can enjoy outdoor activities and sightseeing without extreme cold or heat.";
        }

        // Tokyo
        else if(/tokyo/.test(text) && /(plan|trip|itinerary)/.test(text)) {
          reply = "🗼 Tokyo 5-Day Trip Plan 🗼\n\n" +
                  "Day 1: Explore Shibuya Crossing, Hachiko Statue, and shopping in Shibuya.\n" +
                  "Day 2: Visit Asakusa Temple and Nakamise Street.\n" +
                  "Day 3: Day trip to Mt. Fuji & Hakone.\n" +
                  "Day 4: Akihabara electronics & anime culture tour.\n" +
                  "Day 5: Stroll Ueno Park, museums, and Ginza district.\n\n" +
                  "Recommended: Try sushi, ramen, and local street snacks. Use Suica card for transport.";
        } else if(/tokyo/.test(text) && bestTimeRegex.test(text)) {
          reply = "The best time to visit Tokyo is **March to May** (spring) for cherry blossoms, " +
                  "or **October to November** (autumn) for colorful foliage. Both seasons offer pleasant weather and cultural events.";
        }

        // London
        else if(/london/.test(text) && /(plan|trip|itinerary)/.test(text)) {
          reply = "🇬🇧 London 4-Day Trip Plan 🇬🇧\n\n" +
                  "Day 1: Explore Buckingham Palace, Westminster Abbey, and Big Ben.\n" +
                  "Day 2: Visit Tower of London & Tower Bridge.\n" +
                  "Day 3: British Museum and Covent Garden.\n" +
                  "Day 4: Stroll Hyde Park and Camden Market.\n\n" +
                  "Recommended: Try traditional English breakfast and afternoon tea.";
        } else if(/london/.test(text) && bestTimeRegex.test(text)) {
          reply = "The best time to visit London is **April to June** and **September to October**. " +
                  "Pleasant weather and fewer tourists make sightseeing more enjoyable.";
        }

        // Rome
        else if(/rome/.test(text) && /(plan|trip|itinerary)/.test(text)) {
          reply = "🇮🇹 Rome 5-Day Trip Plan 🇮🇹\n\n" +
                  "Day 1: Colosseum and Roman Forum.\n" +
                  "Day 2: Vatican City – St. Peter’s Basilica and Vatican Museums.\n" +
                  "Day 3: Trevi Fountain, Spanish Steps, and Pantheon.\n" +
                  "Day 4: Explore Trastevere neighborhood.\n" +
                  "Day 5: Day trip to Pompeii.\n\n" +
                  "Recommended: Try authentic Italian pasta, pizza, and gelato.";
        } else if(/rome/.test(text) && bestTimeRegex.test(text)) {
          reply = "The best time to visit Rome is **April to June** and **September to October**. " +
                  "Mild weather and fewer crowds make exploring historic sites more enjoyable.";
        }

        // Dubai
        else if(/dubai/.test(text) && /(plan|trip|itinerary)/.test(text)) {
          reply = "🏙️ Dubai 4-Day Trip Plan 🏙️\n\n" +
                  "Day 1: Burj Khalifa and Dubai Mall.\n" +
                  "Day 2: Desert Safari with dune bashing.\n" +
                  "Day 3: Palm Jumeirah & Atlantis Aquaventure.\n" +
                  "Day 4: Dubai Marina & Souks.\n\n" +
                  "Recommended: Try local Emirati cuisine and shopping in traditional souks.";
        } else if(/dubai/.test(text) && bestTimeRegex.test(text)) {
          reply = "The best time to visit Dubai is **November to March**. " +
                  "Weather is cooler and ideal for outdoor activities and desert adventures.";
        }

        // Sydney
        else if(/sydney/.test(text) && /(plan|trip|itinerary)/.test(text)) {
          reply = "🇦🇺 Sydney 4-Day Trip Plan 🇦🇺\n\n" +
                  "Day 1: Sydney Opera House and Circular Quay.\n" +
                  "Day 2: Bondi Beach and coastal walk.\n" +
                  "Day 3: Taronga Zoo and Darling Harbour.\n" +
                  "Day 4: Blue Mountains day trip.\n\n" +
                  "Recommended: Try local seafood and coffee culture.";
        } else if(/sydney/.test(text) && bestTimeRegex.test(text)) {
          reply = "The best time to visit Sydney is **September to November** (spring) and **March to May** (autumn). " +
                  "The weather is mild and perfect for sightseeing and outdoor activities.";
        }

        // Barcelona
        else if(/barcelona/.test(text) && /(plan|trip|itinerary)/.test(text)) {
          reply = "🇪🇸 Barcelona 4-Day Trip Plan 🇪🇸\n\n" +
                  "Day 1: Sagrada Familia and Passeig de Gracia.\n" +
                  "Day 2: Park Güell and Gothic Quarter.\n" +
                  "Day 3: Beach day at Barceloneta.\n" +
                  "Day 4: Montjuïc Hill and Magic Fountain.\n\n" +
                  "Recommended: Try tapas, paella, and local wines.";
        } else if(/barcelona/.test(text) && bestTimeRegex.test(text)) {
          reply = "The best time to visit Barcelona is **May to June** and **September to October**. " +
                  "Pleasant temperatures and fewer crowds make it ideal for sightseeing and beaches.";
        }

        // Bangkok
        else if(/bangkok/.test(text) && /(plan|trip|itinerary)/.test(text)) {
          reply = "🇹🇭 Bangkok 4-Day Trip Plan 🇹🇭\n\n" +
                  "Day 1: Grand Palace and Wat Pho.\n" +
                  "Day 2: Chatuchak Market and Khao San Road.\n" +
                  "Day 3: Day trip to Ayutthaya.\n" +
                  "Day 4: Floating markets and local temples.\n\n" +
                  "Recommended: Try Thai street food, pad thai, and mango sticky rice.";
        } else if(/bangkok/.test(text) && bestTimeRegex.test(text)) {
          reply = "The best time to visit Bangkok is **November to February**. " +
                  "Weather is cooler and dry, making it comfortable for sightseeing.";
        }

        // Singapore
        else if(/singapore/.test(text) && /(plan|trip|itinerary)/.test(text)) {
          reply = "🇸🇬 Singapore 4-Day Trip Plan 🇸🇬\n\n" +
                  "Day 1: Marina Bay Sands and Gardens by the Bay.\n" +
                  "Day 2: Sentosa Island attractions.\n" +
                  "Day 3: Chinatown, Little India, and Clarke Quay.\n" +
                  "Day 4: Singapore Zoo and Night Safari.\n\n" +
                  "Recommended: Try chili crab, laksa, and local hawker food.";
        } else if(/singapore/.test(text) && bestTimeRegex.test(text)) {
          reply = "The best time to visit Singapore is **February to April**. " +
                  "Weather is warm and mostly dry, perfect for sightseeing and outdoor activities.";
        }

        // Other keywords
        else if(text.includes("hi") || text.includes("hello")) {
          reply = "Hello! How can I assist you today?";
        } else if(text.includes("help")) {
          reply = "Sure! Tell me what you need help with.";
        } else if(text.includes("bye") || text.includes("goodbye")) {
          reply = "Goodbye! Have a great day!";
        } else if(text.includes("name")) {
          reply = "I am Purple AI, your friendly travel assistant!";
        } else if(text.includes("time")) {
          const now = new Date();
          reply = `Current time is ${now.getHours()}:${now.getMinutes()}`;
        } else if(text.includes("thank") || text.includes("thanks")) {
          reply = "You're welcome! 😊 Happy to help!";
        } else {
          const randomReplies = [
            "Interesting! Tell me more...",
            "I see. Can you explain further...",
            "Hmm, let me think about that...",
            "Sure! I can help with that.",
            "Absolutely! Here's what I suggest..."
          ];
          reply = randomReplies[Math.floor(Math.random() * randomReplies.length)];
        }

        resolve(reply);
      }, 1000 + Math.random() * 1000);
    });
  }

  async function sendMessage() {
    const message = userInput.value.trim();
    if(!message) return;

    addMessage('user', message);
    userInput.value = '';

    addMessage('bot', 'Typing...');
    const lastBotMsg = chatBody.lastChild;

    const reply = await generateResponse(message);
    lastBotMsg.innerText = '';
    addMessage('bot', reply);
  }
});
