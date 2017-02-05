var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
//我们要解析mime-type 要安装mime-type
var mime = require('mime');
/*var urlObj = {
    '.html':'text/html',
    '.css':'text/css',
    '.js':'application/x-javascript'
}*/
http.createServer(function (req,res) {
    //进行解析
    var urlObjs = url.parse(req.url);
    var pathname = urlObjs.pathname;
    if(pathname=='/'){
        res.setHeader('content-type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/favicon.ico'){
        res.statusCode = 404;
        res.end('not found')
    }else {
        //先进行判断，判断文件是否存在如果存在，就去读取
        var flag = fs.existsSync('.'+pathname);
        if(flag){
            //通过mime的lookup方法可以查看对应得mime-type
            res.setHeader('content-type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = 404;
            res.end('not found')
        }

    }


   /* if(req.url=='/css/index.css'){
        res.setHeader('content-type','text/css;charset=utf8');
        fs.createReadStream('./css/index.css').pipe(res);
    }else if(req.url=='/js/dialog.js'){
        res.setHeader('content-type','application/x-javascript;charset=utf8');
        fs.createReadStream('./js/dialog.js').pipe(res);
    }*/
}).listen(8888);
//windows:fiddler mac:charles