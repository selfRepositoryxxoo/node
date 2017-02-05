var http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
http.createServer(function (req,res) {
    var urlObj =  url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        fs.createReadStream('./drag.html').pipe(res);
    }else if(pathname=='/upload'){
        //用formidable这个包，不是核心模块 第三方模块
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            //fields input
            //file里面就是formdata的文件
            //files.path装的是我们临时文件的存储地址，将这个临时文件读到我们服务器端的文件夹里
            //拿到当前所存的formdata里的那个文件
            console.log(files.fileContent);
            fs.createReadStream(files.fileContent.path).pipe(fs.createWriteStream('./upload/'+files.fileContent.name));

        });
        form.on('end', function() {
            res.end('上传完成');
        });
    }else{
        //当请求html的时候会默认请求bootstrap
        if(fs.existsSync('.'+pathname)){
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = 404;
            res.end('');
        }

    }
}).listen(4000);