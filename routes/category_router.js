var category = require('../model/category_model');
var express = require('express');
var router = express.Router();
router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        category.getAllCategoryById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        category.getAllCategory(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function (req, res, next) {
    category.addCategory(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }

    });
});
router.put('/:id', function (req, res, next) {
    category.updatecategory(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }

    });
});
router.delete('/:id', function (req, res, next) {
    category.deleteCategory(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;