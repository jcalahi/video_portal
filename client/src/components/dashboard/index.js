var DashboardController = require('./dashboard-controller.js'),
    logoutFactory = require('./logout-factory.js');

require('angular').module('crossover')
    .controller('DashboardController', DashboardController)
    .factory('logoutFactory', logoutFactory);