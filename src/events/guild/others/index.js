const guildUpdate = require('./guildUpdate');
const interactionCreate = require('./interactionCreate');
const webhookUpdate = require('./webhookUpdate');

module.exports = [
    guildUpdate,
    interactionCreate,
    webhookUpdate
]