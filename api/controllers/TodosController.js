const mongoose = require('mongoose')
const Task = mongoose.model('Tasks')
const { subject } = require('../../rxjs/subjects/Log')

exports.index = function(req, res) {
    Task.find({}, function(err, task) {
        subject.next('Listing tasks')
        if (err) {
            subject.next(err)
            res.send(err)
        }
        res.json(task)
    })
}

exports.store = function(req, res) {
    const new_task = new Task(req.body)
    new_task.save(function(err, task) {
        subject.next('Creating task')
        if (err) {
            subject.next(err)
            res.send(err)
        }
        subject.next(task)
        res.json(task)
    })
}

exports.show = function(req, res) {
    Task.findById(req.params.id, function(err, task) {
        subject.next('Listing task')
        if (err) {
            subject.next(err)
            res.send(err)
        }
        res.json(task)
    })
}

exports.update = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.id}, req.body, function(err, task) {
        subject.next('Updating task')
        if (err) {
            subject.next(err)
            res.send(err)
        }
        subject.next(task)
        res.json(task)
    })
}

exports.destroy = function(req, res) {
    Task.findOneAndDelete({_id: req.params.id}, function(err, task) {
        subject.next('Deleting task')
        if (err) {
            subject.next(err)
            res.send(err)
        }
        subject.next(task)
        res.json(task)
    })
}