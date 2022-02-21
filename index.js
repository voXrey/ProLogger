require('dotenv').config()
const { Client, Collection, Intents, MessageEmbed } = require('discord.js')
const config = require('./src/data/config.json')
const botCommands = require('./src/commands')
const botEvents = require('./src/events')
const logger = require('./src/core/logger')
const database = require('./src/core/database')

const TOKEN = process.env.TOKEN
const { prefix, name } = config

// Config
const configSchema = {
    name,
    defaultColors: {
        main: '#ffffff',
        success: '#1D8348',
        neutral: '#21618C',
        warning: '#F39C12',
        error: '#943126',
    },
}

// Define the bot
const bot = {
    client: new Client({intents:new Intents(32767)}),
    log: logger,
    database: database,
    commands: new Collection(),
	config: configSchema, // add the new config to our bot object
}

// Load the bot
bot.load = function load() {
    this.log.info('Loading commands...')
    Object.keys(botCommands).forEach(key => {
        this.commands.set(botCommands[key].name, botCommands[key])
    })
    this.log.info('Connecting...')
    this.client.login(TOKEN)
}

// Set bot events
for (const event of botEvents) {
	if (event.once) {
		bot.client.once(event.name, (...args) => event.execute(bot, ...args));
	} else {
		bot.client.on(event.name, (...args) => event.execute(bot, ...args));
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
    await bot.database.checkGuild(message.guildId);
    const lang = await bot.database.getGuildLangage(message.guildId);
    bot.log.info(`Command "${command}" was invoked by (${message.author.id}) in (channel: ${message.channel.id})(guild: ${message.guild.id})`)
    try {
        await bot.commands.get(command).execute(message, args, bot, lang)
    } catch (error) {
        bot.log.warn(`An error was occured with the command "${command}": ${error}`)
        message.reply('there was an error trying to execute that command!')
    }
});


bot.load();