module.exports = function (ws, req) {
    if (!req.isAuthenticated()){
        return null;
    }
    ws.on('message', function (msg) {
        console.log(msg);
    });
}
