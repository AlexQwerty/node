var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'user',
    password : '',
    database : 'test',
    charset  : 'utf8'
  }
});
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;