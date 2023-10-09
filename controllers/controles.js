import datos from "../models/modelAprendizM.js";

export const getAllAprendiz = async (req,res)=>{
    try{
        const aprendices = await datos.findAll();
        res.json(aprendices);
    }catch(error){
        res.json({message: error.message})
    }
};

export const getAprendiz = async (req,res)=>{
    try{
        const aprendiz = await datos.findAll({
            where:{idAprendiz:req.params.id}
        });
        res.json(aprendiz[0])
    }catch (error){
        res.json({message: error.message})
    }
};

export const createAprendiz = async (req, res)=>{
    try{
        await datos.create(req.body);
        res.json({
            "message":"Registro creado exitosamente"
        });
    }catch (error){
        res.json({message: error.message})
    }
};

export const updateAprendiz = async (req, res)=>{
    try{
        await datos.update(req.body,{
            where:{idAprendiz:req.params.id}
        });
        res.json({
            "message":"Registro actualizado exitosamente"
        });
    }catch (error){
        res.json({message: error.message})
    }
};

export const deleteAprendiz = async (req, res)=>{
    try{
        await datos.destroy({
            where:{idAprendiz:req.params.id}
        });
        res.json({
            "message":"Registro eliminado exitosamente"
        });
    }catch (error){
        res.json({message: error.message})
    }
};