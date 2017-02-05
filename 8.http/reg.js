var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var mime = require('mime');
var querystring = require('querystring');
var userList = [];
http.createServer(function (req,res) {
    var urlObjs = url.parse(req.url);
    var pathname = urlObjs.pathname;
    if(pathname=='/'){
        res.setHeader('content-type','text/html;charset=utf8');
        fs.createReadStream('./reg.html').pipe(res);
    }else if(pathname=='/favicon.ico'){
        res.statusCode = 404;
        res.end('not found');
    }else if(pathname=='/reg'){
        //这里接受的是查询字符串，还有一种方式传递的是对象
        //匹配前台ajax访问的路由
        //请求体里的内容需要监听ondata

        //username=123&password=456 = >application/x-www-form-urlencoded
        //{username:123,password:456} = > application/json
        var result = "";
        req.on('data', function (data) {
            result+=data;
        });
        //如果前台发过来的是usernmae=123&password=456
        console.log(req.headers['content-type']);
        if(req.headers['content-type']=='application/x-www-form-urlencoded'){
            //在结束的时候把字符串接受完毕
            req.on('end', function () {
                //将查询字符串转化为对象
                var re = querystring.parse(result);
                userList.push(re);
                res.end(JSON.stringify(userList));//buffer或者字符串
            });
            //如果头是对象形式的 我们不能用querystring来处理
        }else if(req.headers['content-type']=='application/json'){
            req.on('end', function () {
                //将查询字符串转化为对象
                var re = JSON.parse(result);
                //现在的result 是{"username":"123","password":"321"} 我们要把它变成对象放到数组里响应给前端
                userList.push(re);
                res.end(JSON.stringify(userList));
            });
        }
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
