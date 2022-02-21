const embeds = require('../../core/embeds/index'); // import embeds generators

module.exports = {
	name: 'help',
	description: 'Send the help message',
	async execute(message, args, bot, lang) {
		if(args.length == 0) {
			var embed = await embeds.help(lang, bot.database); // generate embed
			embed.color = bot.config.defaultColors.main; // set embed color
			message.reply({ embeds: [embed] }); // send embed
		} else {
			// check if command is in bot's commands list
			const command = args[0];
			if (bot.commands.has(command)) {
				const embed = await embeds.help_command(command, lang, bot.database); // generate embed
				message.reply({embeds:[embed]}); // send help
			} else {
				message.reply("This command doesn't exist");
			}
		}
	},
};