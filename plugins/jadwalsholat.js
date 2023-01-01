import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
   if (!text) throw `Use example ${usedPrefix}${command} semarang`
   let res = await fetch(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=${global.lolkey}`)
   let jsonn = await res.json()
   let p = jsonn.result
   let cap = `${htjava} *Jadwal Sholat :* ${text} ${htjava}

◎ *Wilayah :* ${p.wilayah}
◎ *Tanggal :* ${p.tanggal}
◎ *Sahur :* ${p.sahur}
◎ *Imsak :* ${p.imsak}
◎ *Subuh :* ${p.subuh}
◎ *Terbit :* ${p.terbit}
◎ *Dhuha :* ${p.dhuha}
◎ *Dzuhur :* ${p.dzuhur}
◎ *Ashar :* ${p.ashar}
◎ *Maghrib :* ${p.maghrib}
◎ *Isya :* ${p.isya}
`
await conn.sendButtonDoc(m.chat, cap, wm, 'Back To Menu', 'menu', fkon)
}
handler.help = ['salat <daerah>']
handler.tags = ['quran']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

export default handler