exports.setup = function (app, controller) {
    app.get('/tasks', controller.get);
    app.delete('/tasks/:id', controller.delete);
    app.put('/tasks/:title&:body', controller.put);
    app.post('/tasks/:id/:title&:body', controller.post);
    app.patch('/tasks/:id/complete', controller.patch);
}