module.exports = {
	name: 'addchannel',
	description: 'Add channel to a logger',
	async execute(message, logger_name, args, bot, lang) {
		const channel = message.mentions.channels.first();

		await bot.database.addChannelToLogger(message.guildId, channel.id.toString(), logger_name);
        message.reply(`Channel added to logger "${logger_name}"`);
	},
};