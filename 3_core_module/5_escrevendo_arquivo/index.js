const http = require('http')
//implementação do servidor
const fs = require('fs')
const port =3006

const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200,{'Contente-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        fs.writeFile('arquivo.txt',name,function(err,data){
            res.writeHead(302,{
                location: "/",
            })
            return res.end()
        })
    }
})
server.listen(port,()=>{
    console.log(`Servidor on😒${port}`)
})