// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
const { describe } = require('yargs')

// const notes = getNotes()
// console.log(notes)

// console.log(chalk.bold.blue('Success!'))
// console.log(chalk.white.bgRed('Its redddd!'))

// console.log(validator.isEmail('ail.com'))
// console.log(validator.isURL('www.c'))


// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your Worker
//
// Bonus: Use docs to mess around with other styles. Make text bold and inversed.


// Getthing from user in cmd

// console.log(process.argv)

const command = process.argv[2]

if (command === 'add') {
    console.log('Adding note')
} else if ( command === 'remove') {
    console.log('Removing note..')
}

// Customize yargs args
yargs.version('1.2.0')
