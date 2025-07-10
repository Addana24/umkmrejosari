// Data UMKM contoh - Area sekitar koordinat baru
const umkmData = [
    {
        id: 1,
        name: "Warung Makan Bu Dodok",
        category: "Kuliner",
        address: "Jl. Barito (Samping SD N 02 Rejosari), Rejosari, Semarang Timur",
        rw: "RW 01",
        rt: "RT 03",
        lat: -6.983956,
        lng: 110.439942,
        description: "Warung makan Sederhana dengan menu masakan khas rumahan yang lezat"
    },
    {
        id: 2,
        name: "Warung Jamu Nyoya Songo",
        category: "Kuliner",
        address: "Jl. Barito, Rejosari, Semarang Timur",
        rw: "RW 02",
        rt: "RT 05",
        lat: -6.9837869,
        lng: 110.4399519,
        description: "Minuman herbal tradisional yang diformulasikan khusus untuk mendukung kesehatan dan kebugaran remaja putri"
    },
    {
        id: 3,
        name: "Depo Air Minum Moya Jabbal",
        category: "Jasa",
        address: "Jl. Brantas Raya, Rejosari, Semarang Timur",
        rw: "RW 03",
        rt: "RT 02",
        lat: -6.9831931,
        lng: 110.4398127,
        description: "Usaha pengisian ulang air minum yang menyediakan air galon berkualitas, higienis, dan terjamin kesegarannya"
    },
    {
        id: 4,
        name: "Gule & Tongseng Sapi Mbak Eny",
        category: "Kuliner",
        address: "Jl. Kridangga Raya, Rejosari, Semarang Timur",
        rw: "RW 01",
        rt: "RT 04",
        lat: -6.981625,
        lng: 110.439714,
        description: "Warung makan khas Nusantara yang menyajikan hidangan gule dan tongseng sapi dengan cita rasa tradisional dan kuah rempah yang kaya"
    },
    {
        id: 5,
        name: "Warung Kelontong Sumber Rejeki",
        category: "Retail",
        address: "Jl. Rejosari VIII No.39, Rejosari, Semarang Timur",
        rw: "RW 04",
        rt: "RT 01",
        lat: -6.981521963064281,
        lng: 110.43980351160428,
        description: "Toko serba ada yang menyediakan berbagai kebutuhan sehari-hari seperti sembako, makanan ringan, minuman, perlengkapan rumah tangga, hingga kebutuhan dapur"
    },
    {
        id: 6,
        name: "Warung Kelontong",
        category: "Retail",
        address: "Jl. Rejosari VIII, Rejosari, Semarang Timur",
        rw: "RW 02",
        rt: "RT 06",
        lat: -6.9817914,
        lng: 110.4381641,
        description: "Toko serba ada yang menyediakan berbagai kebutuhan sehari-hari seperti sembako, makanan ringan, minuman, perlengkapan rumah tangga, hingga kebutuhan dapur"
    },
    {
        id: 7,
        name: "Warung Makan Ayam Lunak Cabe Ijo",
        category: "Kuliner",
        address: "Jl. Rejosari V No.33, Rejosari, Semarang Timur",
        rw: "RW 03",
        rt: "RT 03",
        lat: -6.9808250,
        lng: 110.4374721,
        description: "Ayam lunak yang dimasak hingga empuk dan disiram sambal cabe ijo khas racikan sendiri yang nikmat dan menggoda"
    },
    {
        id: 8,
        name: "Toko Kelontong",
        category: "Retail",
        address: "Jl. Rejosari I, Rejosari, Semarang Timur",
        rw: "RW 01",
        rt: "RT 02",
        lat: -6.9785280,
        lng: 110.4377501,
        description: "Toko serba ada yang menyediakan berbagai kebutuhan sehari-hari seperti sembako, makanan ringan, minuman, perlengkapan rumah tangga, hingga kebutuhan dapur"
    },
    {
        id: 9,
        name: "Asdha Net",
        category: "Jasa",
        address: "Jl. Tirtoyoso Tengah No.22, Rejosari, Semarang Timur",
        rw: "RW 04",
        rt: "RT 05",
        lat: -6.9779117,
        lng: 110.4403387,
        description: "Konter pulsa dan layanan digital yang melayani penjualan pulsa, paket data, token listrik, serta berbagai kebutuhan komunikasi lainnya"
    },
    {
        id: 10,
        name: "Baron Motor",
        category: "Otomotif",
        address: "Jl. Tirtoyoso IV No.2, Rejosari, Semarang Timur",
        rw: "RW 02",
        rt: "RT 04",
        lat: -6.9782498,
        lng: 110.4394191,
        description: "Bengkel Motor yang melayani servis injeksi, engine tuning, suku cadang dan masih banyak lagi"
    },
    {
        id: 11,
        name: "Tin Salon Kecantikan",
        category: "Jasa",
        address: "Jl. Kanalsari Tengah, Rejosari, Semarang Timur",
        rw: "RW 03",
        rt: "RT 01",
        lat: -6.9754480,
        lng: 110.4381558,
        description: "Tempat perawatan rambut dan tubuh yang menghadirkan layanan lengkap mulai dari potong rambut, creambath, smoothing, coloring, hingga perawatan wajah dan make-up"
    },
    {
        id: 12,
        name: "Es Pak Ndut Gang Pinggir",
        category: "Kuliner",
        address: "Jl. Bugangan VII, Rejosari, Semarang Timur",
        rw: "RW 01",
        rt: "RT 01",
        lat: -6.9754893661437105,
        lng:  110.43820057664871,
        description: "Es campur dan minuman segar"
    },
    {
        id: 13,
        name: "TB Jaya Baru",
        category: "Retail",
        address: "Jl. RA. Kartini, Rejosari, Semarang Timur",
        rw: "RW 04",
        rt: "RT 02",
        lat: -6.985408795601665, 
        lng: 110.43806539334629,
        description: "Menyediakan berbagai kebutuhan material konstruksi dan renovasi, mulai dari semen, pasir, batu bata, besi, cat, hingga peralatan pertukangan"
    },
    {
        id: 14,
        name: "Herry Kopling",
        category: "Otomotif",
        address: "Jl. RA. Kartini (Samping jembatan kartini), Rejosari, Semarang Timur",
        rw: "RW 02",
        rt: "RT 03",
        lat: -6.985552812568943,
        lng: 110.43931596649006,
        description: "Bengkel spesialis kopling dan transmisi yang melayani perbaikan, servis, dan penggantian komponen kopling untuk berbagai jenis kendaraan, terutama mobil manual"
    },
    {
        id: 15,
        name: "Point Box",
        category: "Jasa",
        address: "Jl. Barito Raya (Depan Pompa Air) No.3, Rejosari, Semarang Timur",
        rw: "RW 03",
        rt: "RT 04",
        lat: -6.985466953433562, 
        lng: 110.4397471315938,
        description: "Konter serba ada yang menyediakan layanan isi ulang pulsa, paket data, voucher game, token listrik, dan pembayaran digital lainnya. "
    }
];

