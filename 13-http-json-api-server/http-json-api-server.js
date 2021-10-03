const http = require('http')
const url = require('url')
const port = process.argv[2]

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(404)
        return res.end('Send me a GET request\n')
    }
    const reqUrl = new URL(req.url, 'http://example.com').pathname
    const isoUrlParam = new URL(req.url,'http://example.com').searchParams.get('iso')
    if (!isoUrlParam) {
        res.writeHead(404)
        return res.end('ISO parameter have been not provided\n')
    }
    res.writeHead(200, {'Content-Type': 'application/json'})
    const date = new Date(isoUrlParam)
    if (reqUrl === '/api/parsetime') {
        const resDate = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
        return res.end(JSON.stringify(resDate))
    }
    if (reqUrl === '/api/unixtime') {
        const resDate = {
            unixtime: date.getTime()
        }
        return res.end(JSON.stringify(resDate))
    }
})
server.listen(port)