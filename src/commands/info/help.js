const help_embed = require('../../core/embeds/help_embed');

module.exports = {
	name: 'help',
	description: 'Send the help message',
	execute(message, args) {
		message.reply({ embeds: [help_embed] });
	},
};