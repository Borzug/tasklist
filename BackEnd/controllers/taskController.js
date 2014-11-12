var controllers;
(function(controllers) {
    var taskController = (function () {
        var repositories = require('./repositories/taskRepository.js');
        function taskController(){
        }

        taskController.prototype.get = function (req, res) {
            var taskRepository = new repositories.repositories.taskRepository();
            taskRepository.GetAll(function (doc) {
                res.json(doc);
            });
        };

        taskController.prototype.delete = function(req, res) {
            var taskRepository = new repositories.repositories.taskRepository();
            var id = req.param('id');

            taskRepository.Remove(id);
            res.send('');
        };
        taskController.prototype.put = function(req, res) {
            var taskRepository = new repositories.repositories.taskRepository();
            var title = req.param('title');
            var body = req.param('body');

            taskRepository.Add(title, body, function(docsInserted) {
                res.json(docsInserted);
            });
        };
        taskController.prototype.post = function(req, res) {
            var taskRepository = new repositories.repositories.taskRepository();
            var id = req.param('id');
            var title = req.param('title');
            var body = req.param('body');

            taskRepository.Update(id, title, body);
            res.send('');
        };
        taskController.prototype.patch = function(req, res) {
            var taskRepository = new repositories.repositories.taskRepository();
            var id = req.param('id');

            taskRepository.SetComplete(id);
            res.send('');
        };
        return taskController;
    })();
    controllers.taskController = taskController;
})(controllers || (controllers = {}));

exports.controllers = controllers;