const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help').setDescription('PROVIDES HELP'),
  async execute(interaction, args){
        await interaction.reply('\```HERE ARE THE LIST OF MY COMMANDS:\n\n' + 
        'rs: RANDOMLY SELECTS A CHARACTER FOR A GAME. SUPPORTED GAMES ARE: Valorant, Strive, LoL\n' +
        'roll: ROLLS A DIE/DICE USE THE FORMAT #d#\n' +
        'frames: GETS GUILTY GEAR FRAME DATA FOR VIRGINS\n' +
        'I PROMISE I WILL BE PROGRAMMED WITH MORE IN THE FUTURE\```');
    }
}