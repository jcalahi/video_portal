function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('login', {
            url: '/',
            controller: 'LoginController as lc',
            templateUrl: 'src/components/login-page/login.html'
        })
        .state('dashboard', {
            url: '/user',
            controller: 'DashboardController as dc',
            params: {
                userData: ''
            },
            templateUrl: 'src/components/dashboard/dashboard.html'
        });

        $locationProvider.html5Mode(true);
}

module.exports = config;