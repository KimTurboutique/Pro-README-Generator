// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// 1. User input
// 2. Create .prompt using inquirer
// 3. Add objects with properties for Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project',
        },
        {
            type:'input',
            name: 'installation',
            message: 'How does someone install this application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How to use this application?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is this project using?',
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How does someone contribute to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to test?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is GitHub username?',
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response=>{
        fs.writeFileSync("READ.md",generateMarkdown(response))
    console.log("Your ReadMe was successfully created")
})
 }

// Function call to initialize app
init();



// 4. When input is entered show data in README file *add (err)