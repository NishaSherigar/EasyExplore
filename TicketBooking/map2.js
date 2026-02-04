


function initMap() {
    const place = {  lat: 51.511053,lng: -0.096884 };
    const map = L.map('map').setView([place.lat, place.lng], 16);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  
    // fn that calls add marker 
    map.on('click', (event) => {
        addMarker(event.latlng, map);
    });
    
    // 1st popup creation
    let popup = L.popup()
        .setLatLng([place.lat, place.lng])
        .setContent('3d map')
        .openOn(map);
  
    // Configure the click listener.
    map.on('click', (event) => {
        // Close current popup
        map.closePopup();
        // popup creation
        popup = L.popup()
            .setLatLng(event.latlng)
            .setContent(JSON.stringify({lat: event.latlng.lat, lng: event.latlng.lng}, null, 2))
            .openOn(map);
    });
    
  }
  
  // Adds marker 
  function addMarker(location, map) {
    L.marker(location, {
        icon: L.icon({
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50]
        })
    }).addTo(map);
  }








  }
  
  
  