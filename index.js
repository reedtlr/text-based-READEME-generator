const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Choices = require('inquirer/lib/objects/choices');

// questions for user
const questions = [
    {
    type: "input",
      name: 'title',
      message: 'What is the project title?'
    },
    {
    type: "input",
    name: 'email',
    message: 'What is your email address?'
    },
    {
    type: "input",
    name: 'github',
    message: 'What is your GitHub user name?'
    },
    {
      type: "input",
      name: 'description',
      message: 'Enter a description of your project.'
    },
    {
      type: "input",
      name: 'installation',
      message: 'Enter instructions on how to install your project.'
    },
    {
      type: "input",
      name: 'usage',
      message: 'Enter instructions or examples of how to use your project.'
    },
    {
    type: "input",
    name: 'contribute',
    message: 'How can others contribute to your project?'
    },
    {
    type: "input",
    name: 'test',
    message: 'What command should be run to run tests?'
    },
    {
    type: "input",
    name: 'dependencies',
    message: 'What command should be run to install dependencies?'
    },
    {
      type: "list",
      name: 'license',
      message: 'What kind of license do you want to use?',
      choices: ['MIT', 'GNU v3.0', 'Apache v2.0']
    },
  ];

// => write README file
function writeToFile(fileName, data) {
}

// => initialize program
function init() {

    inquirer
    .prompt(questions)
}

// => call to initialize program
init();
