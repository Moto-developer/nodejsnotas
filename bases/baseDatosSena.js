import  Sequelize  from "sequelize";

const senaBd = new Sequelize('estudiantes','root','1234',{
    host: 'localhost',
    dialect: 'mysql'
})

export default senaBd;