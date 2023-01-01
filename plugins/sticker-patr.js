import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn }) => {
  let res = `https://api.lolhuman.xyz/api/sticker/patrick?apikey=${global.lolkey}`
  let stiker = await sticker(null, res, global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
handler.help = ['spatrick']
handler.tags = ['sticker']
handler.command = /^(spat(trick)?)$/i
handler.limit = true

export default handler