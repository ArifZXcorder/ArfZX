let handler = async (m, { conn }) => {
let caption = `––––––『 *BIODATA* 』––––––
⫹⫺ *💌 Nama* : 𝗔𝗿𝗶𝗳𝗾𝗶𝗭𝗫
⫹⫺ *✉️ Nama RL* : 𝑨𝒓𝒊𝒇
⫹⫺ *♂️ Gender* : Boys
⫹⫺ *🕉 Agama* : 𝑰𝒔𝒍𝒂𝒎
⫹⫺ *⏰ Tanggal lahir* : Private 
⫹⫺ *🎨 Umur* : 28
⫹⫺ *🧮 Kelas* : Kuliah
⫹⫺ *🧩 Hobby* : 𝑵𝒐𝒏𝒕𝒐𝒏 𝑩𝒐𝒌𝒆𝒑
⫹⫺ *💬 Sifat* : 𝐒𝗼𝐊𝐮𝐥𝐥🥶
⫹⫺ *🗺️ Tinggal* : 𝑰𝒏𝒅𝒐, 𝑱𝒂𝒘𝒂 𝑩𝒂𝒓𝒂𝒕, 𝑩𝒐𝒈𝒐𝒓

⫹⫺ *📷 ɪɴsᴛᴀɢʀᴀᴍ* : https://instagram.com/akbararifqinoufal_
⫹⫺ *🐈 ɢɪᴛʜᴜʙ:* https://github.com/arifqidzzt1234
•·––––––––––––––––––––––––––·•
`
conn.sendButtonDoc(m.chat, caption, author, 'Menu', `#menu`, fgif, adReply)
}
handler.help = ['biodata']
handler.tags = ['info']
handler.command = /^(biodata|arif|bioowner)$/i

export default handler