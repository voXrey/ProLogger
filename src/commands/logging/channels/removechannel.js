module.exports = {
	name: 'removechannel',
	description: 'Remove channel from a logger',
	async execute(message, logger_name, args, bot, lang) {
		const channel = message.mentions.channels.first();

		await bot.database.removeChannelFromLogger(message.guildId, channel.id.toString(), logger_name);
        message.reply(`Channel removed from logger "${logger_name}"`);
	},
};