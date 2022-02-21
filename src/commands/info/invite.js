const embeds = require('../../core/embeds/index'); // import embeds generators

module.exports = {
	name: 'invite',
	description: 'Send a link to invite bot',
	async execute(message, args, bot, lang) {
		var embed = await embeds.invite(lang, bot.database); // generate embed
		embed.color = bot.config.defaultColors.main; // set embed color
		message.reply({embeds:[embed]}); // send embed
	},
};