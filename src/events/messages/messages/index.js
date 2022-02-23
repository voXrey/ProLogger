const messageCreate = require('./messageCreate');
const messageDelete = require('./messageDelete');
const messageDeleteBulk = require('./messageDeleteBulk')
const messageUpdate = require('./messageUpdate')

module.exports = [
    messageCreate,
    messageDelete,
    messageDeleteBulk,
    messageUpdate
]