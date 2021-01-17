let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 ᴀɴɢʟᴇ 👼 INFO 〙 ═
╠➥ Made in javascript via NodeJs
╠➥ Rec: ᴍʀ ʀᴀᴠᴀɴᴀɴ [ʀᴀɴᴊɪᴛʜ]
╠➥ Script: ʀᴀɴᴊɪᴛʜ
║
╠➥ YouTube: https://youtube.com/c/MrRavanan
╠➥ Instagram: https://instagram.com/__mr_ravanan?igshid=hln7t23pf1pg
╠➥ github: https://github.com/mrravanan
║
╠═〘 Thanks To 〙 ═
╠➥ MR RAVANAN YT
╠➥ SUPPORTER'S
╠➥ https://youtube.com/c/MrRavanan
╠➥ ᴍʀ ʀᴀᴠᴀɴᴀɴ [ʀᴀɴᴊɪᴛʜ]
║
╠═〘 DONATION 〙 ═
╠➥ wa.me//+919048410619
╠➥ share and support my youtube channel
╠➥ don't re edit this bot if you want to edit contact.
║
║>Request? wa.me//+919048410619
║
╠═〘ᴀɴɢʟᴇ 👼 BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

