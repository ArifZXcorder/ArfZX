let handler  = async (m, { conn, usedPrefix: _p }) => {
let txtprem = '❗ 𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌\n𝐇𝐀𝐑𝐀𝐏 𝐇𝐔𝐁𝐔𝐍𝐆𝐈 𝐎𝐖𝐍𝐄𝐑 𝐔𝐍𝐓𝐔𝐊 𝐌𝐄𝐌𝐁𝐄𝐋𝐈 ! 📞
if (global.db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
let info = `
     BugGc
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', ' *Bug GC* ', 'buganjay@broadcast')
}
handler.help = ['buggc']
handler.tags = ['info']
handler.command = /^(buggc)$/i

handler.group = true

export default handler