module.exports = {
	name: 'invite',
	description: 'Send a link to invite bot',
	execute(message, args) {
		message.channel.send('https://discord.com/api/oauth2/authorize?client_id=940630106840383579&permissions=274878286848&scope=bot%20applications.commands.');
	},
};