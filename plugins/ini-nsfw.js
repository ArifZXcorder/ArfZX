import axios from "axios"
import fetch from 'node-fetch'

// Enable/Disable
let handler = async (m, {command, conn}) => {
if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButtonDoc(m.chat, '𝐍𝐒𝐅𝐖 𝐆𝐀 𝐀𝐊𝐓𝐈𝐅!!', botdate, '𝐄𝐍𝐀𝐁𝐋𝐄', '.on nsfw', m, adReply)
if (command == 'nsfwloli') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/wallpaper/nsfwloli?apikey=apirey`)
conn.sendButton(m.chat, `Nihh ${command}`.trim(), author, haha.data, [['🔄 Next 🔄', `/${command}`]], fkon)}
if (command == 'hentai') {
let p = 'https://zenzapis.xyz/api/morensfw/hentai?apikey=2a840e963e'
await conn.sendButton(m.chat, `Random Picture : ${command}`, author, p, [['Next', `/${command}`]], fkon)}
}
handler.command =  handler.help = ['nsfwloli', 'hentai']
handler.tags = ['nsfw']
export default  handler