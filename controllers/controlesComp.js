import datosComp from "../models/modelCompetencia.js";

export const getAllCompetencia = async (req,res)=>{
    try{
        const competencias = await datosComp.findAll();
        res.json(competencias);
    }catch(error){
        res.json({message: error.message})
    }
};

export const getCompetencia = async (req,res)=>{
    try{
        const competencia = await datosComp.findAll({
            where:{idCompetencia:req.params.id}
        });
        res.json(competencia[0])
    }catch (error){
        res.json({message: error.message})
    }
};

export const createCompetencia = async (req, res)=>{
    try{
        await datosComp.create(req.body);
        res.json({
            "message":"Registro creado exitosamente"
        });
    }catch (error){
        res.json({message: error.message})
    }
};

export const updateCompetencia = async (req, res)=>{
    try{
        await datosComp.update(req.body,{
            where:{idCompetencia:req.params.id}
    });
        res.json({
            "message":"Registro actualizado exitosamente"
        });
    }catch (error){
        res.json({message: error.message})
    }
};

export const deleteCompetencia = async (req, res)=>{
    try{
        await datosComp.destroy({
            where:{idCompetencia:req.params.id}
        });
        res.json({
            "message":"Registro eliminado exitosamente"
        });
    }catch (error){
        res.json({message: error.message})
    }
};