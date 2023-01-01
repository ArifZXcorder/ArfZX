import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
let res = await fetch('https://yuzzu-api.herokuapp.com/api/darkjokes')
let jsonn = await res.json()
let x = jsonn.result
let cap = `Nih Dark`
await conn.sendFile(m.chat, x.result, 'dark.jpg', cap, fkon)
}
handler.command = ['dark']

export default handler