//Built-in modules
//OS Module
const os = require('os')

const current_os = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(current_os)