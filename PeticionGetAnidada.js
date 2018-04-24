//emcadenar una peticion con otra peticion (peticion anidada)
//get principal // for o un map para generar una lista y de esa lista generar mas gets 
//Hacer una petición a la swapi a un personaje y obtener sus películas.
//(https://swapi.co/api/people/1)

//request=require('request')
const request= require('request')


function MuestraLista(){
    return new Promise((resolve,reject)=>{
        request.get("https://swapi.co/api/people/1", 
                   (error, response, body)=>{
            if(response.statusCode==200){
                let json=JSON.parse(body)
                resolve(json.films)
            }
            else {
                reject('Tuvimos un error :c')
            }
        });
    });
}

function MuestraPeliculas(lista){

for(var i=0; i<lista.length; i++){
    console.log(lista[i])
}

 
}

MuestraLista()
.then(response=>MuestraPeliculas(response))//resolve
   // .then(resp2=>console.log(resp2))
.catch(error=>console.log(error))//reject

