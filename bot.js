const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

const prefix = "!"

/*
API : http://urlme.me/<image_name>/<top_text>/<bottom_text>.jpg
COMMAND : !meme [image_name] [top_text] [bottom_text]
*/

const API = { end_point: "http://urlme.me/" };

client.on("message", (message) => {

    /*bot presence/activity*/

    client.user.setActivity("!help", ({ type: "LISTENING" }));
    console.log(`${client.user.username} is up and running!`);

    /*bot command controls*/

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    command = message.content.substring(prefix.length);

    //!hello
    if (command === "hello") {
        message.reply("Hey there! Want to make some dank memes?");
    }

    //!help
    if (command === "help") {
        message.reply("Hey you want me to help you right?\n\n So, you can make or generate own your memes by commanding me :\n• `!meme [image_name] [top_text] [bottom_text]`\n\nIsn't it fun 🤩 ! Here's an example for you\n`!meme [look] [i am] [watching you]`", {
            files: [
                "http://urlme.me/look/i_am/watching_you.jpg"
            ]
        });
    }

    //!meme [image_name][top_text][bottom_text]
    if (command.startsWith("meme") && command.split(" ").length >= 3) {

        const image_name = command.substring(command.indexOf("[") + 1, command.indexOf("]"));
        const top_text = command.substring(command.indexOf("]") + 3, command.lastIndexOf("[") - 2);
        const bottom_text = command.substring(command.lastIndexOf("[") + 1, command.lastIndexOf("]"));

        message.reply("Here's your meme boi!", {
            files: [
                API.end_point + image_name + "/" + top_text + "/" + bottom_text + ".jpg"
            ]
        });
    }

})

client.login(config.BOT_TOKEN);