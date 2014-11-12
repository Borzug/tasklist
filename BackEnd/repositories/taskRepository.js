var repositories;
(function(repositories) {
    var taskRepository = (function () {
        var mongo = require('mongodb');
        var monk = require('monk');
        var db = monk('127.0.0.1:27017/tasks');
        
        function taskRepository() {
        }
        taskRepository.prototype.GetAll = function (onCompleteCallback) {
            var tasks = db.get('taskcollection');
            tasks.find({}, {}, function (e, docs) {
                onCompleteCallback(docs);
            });
        };

        taskRepository.prototype.Remove = function (id) {
            var tasks = db.get('taskcollection');
            tasks.remove({ _id: id });
        };

        taskRepository.prototype.Add = function (title, body, onCompleteCallback) {
            var tasks = db.get('taskcollection');
            tasks.insert({
                title: title, body: body, iscomplete: false
        }, function(err,docsInserted) {
                onCompleteCallback(docsInserted);
            });
        };

        taskRepository.prototype.Update = function (id, title, body) {
            var tasks = db.get('taskcollection');
            tasks.update({ _id: id }, { title: title, body: body });
        };

        taskRepository.prototype.SetComplete = function (id) {
            var tasks = db.get('taskcollection');
            tasks.update({ _id: id }, { $set: { iscomplete: true } });
        };
        return taskRepository;
    })();
    repositories.taskRepository = taskRepository;
})(repositories || (repositories = {}));
exports.repositories = repositories;
