var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime');
var books = [
    {name:'nodeJs',count:3,price:30,id:1},
    {name:'AngularJs',count:1,price:10,id:2},
    {name:'vueJs',count:1,price:45,id:3},
    {name:'es6',count:3,price:0.5,id:4},
    {name:'reactJs',count:1,price:1,id:5},
    {name:'JQuery',count:1,price:9,id:6}
];
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){
        res.setHeader('content-type','text/html;charset=utf8');
        fs.createReadStream('./12.book.html').pipe(res);
    }else if(pathname=='/books'){
        res.end(JSON.stringify(books))
    }else if(pathname =='/book'){
        var id =  urlObj.query.id
        books.forEach(function (item) {
            if(item.id == id){
                res.end(JSON.stringify(item))
            }
        })
    }else if(pathname =='/save'){
        var result  = '';
        req.on('data', function (data) {
            result+=data;
        });
        req.on('end', function () {
            var o= JSON.parse(result);
            o.id = books.length+1;
            books.push(o);
            res.end('添加成功')
        })
        
    }else{
        if(fs.existsSync('.'+pathname)){
            res.setHeader('content-type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = 404;
            res.end();
        }
    }
}).listen(3000);