const help_embed = require('../../core/embeds/help');

module.exports = {
	name: 'help',
	description: 'Send the help message',
	execute(message, args) {
		message.reply({ embeds: [help_embed] });
	},
};