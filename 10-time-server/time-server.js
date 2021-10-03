const net = require('net')
const port = process.argv[2]
const server = net.createServer(function listener(socket) {
    const date = new Date()
    const year = ('' + date.getFullYear())
    const month = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : '' + (date.getMonth() + 1)
    const day = (date.getDate() < 10) ? '0' + (date.getDate()) : '' + (date.getDate())
    const hours = (date.getHours() < 10) ? '0' + date.getHours() : '' + date.getHours()
    const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : '' + date.getMinutes()
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}\n`

    socket.end(formattedDate)
})
server.listen(port)

