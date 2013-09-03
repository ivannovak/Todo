/*global define*/

define([
	'underscore',
	'parse'
], function (_, Parse) {
	'use strict';

	var Todo = Parse.Object.extend('Todo', {
		defaults: {
			content: 'empty todo...',
			done: false
		},

		// Ensure that each todo created has `content`.
		initialize: function() {
			if (!this.get('content')) {
				this.set({'content': this.defaults.content});
			}
		},

		// Toggle the `done` state of this todo item
		toggle: function() {
			this.save({done: !this.get('done')});
		}
	});

	return Todo;
});