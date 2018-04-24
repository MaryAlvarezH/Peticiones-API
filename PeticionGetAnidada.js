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
    //var listapelis=[]
    return new Promise((resolve,reject)=>{
        var peliculas=lista.map((x,y,z)=>{
        request.get(x,(error,response,body)=>{
            console.log(`------------------${x}-------------------`)
            if(response.statusCode==200){
                let json=JSON.parse(body)
                //listapelis.push(json.title)
                console.log(json.title)
                //resolve(json.title)
                //resolve(listapelis)
            }
            else {
                reject('Tuvimos un error :c')
            }
         
        });
        });

    });


 
}

MuestraLista()
.then(response=>MuestraPeliculas(response))//resolve
    .then(status2=>console.log(status2))
    .catch(err=>console.log(err))
.catch(error=>console.log(error))//reject

