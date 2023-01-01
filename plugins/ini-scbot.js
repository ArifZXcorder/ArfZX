import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let tqto = `${htki} 𝐒𝐂𝐑𝐈𝐏𝐓 ${htka}

➢ ${ucapan()} Kak
➢ Name: ${name.split("@")[0]}

𝑺𝒐𝒖𝒓𝒄𝒆 𝑪𝒐𝒅𝒆 :
https://shareduit.pw/ScbotSkyV5
𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐃𝗼𝐰𝐧𝐥𝗼𝐚𝐝!!
𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐌𝐚𝗺𝐩𝐢𝐫 𝐈𝐆:
@𝐀𝐫𝐢𝐟𝐳𝐲𝐧19_
𝐆𝐂 𝐁𝗼𝐭 : 
https://chat.whatsapp.com/KS51Xw91eju8HTv5owtV1z
`
conn.sendButtonDoc(m.chat, tqto, author, '𝐌𝐄𝐍𝐔', '.menu', null, adReply)
}
handler.command = /^(sc|esce|script)$/i
export default handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}