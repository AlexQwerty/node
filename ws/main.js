var connections = require('../modules/connections');

module.exports = function (ws, req) {
    if (!req.isAuthenticated()) {
        return null;
    }
    var userId = req.user.get('user_id');

    connections.add(userId, {time: new Date().getTime(), ws: ws});

    ws.on('message', function (msg) {
        var conn = connections.getAll();
        for (var i in conn){
            conn[i].ws.send('hello ' + i + ' ' + conn[i].time + ' ' + msg);
        }
    });

    ws.on('close', function () {
        connections.remove(userId);
    });
}
