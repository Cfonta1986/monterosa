const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('argenprop.html');
const $ = cheerio.load(html);
const item = $('.listing__item').first();
console.log(item.html());
