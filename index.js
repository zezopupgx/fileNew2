const { Client, Intents, Collection } = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ]
});

client.commands = new Collection();
client.events = new Collection();

['commands', 'events'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})
client.on('ready', () => {
    console.log('the bot is ready')
})
client.on('ready', () => {
  console.log(`🤠 : ${client.user.username}`);
  client.user.setStatus('dnd');///dnd/online/idle
  let status = [`${prefix}help`];
  setInterval(()=>{
  client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})

client.login(token);