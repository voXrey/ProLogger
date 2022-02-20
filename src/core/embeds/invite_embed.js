const { MessageEmbed } = require('discord.js')

const embed = new MessageEmbed()
    .setTitle("Bot's invite")
    .setDescription("You can invite me by clicking on this [link](https://discord.com/api/oauth2/authorize?client_id=940630106840383579&permissions=274878286848&scope=bot%20applications.commands) ✉️")
    //.setColor('#a07f5c');

module.exports = embed;