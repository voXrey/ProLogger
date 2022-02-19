const { MessageEmbed } = require('discord.js');
const commands_json = require('../../data/commands.json');

var fields = []
for(var key in commands_json) {
    
    var commands_usage = [];
    for(var key2 in commands_json[key]['commands']) commands_usage.push(`\`${commands_json[key]['commands'][key2]['usage']}\``);
    
    const field = {name:commands_json[key]['name'], value:commands_usage.join(' '), inline:false}
    fields.push(field)
};

const embed = new MessageEmbed()
    .setTitle("Help page")
    .addFields(fields=fields)
    .setColor('#a07f5c');

module.exports = embed;