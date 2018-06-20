var user_mod=require("../model/user");
var express=require('express');
var router=express.Router();

router.get('/:cat_id',function(req,res,next){
    user_mod.getProByCatId(req.params.cat_id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/:c_id/:p_id',function(req,res,next){
    user_mod.getProByCatId(req.params.c_id,req.params.p_id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;