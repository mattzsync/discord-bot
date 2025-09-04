const { Client, IntentsBitField} = require('discord.js');
require("dotenv").config(); // Load .env

// Intents are a sets of permissions for actions
// The variable client will act as the initializer
const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	],
});

// logging messages
client.on('ready', (c) => {
	console.log(`${c.user.tag} is online.`);
});

// need the intents to read menssages
// ping to the bot
client.on('messageCreate', (msg) => {
	// Doesnt reply himself
	if (msg.author.bot) {
		return;
	}
	if (msg.content === 'ping') {
		msg.reply('Pong!');
	}
});

// Use the token from .env
client.login(process.env.DISCORD_BOT_TOKEN);
