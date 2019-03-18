var strftime = require('strftime');

var request = require("request");
var cheerio = require("cheerio");

const TIME = 6*60*1000; // 6 minutos

var scrapper = function(w){
   var self = this;
   this.init = function(){
      setInterval(function(){
         self.getLastUpdate("http://cecatev.uacj.mx/Estacion101/", (data) => {
            difference = (new Date() - new Date(data))
            if(difference > TIME){
               w.notify("El servidor no ha actualizado. Revise su estado")
            }else {
               w.notify("El servidor funciona perfectamente")
            }
         })
      }, 15000)
   }

   this.getLastUpdate = function (url, callback){
      request({
         uri: url,
      },
      function(error, response, body) {
         let $ = cheerio.load(body);
         let text = $("#current_dateTime").text();
         let data = Date.parse(text)
         callback(data)
      }
      );
   }
}

module.exports = scrapper