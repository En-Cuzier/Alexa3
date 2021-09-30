/*Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'im', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Bang!! Bang!! My Bot is Neotro🎭🙇*");

}));
