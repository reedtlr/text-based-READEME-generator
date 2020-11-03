const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// => generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
