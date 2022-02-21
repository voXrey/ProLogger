const { MessageEmbed } = require('discord.js');

module.exports = async function generate(lang, database) {
    const link = "https://discord.com/api/oauth2/authorize?client_id=940630106840383579&permissions=274878286848&scope=bot%20applications.commands";
    const title = await database.getText(lang, 'BOT_INVITE_EMBED_TITLE');
    var description = await database.getText(lang, 'BOT_INVITE_EMBED_DESCRIPTION')
    description = description.replace('{link}', link); 

    const embed = new MessageEmbed()
        .setTitle(title)
        .setDescription(description);

    return embed;
}