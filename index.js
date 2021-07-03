const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

//Prompt the user questions to populate the README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "How was this project installed? (if any)",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project being used for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "MIT",
                "GNU",
                "Mozilla",
            ]
        },
        {
            type: "input",
            name: "contribute",
            message: "Did anyone contribute to this project? List them here."
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 


  function init() {
     {
        // asks user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);

        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('README.md file successfully created!');
     }
  }
  
  // initializes application
  init();  