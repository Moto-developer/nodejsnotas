import express  from "express";
import cors from "cors";
import rutas from "./routes/rutas.routes.js";
import senaBd from "./bases/baseDatosSena.js";
import competencia from "./routes/rutasComp.routes.js";
import curso from "./routes/rutasCurso.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{

res.send('Notas de los aprendices del SENA');
})

app.listen(4000,()=>{
    console.log('conected http://localhost:4000/');
})

app.use('/estudiantes',rutas);
app.use('/competencias',competencia);
app.use('/cursos',curso);

try{

await senaBd.authenticate();
console.log('la conexión está perfecta');
}catch(error){
    console.error(error);
}