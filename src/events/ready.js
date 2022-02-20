module.exports = {
    name: 'ready',
    once: true,
    execute(bot, client) {
        bot.log.info(`Poweron! Logged in as ${client.user.tag}`);
    }
}