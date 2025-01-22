const chalk = require('chalk')

const nota = 1

if(nota >= 7) {
    console.log(chalk.green('Parabens! Voce passou!'))
}else{
    console.log(chalk.red('Que pena! Voce não passou!'))
}