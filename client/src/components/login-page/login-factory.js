function loginFactory(HashService, $http) {
    return {
        postLogin: postLogin
    };

    function postLogin(data) {

        data.password = HashService.encrypt(data.password);

        var config = {
            method: 'POST',
            url: 'user/auth',
            data: data
        };

        return $http(config).then(function(res) {
            return res;
        });
    }
}

module.exports = loginFactory;