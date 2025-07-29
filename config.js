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
global.sessionid = process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"mF4S6fEysQmGHrG9cjtuiMNZX3bTn4ovnSV2zSWA0V8="},"public":{"type":"Buffer","data":"fy5Bly/jxkFz6h0zfDB4hX1cGYzpu053z8jHkYOknnU="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"sGDiC9/XCEpCwqIVfvdDGNr9GSzjRPz64B2y4w27SnM="},"public":{"type":"Buffer","data":"GDltsjnhsFZDvjmEyj3arA3zdqnzs8IUvXzoXgGKkjI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"qEG5SnWkHFtWiM9lKeFl1gUSHz5cexSiGAr0bfHC6Ew="},"public":{"type":"Buffer","data":"v6sBYbe+A/H3mhrwFQhCV2SCd1dBvT18umOcQt5yfAE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"yI1KJZYozoaSfOIu5RNAUOxWM/9glN9kVBjnrlUEb34="},"public":{"type":"Buffer","data":"UEPLnkpN8dgo01ngkvonsyl/shHhqfUu6qVOzW7AklE="}},"signature":{"type":"Buffer","data":"9L/oUd/NUd5B8pWNN9Fqgvmz6Xm6rFrXExocoTT1z5wWn08tuBcA4ZP1+mwf9J2k5QEt9HfpOkEBYbi6GszzgA=="},"keyId":1},"registrationId":8,"advSecretKey":"Vb9DU92jREkxtonS5s0cGrxLVIOVsN7kAfi6yTQyX78=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"OBpwAesuQ5K_KDtMUBDKtA","phoneId":"9c37d78c-d7fb-4b78-9089-21a2c652ef94","identityId":{"type":"Buffer","data":"VkbpRH1KD3lypa+LXWpb1PZVrZI="},"registered":true,"backupToken":{"type":"Buffer","data":"RRis2Vcz/lJdkGpwsN8hCCIqjNE="},"registration":{},"pairingCode":"CYRILDEV","me":{"id":"242067266522:35@s.whatsapp.net","name":"꧁𖤍࿐ ꧁༊꧂ 𒈒 𝗟𝗢𝗥𝗗 𒆜𝕽𝕰𝕬𝕻𝕰𝕽  𒆜 𝑫𝑬𝑽𝑰𝑳_ᴏꜰ_𝑯𝒆𝒍𝒍 𒆜 𝑴𝒂𝒓𝒏𝒆𝒙𝒖𝒔 𒈒 ꧁༊꧂","lid":"219679423500525:35@lid"},"account":{"details":"CNu2m9kFEIOZpMQGGCUgACgA","accountSignatureKey":"3/JF9f7Z8AtUraWJer+w7suKg5y7SF8v4IvONYI2Dms=","accountSignature":"E8ZZOahaazEPmshUVQZPJwRV+O5PSj2+iOjiHzL5PBX0S7NO2GSqMnDF/lwgOUnq2eoHJs5Hg/Uk0cgZN0MCCg==","deviceSignature":"BXwzgnWemtYLVQiMxry/LxKuC41UFxwrDArQr5BrEvieTG2KNohv1Su5kxWWAoapAttqseABqT62oY0xyzirgw=="},"signalIdentities":[{"identifier":{"name":"242067266522:35@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bd/yRfX+2fALVK2liXq/sO7LioOcu0hfL+CLzjWCNg5r"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAIIEg=="},"lastAccountSyncTimestamp":1753812108,"lastPropHash":"2P1Yhf","preKeys":{"private":{"type":"Buffer","data":"SKGQ4RJXYEnlqL89sbp3sml7FCIadyipmkgGC6OCZGI="},"public":{"type":"Buffer","data":"ScjEsAf0cnPhuUMr2G0YJqtlW0qEM8s3f05x5/o18Ck="}},"senderKeys":{},"timestamp":"2025-07-29T18:01:53.806Z"}";

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
