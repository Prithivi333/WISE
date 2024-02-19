var express = require('express');
const Status = require('../models/user').Status;
var router = express.Router();
var User = require('../models/user').UserModel;
var Log = require('../models/log');


router.post('/', function(req, res, next) {
    const {userId,time}=req.body;
    // console.log(req.body);
    User.findById(userId)
            .then(async (user)=>{
                if(user.Status == Status.IO){
                    const in_time=user.LastCheckIn;
                    const newLog=await Log.create({In_time:in_time,Out_time:time});
                    User.findByIdAndUpdate(userId,{$set:{Status:Status.OOO},$push:{Logs:newLog}},{new:true}).select('-Admin')
                        .then((user)=>{
                            res.statusCode=200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(user);
                        }
                    ,(err)=>next(err));
                }
                else res.send("Already checked out!");
            })
});

module.exports = router;