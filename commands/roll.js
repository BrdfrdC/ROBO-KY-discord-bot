const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('ROLLS A DICE')
        .addIntegerOption(option =>
            option.setName('dice_amount')
                .setDescription('NUMBER OF DICE TO BE ROLLED')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('dice_size')
                .setDescription('SIZE OF EACH DIE')
                .setRequired(true)),

    async execute(interaction){
        const diceAmount = interaction.options.getInteger('dice_amount');
        const diceSize = interaction.options.getInteger('dice_size');
        let result = 0;

        for (let i = 0; i < diceAmount; i++) {
            result += Math.floor(Math.random() * diceSize + 1);
        }
        
        interaction.reply(`\`${result}\``);
    }
}