const fs = require('fs') // store fs module in fs variable

// fs.writeFileSync('notes.txt', 'This file was created by Node.js')

// Challenge: Append a message to notes.txt
// 1. Use appendFileSync to append to the file
// 2. Run Script
// 3. Check if it work

fs.appendFileSync('notes.txt', ' new data')



