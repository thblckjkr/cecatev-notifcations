const fs = require('fs')
const TeleBot = require('telebot');

const worker = require('./app/worker')
const scrapper = require('./app/scrapper')

// Load configuration from file
var config = JSON.parse(
   fs.readFileSync('app/config.json', 'utf8')
);

const bot = new TeleBot(config.key);
w = new worker(bot); // Crete necessary triggers
bot.start();

s = new scrapper(w)
s.init()