// Initialize map centered on koordinat baru
const map = L.map('map').setView([-6.9809491, 110.4396150], 16);

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Custom icons for different categories
const categoryIcons = {
    'Kuliner': '🍽️',
    'Retail': '🏪',
    'Jasa': '🏃🏼',
    'Otomotif': '🚗',
    'Kesehatan': '🏥'
};

const categoryColors = {
    'Kuliner': '#e74c3c',
    'Retail': '#3498db',
    'Jasa': '#f39c12',
    'Otomotif': '#9b59b6',
    'Kesehatan': '#27ae60'
};

// Create custom marker function
function createCustomMarker(umkm) {
    const icon = categoryIcons[umkm.category] || '📍';
    const color = categoryColors[umkm.category] || '#667eea';

    const customIcon = L.divIcon({
        html: `<div style="background-color: ${color}; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">${icon}</div>`,
        className: 'custom-marker',
        iconSize: [35, 35],
        iconAnchor: [17.5, 17.5]
    });

    const marker = L.marker([umkm.lat, umkm.lng], { icon: customIcon }).addTo(map);

    const popupContent = `
        <div class="popup-content">
            <h3>${umkm.name}</h3>
            <div class="category" style="background-color: ${color};">${umkm.category}</div>
            <p><strong>📍 Alamat:</strong> ${umkm.address}</p>
            <p><strong>ℹ️ Deskripsi:</strong> ${umkm.description}</p>
            <div style="margin-top: 10px; text-align: center;">
                <button onclick="showNavigationOptions(${umkm.lat}, ${umkm.lng}, '${umkm.name}')" 
                        style="background: #4285f4; color: white; border: none; padding: 8px 15px; border-radius: 15px; font-size: 0.9rem; cursor: pointer;">
                    🗺️ Navigasi
                </button>
            </div>
        </div>
    `;

    marker.bindPopup(popupContent);
    return marker;
}

