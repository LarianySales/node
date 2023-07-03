//vai ter muitas questôes na prova

//importação do http
const http = require('http')
//porta para entrar
const PORT = 3333

//para criar um servidor com o modulo que recebe parametros
//res=resposta que da ao usuario
//req = requisição pro user
const server = http.createServer((req,res)=>{
//para verificar a rota que o user manda pra nos
if(req.url === "/"){
 res.writeHead(200,{"Content-Type":"text/html"});
 res.write('<h1>oi</h1>')
 res.end()
}else if(req.url === '/sobre'){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<h1>sobre</h1>')
    res.end()
}else if(req.url ==='/contato'){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<h1>contato</h1>')
    res.end()
}else{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<h1>NOT FOLD</h1>')
    res.end()
}
})
//para quando digitar localhost e o numero da porta

server.listen(PORT,()=>{
    console.log(`Servidor ON ${PORT}`)
})
