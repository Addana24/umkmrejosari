<<<<<<< HEAD
// Data UMKM contoh - Area sekitar koordinat baru
const umkmData = [
    {
        id: 1,
        name: "Warung Makan Bu Sari",
        category: "Kuliner",
        address: "Jl. Gajahmada No. 15, Gayamsari",
        rw: "RW 01",
        rt: "RT 03",
        lat: -6.9809491,
        lng: 110.4396150,
        description: "Warung makan dengan menu masakan rumahan yang lezat"
    },
    {
        id: 2,
        name: "Toko Kelontong Pak Budi",
        category: "Retail",
        address: "Jl. Gajahmada No. 28, Gayamsari",
        rw: "RW 02",
        rt: "RT 05",
        lat: -6.9819491,
        lng: 110.4406150,
        description: "Menyediakan kebutuhan sehari-hari lengkap"
    },
    {
        id: 3,
        name: "Salon Kecantikan Ayu",
        category: "Jasa",
        address: "Jl. Gajahmada No. 7, Gayamsari",
        rw: "RW 03",
        rt: "RT 02",
        lat: -6.9829491,
        lng: 110.4386150,
        description: "Layanan potong rambut dan perawatan kecantikan"
    },
    {
        id: 4,
        name: "Bengkel Motor Jaya",
        category: "Otomotif",
        address: "Jl. Gajahmada No. 12, Gayamsari",
        rw: "RW 01",
        rt: "RT 04",
        lat: -6.9799491,
        lng: 110.4376150,
        description: "Service dan reparasi sepeda motor"
    },
    {
        id: 5,
        name: "Laundry Express",
        category: "Jasa",
        address: "Jl. Gajahmada No. 21, Gayamsari",
        rw: "RW 04",
        rt: "RT 01",
        lat: -6.9839491,
        lng: 110.4416150,
        description: "Layanan cuci dan setrika kilat"
    },
    {
        id: 6,
        name: "Bakery Gayamsari",
        category: "Kuliner",
        address: "Jl. Gajahmada No. 33, Gayamsari",
        rw: "RW 02",
        rt: "RT 06",
        lat: -6.9789491,
        lng: 110.4400150,
        description: "Roti dan kue segar setiap hari"
    },
    {
        id: 7,
        name: "Fotocopy & Print Cepat",
        category: "Jasa",
        address: "Jl. Gajahmada No. 45, Gayamsari",
        rw: "RW 03",
        rt: "RT 03",
        lat: -6.9809491,
        lng: 110.4410150,
        description: "Layanan fotocopy, print, dan jilid"
    },
    {
        id: 8,
        name: "Toko Bangunan Maju",
        category: "Retail",
        address: "Jl. Gajahmada No. 8, Gayamsari",
        rw: "RW 01",
        rt: "RT 02",
        lat: -6.9779491,
        lng: 110.4370150,
        description: "Material bangunan dan alat konstruksi"
    },
    {
        id: 9,
        name: "Warung Kopi Santai",
        category: "Kuliner",
        address: "Jl. Gajahmada No. 19, Gayamsari",
        rw: "RW 04",
        rt: "RT 05",
        lat: -6.9849491,
        lng: 110.4390150,
        description: "Kopi premium dan camilan ringan"
    },
    {
        id: 10,
        name: "Penjahit Bu Rina",
        category: "Jasa",
        address: "Jl. Gajahmada No. 14, Gayamsari",
        rw: "RW 02",
        rt: "RT 04",
        lat: -6.9819491,
        lng: 110.4420150,
        description: "Jahit pakaian dan reparasi"
    },
    {
        id: 11,
        name: "Toko Elektronik Canggih",
        category: "Retail",
        address: "Jl. Gajahmada No. 27, Gayamsari",
        rw: "RW 03",
        rt: "RT 01",
        lat: -6.9799491,
        lng: 110.4404150,
        description: "Peralatan elektronik dan gadget"
    },
    {
        id: 12,
        name: "Es Campur Bu Yanti",
        category: "Kuliner",
        address: "Jl. Gajahmada No. 36, Gayamsari",
        rw: "RW 01",
        rt: "RT 01",
        lat: -6.9829491,
        lng: 110.4380150,
        description: "Es campur dan minuman segar"
    },
    {
        id: 13,
        name: "Apotek Sehat",
        category: "Kesehatan",
        address: "Jl. Gajahmada No. 11, Gayamsari",
        rw: "RW 04",
        rt: "RT 02",
        lat: -6.9859491,
        lng: 110.4400150,
        description: "Obat-obatan dan alat kesehatan"
    },
    {
        id: 14,
        name: "Barbershop Modern",
        category: "Jasa",
        address: "Jl. Gajahmada No. 22, Gayamsari",
        rw: "RW 02",
        rt: "RT 03",
        lat: -6.9789491,
        lng: 110.4366150,
        description: "Potong rambut pria modern"
    },
    {
        id: 15,
        name: "Toko Bunga Indah",
        category: "Retail",
        address: "Jl. Gajahmada No. 9, Gayamsari",
        rw: "RW 03",
        rt: "RT 04",
        lat: -6.9839491,
        lng: 110.4426150,
        description: "Bunga segar dan tanaman hias"
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
    'Jasa': '🔧',
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
            <p><strong>🏘️ Wilayah:</strong> ${umkm.rw} ${umkm.rt}</p>
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

// Generate UMKM list
function generateUmkmList(data = umkmData) {
    const umkmList = document.getElementById('umkmList');
    umkmList.innerHTML = '';

    data.forEach(umkm => {
        const color = categoryColors[umkm.category] || '#667eea';
        const card = document.createElement('div');
        card.className = 'umkm-card';
        card.style.borderLeftColor = color;
        card.innerHTML = `
            <h3>${umkm.name}</h3>
            <div class="category" style="background-color: ${color};">${umkm.category}</div>
            <div class="address">📍 ${umkm.address}</div>
            <div class="rw">🏘️ ${umkm.rw} ${umkm.rt}</div>
        `;

        card.addEventListener('click', () => {
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

    // Update total count
    document.getElementById('totalUmkm').textContent = data.length;
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
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}



// Open Google Maps for navigation
function openGoogleMaps(destLat, destLng, umkmName) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}&destination_place_id=${encodeURIComponent(umkmName)}`;
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the list
    generateUmkmList();

    // Initialize search functionality
    initializeSearch();

    // Add map click event to close popups
    map.on('click', function() {
        map.closePopup();
    });

    // Force map resize after page load
    setTimeout(function() {
        map.invalidateSize();
    }, 500);
});

// Handle window resize to refresh map
window.addEventListener('resize', function() {
    setTimeout(function() {
        map.invalidateSize();
    }, 100);
});

// Make functions available globally
window.toggleUMKMList = toggleUMKMList;
window.showStats = showStats;
window.filterByCategory = filterByCategory;
window.showNavigationOptions = showNavigationOptions;
window.openGoogleMaps = openGoogleMaps;
window.openWaze = openWaze;
=======

// Data UMKM contoh - Area sekitar koordinat baru
const umkmData = [
    {
        id: 1,
        name: "Warung Makan Bu Sari",
        category: "Kuliner",
        address: "Jl. Gajahmada No. 15, Gayamsari",
        rw: "RW 01",
        rt: "RT 03",
        lat: -6.9809491,
        lng: 110.4396150,
        description: "Warung makan dengan menu masakan rumahan yang lezat"
    },
    {
        id: 2,
        name: "Toko Kelontong Pak Budi",
        category: "Retail",
        address: "Jl. Gajahmada No. 28, Gayamsari",
        rw: "RW 02",
        rt: "RT 05",
        lat: -6.9819491,
        lng: 110.4406150,
        description: "Menyediakan kebutuhan sehari-hari lengkap"
    },
    {
        id: 3,
        name: "Salon Kecantikan Ayu",
        category: "Jasa",
        address: "Jl. Gajahmada No. 7, Gayamsari",
        rw: "RW 03",
        rt: "RT 02",
        lat: -6.9829491,
        lng: 110.4386150,
        description: "Layanan potong rambut dan perawatan kecantikan"
    },
    {
        id: 4,
        name: "Bengkel Motor Jaya",
        category: "Otomotif",
        address: "Jl. Gajahmada No. 12, Gayamsari",
        rw: "RW 01",
        rt: "RT 04",
        lat: -6.9799491,
        lng: 110.4376150,
        description: "Service dan reparasi sepeda motor"
    },
    {
        id: 5,
        name: "Laundry Express",
        category: "Jasa",
        address: "Jl. Gajahmada No. 21, Gayamsari",
        rw: "RW 04",
        rt: "RT 01",
        lat: -6.9839491,
        lng: 110.4416150,
        description: "Layanan cuci dan setrika kilat"
    },
    {
        id: 6,
        name: "Bakery Gayamsari",
        category: "Kuliner",
        address: "Jl. Gajahmada No. 33, Gayamsari",
        rw: "RW 02",
        rt: "RT 06",
        lat: -6.9789491,
        lng: 110.4400150,
        description: "Roti dan kue segar setiap hari"
    },
    {
        id: 7,
        name: "Fotocopy & Print Cepat",
        category: "Jasa",
        address: "Jl. Gajahmada No. 45, Gayamsari",
        rw: "RW 03",
        rt: "RT 03",
        lat: -6.9809491,
        lng: 110.4410150,
        description: "Layanan fotocopy, print, dan jilid"
    },
    {
        id: 8,
        name: "Toko Bangunan Maju",
        category: "Retail",
        address: "Jl. Gajahmada No. 8, Gayamsari",
        rw: "RW 01",
        rt: "RT 02",
        lat: -6.9779491,
        lng: 110.4370150,
        description: "Material bangunan dan alat konstruksi"
    },
    {
        id: 9,
        name: "Warung Kopi Santai",
        category: "Kuliner",
        address: "Jl. Gajahmada No. 19, Gayamsari",
        rw: "RW 04",
        rt: "RT 05",
        lat: -6.9849491,
        lng: 110.4390150,
        description: "Kopi premium dan camilan ringan"
    },
    {
        id: 10,
        name: "Penjahit Bu Rina",
        category: "Jasa",
        address: "Jl. Gajahmada No. 14, Gayamsari",
        rw: "RW 02",
        rt: "RT 04",
        lat: -6.9819491,
        lng: 110.4420150,
        description: "Jahit pakaian dan reparasi"
    },
    {
        id: 11,
        name: "Toko Elektronik Canggih",
        category: "Retail",
        address: "Jl. Gajahmada No. 27, Gayamsari",
        rw: "RW 03",
        rt: "RT 01",
        lat: -6.9799491,
        lng: 110.4404150,
        description: "Peralatan elektronik dan gadget"
    },
    {
        id: 12,
        name: "Es Campur Bu Yanti",
        category: "Kuliner",
        address: "Jl. Gajahmada No. 36, Gayamsari",
        rw: "RW 01",
        rt: "RT 01",
        lat: -6.9829491,
        lng: 110.4380150,
        description: "Es campur dan minuman segar"
    },
    {
        id: 13,
        name: "Apotek Sehat",
        category: "Kesehatan",
        address: "Jl. Gajahmada No. 11, Gayamsari",
        rw: "RW 04",
        rt: "RT 02",
        lat: -6.9859491,
        lng: 110.4400150,
        description: "Obat-obatan dan alat kesehatan"
    },
    {
        id: 14,
        name: "Barbershop Modern",
        category: "Jasa",
        address: "Jl. Gajahmada No. 22, Gayamsari",
        rw: "RW 02",
        rt: "RT 03",
        lat: -6.9789491,
        lng: 110.4366150,
        description: "Potong rambut pria modern"
    },
    {
        id: 15,
        name: "Toko Bunga Indah",
        category: "Retail",
        address: "Jl. Gajahmada No. 9, Gayamsari",
        rw: "RW 03",
        rt: "RT 04",
        lat: -6.9839491,
        lng: 110.4426150,
        description: "Bunga segar dan tanaman hias"
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
    'Jasa': '🔧',
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
            <p><strong>🏘️ Wilayah:</strong> ${umkm.rw} ${umkm.rt}</p>
            <p><strong>ℹ️ Deskripsi:</strong> ${umkm.description}</p>
            <div style="margin-top: 10px; text-align: center;">
                <button onclick="showRoute(${umkm.lat}, ${umkm.lng}, '${umkm.name}')" 
                        style="background: #27ae60; color: white; border: none; padding: 8px 15px; border-radius: 15px; font-size: 0.9rem; cursor: pointer; margin-right: 5px;">
                    🗺️ Tampilkan Rute
                </button>
                <button onclick="clearRoute()" 
                        style="background: #e74c3c; color: white; border: none; padding: 8px 15px; border-radius: 15px; font-size: 0.9rem; cursor: pointer;">
                    ❌ Hapus Rute
                </button>
            </div>
        </div>
    `;

    marker.bindPopup(popupContent);
    return marker;
}

// Add markers to map
const markers = {};
let routingControl = null;
let userLocation = null;

umkmData.forEach(umkm => {
    markers[umkm.id] = createCustomMarker(umkm);
});

// Generate UMKM list
function generateUmkmList(data = umkmData) {
    const umkmList = document.getElementById('umkmList');
    umkmList.innerHTML = '';

    data.forEach(umkm => {
        const color = categoryColors[umkm.category] || '#667eea';
        const card = document.createElement('div');
        card.className = 'umkm-card';
        card.style.borderLeftColor = color;
        card.innerHTML = `
            <h3>${umkm.name}</h3>
            <div class="category" style="background-color: ${color};">${umkm.category}</div>
            <div class="address">📍 ${umkm.address}</div>
            <div class="rw">🏘️ ${umkm.rw} ${umkm.rt}</div>
        `;

        card.addEventListener('click', () => {
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

    // Update total count
    document.getElementById('totalUmkm').textContent = data.length;
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
        }, 10000);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                clearTimeout(timeoutId);
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                userLocation = [lat, lng];
                console.log("User location found:", userLocation);
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
                timeout: 8000,
                enableHighAccuracy: false,
                maximumAge: 600000
            }
        );
    });
}

// Show route to UMKM with improved error handling
async function showRoute(destLat, destLng, umkmName) {
    try {
        // Clear existing route
        if (routingControl) {
            map.removeControl(routingControl);
            routingControl = null;
        }

        // Show loading message
        const loadingPopup = L.popup()
            .setLatLng([destLat, destLng])
            .setContent(`
                <div style="text-align: center; padding: 10px;">
                    <div style="display: inline-block; width: 20px; height: 20px; border: 3px solid #f3f3f3; border-top: 3px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                    <br><strong>Mencari rute ke ${umkmName}...</strong>
                    <br><small>Meminta izin lokasi...</small>
                </div>
            `)
            .openOn(map);

        // Get user location
        const startLocation = await getUserLocation();
        
        if (!startLocation || startLocation.length !== 2) {
            throw new Error('Invalid user location');
        }

        // Update loading message
        if (loadingPopup.isOpen()) {
            loadingPopup.setContent(`
                <div style="text-align: center; padding: 10px;">
                    <div style="display: inline-block; width: 20px; height: 20px; border: 3px solid #f3f3f3; border-top: 3px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                    <br><strong>Menghitung rute...</strong>
                    <br><small>Mohon tunggu sebentar</small>
                </div>
            `);
        }

        // Validate coordinates
        if (isNaN(destLat) || isNaN(destLng) || isNaN(startLocation[0]) || isNaN(startLocation[1])) {
            throw new Error('Invalid coordinates');
        }

        // Create routing control with better error handling
        routingControl = L.Routing.control({
            waypoints: [
                L.latLng(startLocation[0], startLocation[1]),
                L.latLng(destLat, destLng)
            ],
            routeWhileDragging: false,
            addWaypoints: false,
            createMarker: function(i, waypoint, n) {
                if (i === 0) {
                    // Start marker (user location)
                    return L.marker(waypoint.latLng, {
                        icon: L.divIcon({
                            html: '<div style="background-color: #27ae60; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">📍</div>',
                            className: 'user-location-marker',
                            iconSize: [30, 30],
                            iconAnchor: [15, 15]
                        })
                    }).bindPopup('Lokasi Anda');
                }
                return null; // Don't create marker for destination (already exists)
            },
            lineOptions: {
                styles: [{
                    color: '#27ae60',
                    weight: 6,
                    opacity: 0.8,
                    dashArray: '10, 5'
                }]
            },
            router: L.Routing.osrmv1({
                serviceUrl: 'https://router.project-osrm.org/route/v1',
                timeout: 15000,
                profile: 'driving'
            }),
            show: false,
            collapsible: true,
            draggableWaypoints: false,
            fitSelectedRoutes: true
        });

        // Handle route found
        routingControl.on('routesfound', function(e) {
            try {
                if (loadingPopup.isOpen()) {
                    map.closePopup(loadingPopup);
                }
                
                if (!e.routes || !e.routes[0] || !e.routes[0].summary) {
                    throw new Error('Invalid route data');
                }
                
                const routes = e.routes;
                const summary = routes[0].summary;
                
                // Create custom popup with route info
                const routeInfo = L.popup()
                    .setLatLng([destLat, destLng])
                    .setContent(`
                        <div style="text-align: center; padding: 15px; min-width: 200px;">
                            <h4 style="margin: 0 0 10px 0; color: #27ae60;">🚗 Rute ke ${umkmName}</h4>
                            <div style="background: #f8f9fa; padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                                <div style="margin-bottom: 5px;"><strong>📏 Jarak:</strong> ${(summary.totalDistance / 1000).toFixed(1)} km</div>
                                <div><strong>⏱️ Waktu:</strong> ${Math.round(summary.totalTime / 60)} menit</div>
                            </div>
                            <small style="color: #666;">Rute ditampilkan dengan garis hijau putus-putus</small>
                            <br><br>
                            <button onclick="clearRoute()" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-size: 12px;">
                                ❌ Hapus Rute
                            </button>
                        </div>
                    `)
                    .openOn(map);

                // Fit map to show the complete route with padding
                setTimeout(() => {
                    if (routes[0].bounds) {
                        map.fitBounds(routes[0].bounds, { 
                            padding: [30, 30],
                            maxZoom: 16
                        });
                    }
                }, 500);
            } catch (routeError) {
                console.error('Error processing route:', routeError);
                showRouteError(destLat, destLng, umkmName, 'Error processing route data');
            }
        });

        // Handle routing errors
        routingControl.on('routingerror', function(e) {
            console.error('Routing error:', e);
            if (loadingPopup.isOpen()) {
                map.closePopup(loadingPopup);
            }
            showRouteError(destLat, destLng, umkmName, 'Layanan routing tidak tersedia');
        });

        // Add to map
        routingControl.addTo(map);

        // Set timeout for routing
        setTimeout(() => {
            if (loadingPopup.isOpen()) {
                map.closePopup(loadingPopup);
                showRouteError(destLat, destLng, umkmName, 'Timeout - pencarian rute terlalu lama');
            }
        }, 20000);

    } catch (error) {
        console.error('Error in showRoute:', error);
        showRouteError(destLat, destLng, umkmName, 'Terjadi kesalahan sistem');
    }
}

// Helper function to show route errors
function showRouteError(destLat, destLng, umkmName, errorMessage) {
    L.popup()
        .setLatLng([destLat, destLng])
        .setContent(`
            <div style="text-align: center; color: #e74c3c; padding: 15px;">
                <h4>❌ Tidak dapat membuat rute</h4>
                <p>${errorMessage}</p>
                <p><small>Kemungkinan penyebab:<br>
                - Koneksi internet tidak stabil<br>
                - Layanan routing sedang bermasalah<br>
                - Lokasi tidak dapat dijangkau</small></p>
                <button onclick="showRoute(${destLat}, ${destLng}, '${umkmName}')" 
                        style="background: #3498db; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                    🔄 Coba Lagi
                </button>
                <button onclick="clearRoute()" 
                        style="background: #95a5a6; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin-top: 10px; margin-left: 5px;">
                    ❌ Tutup
                </button>
            </div>
        `)
        .openOn(map);
}

// Clear route
function clearRoute() {
    if (routingControl) {
        map.removeControl(routingControl);
        routingControl = null;
        map.closePopup();
        console.log("Route cleared successfully");
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the list
    generateUmkmList();
    
    // Initialize search functionality
    initializeSearch();
    
    // Add map click event to close popups
    map.on('click', function() {
        map.closePopup();
    });

    // Force map resize after page load
    setTimeout(function() {
        map.invalidateSize();
    }, 500);
});

// Handle window resize to refresh map
window.addEventListener('resize', function() {
    setTimeout(function() {
        map.invalidateSize();
    }, 100);
});

// Make functions available globally
window.toggleUMKMList = toggleUMKMList;
window.showStats = showStats;
window.filterByCategory = filterByCategory;
window.showRoute = showRoute;
window.clearRoute = clearRoute;
>>>>>>> e214e851fedab63d7c3606f421b2dc8e9929fce4
