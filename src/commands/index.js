const help= require('./info/help')
const invite= require('./info/invite')
const setlang= require('./admin/setlang')
const setprefix = require('./admin/setprefix')

module.exports = [
    help,
	invite,
    setlang,
    setprefix
]