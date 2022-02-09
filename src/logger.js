const Discord = require('discord.js');

class mylogger {
    
    commandError(user, commandName, command, guild, error) {
        console.error(`Error on command: [${commandName}] with [${command}] by [${user.tag} (${user.id})] in [${guild.name} (${guild.id})], [ERROR]: ${error}`);
    }

    commandInvoked(user, commandName, command, guild) {
        console.log(`User [${user.tag} (${user.id})] invoked command [${commandName}] with [${command}] in [${guild.name} (${guild.id})]`);
    }
}

const logger = new mylogger();
module.exports = logger;