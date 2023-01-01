import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
		const options = {
  method: 'GET',
  url: 'https://artist-info.p.rapidapi.com/getArtistInfo',
  params: {Kostas: 'Satradio'},
  headers: {
    'X-RapidAPI-Key': '35c9046f7cmshd2db25369e25f75p1cf84ejsn4d95e7ba9240',
    'X-RapidAPI-Host': 'artist-info.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	throw (response.data);
}).catch(function (error) {
	console.error(error);
});
handler.command = /^guu$/i

export default handler