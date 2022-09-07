const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('necoarc').setDescription('BURUNYU'),
  async execute(interaction, args){
        gifs = ["https://cdn.discordapp.com/emojis/773443016002240532.gif?v=1", "https://cdn.discordapp.com/attachments/1009222851267670076/1011602708224036885/necoluminadance4.gif",
        "https://media.discordapp.net/attachments/585928503527211013/1010388468020547744/speed.gif", "https://cdn.discordapp.com/attachments/851552192716603442/1010855798848634912/are_we_in_hell.png",
        "https://tenor.com/view/neco-arc-melty-blood-melty-blood-type-lumina-gif-26357915", "https://tenor.com/view/neco-arc-cross-gif-23844686",
        "https://cdn.discordapp.com/attachments/851552192716603442/1013496406260064348/GriddyArc.gif", "https://media.discordapp.net/attachments/932371569710350456/1012514156563398696/Necowha-1.gif",
        ""];
        random = Math.floor(Math.random() * gifs.length);
        interaction.reply(`${gifs[random]}`);
    }
}