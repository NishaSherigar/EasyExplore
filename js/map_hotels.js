$('#collapseMap').on('shown.bs.collapse', function(e){
	(function(A) {

	if (!Array.prototype.forEach)
		A.forEach = A.forEach || function(action, that) {
			for (var i = 0, l = this.length; i < l; i++)
				if (i in this)
					action.call(that, this[i], i, this);
			};

		})(Array.prototype);

		var
		mapObject,
		markers = [],
		markersData = {
			'Marker': [
			{
				type_point: 'Paris Centre',
				name: 'Park Hyatt Paris',
				location_latitude: 48.865633, 
				location_longitude: 2.321236,
				map_image_url: 'img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: 'Park Hyatt Paris',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'hotel-detail.html'
			},
			{
				type_point: 'Paris Centre',
				name: 'Hotel Mariott',
				location_latitude: 48.854183,
				location_longitude: 2.354808,
				map_image_url: 'img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: 'Hotel Mariott',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'hotel-detail.html'
			},
			{
				type_point: 'Paris Centre',
				name: 'Hotel Lumiere',
				location_latitude: 48.863893, 
				location_longitude: 2.342348,
				map_image_url: 'img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: 'Hotel Lumiere',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'hotel-detail.html'
			},
			{
				type_point: 'Paris Centre',
				name: 'Hotel Place Concorde',
				location_latitude: 48.860642,
				location_longitude: 2.352245,
				map_image_url: 'img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: 'Hotel Place Concorde',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'hotel-detail.html'
			},
			{
				type_point: 'Paris Centre',
				name: 'Hotel Name',
				location_latitude: 48.858370, 
				location_longitude: 2.294481,
				map_image_url: 'img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: 'Hotel Name',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'hotel-detail.html'
			},
			{
				type_point: 'Paris Centre',
				name: 'Hotel Name',
				location_latitude: 48.837273,
				location_longitude: 2.335387,
				map_image_url: 'img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: 'Hotel Name',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'hotel-detail.html'
			},
			{
				type_point: 'Paris Centre',
				name: 'Hotel Name',
				location_latitude: 48.860819, 
				location_longitude: 2.354507,
				map_image_url: 'img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: 'Hotel Name',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'hotel-detail.html'
			},
			{
				type_point: 'Paris Centre',
				name: 'Hotel Name',
				location_latitude: 48.853798,
				location_longitude: 2.333328,
				map_image_url: 'img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: 'Hotel Name',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'hotel-detail.html'
			},
			{
				type_point: 'Paris Centre',
				name: 'Hotel Name',
				location_latitude: 48.862880, 
				location_longitude: 2.287205,
				map_image_url: 'img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: 'Hotel Name',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'hotel-detail.html'
			},
			{
				type_point: 'Paris Centre',
				name: 'Hotel Name',
				location_latitude: 48.865784,
				location_longitude: 2.307314,
				map_image_url: 'img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: 'Hotel Name',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'hotel-detail.html'
			},
			{
				type_point: 'Paris Centre',
				name: 'Hotel Name',
				location_latitude: 48.852729, 
				location_longitude: 2.350564,
				map_image_url: 'img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: 'Hotel Name',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'hotel-detail.html'
			},
			{
				type_point: 'Paris Centre',
				name: 'Hotel Name',
				location_latitude: 48.870587, 
				location_longitude: 2.318943,
				map_image_url: 'img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: 'Hotel Name',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'hotel-detail.html'
			}
			]

		};

			var mapOptions = {
				zoom: 14,
				center: [48.865633, 2.321236],
				zoomControl: true,
				scrollWheelZoom: false,
				styles: [
					{
						"featureType": "administrative.country",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "administrative.province",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "administrative.locality",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "administrative.neighborhood",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "administrative.land_parcel",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "landscape.man_made",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "landscape.natural.landcover",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "landscape.natural.terrain",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.attraction",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.business",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.government",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.medical",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.place_of_worship",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.school",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.sports_complex",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.highway.controlled_access",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "transit.line",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "transit.station.airport",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "transit.station.bus",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "transit.station.rail",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					}
				]
			};
			var
			marker;
			mapObject = L.map('map').setView([48.865633, 2.321236], 14);
			
			// Add OpenStreetMap tiles
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution: '© OpenStreetMap contributors'
			}).addTo(mapObject);
			
			for (var key in markersData)
				markersData[key].forEach(function (item) {
					marker = L.marker([item.location_latitude, item.location_longitude], {
						icon: L.icon({
							iconUrl: 'img/pins/' + key + '.png',
							iconSize: [32, 32],
							iconAnchor: [16, 32]
						})
					}).addTo(mapObject);

					if ('undefined' === typeof markers[key])
						markers[key] = [];
					markers[key].push(marker);
					marker.on('click', (function () {
				  closeInfoBox();
				  var popup = getInfoBox(item);
				  marker.bindPopup(popup).openPopup();
				  mapObject.setView([item.location_latitude, item.location_longitude], 14);
				 }));

	});
	
		// Note: MarkerClusterer from Google Maps is not used with Leaflet
		// Leaflet has different clustering libraries if needed
	
		function hideAllMarkers () {
			for (var key in markers)
				markers[key].forEach(function (marker) {
					marker.remove();
				});
		};

		function closeInfoBox() {
			$('div.leaflet-popup').remove();
		};

		function getInfoBox(item) {
			return '<div class="marker_info" id="marker_info">' +
				'<img src="' + item.map_image_url + '" alt=""/>' +
				'<span>'+ 
					'<span class="infobox_rate">'+ item.rate +'</span>' +
					'<h3>'+ item.name_point +'</h3>' +
				'<em>'+ item.type_point +'</em>' +
				'<strong>'+ item.description_point +'</strong>' +
				'<a href="'+ item.url_point + '" class="btn_infobox_detail"></a>' +
				'<form action="http://maps.google.com/maps" method="get" target="_blank"><input name="saddr" value="'+ item.get_directions_start_address +'" type="hidden"><input type="hidden" name="daddr" value="'+ item.location_latitude +',' +item.location_longitude +'"><button type="submit" value="Get directions" class="btn_infobox_get_directions">Get directions</button></form>' +
					'<a href="tel://'+ item.phone +'" class="btn_infobox_phone">'+ item.phone +'</a>' +
					'</span>' +
				'</div>';


		};

    });