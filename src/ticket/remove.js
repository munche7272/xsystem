const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk');

module.exports = {
    name: "remove",
    cooldown: 5,
    aliases: [""],

    run: async(client, message, args) => {
        let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
        if (Blacklist === "on") {
            message.channel.send(new MessageEmbed()
                .setColor(client.build.colors.err)
                .setDescription(client.build.emojis.err + " **You Got Blacklisted!**"))
            return;
        }
        var prefix = await db.fetch(`prefix_${message.guild.id}`);
        if (prefix == null) prefix = client.config.bot.setting.main_prefix;
        if (!message.channel.name.startsWith("ticket-")) {
            return message.channel.send(new MessageEmbed().setColor(client.build.colors.err).setTitle(client.build.emojis.err + " **You cannot use that here!**"))
        }
        let member = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1]);
        if (!member) return message.channel.send(new MessageEmbed().setColor(client.build.colors.err).setTitle(client.build.emojis.err + " **Please Mention/Id Same One!**"));
        if (!message.channel.permissionsFor(member).has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])) {
            return message.channel.send(`WTF ?`);
        }
        message.channel.overwritePermissions((
            [{
                    id: member.id,
                    deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ]))
        message.channel.send(new MessageEmbed().setColor(client.build.colors.done).setDescription(client.build.emojis.done + ` **${member.user.tag} Successfully removed from the ticket**`));
    }
};