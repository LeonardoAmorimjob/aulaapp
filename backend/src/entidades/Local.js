const mongoose=require('mongoose');
const esquemadeLocal=new mongoose.Schema({
    imagem:String,
    empresa:String,
    preco:Number,
    tecnologia:[String],
    usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
    }
});

module.exports=mongoose.model('Local',esquemadeLocal);