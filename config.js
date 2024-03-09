global.owner = ['6281283307615']  
global.mods = ['6281283307615'] 
global.prems = ['6281283307615']
global.nameowner = 'AndroKlemens'
global.numberowner = '6281283307615' 
global.mail = 'androdigitalmarket@my.id' 
global.gc = 'https://chat.whatsapp.com/CWrSXGAVbzbBbUlYayRyua'
global.instagram = 'https://instagram.com/androklemens'
global.wm = '@androdigitalmarket'
global.wait = '_*Please wait while it is being processed...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⎏ Stickers are being created...*'
global.packname = 'ᴍᴀᴅᴇ ᴡɪᴛʜ'
global.author = 'ᴀɴᴅʀᴏ ᴅɪɢɪᴛᴀʟ ᴍᴀʀᴋᴇᴛ'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'andro' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'andro' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
