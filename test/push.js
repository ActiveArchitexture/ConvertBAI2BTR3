
// https://us-central1-bai-btrs-active-parsers.cloudfunctions.net/ConvertBAI2BTR3

const https = require('https');
const querystring = require('querystring');

const options = {
    hostname: 'us-central1-bai-btrs-active-parsers.cloudfunctions.net',
    port: 443,
    path: '/ConvertBAI2BTR3',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain',
        'Accept': 'application/json'
    }
};

const postData = querystring.stringify({
    'message': 'Hello World!'
});

const input = '{"message": "Hello! Hello"}';

const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.on('error', (e) => {
    console.error(e);
});

req.write(input);
req.end();