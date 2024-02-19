var mongoose=require('mongoose')
var Schema=mongoose.Schema;

const Status={
    IO:"in_office",
    OOO:"out_of_office"
};

var User=new Schema({
    Name:
    {
        type:String,
        default:''
    },
    Status:{
        type:String,
        enum:Object.values(Status),
        default:'out_of_office'
    },
    LastCheckIn:{
        type:Date,
    },
    Admin:{
        type:Boolean,
        default:false
    },
    Logs : [{type:Schema.Types.ObjectId, ref: 'Log'}]
});

const UserModel=mongoose.model('User',User);

module.exports={UserModel,Status}