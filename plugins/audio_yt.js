/* Copyright (C) 2021 RAMIYA-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - RAMIYA
*/

const amazone = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('amazone');
const BLang = Language.getString('scrapers');
const YTV_DESC = "Youtube Audio Downloader V2."
const YT_NEED = "🌀 *Enter Youtube URL* \nExample:-\n _.audio https://www.youtube.com/watch?v=nYQZ0uXWbP4_"
const DWLOAD_AUD = "*🎭 Downloading Your Audio...*"
const YTV_UP = "*🚀 Uploading Your Audio...*"
const NO_RESULT = "🌀 *Can't Find Anything...*"


if (Config.WORKTYPE == 'private') {

    amazone.addCommand({ pattern: 'audio ?(.*)', fromMe: true, desc: YTV_DESC,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_AUD,MessageType.text);
        await axios
          .get(`https://api.zeks.me/api/ytmp3/2?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&url=${link}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const audioBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: false});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    );
}

else if (Config.WORKTYPE == 'public') {
    amazone.addCommand({ pattern: 'audio ?(.*)', fromMe: true, desc: YTV_DESC,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_AUD,MessageType.text);
        await axios
          .get(`https://api.zeks.me/api/ytmp3/2?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&url=${link}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const audioBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: false});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    );
	
	amazone.addCommand({ pattern: 'audio ?(.*)', fromMe: false, desc: YTV_DESC,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_AUD,MessageType.text);
        await axios
          .get(`https://api.zeks.me/api/ytmp3/2?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&url=${link}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const audioBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: false});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    );
}
