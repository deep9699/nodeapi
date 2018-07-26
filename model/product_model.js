var db=require('../dbconnection');
var product={
    getProductById:function(id,callback){
        return db.query('select * from product_tbl where p_id=?',[id],callback);
    },
    getAllProduct:function(callback){
        return db.query('select * from product_tbl',callback);
    },
    addProduct:function(item,filename,callback){
        return db.query("Insert into product_tbl values(?,?,?,?,?,?)",[item.p_id,item.p_name,item.p_price,item.p_quantity,item.p_status,filename],callback);
    },
    deleteProduct:function(id,callback){
        return db.query("delete from product_tbl where p_id=?",[id],callback);
    },
    updateProduct:function(item,id,callback){
        return db.query("update product_tbl set p_name=?,p_price=?,p_quantity=?,p_status=?,p_img=? where p_id=?",[item.p_name,item.p_price,item.p_quantity,item.p_status,item.p_img,id],callback);
    }
};
module.exports=product;