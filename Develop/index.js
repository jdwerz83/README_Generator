// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require('axios');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "username",
        message: "What is your GitHub username?",        
    },
    {
        name: "title",
        message: "What is the title of your project?",
    },
    {
        name: "description",
        message: "Describe your project:",
    },
    {
        name: "installation",
        message: "Enter installation instructions:",        
    },
    {
        name: "usage",
        message: " Enter usage instructions:"        
    },
    {
        type: "list",
        name: "license",
        message: "Select license type:",
        choices: ["MIT", "GPL", "Apache", "Public"]
    },
    {
        name: "contributors",
        message: "Who contributed to this project?"
    },
    {
        name: "tests",
        message: "Enter tests:"
    },
    {
        name: "email",
        message: "Enter contact email:",        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
