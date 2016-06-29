function LoginController($state, loginFactory) {
    var lc = this;

    lc.user = {};

    lc.loginButton = function(user) {
        loginFactory.postLogin(user).then(function(res) {
            $state.go('dashboard', { userData: res.data });
        });
    };

}

module.exports = LoginController;