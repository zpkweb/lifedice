(function (exports) {

	'use strict';

	var STORAGE_KEY = 'lifedice';

	exports.storage = {
		fetch: function () {
			return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		},
		save: function (data) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
		}
	};

})(window);