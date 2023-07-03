const http = require('http')
const PORT = 3341
//localhost:3334/nome=Arvin
const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url,true)
    const name = urlInfo.query.name

    // res.writeHead(200,{});
res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    if(!name){
res.end(`<h1>PREENCHA SEU NOME:</h1> <form method="GET"> <input type="text" name="name"/> <input type="submit" value="enviar"/> </form>`)
    }else{
        res.write(`<h1>Bem vindo ${name}</h1>`)
    }
})
server.listen(PORT,()=>{
    console.log(`Servidor on😒${PORT}`)
})