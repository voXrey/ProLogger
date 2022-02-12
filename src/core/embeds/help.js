const { MessageEmbed } = require('discord.js');

const embed = new MessageEmbed()
    .setTitle("Help page")
    .addFields(
        { name: 'Info', value: '`invite`', inline: false},
    )
    .setColor('#a07f5c');

module.exports = embed;