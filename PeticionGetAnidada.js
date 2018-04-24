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
   // var peliculas=[]
    return new Promise((resolve,reject)=>{
        for(var i=0; i<lista.length; i++){
            console.log(`------------${lista[i]}----------------`)
            request.get(lista[i],(error, response, body)=>{
                if(response.statusCode==200){
                    let json=JSON.parse(body)
                    console.log(json.title)
                    // peliculas.push(json.title)
                    // resolve(peliculas)
                }
                else {
                    reject('Tuvimos un error :c')
                }
 
            });
        }        

    });


 
}

MuestraLista()
.then(response=>MuestraPeliculas(response))//resolve
    .then(status2=>console.log(status2))
    .catch(err=>console.log(err))
.catch(error=>console.log(error))//reject

