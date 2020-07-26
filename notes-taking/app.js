const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs args
yargs.version('1.2.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// create command
yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: function () {
        console.log('Removing note')
    }
})

// read
yargs.command({
    command: 'read',
    describe: 'read note',
    handler: function () {
        console.log('reading note')
    }
})

// list
yargs.command({
    command: 'list',
    describe: 'list note',
    handler: function () {
        console.log('listing note')
    }
})


yargs.parse() // go to the process that parsing args

// add note, remove, read, list
console.log(yargs.argv)
