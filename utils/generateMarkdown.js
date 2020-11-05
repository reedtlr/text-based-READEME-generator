const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// => generate markdown for README
function generateMarkdown(data) {
  const newLicense = ''
  const licenseCheck = () => {
    if (data.license === 'MIT') {
      newLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (data.license === 'GNU v3.0') {
      newLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else {
      newLicense = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    return newLicense
  }

  licenseCheck(data.license)

  const fillSpaces = () => {
    const newTitle = data.title.split(' ').join('_')
    return newTitle
  }
  
  fillSpaces(data.title)

  return `# ${data.title}
  ${newLicense}
(https://${data.github}.github.io/${newTitle})
## Table of contents
* [General info](#general-info)
* [Install](#install)
* [Technologies](#technologies)
* [Use](#use)
* [Test](#test)
* [Dependancies](#dependencies)
* [Contribute](#contribute)

## General info
${data.description}

## Install
${data.install}
	
## Technologies
${data.tech}

## Use
${data.usage}

## Test
${data.test}

## Dependencies
${data.dependencies}

## Contribute
${data.contribute}
`;
}

module.exports = generateMarkdown;
