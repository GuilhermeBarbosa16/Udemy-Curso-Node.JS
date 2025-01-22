const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
    .prompt([{
        name: 'Nome',
        message: 'Qual seu nome?',
    },
    {
        name: 'Idade',
        message: 'Qual a sua idade',
    },
    ])
    .then((answers) => {
        const resposta = 'Olá ${answers.Nome}, sua idade é: ${answers.Idade}'
        console.log(chalk.bgYellow(resposta))
    })
    .catch((err) => console.log(err))