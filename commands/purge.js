module.exports = {
    name: 'purge',
    description: 'Gives a warning before a purge occurs',
    async execute(message, args, client){
        const channel = '879015268712587305';
        const purged = message.guild.roles.cache.find(role => role.name === "Purged");
        const inactive = message.guild.roles.cache.find(role => role.name === "Inactive");
        const red = '❤️';
        const blue = '💙';
        const purple = '💜';
        const yellow = '💛';
        message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(purged));

        message.delete();
        client.channels.cache.get(channel).send('<@everyone>' + `\`\`\`IT'S TIME FOR ANOTHER PURGE EXCEPT THIS TIME I'M THE ONE HOSTING IT!
SINCE I'M DOING IT THIS TIME IT'S WORKING A LITTLE DIFFERENTLY:\n
EVERYONE HAS BEEN GIVEN THE PURGED ROLE. AFTER 3 DAYS, EVERYONE WITH THE PURGED ROLE WILL BE KICKED.
HOWEVER LIKE BEFORE, YOU CAN REACT TO THIS MESSAGE TO STAY!\n
${red}: ACTIVE (REMOVES PURGED ROLE)
${blue}: SEMI-ACTIVE (REMOVES PURGED ROLE, BUT BLUE!)
${purple}: INACTIVE, BUT WANT TO STAY (REPLACES PURGED ROLE WITH INACTIVE ROLE)
${yellow}: INACTIVE, PLEASE REMOVE ME (PURGED ROLE STAYS)\n
THE PURGE WILL OCCUR 3 DAYS FROM TODAY: August 23 2022
PLEASE ONLY REPLY WITH ONE REACTION. I AM UNABLE TO DISCRIMINATE.\`\`\``).then(messageReaction => {
            messageReaction.react(red);
            messageReaction.react(blue);
            messageReaction.react(purple);
            messageReaction.react(yellow);
        });
        
        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(reaction.message.channel.id == channel){
                if (reaction.emoji.name === red || reaction.emoji.name === blue){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purged);
                }
                if (reaction.emoji.name === purple){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purged);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(inactive);
                }
                if (reaction.emoji.name === yellow){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purged);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(reaction.message.channel.id == channel){
                if (reaction.emoji.name === red || reaction.emoji.name === blue){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purged);
                }
                if (reaction.emoji.name === purple){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purged);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(inactive);
                }
            } else {
                return;
            }
        });

    }
}