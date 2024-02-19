var Log=require("../models/log");
var User=require("../models/user").UserModel;


class ReportService{
    async calcHours(data){
        try{
            const userId = data.userId;
            var totalHours=0;
            const user = await User.findById(userId).populate('Logs');
            if (!user) {
                throw new Error('User not found');
            }

            const logs = user.Logs;
            logs.forEach((log)=>{
                const date1=log.In_time;
                const date2=log.Out_time;

                // console.log(date1, date2);

                const diff=Math.abs(date2-date1);
                const hours=diff/(1000*60*60);
                totalHours+=hours;
            });
            // console.log(totalHours);
            return {totalHours:totalHours.toFixed(2),Username:user.Name};
        }
        catch (e) {throw e;}
    }
}

module.exports = new ReportService();