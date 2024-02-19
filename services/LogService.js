var Log=require("../models/log");

class LogService{
    async createLog(data){
        return await Log.create(data);
    }
}

module.exports = new LogService();