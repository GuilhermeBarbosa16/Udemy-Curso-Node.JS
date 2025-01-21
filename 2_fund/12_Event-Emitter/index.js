const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('star', () =>{
    console.log('Durante')
})
console.log('antes')

eventEmitter.emit('start')

console.log('Depois')