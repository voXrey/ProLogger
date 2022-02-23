const messageReactionAdd = require('./messageReactionAdd');
const messageReactionRemove = require('./messageReactionRemove');
const messageReactionRemoveAll = require('./messageReactionRemoveAll')
const messageReactionRemoveEmoji = require('./messageReactionRemoveEmoji')

module.exports = [
    messageReactionAdd,
    messageReactionRemove,
    messageReactionRemoveAll,
    messageReactionRemoveEmoji
]