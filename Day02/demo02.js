//引入node核心模块
var http = require("http");

//创建一个服务器对象
var server = http.createServer();

//启动http服务并设置端口
server.listen(3002,function () {
    console.log("启动成功")
});

//为服务器添加(绑定)客户端请求事件
server.on("request",function(request,response){
    //设置请求头，解决跨域问题
    response.setHeader("Access-Control-Allow-Origin","*");
    //输出请求的路径
    console.log("服务器请求路径",request.url);
    //响应断开
    response.end();
});