const Discord = require('disocrd.js');
const client = new.Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping')
  {
    message.reply('pong');
  }
});

// THIS MUST BE THAT WAY
client.login(process..env.BOT_TOKEN);
