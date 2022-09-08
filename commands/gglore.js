const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gglore')
    .setDescription('EXPLAINS WHY THE GEAR IS SO GUILTY'),

    async execute(interaction){
        await interaction.reply('\```RIDE WIFE\n'+ 
        'LIFE GOOD\nWIFE GETS SICK\nFRIEND TRIES TO SAVE WIFE\n' + 
        'WIFE TURNS INTO MONSTER\nWIFE FIGHT BACK\nKILL WIFE\nWIFE GONE\n' +
        'THINK ABOUT WIFE\nREGRET\nWIFE MONSTER COME BACK\nKILL WIFE\n' +
        'WIFE GONE\nTHINK ABOUT WIFE\nREGRET\nDAUGHTER OF WIFE MONSTER SHOWS UP\n' +
        'TRY TO KILL DAUGHTER\nFRIEND SAYS NO\nLEAVE DAUGHTER ALONE\n' +
        'WIFE CLONE APPEARS\nKILL WIFE\nWIFE GONE\nTHINK ABOUT WIFE\n' +
        'REGRET\nWIFE MONSTER COME BACK\nKILL WIFE\nWIFE GONE\nTHINK ABOUT WIFE\n' +
        'FRIEND BRINGS BACK NORMAL WIFE\nLIFE GOOD\```');
    }
}