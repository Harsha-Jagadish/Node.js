const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method system uptime

const time = os.uptime()
console.log(os.uptime())

const currentOS = {
    name: os.type(),
    release: os.release(),
    freeMem: os.freemem(),
}

console.log(currentOS)