let { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, command, args, text}) => {
await conn.relayMessage(m.chat, { pollVoteMessage: proto.PollVoteMessage({
selectedOptions: [{},{},{}]
}) }, {})
  }
handler.command = ['puki']
export default handler