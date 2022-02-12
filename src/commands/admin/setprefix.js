const database = require('../../core/database'); // get database manager

module.exports = {
	name: 'setprefix',
	description: 'Set bot\s prefix for this guild',
	async execute(message, args) {
        database.setGuildPrefix(message.guild.id, args[0]);               
        message.channel.send(`The prefix is now setted on '${args[0]}'`);
	},
};