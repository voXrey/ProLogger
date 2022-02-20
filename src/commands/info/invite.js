// TO TO
// - detect lang to use
// - check if guild is in db

module.exports = {
	name: 'invite',
	description: 'Send a link to invite bot',
	async execute(message, args, bot) {
		var invite_embed = await bot.database.getText('fr', 'BOT_INVITE_EMBED'); // get embed from database
		invite_embed = JSON.parse(invite_embed); // convert embed string to js object
		invite_embed.color = bot.config.defaultColors.main // set embed color

		message.reply({ embeds: [invite_embed] }); // send embed
	},
};