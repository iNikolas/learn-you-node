const http = require('http')
const fs = require('fs')

const [, , port, filePath] = process.argv

const server = http.createServer(((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    const fileStream = fs.createReadStream(filePath)
    fileStream.pipe(res)
}))
server.listen(port)