// Decode polyline for GraphHopper
function decodePolyline(encoded) {
    const poly = [];
    let index = 0;
    const len = encoded.length;
    let lat = 0;
    let lng = 0;

    while (index < len) {
        let b;
        let shift = 0;
        let result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);

        const dlat = ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1));
        lat += dlat;

        shift = 0;
        result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);

        const dlng = ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1));
        lng += dlng;

        poly.push([lat / 1e5, lng / 1e5]);
    }
    return poly;
}

// Add markers to map
const markers = {};
let routingControl = null;
let userLocation = null;

umkmData.forEach(umkm => {
    markers[umkm.id] = createCustomMarker(umkm);
});

// Generate UMKM list with category grouping
function generateUmkmList(data = umkmData) {
    const umkmList = document.getElementById('umkmList');
    umkmList.innerHTML = '';

    // Group data by category
    const groupedData = data.reduce((acc, umkm) => {
        if (!acc[umkm.category]) {
            acc[umkm.category] = [];
        }
        acc[umkm.category].push(umkm);
        return acc;
    }, {});

    // Sort categories by name
    const sortedCategories = Object.keys(groupedData).sort();

    sortedCategories.forEach(category => {
        // Create category header
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        const icon = categoryIcons[category] || '📍';
        const color = categoryColors[category] || '#ffc107';
        categoryHeader.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; padding: 15px 10px 10px 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 10px;">
                <div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">${icon}</div>
                <div>
                    <h4 style="color: white; margin: 0; font-size: 16px;">${category}</h4>
                    <small style="color: rgba(255, 255, 255, 0.7);">${groupedData[category].length} UMKM</small>
                </div>
            </div>
        `;
        umkmList.appendChild(categoryHeader);

        // Add UMKM cards for this category
        groupedData[category].forEach(umkm => {
            const color = categoryColors[umkm.category] || '#ffc107';
            const card = document.createElement('div');
            card.className = 'umkm-card';
            card.style.marginLeft = '15px';
            card.style.marginBottom = '8px';
            card.style.borderLeftColor = color;
            card.innerHTML = `
                <h3>${umkm.name}</h3>
                <div class="category" style="background-color: ${color};">${umkm.category}</div>
                <div class="address">📍 ${umkm.address}</div>
            `;

            card.addEventListener('click', () => {
                // Close menu first
                closeMenu();
                
                // Zoom ke lokasi UMKM dengan animasi smooth
                map.setView([umkm.lat, umkm.lng], 18, {
                    animate: true,
                    duration: 1.0
                });

                // Buka popup setelah delay singkat untuk animasi
                setTimeout(() => {
                    markers[umkm.id].openPopup();
                }, 500);
            });

            umkmList.appendChild(card);
        });

        // Add spacing between categories
        if (category !== sortedCategories[sortedCategories.length - 1]) {
            const spacer = document.createElement('div');
            spacer.style.height = '15px';
            umkmList.appendChild(spacer);
        }
    });

    // Update total count
    const totalElements = document.querySelectorAll('#totalUmkm');
    totalElements.forEach(el => el.textContent = data.length);
    
    // Update bottom info
    updateBottomInfo();
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filteredData = umkmData.filter(umkm =>
                umkm.name.toLowerCase().includes(searchTerm) ||
                umkm.category.toLowerCase().includes(searchTerm) ||
                umkm.address.toLowerCase().includes(searchTerm) ||
                umkm.rw.toLowerCase().includes(searchTerm) ||
                umkm.rt.toLowerCase().includes(searchTerm)
            );
            generateUmkmList(filteredData);
        });
    }
}

// Fungsi untuk toggle list UMKM
function toggleUMKMList() {
    const umkmList = document.getElementById('umkmList');
    const statsContainer = document.getElementById('statsContainer');

    if (umkmList.style.display === 'none' || umkmList.style.display === '') {
        umkmList.style.display = 'flex';
        statsContainer.style.display = 'none';
    } else {
        umkmList.style.display = 'none';
    }
}

// Fungsi untuk menampilkan statistik
function showStats() {
    const statsElement = document.getElementById('statsContainer');
    const listElement = document.getElementById('umkmList');

    if (statsElement.style.display === 'none' || statsElement.style.display === '') {
        updateStats();
        statsElement.style.display = 'grid';
        listElement.style.display = 'none';
    } else {
        statsElement.style.display = 'none';
        listElement.style.display = 'flex';
    }
}

// Fungsi untuk update statistik
function updateStats() {
    const totalUMKM = umkmData.length;
    const kategoriUnik = [...new Set(umkmData.map(u => u.category))];

    document.getElementById('totalUMKM').textContent = totalUMKM;
    document.getElementById('totalKategori').textContent = kategoriUnik.length;
}

// Fungsi untuk filter berdasarkan kategori
function filterByCategory() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    let filteredData = umkmData;

    if (categoryFilter) {
        filteredData = umkmData.filter(umkm => umkm.category === categoryFilter);
    }

    // Update markers di peta
    Object.values(markers).forEach(marker => map.removeLayer(marker));
    filteredData.forEach(umkm => {
        markers[umkm.id] = createCustomMarker(umkm);
    });

    // Update list
    generateUmkmList(filteredData);
}

// Get user location with better error handling
function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            console.warn("Geolocation not supported, using default location");
            userLocation = [-6.9809491, 110.4396150];
            resolve(userLocation);
            return;
        }

        // Set timeout untuk geolocation
        const timeoutId = setTimeout(() => {
            console.warn("Geolocation timeout, using default location");
            userLocation = [-6.9809491, 110.4396150];
            resolve(userLocation);
        }, 15000);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                clearTimeout(timeoutId);
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const accuracy = position.coords.accuracy;
                userLocation = [lat, lng];
                console.log("User location found:", userLocation, "Accuracy:", accuracy + "m");
                resolve([lat, lng]);
            },
            (error) => {
                clearTimeout(timeoutId);
                console.warn("Error getting location, using default:", error.message);
                // Default ke pusat peta jika gagal
                userLocation = [-6.9809491, 110.4396150];
                resolve(userLocation);
            },
            {
                timeout: 15000,
                enableHighAccuracy: true,
                maximumAge: 30000
            }
        );
    });
}

// Show navigation options for UMKM
function showNavigationOptions(destLat, destLng, umkmName) {
    // Calculate approximate distance
    getUserLocation().then(startLocation => {
        const distance = calculateDistance(startLocation[0], startLocation[1], destLat, destLng);
        const estimatedTime = Math.round((distance * 60) / 50); // Assuming 50km/h average speed

        L.popup()
            .setLatLng([destLat, destLng])
            .setContent(`
                <div style="text-align: center; padding: 15px; min-width: 250px;">
                    <h4 style="margin: 0 0 10px 0; color: #2c3e50;">🗺️ Navigasi ke ${umkmName}</h4>
                    <div style="background: #f8f9fa; padding: 12px; border-radius: 8px; margin-bottom: 15px;">
                        <div style="margin-bottom: 5px;"><strong>📏 Jarak:</strong> ${distance.toFixed(1)} km</div>
                        <div><strong>⏱️ Estimasi:</strong> ${estimatedTime} menit</div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <button onclick="openGoogleMaps(${destLat}, ${destLng}, '${umkmName}')" style="background: #4285f4; color: white; border: none; padding: 10px 15px; border-radius: 8px; cursor: pointer; font-size: 0.9rem; font-weight: bold;">
                            🗺️ Buka di Google Maps
                        </button>
                        <button onclick="openWaze(${destLat}, ${destLng})" style="background: #33ccff; color: white; border: none; padding: 10px 15px; border-radius: 8px; cursor: pointer; font-size: 0.9rem; font-weight: bold;">
                            🚗 Buka di Waze
                        </button>
                    </div>
                    <br>
                    <button onclick="map.closePopup()" style="background: #95a5a6; color: white; border: none; padding: 5px 15px; border-radius: 5px; cursor: pointer; font-size: 12px;">
                        ❌ Tutup
                    </button>
                </div>
            `)
            .openOn(map);
    }).catch(error => {
        // If location fails, still show navigation options
        L.popup()
            .setLatLng([destLat, destLng])
            .setContent(`
                <div style="text-align: center; padding: 15px; min-width: 250px;">
                    <h4 style="margin: 0 0 10px 0; color: #2c3e50;">🗺️ Navigasi ke ${umkmName}</h4>
                    <p style="margin-bottom: 15px; color: #666; font-size: 0.9rem;">
                        Pilih aplikasi navigasi untuk menuju lokasi:
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <button onclick="openGoogleMaps(${destLat}, ${destLng}, '${umkmName}')" style="background: #4285f4; color: white; border: none; padding: 10px 15px; border-radius: 8px; cursor: pointer; font-size: 0.9rem; font-weight: bold;">
                            🗺️ Buka di Google Maps
                        </button>
                        <button onclick="openWaze(${destLat}, ${destLng})" style="background: #33ccff; color: white; border: none; padding: 10px 15px; border-radius: 8px; cursor: pointer; font-size: 0.9rem; font-weight: bold;">
                            🚗 Buka di Waze
                        </button>
                    </div>
                    <br>
                    <button onclick="map.closePopup()" style="background: #95a5a6; color: white; border: none; padding: 5px 15px; border-radius: 5px; cursor: pointer; font-size: 12px;">
                        ❌ Tutup
                    </button>
                </div>
            `)
            .openOn(map);
    });
}

// Simple distance calculation for information display
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}



// Open Google Maps for navigation
function openGoogleMaps(destLat, destLng, umkmName) {
    const url = `https://www.google.com/maps/search/?api=1&query=${destLat},${destLng}`;
    window.open(url, '_blank');
}

// Open Waze for navigation
function openWaze(destLat, destLng) {
    const url = `https://waze.com/ul?ll=${destLat},${destLng}&navigate=yes`;
    window.open(url, '_blank');
}

// Show simple straight line route
function showSimpleRoute(destLat, destLng, umkmName, startLat, startLng) {
    map.closePopup();

    // Calculate distance
    const distance = calculateDistance(startLat, startLng, destLat, destLng);
    const estimatedTime = Math.round((distance * 60) / 50);

    // Create simple polyline route
    const routeLine = L.polyline([
        [startLat, startLng],
        [destLat, destLng]
    ], {
        color: '#e74c3c',
        weight: 4,
        opacity: 0.8,
        dashArray: '15, 10'
    }).addTo(map);

    // Add start marker
    const startMarker = L.marker([startLat, startLng], {
        icon: L.divIcon({
            html: '<div style="background-color: #27ae60; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">📍</div>',
            className: 'user-location-marker',
            iconSize: [25, 25],
            iconAnchor: [12.5, 12.5]
        })
    }).addTo(map).bindPopup('Lokasi Anda');

    // Store references for cleanup
    routingControl = {
        _routeLine: routeLine,
        _startMarker: startMarker,
        remove: function() {
            map.removeLayer(this._routeLine);
            map.removeLayer(this._startMarker);
        }
    };

    // Show route info
    setTimeout(() => {
        L.popup()
            .setLatLng([destLat, destLng])
            .setContent(`
                <div style="text-align: center; padding: 10px;">
                    <h4 style="margin: 0 0 8px 0; color: #e74c3c;">📍 Rute Langsung ke ${umkmName}</h4>
                    <div style="background: #fff3cd; padding: 8px; border-radius: 5px; margin-bottom: 8px;">
                        <div><strong>📏 Jarak:</strong> ${distance.toFixed(1)} km</div>
                        <div><strong>⏱️ Estimasi:</strong> ${estimatedTime} menit</div>
                    </div>
                    <small style="color: #666;">Garis merah putus-putus menunjukkan arah langsung</small>
                    <br><br>
                    <button onclick="clearRoute()" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-size: 12px;">
                        ❌ Hapus Rute
                    </button>
                </div>
            `)
            .openOn(map);
    }, 300);

    // Fit map to show the route
    const bounds = L.latLngBounds([[startLat, startLng], [destLat, destLng]]);
    map.fitBounds(bounds, {
        padding: [40, 40],
        maxZoom: 15
    });
}

// Loading screen functionality
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (loadingScreen && mainApp) {
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainApp.style.display = 'block';
            
            // Force map resize after showing main app
            setTimeout(() => {
                map.invalidateSize();
            }, 100);
        }, 800);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen for minimum 3 seconds
    const minLoadTime = 3000;
    const startTime = Date.now();
    
    // Initialize app components
    function initializeApp() {
        // Initialize the list
        generateUmkmList();

        // Initialize search functionality
        initializeSearch();

        // Update bottom info
        updateBottomInfo();

        // Add map click event to close popups
        map.on('click', function() {
            map.closePopup();
        });

        // Force map resize after page load
        setTimeout(function() {
            map.invalidateSize();
        }, 500);

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            const sideMenu = document.getElementById('sideMenu');
            const hamburger = document.querySelector('.hamburger');
            
            if (!sideMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMenu();
            }
        });
    }
    
    // Initialize app immediately
    initializeApp();
    
    // Hide loading screen after minimum time
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minLoadTime - elapsedTime);
    
    setTimeout(() => {
        hideLoadingScreen();
    }, remainingTime);
});

