const { Collection } = require('discord.js');

const disable = require('./disable');
const enable = require('./enable');
const reset = require('./reset');
const setstyle = require('./setstyle');

const commands = [
    disable,
    enable,
    reset,
    setstyle
]

var to_export = new Collection();
Object.keys(commands).forEach(key => {
    to_export.set(commands[key].name, commands[key])
});

module.exports = to_export;