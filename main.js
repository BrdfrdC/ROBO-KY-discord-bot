require('dotenv').config();
const { token } = process.env;
const { Client, Collection, GatewayIntentBits, ActivityType, Partials } = require('discord.js');
const fs = require('fs');

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
const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const prefix = ';';


client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    } 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(message.content);

    switch (command) {
        case 'ping':
            client.commands.get('ping').execute(message, args);
            break;
        case 'rs':
            client.commands.get('rs').execute(message, args);
            break;
        case 'help':
            client.commands.get('help').execute(message, args);
            break;
        case 'vote':
            if((message.member.roles.cache.find(r => r.name === "retard") || message.member.roles.cache.find(r => r.name === "Swood Dood")) && !message.author.bot){
                client.commands.get('vote').execute(message, args);
            }
            break;
        case 'purge':
            if((message.member.roles.cache.find(r => r.name === "retard") || message.member.roles.cache.find(r => r.name === "Swood Dood")) && !message.author.bot){
                client.commands.get('purge').execute(message, args, client);
            }
            break;
        case 'frames':
            client.commands.get('frames').execute(message, args, client);
            break;
        default:
            message.channel.send('\`INVALID COMMAND. USE ;help TO RECEIVE A LIST OF COMMANDS\`');
            break;
    }

})

client.on('ready', () => {
    console.log('ROBO-KY IS ONLINE');
    client.user.setPresence({ activities: [{ name: 'YOUR MOTHER HAHA' }], status: 'online' });
})
client.login(token);