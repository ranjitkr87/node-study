const fs= require('file-system');
const validator=require("validator");
const chalk=require("chalk");
const yargs = require('yargs/yargs')
const notes=require("./notes")

yargs.command({
    command:"add",
    describe:"Add a new note",
    handler: function(){
        console.log("Adding a new note...")
    }
})
