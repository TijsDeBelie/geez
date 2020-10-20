const memes = require("./data/memes.js").memes;

const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

const prefix = "!"


client.on("message", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    command = message.content.toLowerCase();
    command_key = command.substring(prefix.length);

    if (command_key === "hello") {
        message.reply("Hey there!");
    }
    if (command_key === "meme") {
        message.reply("Here's your meme boi!", { files: [memes[Math.floor(Math.random() * (memes.length))]] });
    }

})

client.login(config.BOT_TOKEN);