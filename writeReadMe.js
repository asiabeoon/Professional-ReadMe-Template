// module.exports = {
//     giveMeTurtles: function(num){
//       let turtleOut = '';
//       for(let i = 0; i < num; i++){
//         turtleOut += `<h1>turtle<h1>
//         `;
//       }
//       return turtleOut;
//     }
//   }

// Log.js 
// module.exports = function (msg) { 
//     console.log(msg);
// };
// Now, you can use the above module, as shown below.

// app.js 
// var msg = require('./Log.js');

// msg('Hello World');

// This will be the structore of the printed out readme file
module.exports = {
    generateMd: function(answers){
        return `
      # ${answers.title}

      ## Description
      ${answers.description}

      ## Installation
      ${answers.installation}

      ## Usage
      ${answers.usage}

      ## Credits
      ${answers.credits}

      ## License
      ${answers.license}
      
      ## GitHub
      ${answers.github}
      `
        
    }
}