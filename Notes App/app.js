const { demandOption } = require("yargs");

const yargs = require("yargs");
const { addNotes, removeNotes, listNotes, readNote } = require("./notes");
yargs.command({
  command: "add",
  describe: "add a note",
  builder: {
    title: {
      describe: "adding a new note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "description",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    addNotes(x.title, x.body);
  },
});
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "removing a new note",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => {
    removeNotes(yargs.argv.title, yargs.argv.body);
  },
});
yargs.command({
  command: "list",
  describe: "listing all notes",

  handler: () => {
    listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "reading a note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    readNote(argv.title);
  },
});
yargs.parse();
