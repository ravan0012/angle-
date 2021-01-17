let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
MR RAVANAN BOT:
Via Copas {RANJITH}

*YouTube:*
_~https://youtube.com/c/MrRavanan_

എങ്ങനെ നമ്മുക്ക് ഫേക്ക് വാട്സ്ആപ്പ് നമ്പർ ഉണ്ടാകാം = https://youtu.be/b75ZNT6mlFQ
പോളണ്ട് ഫേക്ക് നമ്പർ എടുക്കുന്നത് എങ്ങനെ = https://youtu.be/YUyUvi5T98c
വാട്സ്ആപ്പ് ബോട്ട് ഉണ്ടാകാം | termux ഉപയോഗിച്ച് |കണ്ണാപി 2.0 വന്നു മക്കളെ = https://youtu.be/swWgfse4viw
വാട്സ്ആപ്പ് ബോട്ട് എങ്ങനെ ഉണ്ടാകാം  = https://youtu.be/tD_6JgA9Gmc
How to increase instagram followers|paid bot for free = https://youtu.be/cNCMXThkpd4
വാട്സ്ആപ്പ് ആപ്പ് മെസ്സേജ് ടൂൾ |termux = https://youtu.be/onx8Vwdl-cU
Followers increasing Instagram bot Features = https://youtu.be/BlJIRJP9VfE
How To Unfollow People Who Don't Follow You On Instagram ✅ Unfollow App For Instagram = https://youtu.be/hnxd-j4erZM
how to get free instagram mallu followers = https://youtu.be/k8nBdKpdF-c
Watch anyone's instagram Bio & Dp/ without Instagram app /even he /she blocked you / private account = https://youtu.be/vuqS_JE8neM
How to increase Instagram comment = https://youtu.be/ltvJ5MI7Z2c
HOW TO GET FREE US FAKE WHATS APP NUMBER 2020 METHOD = https://youtu.be/wTkzQN9NWnA
Extract Metadata from an Image | T3RMUX = https://youtu.be/dWk2-oFvlEE
Download any YouTube Videos Using Termux | Without Third Party App = https://youtu.be/LeleBlXb7W8
WHAT IS INFORMATION GATHERING = https://youtu.be/M49wrP92p1Q
എന്താണ് ടെർമക്സ്  ?  | എങ്ങനെ ഉപയോഗിക്കാം | മലയാളം = https://youtu.be/y1encEbGuAM
`.trim(), m)
}
handler.help = ['murothal']
handler.tags = ['quotes']
handler.command = /^(murothal)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

