/*global define*/

define([
	'jquery',
	'underscore',
	'parse',
	'templates',
	'/scripts/views/ManageTodos.js', // Why won't `'views/ManageTodos'` work here...
], function ($, _, Parse, JST, ManageTodosView) {
	// 'use strict';

	var LogInView = Parse.View.extend({

		events: {
			'submit form.login-form': 'logIn',
			'submit form.signup-form': 'signUp'
		},

		el: '.content',

		loginTemplate: JST['app/scripts/templates/login.ejs'],

		initialize: function() {
			_.bindAll(this, 'logIn', 'signUp');
			this.render();
		},

		logIn: function(e) {
			var self = this;
			var username = this.$('#login-username').val();
			var password = this.$('#login-password').val();

			Parse.User.logIn(username, password, {
				success: function(user) {
					new ManageTodosView();
					self.undelegateEvents();
					delete self;
				},

				error: function(user, error) {
					self.$('.login-form .error').html('Invalid username or password. Please try again').show();
					this.$('.login-form button').removeAttr('disabled');
				}
			});

			this.$('.login-form button').attr('disabled', 'disabled');

			return false;
		},

		signUp: function(e) {
			var self = this;
			var username = this.$('#signup-username').val();
			var password = this.$('#signup-password').val();

			Parse.User.signUp(username, password, { ACL: new Parse.ACL() }, {
				success: function(user) {
					new ManageTodosView();
					self.undelegateEvents();
					delete self;
				},

				error: function(user, error) {
					self.$('.signup-form .error').html(error.message).show();
					this.$('.signup-form button').removeAttr('disabled');
				}
			});

			this.$('.signup-form button').attr('disabled', 'disabled');

			return false;
		},

		render: function() {
			this.$el.html(_.template(this.loginTemplate()));
			this.delegateEvents();
		}
	});

	return LogInView;
});
