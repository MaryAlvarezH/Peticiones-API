
//una funcion que retorne una promesa que resuelva una peticion post 
//parsear para que solo retorne el id 

//patch actualizar is alive

request=require('request')

const url_base='https://goodreads-devf-aaron.herokuapp.com/api/v1/'
const uri='authors/'

var URL=url_base+uri
function imprimejson(nombre, ap, na, bio, genero, edad){
return new Promise((resolve,reject)=>{
    var jsonSend={
        "name": nombre,
        "last_name": ap,
        "nacionalidad": na,
        "biography": bio,
        "gender": genero,
        "age": edad,
        "is_alive":true
    }
    
    request.post({url:URL, form:jsonSend},(error,status,body)=>{ //crea la promesa antes de aqui
        console.log(status.statusCode)
        if(status.statusCode==201){
            console.log(body)
            json=JSON.parse(body)
            resolve(json.id)
        }
        else{
            reject('Tuvimos un error :c')
        }
    });
});
}
//------------------------------------------------------------------------------//
function modificajson(id, alive){
    return new Promise((resolve,reject)=>{
        user=id
        dirf=url_base+uri+id+"/"
        console.log(dirf)
        var jsonSend2={
            // "name": nombre,
            // "last_name": ap,
            // "nacionalidad": na,
            // "biography": bio,
            // "gender": genero,
            // "age": edad,
            "is_alive":alive
        }
        
        request.patch({url:dirf, form:jsonSend2},(error,status,body)=>{
            console.log(status.statusCode)
            if(status.statusCode==200){
                console.log(body)
                json=JSON.parse(body)
                resolve(json)
            }
            else{
                reject('Tuvimos un error :c')
            }
        });
    });
    }

imprimejson("Isa", "Barragan", "MX","segunda prueba de cinta roja","F", 36)
    .then(status=>{console.log(status)
        modificajson(status,false)
         .then(status2=>console.log(status2))
         .catch(err=>console.log(err))
      }) //mandamos a llamar la funcion2 y luego su respectivo .then
    .catch(error=>console.log(error))

