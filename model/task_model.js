var db=require('../dbconnection');
var task={
    getAllTask:function(callback){
        return db.query('select * from task',callback);
    }
};
module.exports=task;
