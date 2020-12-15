const db = require('../../database/db-config');

function findById(id) {
   return db('users').where({ id }).first();
}

module.exports = {
   getAll() {
      return db('users');
   },
   findBy(filter) {
      return db('users').where(filter).orderBy('id');
   },
   async add(user) {
      const [id] = await db('users').insert(user, 'id');
      return findById(id);
   },
   findById
}