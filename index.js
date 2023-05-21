const inquirer = require('inquirer');
const writeToFile = require('./writeReadMe.js');
// const fs = require('fs');

// console.log(inquirer);

// this function will create the new ReadMe file
// function readFormat(readData){
//     fs.writeFile('ReadMe.md', readData, (err) =>
//       err ? console.error(err) : console.log('File saved successfully!')
//     );
//   }
  


// Create an array of questions for user input

 
const questions = [
            {
                type: 'input',
                name: 'title',
                message: 'Your Project Title',
            },
            {
                type: 'input',
                name: 'description',
                 message: 'Provide a short description explaining the what, why, and how of your project.',
            },
            {
                type: 'input',
                name: 'table of contents',
                message: 'Optional: If your README is long, add a table of contents ',

            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your project? ',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide instructions and examples for use.',
            },
            {
                type: 'input',
                name: 'credits',
                message: 'List your collaborators, if any.',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license:',
                choices: ['MIT', 'GPL','BSD', 'GNU', 'N/A'],
       
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your Github username',
            }
           

    ]

    function askQuestions () {
        return inquirer.prompt(questions)
            .then((answers) => {
               const file= writeToFile.generateMd(answers)
                console.log(file)
               return answers
            })
            .catch((error) => {
                console.log(error)
            })
    }
    askQuestions()
//     .then( answers => {
//         console.log(answers);
//         readFormat(writeToFile.generateMd(answers.title));
//       });
    

// init();
   

// // TODO: Create a function to write README file ---given code

// function writeToFile(fileName, data) {
    
// write file syntax is === fs.writeFile(filename, data[, options], callback)
// }



// // TODO: Create a function to initialize app this will open up a menu which will begin the questions---given code
// function init() {}

// // // Function call to initialize app---given code
// init();

// const inquirer = require('inquirer');
// console.log('Hello')

// // const fs = require('fs');
// // const util =require('util';)

// //   .then((data) => {
// //     // creating a file name .json can be .md for ReadMe
// //     // look up fs write
// //     // look up template literals
// //     const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;
// //     //(`)  allows us to put JS variables into html or any other file format
// //     // split in this case takes away the space inbetween what is inputed in What is your name?
// //     // to follow.split ("o ") o space 
   
// //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
// //       err ? console.log(err) : console.log('Success!')
// //     );
// //   });

