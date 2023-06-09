const inquirer = require('inquirer');
const writeToFile = require('./writeReadMe.js');
const fs = require('fs');

// console.log(inquirer);


  


// Created an array of questions for user input using example from Node Activities 19 and 20 along with turtle HW example

 
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
                type: 'confirm',
                name: 'table of contents',
                message: 'Will this project need a Table of Contents?',

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
            
            // Brackets around a name will turn the users input to a link
            // parenthesis around email will open outlook

            {
                type: 'input',
                name: 'email',
                message: 'Questions: What is your (email) address?',
         
            },
            {
                type: 'input',
                name: 'github',
                message:'Questions: What is your [gitHub] address?'
            }
           

    ]
// This function has Inquirer get the questions then the answers are also printed out.
    function askQuestions () {
        return inquirer.prompt(questions)
            .then((answers) => {
               const file = writeToFile.generateMd(answers)

// write file syntax is === fs.writeFile(filename, data[, options], callback) from teacher example and website https://www.tutorialsteacher.com/nodejs/nodejs-file-system
               fs.writeFile('ReadMe.md', file, function(err) {
                if (err){
                    console.log('No file was generated')
                } else {
                    console.log('Your new README.md file was generated!')
                }
               })
                // console.log(file)
               return answers
            })
            .catch((error) => {
                console.log(error)
            })
    }
    askQuestions()




    

//  Notes for Future reference

// (`)  allows us to put JS variables into html or any other file format
//  split in this case takes away the space in between what is inputed in What is your name?
//  to follow.split ("o ") o space 
   
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });

// this function will create the new ReadMe file
// function readFormat(readData){
//     fs.writeFile('ReadMe.md', readData, (err) =>
//       err ? console.error(err) : console.log('File saved successfully!')
//     );
//   }
