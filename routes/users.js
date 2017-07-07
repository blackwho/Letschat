var express = require('express');
var router = express.Router();
var User = require('../model/user');

/* GET users listing. */
router.get('/fetch', function(req, res, next) {
  User.find({}, function(err, users){
    var userMap = [];

    users.forEach(function(user) {
      userMap.push({
          id: user._id,
          username: user.user,
          email: user.email
      });
    });
      
    res.json({users: userMap});
  });
});

module.exports = router;
