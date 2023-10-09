import senaBd from '../bases/baseDatosSena.js';
import { DataTypes } from 'sequelize';

const datosCurso = senaBd.define('curso', {
    idCurso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    nombreCurso: {
    type: DataTypes.STRING,
    allowNull: false,
    }
},
{
    tableName: 'curso'
});


export default datosCurso; 