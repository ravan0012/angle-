let handler = async m => m.reply(`
╭─「 Donation • Credit 」
│ • i don't want any donation !
│ • bot any error to message me : wa.me//+919048410619
    * https://youtube.com/c/MrRavanan / share and support
│ • anyone want to re edit/add comment to message me [ don't edit credits]
│ 「 Chat OWNER 」
│ > contact? wa.me//+919048410619
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
