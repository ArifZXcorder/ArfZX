import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {

   if (!text) return m.reply(`Masuk Query!!\n*Contoh :* ${usedPrefix + command} Melukis Senja`)
   let res = await fetch(`https://api.lolhuman.xyz/api/jooxplay?apikey=${global.lolkey}&query=${text}`)
   let res2 = await res.json()
   let p = res2.result
   let cap = `*Joox Play*

◎ *Singer :* ${p.info.singer}
◎ *Song :* ${p.info.song}
◎ *Album :* ${p.info.album}
◎ *Date :* ${p.info.date}
◎ *Duration :* ${p.info.duration}
`
await conn.sendFile(m.chat, p.image, '', cap, m)
awiat conn.sendFile(m.chat, p.audio.link, '', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['jooxplay']
handler.tags = ['downloader']
handler.command = /^jooxp(lay)$/i

export default handler