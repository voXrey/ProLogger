const fs = require('fs');
const Discord = require('discord.js');
const CONFIG = require('./config.json'); // load config
const logger = require('./src/logger.js');

const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({intents:allIntents});  // create bot

// setup commands file
client.commands = new Discord.Collection(); // create collection of bot's commands
const commandFolders = fs.readdirSync('./src/commands');
for (const commandFolder of commandFolders) {
    const commandFiles = fs.readdirSync(`./src/commands/${commandFolder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./src/commands/${commandFolder}/${file}`);
        // set a new item in the Collection
        // with the key as the command name and the value as the exported module
        client.commands.set(command.name, command);
    }
}

// setup events
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./src/events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    }
    else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// setup commands handler with on_message
client.on('messageCreate', message => {
    const command = message.content.toLowerCase();
    if (command.startsWith(CONFIG.PREFIX)) {
        const argsWithPrefix = command.split(' ');
        const args = argsWithPrefix.slice(1);
        const commandName = argsWithPrefix[0].slice(1);

        if (!client.commands.has(commandName)) return;
        
        
        logger.commandInvoked(message.author, commandName, command, message.guild);
        try {
            client.commands.get(commandName).execute(message, args);
        } catch (error) {
            logger.commandError(message.author, commandName, command, message.guild, error);
            message.reply('There was an error trying to execute that command!');
        }
    }
})


client.on('error', console.error); // display errors
client.login(CONFIG.TOKEN); // start bot
