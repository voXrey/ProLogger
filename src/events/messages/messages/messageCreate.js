module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(bot, message) {
        if(message.author.bot) return;
        const logger = await bot.database.getLogger(message.guildId, 'messages');
        if(logger.activate) {
            for(const channel_id of logger.channels) {
                var channel = await bot.client.channels.fetch(channel_id);
                channel.send(`${message.author.tag}: ${message.content}`);
            }
        }
    }
}