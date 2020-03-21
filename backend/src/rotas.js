const express=require('express');
const multer=require('multer');
const configuracaodeatualizacao=require('./config/Atualizacao');
const controledeSessao=require('./controles/controledeSessao');
const ControledeLocal=require('./controles/ControledeLocal');
const ControledePerfil=require('./controles/ControledePerfil');
const ControledeReserva=require('./controles/controledeReserva');

const rotas=new express.Router();
const att=multer(configuracaodeatualizacao);

rotas.post('/sessao',controledeSessao.criar);
rotas.post('/local',att.single('imagem'),ControledeLocal.criar);
rotas.get('/local',ControledeLocal.inicio);
rotas.get('/perfis',ControledePerfil.mostrar);
rotas.post('/local/:local_id/reservas',ControledeReserva.criar);


module.exports=rotas;