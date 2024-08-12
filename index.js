const inquirer = require('inquirer');
const logo = require("asciiart-logo");

const db = require('./db/connection');

function startCLI() {
    console.log('starting CLI..');
}

function init() {
    startCLI();
}

init();