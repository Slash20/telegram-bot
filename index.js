const TelegramBot = require('node-telegram-bot-api')

const token = '5694533111:AAGlooTLVCg6wayz3GW0VVCWsGmkeA_UwEE'
const bot = new TelegramBot(token, {polling: true})

const notes = []

bot.onText(/напомни (.+) в (.+)/, function (msg, match) {
    let userId = msg.from.id
    let text = match[1]
    let time = match[2]

    notes.push({ 'uid': userId, 'time': time, 'text': text })

    bot.sendMessage(userId, 'Хорошо, создатель, я обязательно напомню!')
})

setInterval(function(){
    for (let i = 0; i < notes.length; i++) {
    const curDate = new Date().getHours() + ':' + new Date().getMinutes() || new Date().getDay() + new Date().getMonth + new Date() + getHours() + ':' + new Date().getMinutes()
    if (notes[i]['time'] === curDate) {
      bot.sendMessage(notes[i]['uid'], 'Напоминаю, что вы должны: '+ notes[i]['text'] + ' сейчас.');
      notes.splice(i, 1)
    }
  }
}, 1000)