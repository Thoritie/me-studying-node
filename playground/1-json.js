const fs = require('fs')

const book = {
    title: 'Is it love',
    author: 'Thor'
}

const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// Convert to object
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

fs.writeFileSync('1-json.json', bookJSON)