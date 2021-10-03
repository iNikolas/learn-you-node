const http = require('http')
const bl = require('bl')
const url = process.argv[2]

http.get(url, (response) => {
    response.pipe(bl( (err, data) => {
        if (err) {
            return console.log('Some error occurred ' + err)
        }
        console.log(data.length)
        console.log(data.toString())
    }))
})