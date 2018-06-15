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
    }


};
module.exports = task;
