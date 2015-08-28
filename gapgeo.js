/** @namespace GAP.Geo
 * @desc An abstraction for the geolocation plugin.
 * @require PhoneGap:Geolocation-plugin
 */
GAP.Geo = (function () {

	"use strict";

	/* Private 
	 * Properties/Methods 
	 */
	var moduleConfig = {
			version: "1.0"
		},
		/* Error Enums */
		ERROR = {
			PLUGIN: 1,
			UNKNOWN: 99
		},
		/* Coordinates */
		xCoord = 0,
		yCoord = 0,
		/* Sets the Coordinates */
		setCoords = function (x, y) {
			if (typeof x === "number" && typeof y === "number") {
				xCoord = x;
				yCoord = y;
			} else if (typeof x === "object" && typeof x.x === "number") {
				xCoord = x.x;
				yCoord = x.y;
			}
		},
		/* Success callback */
		updateSuccess = function (position) {
			setCoords(position.coords.latitude, position.coords.longitude);
		},
		/* Fail callback & error messages */
		updateFail = function (code, message) {
			if (typeof message === "string") {
				console.error(code + ": " + message);
				return;
			}

			message = "ERROR " + code + ": ";

			switch (code) {
				case ERROR.PLUGIN:
					message += "Geo-location plugin missing.";
					break;
				default:
					message += "Geo-location update failed.";
			}
		};

	/* Public
	 * Properties/Methods
	 */
	return {
		getVersion: function () {
			return moduleConfig.version;
		},
		updateLocation: function () {
			if (typeof navigator.geolocation.getCurrentPosition === "function") {
				navigator.geolocation.getCurrentPosition(updateSuccess, updateFail);
			} else {
				updateFail(ERROR.PLUGIN);
			}
		},
		updateLocationWithCallback: function (successCallback, failCallback) {
			if (typeof navigator.geolocation.getCurrentPosition === "function") {
				navigator.geolocation.getCurrentPosition(successCallback, failCallback);
			} else {
				updateFail(ERROR.PLUGIN);
			}
		},
		getCoords: function () {
			return {
				x: xCoord,
				y: yCoord
			};
		}
	};
}());

/* (C) Yehya Awad 2015 */
