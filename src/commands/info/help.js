const help_embed = require('../../core/embeds/help_embed');

module.exports = {
	name: 'help',
	description: 'Send the help message',
	async execute(message, args, bot, lang) {
		message.reply({ embeds: [help_embed] });
	},
};