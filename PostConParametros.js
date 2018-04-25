
//Realizar una peticion por medio de funciones que devuelvan promesas para POST(ear) un json 
const request=require('request')

const url_base='https://goodreads-devf-aaron.herokuapp.com/api/v1/'
const uri='authors/'

const url=url_base+uri

function ingresaJson(nom,last,nacio,bio,gen,age){
    return new Promise ((resolve,reject)=>{
        var jsonSend={
            "name": nom,
            "last_name":last,
            "nacionalidad":nacio,
            "biography":bio,
            "gender": gen,
            "age":age
        }

        request.post({url:url, form:jsonSend}, 
        (error, response, body)=>{
            console.log(response.statusCode)
            if(response.statusCode==201){
            resolve(body)
            }
            reject('Tuvimos un error :c')
        })
    });

}


ingresaJson("Maria","Alvarez", "MX", "Prueba 1", "F", 23)
    .then(response=>{console.log(response)})
    .catch(error=>{console.log(error)})
