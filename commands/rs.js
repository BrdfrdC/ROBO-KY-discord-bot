const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rs')
        .setDescription('RANDOMLY SELECTS A CHARACTER')
        .addStringOption(option =>
            option.setName('game_name')
                .setDescription('THE GAME YOU WANT TO SELECT FROM')
                .setRequired(true)
                .setAutocomplete(true)),
    async autocomplete(interaction, client){
        const focusedValue = interaction.options.getFocused();
		const choices = ["Valorant", "Guilty Gear Strive", "League of Legends"];
		const filtered = choices.filter(choice => choice.startsWith(focusedValue));
		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
    },
    async execute(interaction, client){
        let characters = [];
        let random = 0;
        const gameName = interaction.options.getString('game_name');
        switch (gameName){
            case `Valorant`:
                characters = ["Brimstone", "Phoenix", "Sage", "Sova", "Viper", "Cypher",
                "Reyna", "Killjoy", "Breach", "Omen", "Jett", "Raze", "Skye", "Yoru", "Astra",
                "KAY/O", "Chamber", "Neon", "Fade"];
                random = Math.floor(Math.random() * characters.length);
                interaction.reply(`\`YOUR RANDOMLY SELECTED CHARACTER IS: ${characters[random]}\``);
                break;
            case `Guilty Gear Strive`:
                characters = ["Sol Badguy", "Ky Kiske", "May", "Axl Low", "Chipp Zanuff", "Potemkin",
                "ZATO=1", "Ramlethal Valentine", "Leo Whitefang", "Nagoriyuki", "Giovanna",
                "Anji Mito", "I-No", "Goldlewis Dickinson", "Jack-O' Valentine", "Happy Chaos",
                "Baiken", "Testament", "Bridget"];
                random = Math.floor(Math.random() * characters.length);
                interaction.reply(`\`YOUR RANDOMLY SELECTED CHARACTER IS: ${characters[random]}\``);
                break;
            case 'League of Legends':
                characters = ['Aatrox','Ahri','Akali','Akshan','Alistar','Amumu','Anivia','Annie',
                'Aphelios','Ashe','Aurelion Sol','Azir','Bard','Bel’Veth','Blitzcrank','Brand','Braum',
                'Caitlyn','Camille','Cassiopeia','Cho’Gath','Corki','Darius','Diana','Dr. Mundo',
                'Draven','Ekko','Elise','Evelynn','Ezreal','Fiddlesticks','Fiora','Fizz','Galio',
                'Gangplank','Garen','Gnar','Gragas','Graves','Gwen','Hecarim','Heimerdinger','Illaoi',
                'Irelia','Ivern','Janna','Jarvan IV','Jax','Jayce','Jhin','Jinx','Kai’Sa','Kalista',
                'Karma','Karthus','Kassadin','Katarina','Kayle','Kayn','Kennen','Kha’Zix','Kindred',
                'Kled','Kog’Maw','LeBlanc','Lee Sin','Leona','Lillia','Lissandra','Lucian','Lulu',
                'Lux','Malphite','Malzahar','Maokai','Master Yi','Miss Fortune','Mordekaiser',
                'Morgana','Nami','Nasus','Nautilus','Neeko','Nidalee','Nocturne','Nunu & Willump',
                'Olaf','Orianna','Ornn','Pantheon','Poppy','Pyke','Qiyana','Quinn','Rakan','Rammus',
                'Rek’Sai','Rell','Renata Glasc','Renekton','Rengar','Riven','Rumble','Ryze','Samira',
                'Sejuani','Senna','Seraphine','Sett','Shaco','Shen','Shyvana','Singed','Sion',
                'Sivir','Skarner','Sona','Soraka','Swain','Sylas','Syndra','Tahm Kench','Taliyah',
                'Talon','Taric','Teemo','Thresh','Tristana','Trundle','Tryndamere','Twisted Fate',
                'Twitch','Udyr','Urgot','Varus','Vayne','Veigar','Vel’Koz','Vex','Vi','Viego',
                'Viktor','Vladimir','Volibear','Warwick','Wukong','Xayah','Xerath','Xin Zhao','Yasuo'
                ,'Yone','Yorick','Yuumi','Zac','Zed','Zeri','Ziggs','Zilean','Zoe','Zyra',];
                random = Math.floor(Math.random() * characters.length);
                interaction.reply(`\`YOUR RANDOMLY SELECTED CHARACTER IS: ${characters[random]}\``);
                break;
            default:
                interaction.reply(`\`THAT'S NOT A GAME!\``);
                break;
        }
    }
}