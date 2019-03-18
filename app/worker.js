const texter = require('../app/texter')
var t = new texter()
var queue = []

var worker = function(bot){
   // Hello replying bot
   bot.on(['/start', '/hello'], (msg) =>
      msg.reply.text(t.welcome)
   );

   bot.on('/help', (msg) =>
      msg.reply.text(t.help)
   );

   bot.on('/notify', (msg) => {
      if (queue.length > 20){
         msg.reply.text("Parece que tenemos demasiada gente! Intenta de nuevo mas tarde")
      }else{
         queue.push(msg.chat.id)
         msg.reply.text("Estas siendo notificado a partir de ahora")
      }
   });

   this.notify = function( msg ) {
      for ( i in queue ){
         try{
            bot.sendMessage(queue[i], msg)
         } catch (e) {
            console.log("Failing on send", e)
         }
      }
   }
}

module.exports = worker