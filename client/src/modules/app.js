'use strict'; /* jshint ignore: line */

require('angular').module('crossover', [require('angular-ui-router')]).config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('login', {
            url: '/',
            template: '<div>Hello</div>'
        });
}