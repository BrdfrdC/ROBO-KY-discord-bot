module.exports = {
    name: 'roll',
    description: 'rolls dice/die',
    execute(message, args){
        const diceAmount = parseInt(args[0]);
        const temp = diceAmount.toString();
        const diceSize = parseInt(args[0].replace('d', '').replace('D', '').replace(temp,''));
        let result = 0;

        for (let i = 0; i < diceAmount; i++) {
            result += Math.floor(Math.random() * diceSize + 1);
        }
        
        message.channel.send(`\`${args[0]} → ${result}\``);
    }
}