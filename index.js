const inquirer = require('inquirer');
// console.log('Hello')

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Your Product Title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Optional; If your README is long, add a table of contents ',

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
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'GPL','BSD'],
       
    }



];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
console.log('Hello')

// const fs = require('fs');
// const util =require('util';)

//   .then((data) => {
//     // creating a file name .json can be .md for ReadMe
//     // look up fs write
//     // look up template literals
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;
//     //(`)  allows us to put JS variables into html or any other file format
//     // split in this case takes away the space inbetween what is inputed in What is your name?
//     // to follow.split ("o ") o space 
   
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });

