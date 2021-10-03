const fs = require('fs')
const path = require('path')

function readDir(dirName, fileNameExt, callback) {
    fs.readdir(dirName, (err, list) => {
        if (err) {
            return callback(err)
        }
        const filteredList = list.filter((entry) => {
            return path.extname(entry) === '.' + fileNameExt
        })
        callback(null, filteredList)
    })
}

module.exports = readDir