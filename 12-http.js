const http = require('http')

const server = http.createServer((req, res) => {
    if( req.url === '/'){
        res.end('Welcome to our home page')
    }

     else if(req.url === '/about' ){
        res.end('about')
    } else {

    res.end(`<h1>Nothing</h1>
    <p>No se encontro pagina</p>
    <a href="/">go back</a>`) }
}).listen(5000)