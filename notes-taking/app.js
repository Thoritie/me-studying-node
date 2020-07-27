const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
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
