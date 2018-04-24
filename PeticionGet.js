const request=require('request')
const url_base='https://goodreads-devf-aaron.herokuapp.com/api/v1/'
const uri='authors/'

var URL=url_base+uri

var jsonSend={
    "name": "Mary",
    "last_name": "Hernandez",
    "nacionalidad": "MX",
    "biography": "Esta es una prueba para cinta roja",
    "gender": "F",
    "age": 23
}

request.post({url:URL, form:jsonSend},(error,status,body)=>{
    console.log(status.statusCode)
    console.log(body)
});
