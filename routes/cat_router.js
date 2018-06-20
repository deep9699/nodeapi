var user_mod=require("../model/user");
var express=require('express');
var router=express.Router();

router.get('/:p_id?',function(req,res,next){
    if(req.params.p_id)
    {
        user_mod.getProById(req.params.p_id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
    else
    {
        user_mod.getAllCat(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
   
});

module.exports=router;