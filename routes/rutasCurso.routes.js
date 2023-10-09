import express  from 'express';
import {getAllCurso, getCurso, createCurso, updateCurso, deleteCurso}  from '../controllers/controlesCurso.js';

const curso = express.Router();

curso.get('/', getAllCurso);
curso.get('/:id', getCurso);
curso.post('/', createCurso);
curso.put('/:id', updateCurso);
curso.delete('/:id', deleteCurso);

export default curso;

