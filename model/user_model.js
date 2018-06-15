db=require('../dataconnection');
user={
    checkUser:function(callback){
        return db.query('select * from user',callback);
    },
    addUser:function(item,callback)
    {
        return db.query('insert into user values(?,?)',[item.user_id,item.user_password],callback);
    },
    updateUser:function(item,callback)
    {
        return db.query('update user set user_password=? where user_id=?',[item.user_password,item.user_id],callback);
    }
}
module.exports=user;