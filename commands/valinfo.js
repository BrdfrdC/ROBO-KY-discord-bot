const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const valorantDataLibrary = require('./valorantDataLibrary.json');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('valinfo')
    .setDescription('GETS DATA ABOUT VALORANT AGENTS AND WEAPONS')
    .addStringOption(option =>
      option.setName('agent_name')
          .setDescription('THE NAME OF THE AGENT')
          .setAutocomplete(true))
    .addStringOption(option =>
      option.setName('ability_name')
          .setDescription('THE NAME OF THE ABILITY')
          .setAutocomplete(true))
    .addStringOption(option =>
      option.setName('gun_name')
          .setDescription('THE NAME OF THE GUN')
          .setAutocomplete(true))
    .addStringOption(option =>
      option.setName('random_strat')
          .setDescription('RANDOMLY PICKS A STRAT')
          .setAutocomplete(true)),
  
  async autocomplete(interaction, client){
      const focusedOption = interaction.options.getFocused(true);
      let choices;
      let filtered;

      agentBreak: if(focusedOption.name == 'agent_name'){
        choices = ["Brimstone", "Phoenix", "Sage", "Sova", "Viper", "Cypher",
        "Reyna", "Killjoy", "Breach", "Omen", "Jett", "Raze", "Skye", "Yoru", "Astra",
        "KAY/O", "Chamber", "Neon", "Fade"];
        filtered = choices.filter(choice => choice.startsWith(focusedOption.value));
        if(filtered == []) {
          filtered = ["THAT'S NOT AN AGENT DIPSHIT!"];
          break agentBreak;
        }
      }
      
      abilityBreak: if(focusedOption.name == 'ability_name'){
        choices = [];
        if(!valorantDataLibrary["agents"][interaction.options.getString('agent_name')]){
          filtered = ["THAT'S NOT AN AGENT! DELETE THE COMMAND AND TRY AGAIN"];
          break abilityBreak;
        }
        const agentAbilities = valorantDataLibrary["agents"][interaction.options.getString('agent_name')]["abilities"];
        for (const ability in agentAbilities) {
            choices.push(ability);
        }
        filtered = choices.filter(choice => choice.startsWith(focusedOption.value)).slice(0, 25);
      }

      gunBreak: if(focusedOption.name == 'gun_name'){
        choices = [];
        const gunLibrary = valorantDataLibrary["guns"];
        for (const gun in gunLibrary) {
            choices.push(gun);
        }
        filtered = choices.filter(choice => choice.startsWith(focusedOption.value)).slice(0, 25);
      }

      stratBreak: if(focusedOption.name == 'random_strat'){
        filtered = ["CLICK HERE FOR POOR DECISIONS AND PRESS ENTER"];
          break stratBreak;
      }

      await interaction.respond(
        filtered.map(choice => ({ name: choice, value: choice }))
    );
  },
  
  async execute(interaction, client){
    const agentName = interaction.options.getString('agent_name');
    const abilityName = interaction.options.getString('ability_name');
    const gunName = interaction.options.getString('gun_name');
    const randomStrat = interaction.options.getString('random_strat')

    if(agentName){
      if(!abilityName){
          const agentInfo = valorantDataLibrary["agents"][agentName]["info"];
          const embedMessage = new EmbedBuilder()
          .setTitle(agentName)
          .setDescription(agentInfo["role"])
          .setThumbnail(agentInfo["roleIcon"])
          .addFields(
              { name: '**Biography**', value: agentInfo["bio"] },
          )
          .setImage(agentInfo["image"])

          await interaction.reply({ embeds: [embedMessage] });
          return;
      }
      
      const abilityInfo = valorantDataLibrary["agents"][agentName]["abilities"][abilityName];
      const embedMessage = new EmbedBuilder()
      .setTitle(abilityName)
      .setThumbnail(abilityInfo["icon"])
      .addFields(
          { name: '**Description**', value: abilityInfo["description"] },
          { name: '**Uses**', value: abilityInfo["uses"], inline: true },
          { name: '**Cost**', value: abilityInfo["cost"], inline: true },
          { name: '**Duration**', value: abilityInfo["duration"], inline: true },
          { name: '**Effects**', value: abilityInfo["effects"] }
      )

      await interaction.reply({ embeds: [embedMessage] });

    } else if(gunName){
      const gunObject = valorantDataLibrary["guns"][gunName];
      const gunInfo = valorantDataLibrary["guns"][gunName]["stats"].split('\t');
      const x = [{ name: '**Cost**', value: gunInfo[0], inline: true },
                { name: '**Head**', value: gunInfo[1], inline: true },
                { name: '**Body**', value: gunInfo[2], inline: true },
                { name: '**Legs**', value: gunInfo[3], inline: true },
                { name: '**Dropoff Distance**', value: gunInfo[4], inline: true },
                { name: '**Fire Rate**', value: gunInfo[5], inline: true },
                { name: '**Run Speed**', value: gunInfo[6], inline: true },
                { name: '**Reload Speed**', value: gunInfo[7], inline: true },
                { name: '**Magazine**', value: gunInfo[8], inline: true }];
      
          const embedMessage = new EmbedBuilder()
          .setTitle(gunName)
          .setDescription(gunObject["type"])
          .setThumbnail(gunObject["image"])
          .addFields(
              x
          )

          await interaction.reply({ embeds: [embedMessage] });
          return;
    } else if(randomStrat) {
      const stratObject = valorantDataLibrary["strats"];
      const randomSite = stratObject["sites"][Math.floor(Math.random() * stratObject["sites"].length)];
      const randomBuy = stratObject["buys"][Math.floor(Math.random() * stratObject["buys"].length)];
      const randomPlay = stratObject["plays"][Math.floor(Math.random() * stratObject["plays"].length)];

      await interaction.reply(`\`THIS ROUND,  \`**${randomBuy}**\`, GO \`**${randomSite}**\`, AND \`**${randomPlay}**`);
    }
  }
}