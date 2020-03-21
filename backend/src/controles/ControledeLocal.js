const Local= require('../entidades/Local');
const Usuario= require('../entidades/Usuario');
module.exports={
   async inicio(req,res){
       const{tecnologia}=req.query;
       const local=await Local.find({tecnologia});
       return res.json(local);
   },
   
   
   
    async criar(req,res){
        console.log(req.body);
        console.log(req.file);
      const{filename}=req.file;
      const{empresa, tecnologia,preco}=req.body;
      const {usuario_id}=req.headers;
      const usuario=await Usuario.findById(usuario_id);
      if(!usuario){
          return res.status(400).json({error:"usuario nao existe"});
      }

      const local=await Local.create({
        usuario:usuario_id,
        imagem:filename,
        empresa,
        tecnologia: tecnologia.split(',').map(tecnologia=>tecnologia.trim()),
        preco

      })
        
        return res.json(local);
    }

}