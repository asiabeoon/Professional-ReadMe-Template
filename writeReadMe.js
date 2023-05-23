// This will be the structure of the printed out readme file

// example from website https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links
// ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
// tutor gave format of function using template literal
function chooseLicense (license) { if (license != 'N/A')  {
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }

}
// refer to Turtle exercise to retreive the below module.exports function

module.exports = {
    generateMd: function(answers){
        return `
   
# ${answers.title}
${chooseLicense(answers.license)}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${answers.license}


## Questions
Email: ${answers.email}
  Github: ${answers.github}
`
      
    }
}


// Example on how to use module.exports
// Log.js 
// module.exports = function (msg) { 
//     console.log(msg);
// };
// Now, you can use the above module, as shown below.

// app.js 
// var msg = require('./Log.js');

// msg('Hello World');