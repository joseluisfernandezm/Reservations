import express from 'express'
import bodyParser from 'body-parser'
//import json from 'body-parser/lib/types/json'
import { readFile } from 'fs/promises'
import espacio from './espacio.js'
import usuario from './usuario.js'
import reserva from './reserva.js'


const PORT = 8080
const app = express()
const espacios={}
const usuarios={}
const reservas={}




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const server = app.listen(PORT, () => console.log("listening at localhost:"+PORT))


const misDatos = {
    // todos los datos del servidor
}



async function save() {
    const str = JSON.stringify(misDatos)
    await writeFile('datos.txt', str, 'utf8')
}



async function load() {
    const str = await readFile('datos.txt', 'utf8')
    const datos = JSON.parse(str)
    return datos
}



app.get('/room', (req, res) => {

    res.send(Object.keys(espacios).map(id=>({id:id,...espacios[id]})))
  
})


app.put('/room/:rid/:name', (req, res) => {
    const name= req.params.name// id usuario
    const rid = req.params.rid // id espacio
    const data = req.body
    espacios[rid]=new espacio(rid,name)
    
    //console.log(espacios[1])
    //console.log(espacios[2])
    console.log(espacios)
    
    res.send('sala creada ') // devolvemos resultado al cliente
})