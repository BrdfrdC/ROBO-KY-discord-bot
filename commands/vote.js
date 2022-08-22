module.exports = {
    name: 'vote',
    description: 'starts a vote',
    execute(message, args){
        if(!args[0]){
            message.channel.send('\`PLEASE PROVIDE INFORMATION ABOUT WHAT YOU WOULD LIKE PEOPLE TO VOTE ABOUT\`');
            return;
        }
        let msgArgs = args.slice(0).join(" ");
        message.channel.send(`\`${msgArgs}\``).then(messageReaction => {
            messageReaction.react("✅");
            messageReaction.react("❌");
        });
    }
}