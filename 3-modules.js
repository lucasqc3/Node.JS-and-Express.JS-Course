// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-syntax')

//evoked when required
require('./7-mind-granade')

sayHi('Suzan')
sayHi(names.john)
sayHi(names.peter)