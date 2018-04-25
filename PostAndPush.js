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
            if(response.statusCode==201){
            var json=JSON.parse(body)
            console.log(json)
            resolve(json.id)
            }
            reject('Tuvimos un error :c')
        })
    });

}

function modificaJson(id,age){
    return new Promise((resolve,reject)=>{
        var jsonSend2={
            "age":age
        }
       
        const  urlf=url+id+'/'
        request.patch({url:urlf, form:jsonSend2},
        (error, response, body)=>{
            if(response.statusCode==200){
                var json2=JSON.parse(body)
                resolve(json2)
            }
            else{
                reject('Tuvimos un error 2')
            }
        });

        
    });
}


ingresaJson("Maria","Alvarez", "MX", "Prueba 1", "F", 23)
    .then(response=>{
        modificaJson(response,30)
            .then(x=>{console.log(x)})
            .catch(err=>{console.log(err)})
    })
    .catch(error=>{console.log(error)})
