const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const frameDataLibrary = require('./frameDataLibrary.json');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('frames')
    .setDescription('GETS FRAME DATA')
    .addStringOption(option =>
      option.setName('character_name')
          .setDescription('THE NAME OF THE CHARACTER')
          .setRequired(true)
          .setAutocomplete(true))
    .addStringOption(option =>
      option.setName('move_name')
          .setDescription('THE NAME OF THE MOVE')
          .setRequired(true)),
  
  async autocomplete(interaction, client){
      const focusedValue = interaction.options.getFocused();
      const choices = ["Sol Badguy", "Ky Kiske", "May", "Axl Low", "Chipp Zanuff",
      "Potemkin", "Faust", "Millia Rage", "Zato=1", "Ramlethal Valentine", 
      "Leo Whitefang", "Nagoriyuki", "Giovanna", "Anji Mito", "I-No", "Goldlewis Dickinson",
      "Jack-O' Valentine", "Happy Chaos", "Baiken", "Testament", "Bridget"];
      const filtered = choices.filter(choice => choice.startsWith(focusedValue));
      await interaction.respond(
        filtered.map(choice => ({ name: choice, value: choice })),
      );
  },
  
  async execute(interaction, client){
    const charName = interaction.options.getString('character_name');
    const moveName = 'a' + interaction.options.getString('move_name')
    .replace('.','').replace('[','').replace(']','')
    .replace('>','').replace('~','');
    
    if(!frameDataLibrary[charName] || !frameDataLibrary[charName][moveName]){
      await interaction.reply(`\`\`\`INVALID MOVE NAME! I'M A ROBOT AND I ONLY UNDERSTAND NUMPAD NOTATION\`\`\``)
      return;
    }

    const moveInfo = frameDataLibrary[charName][moveName]["info"].split('\t');
    const x = [{ name: '**Startup**', value: moveInfo[0], inline: true },
    { name: '**Active**', value: moveInfo[1], inline: true },
    { name: '**Recovery**', value: moveInfo[2], inline: true },
    { name: '**On Block**', value: moveInfo[3], inline: true },
    { name: '**On Hit**', value: moveInfo[4], inline: true },
    { name: '**Damage**', value: moveInfo[5], inline: true },
    { name: '**RISC Gain**', value: moveInfo[6], inline: true },
    { name: '**Prorate**', value: moveInfo[7], inline: true },
    { name: '**Guard Level**', value: moveInfo[8], inline: true },
    { name: '**Gatlings**', value: moveInfo[9], inline: true }];

    const embedMessage = new EmbedBuilder()
      .setTitle(frameDataLibrary[charName]["charName"])
      .setDescription(frameDataLibrary[charName][moveName]["name"])
      .setThumbnail(frameDataLibrary[charName]["thumbnail"])
      .addFields(
        x
      )
      .setFooter({text: frameDataLibrary[charName][moveName]["footer"]})

      await interaction.reply({ embeds: [embedMessage] });
  }
}