const fs = require('fs')
const path = require('path')
const [, , myPath, filter] = process.argv

fs.readdir(myPath, (err, list) => {
    if (err) {
        console.log(err);
    }
    const filteredList = list.filter((entry) => {
        return path.extname(entry) === '.' + filter
    })
    filteredList.forEach((listEntry) => console.log(listEntry))
})