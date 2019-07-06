var http = require("http");
http.createServer(function(request,response){
    // 解决跨域问题
    response.setHeader("Access-Control-Allow-Origin","*");
    var url = request.url.substring(2);
    console.log(url);
    var arr = url.split("&");
    var json = {};
    for(var i=0;i<arr.length;i++){

    }
}).listene(8090);