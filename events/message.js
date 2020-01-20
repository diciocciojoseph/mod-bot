
// Message File should not be used to recognize !commands, will get too messy
// Instead use a seperate commands directory and require them for the message event

const kick = require('../commands/kick')

module.exports = (client, message) => {
    if(message.content.startsWith('!kick')){
        return kick(message)
    }
}