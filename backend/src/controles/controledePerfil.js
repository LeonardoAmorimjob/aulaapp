const Local=require('../entidades/Local');

module.exports={
   async  mostrar(req,res){
        const{usuario_id}=req.headers;
        const locais=await Local.find({usuario:usuario_id});
        return res.json(locais);
    }
}