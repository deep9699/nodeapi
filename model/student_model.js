var db=require('../dbconnection');
var student={
    getAllStudnet:function(callback){
        db.query("select * from student",callback);
    },
    addStudent:function(item,callback){
        db.query("insert into student values(?,?,?,?)",[item.id,item.name,item.percentage,item.result],callback);
    },
    deleteStudent:function(id,callback){
        db.query("delete from student where id=?",[id],callback);
    },
    updateStudent:function(id,item,callback){
        db.query("update student set name=?,percentage=?,result=? where id=?",[item.name,item.percentage,item.result,id],callback);
    },
    getStudentById:function(id,callback){
        db.query("select * from student where id=?",[id],callback);
    }
};
module.exports=student;