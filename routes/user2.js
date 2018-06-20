var user_mod=require("../model/user");
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    user_mod.addUsermod(req.body,function(err,rows){
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