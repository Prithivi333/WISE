var express = require('express');
var UserService=require("../services/UserService");
var bp=require('body-parser');
var router = express.Router();

router.use(bp.json());

router.post('/signup', function(req, res, next) {
  // console.log(req.body)
  UserService.createUser(req.body)
  .then((user)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    res.json(user);
  },(err)=>{console.log(err);next(err);});
});

module.exports = router;