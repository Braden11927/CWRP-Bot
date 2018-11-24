const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Online!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.channel.send('Pong.');
    }
    else if (message.content === `beep`) {
        message.channel.send('Boop.');
    }
});

client.login("NTE1NzI3MDk1MjIxOTc3MDg4.DtpjIA.y1WzChEEwXFcNdgE-r8GBpdI3AY");