// Building API with Express and Middleware(in Express)
// var express = require('express');
// var app = express();

// var requestTime = function (req, res, next) {
//   req.requestTime = Date.now();
//   next();
// };

// app.use(requestTime);

// app.get('/', function (req, res) {
//   var responseText = 'Hello World!';
//   responseText += 'Requested at: ' + req.requestTime + '';
//   res.send(responseText);
// });

// app.listen(3000);

// Building API without Express
// const http = require('http');
// const url = require('url');
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type','text/html');
//   const reqUrl = new URL('http://localhost:3000/users');
//   console.log(reqUrl);
//   if (reqUrl.pathname == '/users' && req.method == 'GET') {
//     console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
//   }
//   res.end('HELLO')
// });

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`)
// });

