require('dotenv').config();


// Helper function to convert "true"/"false" strings to real booleans
const toBool = (value) => value === "true";

// Owner & Bot Details
global.owner = process.env.OWNER_NUMBER || "242067266522";
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "꧁𖤍࿐ ꧁༊꧂ 𒈒 𝗟𝗢𝗥𝗗 𒆜𝕽𝕰𝕬𝕻𝕰𝕽  𒆜 𝑫𝑬𝑽𝑰𝑳_ᴏꜰ_𝑯𝒆𝒍𝒍 𒆜 𝑴𝒂𝒓𝒏𝒆𝒙𝒖𝒔 𒈒 ꧁༊꧂";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";
global.sessionid = process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"AKkkqTqfTNOlocxiguiAu/xTQJH2lPzOrJ2AoMceWWk="},"public":{"type":"Buffer","data":"mWU5vIM/WgwOsBFCi7dgCdtkimBEHojDqGdWZKwkjEQ="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"AE3Hl5AaROylfPjy+q5sdlI0YICY7ydRLy9aKarLBFg="},"public":{"type":"Buffer","data":"DssIK3hEY1r26S/ezy3OeXO8b07DWsVOYkqK+GBxMSo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"QGwqTgwamWm4iOJbpcPm0SCbUE5oGR10euV9amnbpE4="},"public":{"type":"Buffer","data":"GzvvYPt9lp8KVSJjN7x0cA92R+JUxWWwvD1sYkmNSQs="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"uFnHzHvvtioaQPSXWz/wsXe/r0oh+ViAi4ts13ey2nc="},"public":{"type":"Buffer","data":"2uQxW7uqDiNhMjznamFNncZ8XjYE7iM4tUwBKWKzHQE="}},"signature":{"type":"Buffer","data":"6FlrQNr/+aU97vBXAnkzJ66beN6AVlszypRYoH3yVWEtBNVSQecI//xz64cdmuXdMTuKHIaIt5xX+qwkVQJeDw=="},"keyId":1},"registrationId":214,"advSecretKey":"ISVuzXdQhMjw0h3UNv5DrC5E/M5LBh6bA5w48sBVLjg=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"o99U_L42RIicrFgOqPlsAw","phoneId":"9359837c-9f5a-4148-98f4-6ff3318dc175","identityId":{"type":"Buffer","data":"o11vHdSnCDuotzMPfrCPYraxwhA="},"registered":true,"backupToken":{"type":"Buffer","data":"iVebiA6bK0qPppq7vwU0ypZkHzY="},"registration":{},"pairingCode":"CYRILDEV","me":{"id":"242067266522:36@s.whatsapp.net","name":"꧁𖤍࿐ ꧁༊꧂ 𒈒 𝗟𝗢𝗥𝗗 𒆜𝕽𝕰𝕬𝕻𝕰𝕽  𒆜 𝑫𝑬𝑽𝑰𝑳_ᴏꜰ_𝑯𝒆𝒍𝒍 𒆜 𝑴𝒂𝒓𝒏𝒆𝒙𝒖𝒔 𒈒 ꧁༊꧂","lid":"219679423500525:36@lid"},"account":{"details":"CNu2m9kFEJa3pMQGGCYgACgA","accountSignatureKey":"3/JF9f7Z8AtUraWJer+w7suKg5y7SF8v4IvONYI2Dms=","accountSignature":"7440qTUmsOcV2tv3K+WGaLm5W+CXrHFx7qiXclDzDWb3Rubmh79FNogIk3Qmn6rw8w8Ev8zmquB3A/mUR9KgAw==","deviceSignature":"iExs9i/JG2MxImsf+WqT4N5v8vt6YMiT32NkonngpC6fB8iLpvsx+1meohBbIVxAD0yPn7GC8TObNK0SI4KPDA=="},"signalIdentities":[{"identifier":{"name":"242067266522:36@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bd/yRfX+2fALVK2liXq/sO7LioOcu0hfL+CLzjWCNg5r"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAIIEg=="},"lastAccountSyncTimestamp":1753815968,"lastPropHash":"2P1Yhf","preKeys":{"private":{"type":"Buffer","data":"iPcwhpFEZk13qpZ4UtrCzjUJlpPQEdgvZwSuzbbhEUg="},"public":{"type":"Buffer","data":"wos9DCJD3zAXbjUkx/NLRfaQmYo6MyiPEOMeZDe67Ww="}},"senderKeys":[{"senderKeyId":1332231700,"senderChainKey":{"iteration":25,"seed":"vR8+TYpNsPCi7b2Zx1ZsXJALVUpf4TFu7E/XXaj433U="},"senderSigningKey":{"public":"BcpZEW6OGN9vyqmE4h892jjKFiNO3LfsI90va6JSTqV3"}}],"timestamp":"2025-07-29T19:06:15.282Z"}"
// Auto-Features
global.autoTyping = toBool(process.env.AUTO_TYPING);
global.autoRecord = toBool(process.env.AUTO_RECORD);
global.autoViewStatus = toBool(process.env.AUTO_VIEW_STATUS);
global.AUTO_STATUS_REACT = toBool(process.env.AUTO_STATUS_REACT);
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";
global.LEVELUP = toBool(process.env.LEVELUP);
global.ANTIVIEWONCE = toBool(process.env.ANTIVIEWONCE);

global.public = process.env.PUBLIC === 'true';
// Group & Security Settings

global.ANTIDELETE = toBool(process.env.ANTIDELETE);
global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.WELCOME = toBool(process.env.WELCOME);

// Prefix & Other Settings
global.prefix = process.env.PREFIX || '.';
global.autobio = toBool(process.env.AUTO_BIO);
global.ANTI_TEMU = toBool(process.env.ANTI_TEMU);
global.ANTI_TAG = toBool(process.env.ANTI_TAG);
global.ANTICALL = toBool(process.env.ANTICALL);
global.antilink = toBool(process.env.ANTILINK);
global.antilinkkick = toBool(process.env.ANTILINK_KICK);
global.antilinkwarn = toBool(process.env.ANTILINK_WARN);

// Messages
global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
