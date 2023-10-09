import express  from 'express';
import {getAllAprendiz, getAprendiz, createAprendiz, updateAprendiz, deleteAprendiz}  from '../controllers/controles.js';

const rutas = express.Router();

rutas.get('/', getAllAprendiz);
rutas.get('/:id', getAprendiz);
rutas.post('/', createAprendiz);
rutas.put('/:id', updateAprendiz);
rutas.delete('/:id', deleteAprendiz);

export default rutas;

