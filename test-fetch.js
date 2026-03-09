const https = require('https');

https.get('https://www.argenprop.com/monterosa-negocios-inmobiliarios', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
}, (res) => {
    console.log('Headers:', res.headers);
}).on('error', err => {
    console.error("Error:", err.message);
});
