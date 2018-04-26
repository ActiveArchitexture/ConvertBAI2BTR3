
var request = require('request');
var fs = require('fs');


const options = {
    uri: 'https://us-central1-bai-btrs-active-parsers.cloudfunctions.net/ConvertBAI2BTR3',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain',
        'Accept': 'application/json'
    },
    body: fs.createReadStream('/Users/Ross/Workspaces/ConvertBAI2BTR3/test/emptyfile.txt')
};


//   request.post(options)
//   .on('error', function(err) {
//     console.log(err)
//   })
//   .on('response', function(response) {
//     console.log(response.statusCode)
//     console.log(response.headers)
    
//   })
//   .on('body', function(body) {
//     console.log(body)    
//   })

  request(options, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log(response.statusCode);
  console.log(response.headers);
  console.log(body); // Print the HTML for the Google homepage.
});

