import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = hwaifu.getRandom()
global.rep = {
			contextInfo: {
				forwardingScore: fsizedoc,
				//isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
                    showAdAttribution: true,
					title: 'šš¼š§šš¬š¢',
					body: 'ššš§š­ šš®š©š©š¼š«š­ šš¼š­?',
					mediaUrl: sgc,
					description: botdate,
					previewType: "PHOTO",
					thumbnail: await (await fetch(pp)).buffer(),
					sourceUrl: sgh			
				}
			}
		}
conn.sendButtonDoc(m.chat, `šššššš`, `ā® šš¼š©šš² = [083127378535]\nā® ššš§š = [08988289551]\nā® ššš°šš«š¢š = [https://saweria.co/]\n\nšš¼š­š : šš¢š¤š šš®ššš” šš¼š§šš¬š¢ šš¢š„šš”š¤šš§ šš¢š«šŗ\nšš®š¤š­š¢ šš šš°š§šš«!!\nšš­šš® šš„š¢š¤ šš¢ ššš°šš”
`, 'ššššš', '.owner', m, rep)
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}