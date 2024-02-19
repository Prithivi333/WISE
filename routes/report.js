var express = require('express');
var router = express.Router();
var bp=require('body-parser');
var ReportService=require('../services/ReportService');
const { verifyAdmin } = require('../authenticate');

router.use(bp.json());

router.get('/', async (req, res,next)=>{
    // const year = req.params.year;
    // const month = req.params.month;
    const report=await ReportService.calcHours(req.body);
    // console.log(totalHours);
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    // res.body=totalHours;
    res.json({report});
});

router.delete('/deleteLog',verifyAdmin, (req, res, next)=> {
    //allow deletes only for admin users
});

module.exports=router;