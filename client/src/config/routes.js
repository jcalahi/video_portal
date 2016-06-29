function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('login', {
            url: '/',
            template: '<div>Hello</div>'
        });

}

module.exports = config;