// Handle window resize to refresh map
window.addEventListener('resize', function() {
    setTimeout(function() {
        map.invalidateSize();
    }, 100);
});

// Mobile navigation functions
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    
    if (sideMenu.classList.contains('open')) {
        closeMenu();
    } else {
        sideMenu.classList.add('open');
        menuOverlay.classList.add('show');
    }
}

function closeMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    
    sideMenu.classList.remove('open');
    menuOverlay.classList.remove('show');
}

// Tab functions removed - keeping only map view

// Update total UMKM count in bottom info
function updateBottomInfo() {
    const count = umkmData.length;
    const bottomInfo = document.querySelector('.issues-count');
    if (bottomInfo) {
        bottomInfo.innerHTML = `There are <span class="issues-count">${count} UMKM</span> around you (100m)`;
    }
}

// Make functions available globally
window.toggleUMKMList = toggleUMKMList;
window.showStats = showStats;
window.filterByCategory = filterByCategory;
window.showNavigationOptions = showNavigationOptions;
window.openGoogleMaps = openGoogleMaps;
window.openWaze = openWaze;
window.startLocationPicker = startLocationPicker;
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;
// Removed showMap, showLive, showList functions

// ===== KODE JAVASCRIPT BARU UNTUK FITUR PENDAFTARAN =====

