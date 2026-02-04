	(function(A) {
	if (!Array.prototype.forEach)
		A.forEach = A.forEach || function(action, that) {
			for (var i = 0, l = this.length; i < l; i++)
				if (i in this)
					action.call(that, this[i], i, this);
		};
	})(Array.prototype);

	var mapObject, markers = [], markersData = {
		'Marker': [{
			type_point: 'Museum',
			name: 'Louvre Museum',
			location_latitude: 48.865633, 
			location_longitude: 2.321236,
			map_image_url: 'img/thumb_map_single_tour.jpg',
			rate: 'Superb | 7.5',
			name_point: 'Louvre Museum',
			get_directions_start_address: '',
			phone: '+3934245255'
		}]
	};

// Initialize Leaflet map
	mapObject = L.map('map').setView([48.865633, 2.321236], 14);
	
	// Add OpenStreetMap tiles
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '© OpenStreetMap contributors',
		maxZoom: 19
	}).addTo(mapObject);

	// Add markers
	for (var key in markersData) {
		markersData[key].forEach(function (item) {
			var marker = L.marker([item.location_latitude, item.location_longitude], {
				icon: L.icon({
					iconUrl: 'img/pins/' + key + '.png',
					iconSize: [32, 32],
					iconAnchor: [16, 32]
				})
			}).addTo(mapObject);

			if ('undefined' === typeof markers[key])
				markers[key] = [];
			markers[key].push(marker);

			marker.on('click', function () {
				closeInfoBox();
				var popup = getInfoBox(item);
				marker.bindPopup(popup).openPopup();
				mapObject.setView([item.location_latitude, item.location_longitude], 14);
			});
		});
	}

	function hideAllMarkers() {
		for (var key in markers)
			markers[key].forEach(function (marker) {
				mapObject.removeLayer(marker);
			});
	}

	function closeInfoBox() {
		$('div.infoBox, .leaflet-popup').remove();
	}

	function getInfoBox(item) {
		var html = '<div class="marker_info" id="marker_info">' +
			'<img src="' + item.map_image_url + '" alt=""/>' +
			'<span>' + 
				'<span class="infobox_rate">'+ item.rate +'</span>' +
				'<h3>'+ item.name_point +'</h3>' +
			'<em>'+ item.type_point +'</em>' +
			'<strong>'+ (item.description_point || '') +'</strong>' +
			'<form action="https://maps.openstreetmap.org/" method="get" target="_blank">' +
				'<input type="hidden" name="lat" value="'+ item.location_latitude +'">' +
				'<input type="hidden" name="lon" value="'+ item.location_longitude +'">' +
				'<button type="submit" class="btn_infobox_get_directions">View on map</button>' +
			'</form>' +
			'<a href="tel://'+ item.phone +'" class="btn_infobox_phone">'+ item.phone +'</a>' +
			'</span>' +
		'</div>';
		return html;
	}
