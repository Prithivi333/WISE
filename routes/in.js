var express = require('express');
const Status = require('../models/user').Status;
var router = express.Router();
var User = require('../models/user').UserModel;


router.post('/', function(req, res, next) {
    const {userId,time}=req.body;
    console.log(req.body);
    User.findById(userId)
    .then((user)=>{
        if(user!=null){
            if(user.Status==Status.OOO){
            User.findByIdAndUpdate(userId,{$set:{Status:Status.IO, LastCheckIn:time}},{new:true})
            .select('-Admin')
                .then((user)=>{
                    res.statusCode=200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(user);
                }
            ,(err)=>next(err));
            }
            else res.send("Already checked in!");
        }
    })
});

module.exports = router;