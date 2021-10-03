const http = require('http')
const bl = require('bl')

const [, , ...urls] = process.argv

function readUrls() {
    http.get(urls[0], callback)
}

function callback(response) {
    response.pipe(bl((err, data) => {
        if (err) {
            return console.log('Some error occurred ' + err)
        }
        console.log(data.toString())
        if (urls.length > 1) {
            urls.shift()
            readUrls()
        }
    }))
}

readUrls()