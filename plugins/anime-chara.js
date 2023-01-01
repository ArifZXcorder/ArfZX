import { chara } from 'hxz-api'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

    if (!text) throw `Use example ${usedPrefix}${command} Miku`
    let result = await chara(text)
let gambar = await(await fetch(result.getRandom())).buffer()
await conn.sendFile(m.chat, gambar, 'chara.jpg', `Character ${text}`, m, { quoted : fkon })
}
handler.help = ['chara']
handler.tags = ['anime']
handler.command = /^(chara)$/i

export default handler