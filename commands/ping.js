module.exports = {
    name: 'ping',
    description: 'it pings back',
    execute(message, args){
        message.channel.send('\`PONG\`');
    }
}