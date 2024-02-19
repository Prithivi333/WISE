var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var Log=new Schema({
    In_time:{
        type:Date
    },
    Out_time:{
        type:Date
    }
    // User: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports=mongoose.model('Log',Log);