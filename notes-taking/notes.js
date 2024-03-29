const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => 'Your notes.....'

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > noteToKeep.length ) {
        console.log(chalk.green.inverse('Note Remove!!'))
        saveNotes(noteToKeep)
    } else {
        console.log(chalk.red.inverse('No Note Found!!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('My notes'))
    notes.forEach((note) => {
        console.log(note.title)
    });
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
