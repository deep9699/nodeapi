var user_mod = require("../model/user");
var express = require('express');
var router = express.Router();

router.get('/:cat_name?', function (req, res, next) {
    if (req.params.cat_name) {
        user_mod.getProByCat(req.params.cat_name,function(err,rows){
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
    else {
        user_mod.getAllPro(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });

    }

});

module.exports = router;