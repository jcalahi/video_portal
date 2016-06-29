'use strict'; /* jshint ignore: line */

var config = require('../config/routes.js');

require('angular').module('crossover', [require('angular-ui-router'), require('angular-md5')]).config(config).run(run);

function run($state) {
    $state.go('login');
}

require('../components/login-page');
require('../components/dashboard');