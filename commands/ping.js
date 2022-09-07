const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pongs back'),

    async execute(interaction){
        interaction.reply('\`PONG\`');
    }
}