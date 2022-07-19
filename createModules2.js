var http = require('http');
var createModules=require('./createModules')
// console.log('========module duoc inport======');
// console.log(createModules);

// console.log('========module hien tai========');
// console.log(module);

http.createServer((request, response) => {
    console.log('Server dang lang nghe tren cong 8080');
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write('thoi gian hien tai la: ' + createModules.getMyDateTime() + '<br/>)');
    response.write('duong dan file con ' + createModules.getDirName() + '<br/>');
    response.write('tuoi:' + createModules.myAge + ' < br /> ')
    response.end('hello world')
}).listen('8080')
