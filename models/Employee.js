const mongoose = require('mongoose')

const employeeSchema =  new mongoose.Schema({
    //name, email, mobile, city, caste

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    caste:{
        type:String,
        required:true
    },
    dob:{
        type: String,
        required:true
    }

})

module.exports = mongoose.model('Employee', employeeSchema)