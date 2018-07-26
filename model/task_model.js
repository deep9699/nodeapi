var db = require('../dbconnection');
var task = {
    getAllTask: function (callback) {
        return db.query('select * from task', callback);
    },
    getTaskbyId:function(id,callback){
        return db.query('select * from task where Id=?',[id],callback);
    },
    addTask: function (item, callback) {
        return db.query("Insert into task values(?,?,?)", [item.Id, item.Title, item.Status], callback);
    },
    deleteTask: function (id, callback) {
        return db.query("delete from task where Id=?", [id], callback);
    },
    updateTask: function (id, item, callback) {
        return db.query("update task set Title=?,Status=? where Id=?", [item.Title, item.Status, id], callback);
    },
    deleteAll: function(item, callback) {  
        var delarr = [];  
        for (i = 0; i < item.length; i++) {  
            delarr[i] = item[i].Id;  
        }  
        return db.query("delete from task where Id in (?)", [delarr], callback);  
    }  


};
module.exports = task;
