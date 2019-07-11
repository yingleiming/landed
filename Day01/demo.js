// 导入http模块:
var http = require('http');

// 创建http server，并传入回调函数:
http.createServer(function (request, response) {
    console.log(request.url)
    response.setHeader("Access-Control-Allow-Origin","*");
    console.log("有人访问来了")
    response.write("my name is leo");
    response.end();
}).listen(8090);

// console.log('Server is running at http://127.0.0.1:8080/');

