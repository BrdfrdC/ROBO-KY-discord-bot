require('dotenv').config();
require('./deploy-commands.js');
const { token } = process.env;
const { Client, Collection, GatewayIntentBits, ActivityType, Partials, InteractionType } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ], 
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction,
    ]
});


client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
	if (interaction.isChatInputCommand()) {
        const command = interaction.client.commands.get(interaction.commandName);
        console.log(command);
        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing a Slash command!', ephemeral: true });
        }
    } else if (interaction.type == InteractionType.ApplicationCommandAutocomplete) {
        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) return;

        try {
            await command.autocomplete(interaction, client);
        } catch (error) {
            console.error(error);
        }
    }
});

const blacklist = ["nigger"];

client.on('messageCreate', message => {
    for(let word of blacklist){
        if(message.content.includes(word)){
            const warning = message.guild.roles.cache.find(r => r.name === "Warning");
            const channel = '1012464105866674377'
            message.delete();
            message.author.send("\`THAT LANGUAGE IS NOT APPRECIATED IN OUR SERVER.\`");
            message.member.roles.add(warning);
            client.channels.cache.get(channel).send("\`" + message.author.username + " SAID A BLACKLISTED WORD. THEY HAVE BEEN WARNED\`");
            break;
        }
    }
})

client.on('ready', () => {
    console.log('ROBO-KY IS ONLINE');
    client.user.setPresence({ activities: [{ name: 'YOUR MOTHER HAHA' }], status: 'online' });
})
client.login(token);