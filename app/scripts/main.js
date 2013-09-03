/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        parse: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Parse'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        parse: '../bower_components/parse-1.2.9.min.js/index',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap',
    }
});

require([
    'parse',
    'jquery',
    'routes/app',
    'views/app'
], function (Parse, $, AppRouter, AppView) {

    new AppRouter();

    Parse.$ = $;
    // Initialize Parse with your Parse application javascript keys
    Parse.initialize('your-application-id',
                     'your-javascript-key');

    new AppView();

    Parse.history.start();
});
