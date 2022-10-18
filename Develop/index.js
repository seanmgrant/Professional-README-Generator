//  Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require('util');

//  Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your projects name?',
    },
    {
        type:'input',
        name: 'decription',
        message:'Please write a short descripition of your project',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command is used to install?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command can be run to run tests?'
    },
    {
        type: 'input',
        name: 'usege',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    },

];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err)
        }

        console.log("Your README file has been created")
    });
}

// Create a function to initialize app
async function init() {
    const createReadMe = util.promisify(writeToFile);
    try {
        const userAnswers = await inquirer.prompt(questions);
        
        const myReadme = generateMarkdown(userAnswers);

        await createReadMe('README!.md', myReadme);
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
