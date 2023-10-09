import express  from 'express';
import {getAllCompetencia, getCompetencia, createCompetencia, updateCompetencia, deleteCompetencia}  from '../controllers/controlesComp.js';

const competencia = express.Router();

competencia.get('/', getAllCompetencia);
competencia.get('/:id', getCompetencia);
competencia.post('/', createCompetencia);
competencia.put('/:id', updateCompetencia);
competencia.delete('/:id', deleteCompetencia);

export default competencia;

