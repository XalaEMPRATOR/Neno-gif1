const discord = require('discord.js');
const fs = require('fs');
const http = require('http');
const express = require('express');
const config = require('./config.json');
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
  
 client.user.setActivity(`Type: n/help | Server ${client.guilds.cache.size},Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)},`, { type: "PLAYING"});
      }, (5000));

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commandgif/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./commandgif/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.on("guildCreate", guild => { let channel = client.channels.cache.get("831868105406939137"); let embed = new MessageEmbed().setColor("#FF0000") .setAuthor(client.user.username, client.user.avatarURL()) .setTitle( `✅ Join Server`) .addField(" **Server Name**", `${guild.name}`) .addField(" **Server Owner**", `${guild.owner}`) .addField(" **Server Id**", `${guild.id}`) .addField(" **Member Count**", `${guild.memberCount}`) .setFooter(`${client.user.tag}`); channel.send(embed);}); client.on("guildDelete", guild => { let channel = client.channels.cache.get("831868141582680104"); let embed = new MessageEmbed() .setColor("#FF0000") .setAuthor(client.user.username, client.user.avatarURL()) .setTitle( `❌ Left Server`) .addField(" **Server Name**", `${guild.name}`) .addField(" **Server Owner**", `${guild.owner}`) .addField(" **Server Id**", `${guild.id}`) .addField(" **Member Count**", `${guild.memberCount}`) .setFooter(`${client.user.tag}`); channel.send(embed);}); 


client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commandgif/${command}`)];
            let cmd = require(`./commandgif/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
           reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./commandgif/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commandgif/${command}`)];
            let cmd = require(`./commandgif/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};


client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === config.sahip) permlvl = 4;
    return permlvl;
};
client.login(config.token)


//------------------------ Halka Açık Random Gif Pp -----------------------//
//------------------------ Halka Açık Random Gif Pp -----------------------//
//------------------------ Halka Açık Random Gif Pp -----------------------//

client.on("userUpdate", async(Revenge, NYKS) => {
  
if(Revenge.avatarURL === NYKS.avatarURL) return;
let RevengePP = NYKS.avatarURL.split("?")[0]

const Kanal = client.channels.filter(Revenge => Revenge.name === 'random-gif' && Revenge.type === 'text').array().forEach(Nucceteere => {
if (RevengePP.endsWith('gif')) {
Nucceteere.send(new Discord.Attachment(RevengePP))
}
const Kanal2 = client.channels.filter(Revenge => Revenge.name === 'random-pp' && Revenge.type === 'text').array().forEach(Revenge => {
if (!RevengePP.endsWith('gif')) {
Revenge.send(new Discord.Attachment(RevengePP))
}
})
})
})

//------------------------ Halka Açık Random Gif Pp -----------------------//
//------------------------ Halka Açık Random Gif Pp -----------------------//
//------------------------ Halka Açık Random Gif Pp -----------------------//
