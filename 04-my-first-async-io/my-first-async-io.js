const fs = require('fs')
const path = process.argv[2]
fs.readFile(path, 'utf8', ((err, data) => {
    if (err) throw err
    const fileDataByLines = data.split('\n')
    const amountOfNewLines = fileDataByLines.length - 1
    console.log(amountOfNewLines);
}))