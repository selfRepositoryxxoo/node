## 表单有默认提交的的形式  url中

##  流 createReadStream encoding默认为null，读取到的数据为buffer
```
var rs = fs.createReadStream('./2.txt',{flags:'r',highWaterMark:1});
//encoding默认为null，读取到的数据为buffer开始运行的读取的时候需要监听两个事件
这是流的事件和post的事件中的data和end事件是不一样的；
var result = [];
rs.on('data', function (data) {
    result.push(data);
});
rs.on('end', function () {
    //将小buffer的数组连接成大buffer 需要转成buffer才可以呈现
    console.log(Buffer.concat(result).toString());
});
rs.setEncoding('utf8');这是setEncoding这样写会直接成为utf8格式的；
```
##  stream 流 fs.createWriteStream('./2.txt',{highWaterMark:13})
```
encoding:'utf8'默认编码，默认将buffer类型转换成utf8格式
write方法中只能放字符串或者buffer
ws.end('2');//关闭文件，并且一口气的把内存中的内容写入到文件内，把end中的内容也写入到文件内
如http里的res就是一个可写流，可读流
var flag = ws.write(new Buffer('小红'), function () {
    console.log('写入');
}); 
console.log(flag);//返回值为true的时候表示缓存区域还没有满
```
## 内存的理解
```
谨记：我们读取文件读完之后放到缓存中，好像是buffer中，但是我们写流的时候，需要慢慢的写，只有16kb假如我们不在读的快，写的慢的话，就会造成内存不断的增大，这样内存会原来越大
```
## drain
```
读和写都是到缓存中  缓存是缓存不是buffer，我们写的只能是buffer 和字符串，我们一边写，一遍读，操作的是同一个缓存， 这个缓存的大小是读决定的，一次性读取多少，缓存就是多少
```
## fs.createWriteStream  必须end（） 同时 fs.createReadStream()读流也是需要end()的 
```
//我们要设置头 让浏览器按正常的形式解析
 res.setHeader('content-type','text/plain;charset=utf8');
res.writeHead(404, {'content-type': 'text/plain;charset=utf-8'});
```
## get 爬虫
```
http.get("http://baijia.baidu.com/", function(res) {
    res.setEncoding('utf8')//这是读的流  我们通过http.get这个方法的到的数据是流 ，我们要读取流，肯定需要检测data事件，才可以读流，否则是不可以读流的，这是第一
   /* 读的肯定是buffer，encoding是null，显示的肯定buffer，写流的话，默认的encoding的是utf8
    所以不用*/
    res.on('data', function (data) {
        console.log(data);
    })
```
## post请求的增加的两个事件 ，
```
   req.addListener("data", function () {};
   req.addListener('end', function () {}*/
```
## 流 读的两个事件
```
        res.on('data', function (data) { });
        res.on('end', function () {}
```