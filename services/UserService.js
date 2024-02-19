var User=require("../models/user").UserModel;

class UserService{
    async createUser(data){
        return await User.create(data);
    }
}

module.exports = new UserService();