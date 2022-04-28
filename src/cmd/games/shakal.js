const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "shakal",
    description: "Give 5od To Your Frindes",
    cooldown: 5,
    aliases: ["5od"],

    run: async(client, message, args) => {
        let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
        if (Blacklist === "on") return message.channel.send(new MessageEmbed()
            .setColor(client.build.colors.err)
            .setDescription(client.build.emojis.err + " **You Got Blacklisted!**"));
        var prefix = await db.fetch(`prefix_${message.guild.id}`);
        if (prefix == null) prefix = client.config.bot.setting.main_prefix;
        let user = message.mentions.users.first();
        if (!user) return message.channel.send(new MessageEmbed()
            .setDescription(client.build.emojis.warn + " Please mention sameone!")
            .setColor(client.build.colors.warn));
        var x = [
"https://cdn.discordapp.com/attachments/839397084800221224/965053579780059218/20220417_025658.gif",  
          "https://cdn.discordapp.com/attachments/839397084800221224/965058460796465162/20220417_031647.gif",
          "https://cdn.discordapp.com/attachments/839397084800221224/965060748462149683/20220417_032556.gif"
        ];

        var x3 = Math.floor(Math.random() * x.length);

        const embed = new MessageEmbed()
            .setColor("#fffff")
            .setTitle(`>>> ${message.author.username} by8wlk 5oood ya ${user.username}`)
            .setImage(`${x[x3]}`);
        message.channel.send(embed);
    }
};