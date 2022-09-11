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
          .setRequired(true)
          .setAutocomplete(true)),
  
  async autocomplete(interaction, client){
      const focusedOption = interaction.options.getFocused(true);
      let choices;
      let filtered;

      charBreak: if(focusedOption.name == 'character_name'){
        choices = ["Sol Badguy", "Ky Kiske", "May", "Axl Low", "Chipp Zanuff",
        "Potemkin", "Faust", "Millia Rage", "Zato=1", "Ramlethal Valentine", 
        "Leo Whitefang", "Nagoriyuki", "Giovanna", "Anji Mito", "I-No", "Goldlewis Dickinson",
        "Jack-O' Valentine", "Happy Chaos", "Baiken", "Testament", "Bridget"];
        filtered = choices.filter(choice => choice.startsWith(focusedOption.value));
        if(filtered == []) {
          filtered = ["THAT'S NOT A CHARACTER DIPSHIT!"];
          break charBreak;
        }
      }
      
      moveBreak: if(focusedOption.name == 'move_name'){
        choices = [];
        if(!frameDataLibrary[interaction.options.getString('character_name')]){
          filtered = ["THAT'S NOT A CHARACTER! DELETE THE COMMAND AND TRY AGAIN"];
          break moveBreak;
        }
        const characterMoves = frameDataLibrary[interaction.options.getString('character_name')]["moves"];
        for (const move in characterMoves) {
          choices.push(characterMoves[move].name);
        }
        filtered = choices.filter(choice => choice.startsWith(focusedOption.value)).slice(0, 25);
      }
      await interaction.respond(
        filtered.map(choice => ({ name: choice, value: choice }))
    );
  },
  
  async execute(interaction, client){
    const charName = interaction.options.getString('character_name');
    const moveName = interaction.options.getString('move_name');

    if(!frameDataLibrary[charName]){
      await interaction.reply({ content: '\`INVALID CHARACTER/MOVE NAME! HOW DID YOU MESS UP?! I HAVE AUTOCOMPLETE!\`', ephemeral: true});
      return;
    }

    const allMoves = frameDataLibrary[charName]["moves"];
    let moveInfo;
    let moveObject;

    for (const move in allMoves) {
      if(allMoves[move].name === moveName) {
        moveInfo = frameDataLibrary[charName]["moves"][move]["info"].split('\t');
        moveObject = move;
      }
    }

    console.log(moveObject);

    const x = [{ name: '**Startup**', value: moveInfo[0], inline: true },
    { name: '**Active**', value: moveInfo[1], inline: true },
    { name: '**Recovery**', value: moveInfo[2], inline: true },
    { name: '**On Hit**', value: moveInfo[3], inline: true },
    { name: '**On Block**', value: moveInfo[4], inline: true },
    { name: '**Damage**', value: moveInfo[5], inline: true },
    { name: '**RISC Gain**', value: moveInfo[6], inline: true },
    { name: '**Prorate**', value: moveInfo[7], inline: true },
    { name: '**Guard Level**', value: moveInfo[8], inline: true },
    { name: '**Gatlings**', value: moveInfo[9], inline: true }];

    const embedMessage = new EmbedBuilder()
      .setTitle(frameDataLibrary[charName]["moves"][moveObject]["name"])
      .setDescription(moveObject.replace('a', '').toUpperCase())
      .setThumbnail(frameDataLibrary[charName]["thumbnail"])
      .addFields(
        x
      )
      .setFooter({text: frameDataLibrary[charName]["moves"][moveObject]["footer"]})

      await interaction.reply({ embeds: [embedMessage] });
  }
}