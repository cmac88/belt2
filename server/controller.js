const Product = require('./schemas');


module.exports = {
    create: create,
    findAll: findAll,
    findOne: findOne,
    deleteOne: deleteOne,
    updateOne: updateOne,
    updateLike: updateLike
};
function create(req, res){
    Product.create(req.body)
        .then(data=>res.json(data))
        .catch(errs=>{
            console.log(errs)
            res.json(errs)}); 
}
function findAll(req, res){
    Product.find({})
        .sort({type: 1})
        .then((data)=>res.json(data))
        .catch(errs=>res.json(errs));
}
//readone
function findOne(req, res){
    Product.findById(req.params.id)
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
};
//update
function updateOne(req, res){
    console.log('controller', req.body);
    Product.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true, runValidators: true})
        .then(data=>{
            console.log('it worked', data)
            res.json(data)})
        .catch(errs=>{
            console.log(errs)
            res.json(errs)});
  
};
//delete
function deleteOne(req, res){
    Product.findByIdAndRemove(req.params.id)
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
};
function updateLike(req, res){
    console.log(req.body)
    Product.findByIdAndUpdate({_id:req.params.id}, { $inc: { likes: 1}}, {new: true, runValidators: true})
        .then(data=>res.json(data))
        .catch(errs=>{
            console.log(errs)
            res.json(errs)});
};
// app.put('/authors/newQuote/:id', function(req, res){
//     Author.update({_id: req.params.id}, {$push: {quotes: req.body}},
//     function(err, quote){
//         res.json(quote)
//     })
// })