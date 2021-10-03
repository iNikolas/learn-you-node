const fs = require('fs')
const [,, path] = process.argv
const fileData = fs.readFileSync(path, 'utf8')
const fileDataByLines = fileData.split('\n')
const amountOfNewLines = fileDataByLines.length - 1
console.log(amountOfNewLines);