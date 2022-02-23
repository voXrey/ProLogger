const guildMemberAdd = require('./guildMemberAdd');
const guildMemberRemove = require('./guildMemberRemove');
const guildMembersChunk = require('./guildMembersChunk');

module.exports = [
    guildMemberAdd,
    guildMemberRemove,
    guildMembersChunk
]