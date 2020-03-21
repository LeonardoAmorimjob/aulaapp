const express=require('express');
const mongoose=require('mongoose');
const rotas=require('./rotas');


const Servidor=express();

mongoose.connect('mongodb+srv://easyplan:1234@cluster0-t7lrb.mongodb.net/aulaapp?retryWrites=true&w=majority',{
useNewUrlParser:true,
useUnifiedTopology:true
});
Servidor.use(express.json());
Servidor.use(rotas);

Servidor.listen(3333);