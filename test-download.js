const https = require('https');
const fs = require('fs');

https.get('https://www.argenprop.com/monterosa-negocios-inmobiliarios', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
}, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        fs.writeFileSync('argenprop.html', data);
        console.log('Saved to argenprop.html');
    });
}).on('error', err => {
    console.error("Error:", err.message);
});
