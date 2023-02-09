// all of my other classes being brought in. 
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern")
const questions = require("./lib/questions");
const createHTML = require("./src/generateHTML")

const {managerQuestions, menuQuestions, engineerQuestions, internQuestions} = questions
const Team = [];

// function to prompt the user with the first manager question 
function managerQuest(managerQuestions) {
    inquirer
    .prompt(managerQuestions)
    .then((answers) => {
        createManager(answers);
        console.log("New manager add to your team!")
        nextQuestion();
    })
};

// function that is making the manager item
function createManager(answers) {
    const manager = new Manager (answers.name, answers.id, answers.email, answers.office)
    Team.push(manager)
};

// function to prompt user with the engineer question if selected 
function engineerQuest(engineerQuestions){
    inquirer
    .prompt(engineerQuestions)
    .then((answers) => {
        createEngineer(answers)
        console.log("New engineer add to your team!")
        nextQuestion()
    })
};

// function that is making the engineer item
function createEngineer(answers) {
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
    Team.push(engineer)
};

// function to prompt user with the intern question 
function internQuest(internQuestions){
    inquirer
    .prompt(internQuestions)
    .then((answers) => {
        createIntern(answers)
        console.log("New intern add to your team!")
        nextQuestion()
    })
};

// function that is making the intern item 
function createIntern(answers) {
    const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
    Team.push(intern)
    console.log("New intern add to your team!")
};

// This is the function that will prompt the user with the next question at the end of filling out a employee prompt
function nextQuestion () {
    inquirer
    .prompt(menuQuestions)
    .then(result => {
        if (result.menuQuestions === 'Manager?') {
            managerQuest(managerQuestions)
        } else if (result.menuQuestions === 'Engineer?') {
            engineerQuest(engineerQuestions)
        } else if (result.menuQuestions === 'Intern?') {
            internQuest(internQuestions)
        } else if (result.menuQuestions === 'Finished Buidling Team?') {
            console.log("Finished building team roster!")
            console.log(Team)
            const myHTML = createHTML(Team)

            fs.writeFile('createdIndex.html', myHTML, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!'))

        }
    })
}


// final function which will get the ball rolling and start the whole questions 
function init() {
    inquirer
    .prompt(managerQuest)
    .then((answers) => {
      createManager(answers)
      nextQuestion()
    })
  };

  init()