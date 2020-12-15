const express = require('express');

const Users = require('./users-model');
 
const router = express.Router();

const restricted = (req, res, next) => {
   if (req.session && req.session.user) {
      next();
   } else {
      res.status(401).json('unauthorized');
   }
}

router.get('/', restricted, (req, res) => {
   Users.getAll()
      .then(users => {
         res.status(200).json(users);
      })
      .catch(err => res.send(err))
})

module.exports = router;