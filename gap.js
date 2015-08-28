/* @namespace GAP
 * @desc Namespace for the gap modules.
 */
var GAP = (function () {
	/* Private */
	var version = "0.1.0";

	/* Public */
	return {
		/** @memberof GAP
		 * @desc Returns the GAP version.
		 */
		getVersion: function () {
			return version;
		}
	};
}());


/* (C) Yehya Awad 2015 */