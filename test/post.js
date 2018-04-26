
var request = require('request');



const options = {
    hostname: 'us-central1-bai-btrs-active-parsers.cloudfunctions.net',
    port: 443,
    path: '/ConvertBAI2BTR3',
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    }
};

fs.createReadStream('file.json').pipe(request.put('http://mysite.com/obj.json'))

request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))

request.get('http://google.com/img.png').pipe(request.put('http://mysite.com/img.png'))

