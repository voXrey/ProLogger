const invite_embed = require('../../core/embeds/invite');

module.exports = {
	name: 'invite',
	description: 'Send a link to invite bot',
	execute(message, args) {
		message.reply({ embeds: [invite_embed] });
	},
};