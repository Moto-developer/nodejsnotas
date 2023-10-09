import datosCurso from "../models/modelCurso.js";

export const getAllCurso = async (req,res)=>{
    try{
        const cursos = await datosCurso.findAll();
        res.json(cursos);
    }catch(error){
        res.json({message: error.message})
    }
};

export const getCurso = async (req,res)=>{
    try{
        const curso = await datosCurso.findAll({
            where:{idCurso:req.params.id}
        });
        res.json(curso[0])
    }catch (error){
        res.json({message: error.message})
    }
};

export const createCurso = async (req, res)=>{
    try{
        await datosCurso.create(req.body);
        res.json({
            "message":"Registro creado exitosamente"
        });
    }catch (error){
        res.json({message: error.message})
    }
};

export const updateCurso = async (req, res)=>{
    try{
        await datosCurso.update(req.body,{
            where:{idCurso:req.params.id}
    });
        res.json({
            "message":"Registro actualizado exitosamente"
        });
    }catch (error){
        res.json({message: error.message})
    }
};

export const deleteCurso = async (req, res)=>{
    try{
        await datosCurso.destroy({
            where:{idCurso:req.params.id}
        });
        res.json({
            "message":"Registro eliminado exitosamente"
        });
    }catch (error){
        res.json({message: error.message})
    }
};