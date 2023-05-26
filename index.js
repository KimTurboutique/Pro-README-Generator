// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// 1. User input
// 2. Create .prompt using inquirer
// 3. Add objects with properties for Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title',
        },
        {
            type: 'input'
        },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();



// 4. When input is entered show data in README file *add (err)