const names = require('./app3')
console.log(names)
const sayHi = require('./app2')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)