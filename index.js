const fs = require('fs');
const Discord = require('discord.js');
const CONFIG = require('./config.json'); // load config

const allIntents = new Discord.Intents(32767)
const client = new Discord.Client({intents:allIntents});  // create bot

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

// setup commands
client.on('messageCreate', message => {
    const comand = message.content;
    if (comand.startsWith(CONFIG.PREFIX)) {
        const argsWithPrefix = comand.split(' ')
        const args = argsWithPrefix.slice(1);
        const commandName = argsWithPrefix[0].slice(1)

        switch (commandName) {
            case 'invite':
                message.channel.send('https://discord.com/api/oauth2/authorize?client_id=940630106840383579&permissions=274878286848&scope=bot%20applications.commands');
        }
    }
})


client.on('error', console.error); // display errors
client.login(CONFIG.TOKEN); // start bot
