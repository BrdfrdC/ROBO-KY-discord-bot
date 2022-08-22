module.exports = {
    name: 'help',
    description: 'provides help',
    execute(message, args){
        message.channel.send('\```HERE ARE THE LIST OF MY COMMANDS:\n\n' + 
        'rs: RANDOMLY SELECTS A CHARACTER FOR A GAME. SUPPORTED GAMES ARE: Valorant, Strive, LoL\n' +
        'roll: ROLLS A DIE/DICE USE THE FORMAT #d#\n' +
        'frames: GETS FRAME DATA FOR VIRGINS\n' +
        'I PROMISE I WILL BE PROGRAMMED WITH MORE IN THE FUTURE\```');
    }
}