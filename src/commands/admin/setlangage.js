const database = require('../../core/database'); // get database manager
const langs = ['en', 'fr']

module.exports = {
	name: 'setlangage',
	description: 'Set bot\s langage in this guild',
	async execute(message, args) {
        if (!langs.includes(args[0])) {
            message.channel.send(`This langage isn\'t available, there are the available langages:\n${langs.join('\n')}`);
            return;
        }
        const _args = [args[0], message.channel.guild.id];
		await database.request(`UPDATE settings
                                SET langage = ?
                                WHERE guild_id = ?`,
                            _args);
                            
        message.channel.send(`The langage is now setted on '${args[0]}'`);
	},
};