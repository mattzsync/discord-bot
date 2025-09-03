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

// listen when our bot is ready
client.on('ready', (c) => {
	console.log(`${c.user.tag} is online.`);
});

// Use the token from .env
client.login(process.env.DISCORD_BOT_TOKEN);
