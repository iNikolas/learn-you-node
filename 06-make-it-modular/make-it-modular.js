const myModule = require('./mymodule')

const [, , myPath, filter] = process.argv
const callback = (err, data) => {
    if (err) {
        return console.log(`Some error occurred. Details: ${err}`)
    }
    data.forEach((filteredFile) => {
        console.log(filteredFile);
    })
}

myModule(myPath, filter, callback)