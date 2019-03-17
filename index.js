const fs = require('fs')
const TeleBot = require('telebot');

const ui = require('./app/ui')
const scrapper = require('./app/scrapper')

// Load configuration from file
var config = JSON.parse(
   fs.readFileSync('app/config.json', 'utf8')
);

const bot = new TeleBot(config.key);
ux = new ui(bot); // Crete necessary triggers

scrapper

// bot.start();