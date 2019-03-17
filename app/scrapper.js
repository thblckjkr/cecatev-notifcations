var request = require("request");
var cheerio = require("cheerio");

var scrapper = function(){
   var init = function(){
      // TODO: Create a time handler
      
   }
   var getLastUpdate = function (callback){
      request({
         uri: "http://cecatev.uacj.mx/Estacion101/",
      },
      function(error, response, body) {
         var $ = cheerio.load(body);

         $("#station.dateTime").each(function() {
            var date = $(this);
            var text = date.text();

            console.log(text + " -> " + href);
         });
      }
   );
   }
}