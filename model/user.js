const mongoose =require('mongoose');// include the mongoose 5.11.12

const userSchema=mongoose.Schema({
    email: String,
    password: String

});

const User = mongoose.model('nodeuser',userSchema);
module.exports= User;