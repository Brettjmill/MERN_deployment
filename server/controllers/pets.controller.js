const Pet = require('../models/pets.model');

module.exports = {

    create: function (req,res) {
        console.log('create method executed');

        Pet.create(req.body)
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    findAll: function (req, res) {
        console.log('find all method executed');

        Pet.find()
            .then((pets) => {
                res.json(pets);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    findOne: function (req, res) {
        console.log('find one method executed', 'url params:', req.params);

        Pet.findById(req.params.id)
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    updatePet: function (req, res) {
        console.log('update pet method executed', 'url params:', req.params);

        Pet.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true
        })
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    deletePet: function (req, res) {
        console.log('delete pet method executed', 'url params:', req.params);

        Pet.findByIdAndDelete(req.params.id)
            .then ((pet) => {
                res.json(pet);
            })
            .catch ((err) => {
                res.status(400).json(err);
            }); 
        
    }
};