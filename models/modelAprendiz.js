import senaBd from '../bases/baseDatosSena.js';
import { DataTypes } from 'sequelize';

const datos = senaBd.define('aprendiz', {
    idAprendiz: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    nombreAprendiz: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    passwordAprendiz: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    emailAprendiz: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    curso_idCurso: {
    type: DataTypes.INTEGER,
    allowNull: true,
    },
},
{
    tableName: 'aprendiz'
});


export default datos; 