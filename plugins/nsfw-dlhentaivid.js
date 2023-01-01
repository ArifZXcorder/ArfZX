import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'url salah'
	m.reply(wait)
	await conn.sendButtonVid(m.chat, text, 'Nih Vid Hentai ><', wm, 'menu', '.menu', m)
}
handler.command = /^(hvid(io)?)$/i

handler.limit = true

export default handler