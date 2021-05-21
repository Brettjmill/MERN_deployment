const petController = require('../controllers/pets.controller');

module.exports = (app) => {
    app.post('/api/pets', petController.create);
    app.get('/api/pets', petController.findAll);
    app.get('/api/pets/:id', petController.findOne);
    app.put('/api/pets/:id', petController.updatePet);
    app.delete('/api/pets/:id', petController.deletePet);
};