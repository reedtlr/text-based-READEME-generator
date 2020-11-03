const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// questions for user
const questions = [
    {
      name: 'title',
      message: 'What is the project title?'
    },
    {
    name: 'email',
    message: 'What is your email address?'
    },
    {
    name: 'github',
    message: 'What is your GitHub user name?'
    },
    {
      name: 'description',
      message: 'Enter a description of your project.'
    },
    {
      name: 'installation',
      message: 'Enter instructions on how to install your project.'
    },
    {
      name: 'usage',
      message: 'Enter instructions or examples of how to use your project.'
    },
    {
    name: 'contribute',
    message: 'How can others contribute to your project?'
    },
    {
    name: 'test',
    message: 'What command should be run to run tests?'
    },
    {
    name: 'dependencies',
    message: 'What command should be run to install dependencies?'
    },
    {
      name: 'license',
      message: 'What kind of license do you want to use?'
    },
  ];

// => write README file
function writeToFile(fileName, data) {
}

// => initialize program
function init() {

}

// => call to initialize program
init();
