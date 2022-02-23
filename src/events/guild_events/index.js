const guildScheduledEventCreate = require('./guildScheduledEventCreate');
const guildScheduledEventDelete = require('./guildScheduledEventDelete');
const guildScheduledEventUpdate = require('./guildScheduledEventUpdate');
const guildScheduledEventUserAdd = require('./guildScheduledEventUserAdd');
const guildScheduledEventUserRemove = require('./guildScheduledEventUserRemove');

module.exports = [
    guildScheduledEventCreate,
    guildScheduledEventDelete,
    guildScheduledEventUpdate,
    guildScheduledEventUserAdd,
    guildScheduledEventUserRemove
]