const texter = require('./app/text')

var ui = function(bot, ){
   // Hello replying bot
   bot.on(['/start', '/hello'], (msg) =>
      msg.reply.text('Welcome!')
   );

   bot.on('/help', (msg) =>
      msg.reply.text(texter.help)
   )
}

module.exports = ui