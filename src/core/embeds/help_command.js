const { MessageEmbed } = require('discord.js');
const commands_json = require('../../data/commands.json');

module.exports = async function generate(command, lang, database) {
    const command_info = commands_json["commands"][command];
    
    var title = await database.getText(lang, 'HELP_COMMAND_TITLE');
    title = title.replace('{command_name}', command);

    var description = await database.getText(lang, 'HELP_COMMAND_DESCRIPTION');
    description = description.replace('{command_description}', command_info["description"][lang]);
    description = description.replace('{command_usage}', command_info["usage"]);
    
    if(Object.keys(command_info["args"]).length > 0) { 
        var args = "";
        var args_info = "";
        for(var arg in command_info["args"]) {
            args = args + `[${arg}]`;
            args_info = args_info + `➥ ${arg} : ${command_info["args"][arg]["description"][lang]}\n`;
        }
        description = description.replace('{args}', args);
        description = description.replace('{args_info}', args_info);
    } else {
        const search = `> ${command}`
        const i = description.indexOf(search);
        description = description.slice(0, i+search.length);
    }

    
    const embed = new MessageEmbed()
        .setTitle(title)
        .setDescription(description);

    return embed;
}