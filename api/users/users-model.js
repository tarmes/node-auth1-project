const db = require('../../database/db-config');

module.exports = {
   getAll() {
      return db('users');
   }
}