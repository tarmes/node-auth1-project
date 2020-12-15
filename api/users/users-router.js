const express = require('express');

const Users = require('./users-model');
 
const router = express.Router();

router.get('/', (req, res) => {
   Users.getAll()
      .then(users => {
         res.status(200).json(users);
      })
      .catch(err => res.send(err))
})

module.exports = router;