var bookshelf = require('../modules/bookshelf');

var Users = bookshelf.Model.extend({
   tableName: 'users',
   idAttribute: 'user_id'
});

module.exports = Users;
