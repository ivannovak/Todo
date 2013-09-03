/*global define*/

define([
	'jquery',
	'underscore',
	'parse',
	'templates',
	'views/ManageTodos',
	'views/LogIn'
], function ($, _, Parse, JST, ManageTodosView, LogInView) {
	'use strict';

	var AppView = Parse.View.extend({
		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: $('#todoapp'),

		initialize: function() {
			this.render();
		},

		render: function() {
			if (Parse.User.current()) {
				new ManageTodosView();
			} else {
				new LogInView();
			}
		}
	});

	return AppView;
});