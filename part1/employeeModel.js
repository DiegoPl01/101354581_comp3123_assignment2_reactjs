const {Schema, model} = require("mongoose");

const employeesSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    gender:{
        type:String,
        maxlength: 25,
        enum:["Male","Female",")ther"]
    },
});

module.exports = model('employees', employeesSchema);