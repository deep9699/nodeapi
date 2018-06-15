var db = require('../dbconnection');
var user_mod = {
    getAllUsermod: function (callback) {
        return db.query("select * from user_tbl",callback);
    },
    getUsermodById: function (id, callback) {
        return db.query("select * from user_tbl where email_id=?", [id], callback);
    },
    getUsermodLogin: function (item, callback) {
        return db.query("select * from user_tbl where email_id=? And password=?", [item.email_id,item.password], callback);
    },
    addUsermod:function(item,callback){
        return db.query("insert into user_tbl values(?,?,?,?,?,?,?)",[item.email_id,item.password,item.user_name,item.mobile_no,item.city,item.gender,item.address],callback);
    },
    updateUsermod:function(id,item,callback){
        return db.query("update user_tbl set user_name=?,mobile_no=?,city=?,address=? where email_id=?",[item.user_name,item.mobile_no,item.city,item.address,id],callback);
    },
    updateUserpass:function(item,callback){
        return db.query("update user_tbl set password=? where email_id=?",[item.password,item.email_id],callback);
    }

}
module.exports=user_mod;