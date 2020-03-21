const Reserva=require('../entidades/Reserva');

module.exports={
    async criar(req,res){

        const{usuario_id}=req.headers;
        const{local_id}=req.params;
        const {data}=req.body;
        const reserva=await Reserva.create({
            usuario:usuario_id,
            local:local_id,
            data
        });
        await reserva.populate('local').populate('usuario').execPopulate();
        return res.json(reserva);
    }
}