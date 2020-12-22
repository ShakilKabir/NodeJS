const fs = require("fs");
const chalk = require("chalk");
const addNotes = (title, body) => {
  notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.bold("note added"));
  } else {
    console.log(chalk.red("title taken"));
  }
};
const removeNotes = (title) => {
  notes = loadNotes();
  const newNotes = notes.filter((note) => note.title != title);
  if (notes.length > newNotes.length) {
    saveNotes(newNotes);
    console.log(chalk.red.inverse("note removed"));
  } else {
    console.log(chalk.red.inverse("note not found"));
  }
};
const listNotes = () => {
  notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.bold(note.title), note.body);
  });
};
const readNote = (title) => {
  notes = loadNotes();
  const isNoteAvailable = notes.find((note) => note.title === title);
  if (isNoteAvailable) {
    console.log(chalk.bold.inverse(isNoteAvailable.title));
    console.log(chalk.bold(isNoteAvailable.body));
  } else {
    console.log(chalk.red.inverse("note not found"));
  }
};
const saveNotes = (notes) => {
  const data = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", data);
};
const loadNotes = () => {
  try {
    const response = fs.readFileSync("./notes.json");
    const dataJSON = response.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};
module.exports = { addNotes, removeNotes, listNotes, readNote };
