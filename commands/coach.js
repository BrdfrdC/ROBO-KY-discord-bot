const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coach').setDescription('GIVES COACHING ADVICE'),
    async execute(interaction){
        advice = ['\`IF SOMEONE IS ATTACKING YOU, BLOCK!\`', '\`IN CASE OF EMERGENCY, 6P!\`', '\`IF YOU ARE GETTING HIT, TRY NOT TO GET HIT NEXT TIME!\`',
        '\`IF YOU KEEP GETTING HIT BY THE SAME THING, NEXT TIME DONT GET HIT!\`', '\`IF SOMEONE IS SPAMMING, STOP THEM!\`', '\`TRY TO KILL THEM BEFORE THEY KILL YOU!\`',
        '\`THE ESSENCE OF BATTLE IS TO BEAT THE SHIT OUT OF THE OTHER GUY!\`', '\`HAVE YOU TRIED NOT LOSING?\`',];
        random = Math.floor(Math.random() * advice.length);
        await interaction.reply( {content: `${advice[random]}`} );
    }
}