require('dotenv').config()
const { Client, Collection, Intents } = require('discord.js')
const config = require('./src/data/config.json')
const botCommands = require('./src/commands')
const botEvents = require('./src/events')

const TOKEN = process.env.TOKEN
const { prefix, name } = config

// Config
const configSchema = {
    name,
    defaultColors: {
        success: '#41b95f',
        neutral: '#287db4',
        warning: '#ff7100',
        error: '#c63737',
    },
}

// Define the bot
const bot = {
    client: new Client({intents:new Intents(32767)}),
    log: console.log, // eslint-disable-line no-console
    commands: new Collection(),
		config: configSchema, // add the new config to our bot object
}

// Load the bot
bot.load = function load() {
    this.log('Loading commands...')
    Object.keys(botCommands).forEach(key => {
        this.commands.set(botCommands[key].name, botCommands[key])
    })
    this.log('Connecting...')
    this.client.login(TOKEN)
}

// Set bot events
for (const event of botEvents) {
	if (event.once) {
		bot.client.once(event.name, (...args) => event.execute(...args));
	} else {
		bot.client.on(event.name, (...args) => event.execute(...args));
	}
}

// Commands handler
bot.client.on('messageCreate', async message => {
    // ignore all other messages without our prefix
    if (!message.content.startsWith(prefix)) return

    const args = message.content.split(" ")
    // get the first word (lowercase) and remove the prefix
    const command = args.shift().toLowerCase().slice(1)

	//check if command is in bot's commands
    if (!bot.commands.has(command)) return

    try {
        bot.commands.get(command).execute(message, args, bot)
    } catch (error) {
        bot.log(error)
        message.reply('there was an error trying to execute that command!')
    }
});


bot.load();