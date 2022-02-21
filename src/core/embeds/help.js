const { MessageEmbed } = require('discord.js');
const commands_json = require('../../data/commands.json');

module.exports = async function generate(lang, database) {
    const title = await database.getText(lang, 'HELP_PAGE_TITLE');

    var fields = [];
    var categories = {}
    
    for(const categorie in commands_json["categories"]) categories[categorie] = [];
    
    for(const command in commands_json['commands']) {
        const categorie = commands_json["commands"][command]["categorie"];
        categories[categorie].push((`\`${commands_json["commands"][command]["usage"]}\``));
    };

    for(const categorie in categories) {
        const field = {name:commands_json["categories"][categorie]["name"][lang], value:categories[categorie].join(' '), inline:false}
        fields.push(field)
    }

    const embed = new MessageEmbed()
        .setTitle(title)
        .addFields(fields=fields);

    return embed;
}