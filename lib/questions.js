module.exports = {

managerQuestions: [
    {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your manager ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is your office number?'
    },
    ],


menuQuestions: [
    {
        type: 'list',
        name: 'menu',
        message: 'Would you like to add another employee?',
        choices: ['Manager?', 'Engineer?', 'Itern', 'Finished Buidling Team?']
    }
    ],


engineerQuestions: [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your manager ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    ],

internQuestions: [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your manager ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school are you currently enrolled in?'
    },
    ],
}