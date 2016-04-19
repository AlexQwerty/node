var DB = require('../modules/db');

var Users = DB.Model.extend({
   tableName: 'users',
   idAttribute: 'user_id'
});

module.exports = Users;
