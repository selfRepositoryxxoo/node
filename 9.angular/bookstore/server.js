var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime');
var books = [
    {name:'nodeJs',count:3,price:30,id:1},
    {name:'AngularJs',count:1,price:10,id:2},
    {name:'vueJs',count:1,price:45,id:3},
];
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/') {
        res.setHeader('content-type', 'text/html;charset=utf8');
        fs.createReadStream('./12.book.html').pipe(res);
    }else if(pathname.indexOf('/book')>-1){
        var reg = /^\/book\/(\d+)/g.exec(pathname);
        switch (req.method){
            case 'GET':
                if(reg){
                    //这里要获取传递的id 路径为/book/id
                    var flag = true;
                    books.forEach(function (item) {
                        //如果当前的传递的id和我们当前数组匹配上了，就返回当前对象（数组形式）
                        if(item.id ==reg[1]){
                            flag = false;
                            res.end(JSON.stringify([item]))
                        }
                    });
                    if(flag){
                        res.end(JSON.stringify([]))
                    }

                }else{
                    //这里是获取所有书 路径为/book
                    res.end(JSON.stringify(books));
                }
                break;
            case 'PUT':
                var result = '';
                req.on('data', function (data) {
                    result+=data;
                });
                req.on('end', function () {
                    var id = JSON.parse(result).id;
                    console.log(id);
                    books.forEach(function (item,index) {
                        if(item.id==id){
                            //在数组中取出对应的索引把他变成当前的
                            books[index] = JSON.parse(result);
                            res.end('');
                        }
                    })
                });
                break;
            case 'DELETE':
                var id =  reg[1];
                books.forEach(function (item,index) {
                    if(item.id ==id){
                        books.splice(index,1);
                        res.end('');
                    }
                })
                break;
            case 'POST':
                var result = '';
                req.on('data', function (data) {
                    result+=data;
                });
                req.on('end', function () {
                    var o = JSON.parse(result);
                    o.id = books[books.length-1].id+1;
                    books.push(o);
                    res.end('添加成功')
                });
                break;
        }
        //当前我们的路径就是book路径
        //通过查看看是否有参数传递和方法的名字来走不同的逻辑
        //  /book get   /book post
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