const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
    {
        name: 
            { 
                type: String,
                required: [true, '{PATH} is required.'],
                minlength: [3, '{PATH} must be at least {MINLENGTH} characters.'], 
            },
        type:
            {
                type: String,
                required: [true, '{PATH} is requrired.'],
                minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
            },
        description:
            {
                type: String,
                required: [true, '{PATH} is requrired.'],
                minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
            },
        skill1:
            {
                type: String,
                required: [false],                
            },
        skill2:
            {
                type: String,
                required: [false],                
            },
        skill3:
            {
                type: String,
                required: [false],                
            },
}, { timestamps: true });

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;