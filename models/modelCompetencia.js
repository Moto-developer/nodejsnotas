import senaBd from '../bases/baseDatosSena.js';
import { DataTypes } from 'sequelize';

const datosComp = senaBd.define('competencia', {
    idCompetencia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    nombreCompetencia: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    curso_idCurso: {
    type: DataTypes.INTEGER,
    allowNull: true,
    }
},
{
    tableName: 'competencia'
});


export default datosComp; 