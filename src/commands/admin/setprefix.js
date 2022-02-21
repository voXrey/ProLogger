module.exports = {
	name: 'setprefix',
	description: 'Set bot\'s prefix in a guild',
	async execute(message, args, bot, lang) {
        if(args.length > 0) {
            const new_prefix = args[0];
            await bot.database.setGuildPrefix(message.guildId, new_prefix);
            message.reply(`Prefix setted on "${new_prefix}"`);
        } else {
            message.reply('You must to provide a new prefix');
        }
	},
};