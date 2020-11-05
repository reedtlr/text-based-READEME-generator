const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')

const writeFileAsync = util.promisify(fs.writeFile);

const prompt = inquirer.createPromptModule();

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
      name: 'install',
      message: 'Enter instructions on how to install your project.'
    },
    {
      type: "input",
      name: 'tech',
      message: 'What technologies were used in creating your project?'
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
      message: 'What kind of license will you use?',
      choices: ['MIT', 'GNU v3.0', 'Apache v2.0', 'None']
    },
  ];


// => initialize program
function init () {
  prompt(questions)
 .then(function ({data}) {
  generateMarkdown({data})
 })
 .then(function(generateMarkdown){
   const filename = `/output/README.md`
   writeFileAsync(filename, generateMarkdown)
 })}


// => call to initialize program
init();

// => write README file
// function writeToFile(filename, generateMarkdown) {
//   fs.writeFile(`/output/README.md`, generateMarkdown)
// }