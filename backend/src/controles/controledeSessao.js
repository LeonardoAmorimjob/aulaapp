
const Usuario=require('../entidades/Usuario');
module.exports={   
  async  criar(req,res){
       const {email}=req.body;
       let usuario=await Usuario.findOne({email});
       if(!usuario){
        usuario=Usuario.create({email});
        
       }
       
       return res.json(usuario);
    }
}