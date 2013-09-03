/*global define*/

define([
	'underscore',
	'parse'
], function (_, Parse) {
	'use strict';

	var AppState = Parse.Object.extend('AppState', {
		defaults: {
			filter: 'all'
		}
	});

	return new AppState();
});