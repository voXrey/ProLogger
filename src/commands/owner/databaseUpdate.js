// command to update database tables to add guilds in

module.exports = {
	name: 'database_update',
	description: 'Update guilds in database',
	async execute(message, args, bot, lang) {
        const guilds_id = bot.client.guilds.cache.map(guild => guild.id);
		for(var guild of guilds_id) {
            await bot.database.checkGuild(guild);
        };
	},
};