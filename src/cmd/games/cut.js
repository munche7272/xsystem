const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

var cuttweet = [
    "كت تويت ‏| تخيل لو انت بترسم حاجه هتكون حقيقه..ف هترسم اي؟",
    "كت تويت | أكتر حاجه بتسكت الطفل برأيك؟",
    "كت تويت | الحرية لـ ... ؟",
    "كت تويت | قناة الكرتون المفضلة في طفولتك؟",
    "كت تويت ‏| كلمة للصُداع؟",
    "كت تويت ‏| عامل اي؟",
    "كت تويت | موقف عملته مع شخص و لحد دلوقتي فاكرك بيه؟",
    "كت تويت ‏| مين يكسب , الحب ولا الكبرياء؟",
    "كت تويت | شايف نفسك فين بعد 10 سنين ؟",
    "كت تويت ‏| أغرب أو أجمل إسم بنت سمعتو؟",
    "‏كت تويت | عمرك شيلت مصيبة عن شخص برغبتك ؟",
    "كت تويت | أكتر سؤال إتسألك؟",
    "‏كت تويت | اي الحاجه اللي بتخوفك؟",
    "‏كت تويت | اي اللي بيبوظ الصداقه؟",
    "‏كت تويت | شخص مُستحيل تقولو لا ؟",
    "‏كت تويت | كام مره خسرت شخص بتحبه؟.",
    "‏كت تويت | ازاي بتتعامل مع الناس السلبيين؟",
    "‏كت تويت | كلمة بتحسسك بالكسوف لما تسمعها؟",
    "‏كت تويت | جسمك اكبر من عٌمرك ولا العكسّ ؟!",
    "‏كت تويت |أقوى كدبة صدقتها ؟",
    "‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟",
    "كت تويت | ضحيت قبل كدا عشان شخص حبيته؟",
    "‏كت تويت | أكتر أبلكيشن بتستخدمه الفتره دي؟",
    "‏كت تويت | ‏اي أكتر حاجه بترضيك مهما زعلت؟",
    "‏كت تويت | محتاج اي عشان تكون مبسوط؟",
    "‏كت تويت | محتاج اي دلوقتي؟",
    "‏كت تويت | حسيت إنك عملت ذنب وانت صايم؟",
    "‏كت تويت | برأيك سبب إن الطفل يقعد فترات طويله في غرفته؟",
    "كت تويت | هتعمل اي يوحش..لو قولتلك هتلعب معايا كيبول العدويه؟"
];

module.exports = {
    name: "cut",
    description: "The Daily Questions",
    cooldown: 5,
    aliases: ["كت"],

    run: async(client, message, args) => {
        let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
        if (Blacklist === "on") return message.channel.send(new MessageEmbed()
            .setColor(client.build.colors.err)
            .setDescription(client.build.emojis.err + " **You Got Blacklisted!**"));
        var prefix = await db.fetch(`prefix_${message.guild.id}`);
        if (prefix == null) prefix = client.config.bot.setting.main_prefix;
        var cut = new MessageEmbed()
            .setThumbnail(message.author.avatarURL({ dynamic: true }))
            .addField("كت تويت", `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
            .setColor(client.build.colors.done)

        message.channel.send(cut).catch(err => {
            console.log()
        })
    }
};