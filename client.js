import axios from 'axios'
const server = 'http://localhost:8080'
/*
async function testHelloWorld(){
    const resultado = await axios.put(server+'/booking/123/4,data')

    return resultado.data // el campo data contendrá el resultado
}
*/

const result = await axios.put(server+'/room/'+1+'/'+'SalaXbox') 
console.log(result.data)

const result1 = await axios.put(server+'/room/'+2+'/'+'SalaTmmy') 
console.log(result1.data)

const result8 = await axios.put(server+'/room/'+8+'/'+'SalaSapee') 
console.log(result8.data)

const result3 = await axios.put(server+'/room/'+3+'/'+'SalaPeluca') 
console.log(result3.data)


/*
const hello = await testHelloWorld()
console.log('Prueba de conexión, resultado: ' + hello)
*/
