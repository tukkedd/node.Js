const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hola Mundo')
})


findAvailablePort(3000).then(port => {
    server.listen(0, () => {
        console.log(`server listening on port http://localhost:${server.address().port}`);
    })
})