// Variabel untuk location picker
let isPickingLocation = false;
let locationPickerMarker = null;

// Fungsi untuk memulai location picker
function startLocationPicker() {
    const modal = document.getElementById('registrationModal');
    const selectBtn = document.getElementById('selectLocationBtn');
    const locationStatus = document.getElementById('locationStatus');
    const locationText = document.getElementById('locationText');
    
    if (!isPickingLocation) {
        // Mulai picking location
        isPickingLocation = true;
        selectBtn.textContent = '❌ Batal Pilih Lokasi';
        selectBtn.classList.add('picking');
        
        // Sembunyikan modal dan tampilkan status
        modal.style.display = 'none';
        locationStatus.style.display = 'block';
        locationStatus.className = 'picking';
        locationText.textContent = '📍 Klik pada peta untuk memilih lokasi UMKM Anda';
        
        // Tambahkan event listener untuk map click
        map.on('click', onMapClickForLocation);
        
        // Ubah cursor peta
        map.getContainer().style.cursor = 'crosshair';
        
    } else {
        // Batal picking location
        cancelLocationPicker();
    }
}

// Fungsi untuk menangani klik pada peta saat picking location
function onMapClickForLocation(e) {
    if (!isPickingLocation) return;
    
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    
    // Hapus marker sebelumnya jika ada
    if (locationPickerMarker) {
        map.removeLayer(locationPickerMarker);
    }
    
    // Tambahkan marker baru
    locationPickerMarker = L.marker([lat, lng], {
        icon: L.divIcon({
            html: '<div style="background-color: #e74c3c; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">📍</div>',
            className: 'location-picker-marker',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    }).addTo(map);
    
    // Update form fields
    document.getElementById('umkmLat').value = lat.toFixed(6);
    document.getElementById('umkmLng').value = lng.toFixed(6);
    
    // Selesai picking location
    finishLocationPicker(lat, lng);
}

// Fungsi untuk menyelesaikan location picker
function finishLocationPicker(lat, lng) {
    const modal = document.getElementById('registrationModal');
    const selectBtn = document.getElementById('selectLocationBtn');
    const locationStatus = document.getElementById('locationStatus');
    const locationText = document.getElementById('locationText');
    
    isPickingLocation = false;
    selectBtn.textContent = '✅ Lokasi Dipilih - Ubah Lokasi';
    selectBtn.classList.remove('picking');
    
    // Tampilkan modal kembali dan update status
    modal.style.display = 'flex';
    locationStatus.className = 'success';
    locationText.textContent = `✅ Lokasi berhasil dipilih: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    
    // Hapus event listener
    map.off('click', onMapClickForLocation);
    
    // Kembalikan cursor normal
    map.getContainer().style.cursor = '';
}

// Fungsi untuk membatalkan location picker
function cancelLocationPicker() {
    const modal = document.getElementById('registrationModal');
    const selectBtn = document.getElementById('selectLocationBtn');
    const locationStatus = document.getElementById('locationStatus');
    
    isPickingLocation = false;
    selectBtn.textContent = '📍 Pilih Lokasi di Peta';
    selectBtn.classList.remove('picking');
    
    // Tampilkan modal kembali dan sembunyikan status
    modal.style.display = 'flex';
    locationStatus.style.display = 'none';
    
    // Hapus marker jika ada
    if (locationPickerMarker) {
        map.removeLayer(locationPickerMarker);
        locationPickerMarker = null;
    }
    
    // Hapus event listener
    map.off('click', onMapClickForLocation);
    
    // Kembalikan cursor normal
    map.getContainer().style.cursor = '';
    
    // Clear form fields
    document.getElementById('umkmLat').value = '';
    document.getElementById('umkmLng').value = '';
}

// Ganti dengan URL Web App dari Google Apps Script Anda
const googleWebAppUrl = 'https://script.google.com/macros/s/AKfycbwHaZx80oHq4-KKR1TK79W-Ze_XirfTXz3c2ImWzy4e5q9oF3abGSmsXJ_Z3ikG7d2t/exec';

const modal = document.getElementById('registrationModal');
const form = document.getElementById('umkmForm');
const messageDiv = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');

// Fungsi untuk membuka modal
function openModal() {
    modal.style.display = 'flex';
}

// Fungsi untuk menutup modal
function closeModal() {
    // Jika sedang picking location, batalkan dulu
    if (isPickingLocation) {
        cancelLocationPicker();
    }
    
    modal.style.display = 'none';
    messageDiv.textContent = ''; // Bersihkan pesan saat modal ditutup
    
    // Reset location status
    const locationStatus = document.getElementById('locationStatus');
    locationStatus.style.display = 'none';
    
    // Hapus marker location picker jika ada
    if (locationPickerMarker) {
        map.removeLayer(locationPickerMarker);
        locationPickerMarker = null;
    }
}

// Menutup modal jika user klik di luar area konten
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Fungsi untuk menangani pengiriman formulir
async function handleFormSubmit(event) {
    event.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Mengirim...';
    messageDiv.textContent = '';
    messageDiv.style.color = '';

    const formData = {
        name: document.getElementById('umkmName').value,
        category: document.getElementById('umkmCategory').value,
        address: document.getElementById('umkmAddress').value,
        rw: document.getElementById('umkmRW').value,
        rt: document.getElementById('umkmRT').value,
        lat: document.getElementById('umkmLat').value,
        lng: document.getElementById('umkmLng').value,
        description: document.getElementById('umkmDescription').value,
    };

    try {
        const response = await fetch(googleWebAppUrl, {
            method: 'POST',
            mode: 'no-cors', // Penting untuk request ke Google Apps Script dari browser
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            redirect: 'follow'
        });

        // Karena mode 'no-cors', kita tidak bisa membaca response secara langsung.
        // Kita asumsikan sukses jika tidak ada network error.
        messageDiv.textContent = 'Pendaftaran berhasil! Terima kasih. Data Anda akan segera muncul di peta setelah diverifikasi.';
        messageDiv.style.color = 'green';
        form.reset();

        // Menutup modal setelah 5 detik
        setTimeout(() => {
            closeModal();
        }, 5000);

    } catch (error) {
        console.error('Error:', error);
        messageDiv.textContent = 'Terjadi kesalahan. Silakan coba lagi.';
        messageDiv.style.color = 'red';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Kirim Pendaftaran';
    }
}
