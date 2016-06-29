var LoginController = require('./login-controller.js'),
    HashService = require('./hash-service.js'),
    loginFactory = require('./login-factory.js');

require('angular').module('crossover')
    .controller('LoginController', LoginController)
    .service('HashService', HashService)
    .factory('loginFactory', loginFactory);