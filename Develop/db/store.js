const fs = require('fs');
const util = require('util');

// Unique ID package from npm: https://www.npmjs.com/package/uuid
// To create random UUID:
// 1. install: npm install uuid
// 2. create uuid: const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const { v4: uuidv4 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Store class for methods to read and wrote notes into JSON file

class Store {
    // To read the note
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }
    // To write the note
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }
    // To retrieve the notes
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
        });
    }
    // Add the note
    addNote(note) {
        const { title, text } = note;
        // Title / text fields can not be blank
        if (!title || !text) {
            throw new Error('Title / Text fields can not be blank');
        }

        // Use package to create unique ID
        const newNote = { title, text, id: uuidv4() };

        // Grab all new notes, previous notes and return
        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    }

    // To delete a note using the ID
    removeNote(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((keepNotes) => this.write(keepNotes));
    }
}

// Export Store module
module.exports = new Store();
