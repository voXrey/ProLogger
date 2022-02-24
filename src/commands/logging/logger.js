const logger_config_commands = require('./config'); // import config commands
const logger_channels_commands = require('./channels'); // import commands to change logger channels

module.exports = {
	name: 'logger',
	description: 'Loggers commands',
	async execute(message, args, bot, lang) {
		const logger_name = args[0]; // get logger name
        const sub_command = args[1]; // define sub command from args
        const sub_args = args.slice(2); // define new args
        
        if(logger_channels_commands.has(sub_command)) await logger_channels_commands.get(sub_command).execute(message, logger_name, sub_args, bot, lang);
        else if(logger_config_commands.has(sub_command)) await logger_channels_commands.get(sub_command).execute(message, logger_name, sub_args, bot, lang);
        else message.reply(`The subcommand "${sub_command}" doesn't exist`);
	},
};