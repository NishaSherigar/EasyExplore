/**
 * @name InfoBox
 * @version 1.1.12 [December 11, 2012]
 * @author Gary Little (inspired by proof-of-concept code from Pamela Fox of Google)
 * @copyright Copyright 2010 Gary Little [gary at luxcentral.com]
 * @fileoverview InfoBox wrapper - now using Leaflet popups instead of Google Maps
 *
 * NOTE: This is a compatibility wrapper for Leaflet. The original Google Maps InfoBox
 * has been replaced with Leaflet popup functionality.
 */

/*jslint browser:true */

/**
 * Creates a Leaflet-compatible InfoBox wrapper
 * Since we're using Leaflet now, this is a simple wrapper around Leaflet popups
 * @constructor
 * @param {Object} [opt_opts] Options object
 */
function InfoBox(opt_opts) {
  opt_opts = opt_opts || {};
  
  this.content_ = opt_opts.content || "";
  this.position_ = opt_opts.position || null;
  this.zIndex_ = opt_opts.zIndex || null;
  this.boxClass_ = opt_opts.boxClass || "infoBox";
  this.isOpen_ = false;
  this.marker_ = null;
  this.map_ = null;
}

/**
 * Opens the InfoBox on a map
 * @param {Object} map The Leaflet map object
 * @param {Object} marker The Leaflet marker object (optional)
 */
InfoBox.prototype.open = function(map, marker) {
  this.map_ = map;
  this.marker_ = marker;
  
  if (marker && typeof marker.bindPopup === 'function') {
    marker.bindPopup(this.content_).openPopup();
  } else if (map && typeof map.openPopup === 'function') {
    // Fallback for direct map popup
    var popup = L.popup()
      .setContent(this.content_)
      .setLatLng(this.position_ || [0, 0])
      .openOn(map);
  }
  
  this.isOpen_ = true;
  
  // Trigger open event for compatibility
  if (this.onOpen_) {
    this.onOpen_();
  }
};

/**
 * Closes the InfoBox
 */
InfoBox.prototype.close = function() {
  if (this.marker_ && typeof this.marker_.closePopup === 'function') {
    this.marker_.closePopup();
  } else if (this.map_ && typeof this.map_.closePopup === 'function') {
    this.map_.closePopup();
  }
  
  this.isOpen_ = false;
  
  // Trigger close event for compatibility
  if (this.onClose_) {
    this.onClose_();
  }
};

/**
 * Set content
 */
InfoBox.prototype.setContent = function(content) {
  this.content_ = content;
};

/**
 * Get content
 */
InfoBox.prototype.getContent = function() {
  return this.content_;
};

/**
 * Set position
 */
InfoBox.prototype.setPosition = function(position) {
  this.position_ = position;
};

/**
 * Get position
 */
InfoBox.prototype.getPosition = function() {
  return this.position_;
};

/**
 * Get visibility
 */
InfoBox.prototype.isVisible = function() {
  return this.isOpen_;
};
