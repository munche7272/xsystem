const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

const Sra7a = [
    "صراحه  |  صوتك حلو؟",
    "صراحه  |  إتعاملت مع ناس ب وشين قبل كدا؟",
    "صراحه  |  أنا شخص ضعيف عندما؟",
    "صراحه  |  شايف إن الكذب حاجه ضروريه؟",
    "صراحه  |  حاسس ب وحده رغم الناس كتير حواليك؟",
    "صراحه  |  أشجع حاجه في حياتك؟",
    'صراحه  |  شايف إن صح إنك الإقناع في فكره حتي لو غلط" تتفق؟',
    "صراحه  |  إزاي بتتعامل مع الناس اللي بتفهمك غلط؟",
    "صراحه  |  التغير عادي لما يكون الشخص اللي بيحبه..؟",
    "صراحه  |  المواقف الصعبة بتضعفك ولا بتقويك؟",
    "صراحه  |  نظرة و يفسد الصداقة؟",
    "صراحه  |  ‏‏هتعمل اي يبرو لو حد جهه و شتمك؟",
    "صراحه  |  شخص معاك ع مُره قبل الحلوه؟",
    "صراحه  |  بتحب تظهر حُبك لشخص ولا شايف إنو ضعف؟",
    "صراحه  |  بتاخد بالنصيحه ولا بتعمل اللي في دماغك؟",
    "صراحه  |  عايز الناس تعرفك ب اي؟",
    "صراحه  |  تبيع المجره عشان؟",
    "صراحه  |  أحيانا بحس إن الناس.. ، كمل؟",
    "صراحه  |  عايز تنام مع مين النهارده؟",
    "صراحه  |  صُدفة حياتك هي..؟",
    'صراحه  |  الكُره العظيم دايماً بيجي بعد حُب أعظم " تتفق؟',
    "صراحه  |  صفة بتحبها في نفسك؟",
    'صراحه  |  ‏الفقر فقر عقول مش الجيوب " ، تتفق؟',
    "صراحه  |  بتصلي فروضك الخمس كلها؟",
    "صراحه  |  ‏بتجامل الناس؟",
    "صراحه  |  أشجع حاجه عمتلها في حياتك؟",
    "صراحه  |  ناوي تعمل اي النهارده؟",
    "صراحه  |  إحساسك لما تشوف المطر؟",
    "صراحه  |  بتغير علي حد؟",
    "صراحه  |  أكتر حاجه ندمان عليها؟",
    "صراحه  |  نفسك تسافر دولة اي؟",
    "صراحه  |  أخر مره عيطت؟",
    "صراحه  |  قيم حظك من 10؟",
    "صراحه  |  شايف إن حظك وحش؟",
    "صراحه  |  شـخــص عايز تنتقم منو؟",
    "صراحه  |  كلمة عايز تسمعها كل يوم؟",
    "صراحه  |  بتتقن شُغلك ولا كسول؟",
    "صراحه  |  إنتحلت شخصيه حد قبل كدا عشان تعمل حوار؟",
    "صراحه  | اي أخر مشلكه كبيره حصلت بسببها خسرت كتير؟",
    "صراحه  |  أسوء خبر سمعتو في حياتك؟",
    "‏صراحه | جرحت شخص بتحبو قبل كدا؟",
    "صراحه  |  اي العاده اللي عايز تبطلها؟",
    "‏صراحه | بتحب عيلتك ولا بتكرههم؟",
    "‏صراحه  |  مين الشخص اللي بيجي في قلبك بعد الله – سبحانه وتعالى - ورسوله الكريم – صلى الله عليه وسلم؟",
    "‏صراحه  |  إتكسفت من نفسك قبل كدا؟",
    "‏صراحه  |  الحلم اللي معرفتش تحققو؟",
    "‏صراحه  |  مين اللي بتحلم بيه كل ليله؟",
    "‏صراحه  |  إتعرضت قبل كدا لموقف مُحرج خلاك تكرهه صاحبهُ؟",
    "‏صراحه  |  عيطت قبل كدا عشان حد؟",
    "‏صراحه  |  تختار حبيبك ولا صاحبك؟",
    "‏صراحه  | حياتك حلوه ولا مخبطه؟",
    "صراحه  |  أجمل سنه عيشتها؟",
    "‏صراحه  |  سنك الحقيقي؟",
    "‏صراحه  |  حياتك بقت أحسن ب كتير..حسيت فعلاً بالتغيير؟",
    "صراحه  |  اي هيا أمنيتك؟‏",
    "صراحه | نفسك فـ ايه؟",
    "صراحه | مرتبط ولا منفصل؟",
    "صراحه | شكلك قمر ولا قمرين؟",
    "صراحه | مادتك الدارسيه اللي بتحبها؟",
    "صراحه | بتحب مدرستك؟",
    "صراحه | نفسك اي اللي يحصل؟",
    "صراحه | الرابر المفضل ليك؟",
    "صراحه | منشن شخص صبح او مسي عليه؟",
    "صراحه | فطرت قبل كدا وانت صايم في الشهر الكريم؟",
    "صراحه | أكبر كذبه كذبت بيها علي أهلك؟",
    "صراحه | مكيش ولا مديون ل طوب الأرض؟",
    "صراحه | بطبعك نرجسي ولا؟",
    "صراحه | شخص محوراتي ولا سالك؟",
    "صراحه | يومك النهارده كان عامل ازاي؟",
    "صراحه | في ضهرك يصحبي لحد ما أنهار.. تحب تقولها ل مين؟",
    "صراحه | بتتعلم من أخطاء الماضي ولا؟",
    "صراحه | دخنت قبل كدا؟",
    "صراحه | زوغت من درس قبل كدا؟",
    "صراحه | هتقضي العيد فين يبرو؟",
    "صراحه | عندك حُب من طرف واحد؟"
];

module.exports = {
    name: "sara7a",
    description: "Say It Be Honest",
    cooldown: 5,
    aliases: ["sare7"],

    run: async(client, message, args) => {
        let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
        if (Blacklist === "on") return message.channel.send(new MessageEmbed()
            .setColor(client.build.colors.err)
            .setDescription(client.build.emojis.err + " **You Got Blacklisted!**"));
        var prefix = await db.fetch(`prefix_${message.guild.id}`);
        if (prefix == null) prefix = client.config.bot.setting.main_prefix;
        var sara7a = new MessageEmbed()
            .addField(Sra7a[Math.floor(Math.random() * Sra7a.length)], '_ _')
            .setThumbnail("https://cdn.discordapp.com/attachments/627225894955646988/963777570090917918/unknown.png")
        message.channel.send(sara7a);
    }
};