function HashService(md5) {
    var HashService = {
        encrypt: function(pw) {
            return md5.createHash(pw || '');
        }
    };
    return HashService;
}

module.exports = HashService;