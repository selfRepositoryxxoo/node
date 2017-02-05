var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var mime = require('mime');
http.createServer(function (req,res) {
    //res 是一个可写流
    var urlObjs = url.parse(req.url);
    var pathname = urlObjs.pathname;
    if(pathname=='/'){
        res.setHeader('content-type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/favicon.ico'){
        res.statusCode = 404;
        res.end('not found');
    }else if(pathname =='/clock'){
        res.end(new Date().toLocaleString());
    }else {
        var flag = fs.existsSync('.'+pathname);
        if(flag){
            res.setHeader('content-type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = 404;
            res.end('not found');
        }
    }
}).listen(8888);
