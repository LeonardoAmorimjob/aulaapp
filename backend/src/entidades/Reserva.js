const mongoose=require('mongoose');
const esquemadeReserva=new mongoose.Schema({
    data:String,
    aceitado:Boolean,
    usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
    },
    local:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Local'
    }
});

module.exports=mongoose.model('Reserva',esquemadeReserva);