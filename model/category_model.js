var db=require('../dataconnection');
var category={
    getAllCategory:function(callback){
     return db.query('select * from category_tbl',callback);   
    },
    addCategory:function(item,callback){
        return db.query('insert into category_tbl values(?,?,?)',[item.cat_id,item.cat_name,item.is_active],callback);
    },
    deleteCategory:function(id,callback){
        return db.query('delete from category_tbl where cat_id=?',[id],callback);
    },
    getAllCategoryById(id,callback){
        return db.query('select * from category_tbl where cat_id=?',[id],callback);
    },
    updatecategory(item,callback){
        return db.query('update category_tbl set cat_name=?,is_active=? where cat_id=?',[item.cat_name,item.is_active,item.cat_id],callback)
    }
};
module.exports=category;