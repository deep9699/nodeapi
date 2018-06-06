var task = require('../model/task_model');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    task.getAllTask(function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
router.post('/', function (req, res, next) {

    task.addTask(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.delete('/:id', function (req, res, next) {

    task.deleteTask(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }

    });
});
router.put('/:id', function (req, res, next) {

    task.updateTask(req.params.id, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;