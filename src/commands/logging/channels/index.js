const { Collection } = require('discord.js');

const addchannels = require('./addchannel');
const clearchannels = require('./clearchannels');
const removechannels = require('./removechannel');

const commands = [
    addchannels,
    clearchannels,
    removechannels
]

var to_export = new Collection();
Object.keys(commands).forEach(key => {
    to_export.set(commands[key].name, commands[key])
});

module.exports = to_export;