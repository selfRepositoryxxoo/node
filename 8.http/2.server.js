var http = require('http');
var fs = require('fs');
http.createServer(function (req,res) {
    req.url//当前请求的路径
    req.headers//请求的头部
    req.method//请求的方法
    console.log(req.url);
    console.log(req.headers);
    console.log(req.method);
    //当我们请求html的时候，遇到引用文件，图片都会再次发送请求
    if(req.url=='/'){
        res.setHeader('content-type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url=='/favicon.ico'){
        res.statusCode = 404;
        res.end('not found')
    }else if(req.url=='/css/index.css'){
        res.setHeader('content-type','text/css;charset=utf8');
        fs.createReadStream('./css/index.css').pipe(res);
    }else if(req.url=='/js/dialog.js'){
        res.setHeader('content-type','application/x-javascript;charset=utf8');
        fs.createReadStream('./js/dialog.js').pipe(res);
    }
}).listen(8888);
//windows:fiddler mac:charles