module.exports = {
	name: 'setlang',
	description: 'Set bot langage in a guild',
	async execute(message, args, bot, lang) {
        const langs = [
            'en',
            'fr'
        ]
        const new_lang = args[0];
        if(langs.includes(new_lang)) {
            await bot.database.setGuildLangage(message.guildId, new_lang);
            message.reply(`Langage setted on "${new_lang}"`);
        } else {
            message.reply(`This langage is not in the langages list:\n\`${langs.join('\` \`')}\``);
        }
	},
};