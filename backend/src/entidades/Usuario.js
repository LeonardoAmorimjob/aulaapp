const mongoose=require('mongoose');
const esquemadeUsuario=new mongoose.Schema({
    email:String
});

module.exports=mongoose.model('Usuario',esquemadeUsuario);