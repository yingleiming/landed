//1.引入http模块
var http = require("http");

//2.创建http服务器,并传入回调函数
var server = http.createServer(function(resquest,response){
    //设置请求头，允许所有用户访问此文件，解决跨域问题
    response.setHeader("Access-Control-Allow-Origin","*");
    //输出响应的路径
    console.log("服务器收到请求"+resquest.url);
    //响应断开
    response.end();
});

//3.设置服务器端口
server.listen(3000);