const Handlers = require("./controller");



module.exports = {
    'router': Routify
};

function Routify(app){
    // app.posts('/tasks', (req,res)=>Handlers.create(req,res));
    app.post('/api/products', function(req, res){
        Handlers.create(req,res);
    });
    //readall
    app.get('/api/products', function(req, res){
        Handlers.findAll(req,res);
    });
    //readone
    app.get('/api/products/:id', function(req, res){
        Handlers.findOne(req,res);
    });
    //update
    app.put('/api/products/:id', function(req, res){
        Handlers.updateOne(req,res);
    });
    app.put('/api/products/like/:id', function(req, res){
        Handlers.updateLike(req,res);
    });
    //delete
    app.delete('/api/products/:id', function(req, res){
        Handlers.deleteOne(req,res);
    });
}