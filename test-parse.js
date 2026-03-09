const https = require('https');
const cheerio = require('cheerio');

https.get('https://www.argenprop.com/monterosa-negocios-inmobiliarios', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
}, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const $ = cheerio.load(data);
        const properties = [];

        $('.listing__item').each((i, el) => {
            const url = $(el).find('a').attr('href');
            const address = $(el).find('.card__address').text().trim() || $(el).find('.card__title').text().trim();
            const price = $(el).find('.card__price').text().trim();
            const image = $(el).find('.card__photo img').attr('src') || $(el).find('.card__photo img').attr('data-src');

            const features = [];
            $(el).find('.card__main-features li').each((j, f) => {
                features.push($(f).text().trim());
            });

            properties.push({
                url: url ? `https://www.argenprop.com${url}` : null,
                address,
                price,
                image,
                features
            });
        });

        console.log(JSON.stringify(properties.slice(0, 3), null, 2));
    });
}).on('error', err => {
    console.error("Error:", err.message);
});
