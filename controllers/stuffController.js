
const Thing = require("../models/Thing");


exports.save = (req, res, next) => {
    delete req.body._id;

    const thing = new Thing({
        ...req.body
    })


    thing.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));

}

exports.getStuff = (req, res, next) => {
    Thing.find()
        .then((things) => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));

}

exports.getOneStuff = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then((thing) => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));

}

exports.updateStuff = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then((thing) => res.status(200).json({ message: "Object modifier" }))
        .catch(error => res.status(400).json({ error }));

}

exports.deleteOneStuff = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then((thing) => res.status(200).json({ message: "Object supprime" }))
        .catch(error => res.status(400).json({ error }));

}