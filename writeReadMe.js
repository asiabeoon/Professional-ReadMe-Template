// This will be the structore of the printed out readme file


function chooseLicense (license) { if (license != 'N/A')  {
    return `!Licensed Under [GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }

}

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
${answers.email}
${answers.github}
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