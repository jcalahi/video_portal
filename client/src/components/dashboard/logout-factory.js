function logoutFactory($stateParams, $http) {

    return {
        logout: logout
    };

    function logout() {
        var config = {
            method: 'GET',
            url: 'user/logout',
            params: {
                sessionId: $stateParams.userData.sessionId
            }
        };

        return $http(config).then(function(response) {
            return response;
        });
    }
}

module.exports = logoutFactory;