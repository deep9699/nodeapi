var db=require('../dbconnection');
var product={
    getAllProduct:function(callback){
        return db.query('select * from product_tbl',callback);
    }
};
module.exports=product;