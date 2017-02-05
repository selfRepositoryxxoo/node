//要建立一个http 需要引入核心模块http

var http = require('http');
var fs = require('fs');
//服务的特点 通过固定ip和 端口号，响应数据
//主要由两部分组成req请求,res响应
http.createServer(function (req,res) {
    //response是个流
    //我们要设置头 让浏览器按正常的形式解析
   /* res.setHeader('content-type','text/plain;charset=utf8');
    res.write('你好');
    //必须要将电话挂掉 pending
    res.end('world');*/
    res.setHeader('content-type','text/html;charset=utf8');
    //文件读写的方式
    /*fs.readFile('./index.html', function (err,data) {
        if(!err)
            res.end(data);
    })*/
    //流的方式
    //res是一个可写流 直接将读取的流导入到可写流里
    fs.createReadStream('./index.html').pipe(res);
}).listen(8888);
//windows:fiddler mac:charles