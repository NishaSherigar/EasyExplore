(function($){
	$.fn.mapmarker = function(options){
		var opts = $.extend({}, $.fn.mapmarker.defaults, options);

		return this.each(function() {
			// Apply plugin functionality to each element
			var map_element = this;
			addMapMarker(map_element, opts.zoom, opts.center, opts.markers);
		});
	};

	// Set up default values
	var defaultMarkers = {
		"markers": []
	};

	$.fn.mapmarker.defaults = {
		zoom	: 8,
		center	: 'United States',
		markers	: defaultMarkers
	}

	// Main function code here (using Leaflet instead of Google Maps API v3)
	function addMapMarker(map_element, zoom, center, markers){
		// Initialize Leaflet map with default center
		var mapObject = L.map(map_element).setView([37.8, -95.6], zoom);
		
		// Add OpenStreetMap tiles
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '© OpenStreetMap contributors',
			maxZoom: 19
		}).addTo(mapObject);

		// Add markers from the markers array
		$.each(markers.markers, function(i, the_marker){
			var latitude = the_marker.latitude;
			var longitude = the_marker.longitude;
			var icon = the_marker.icon || 'img/pins/Marker.png';
			var baloon_text = the_marker.baloon_text || '';

			if(latitude != "" && longitude != ""){
				var marker = L.marker([latitude, longitude], {
					icon: L.icon({
						iconUrl: icon,
						iconSize: [32, 32],
						iconAnchor: [16, 32]
					})
				}).addTo(mapObject);

				if(baloon_text) {
					marker.bindPopup(baloon_text);
				}
			}
		});
	}

})(jQuery);