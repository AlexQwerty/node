var connections = (function(){
    var conn = {};
    return {
        getAll: function(){
            return conn;
        },
        add: function(key, value){
            conn[key] = value;
        },
        get: function(key){
            return conn[key];
        },
        remove: function(key){
            delete conn[key];
        }
    }
})();

module.exports = connections;